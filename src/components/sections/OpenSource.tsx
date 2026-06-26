"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  ExternalLink,
  Terminal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const packages = [
  {
    name: "strapi-plugin-publish-confirmation",
    shortName: "publish-confirmation",
    version: "1.0.2",
    description:
      "Adds a confirmation dialog before publishing content in Strapi v5, preventing accidental publishes.",
    npm: "https://www.npmjs.com/package/strapi-plugin-publish-confirmation",
    github: "https://github.com/DansPlaying/strapi-plugin-publish-confirmation",
    tags: ["strapi-v5", "publish", "dialog"],
  },
  {
    name: "strapi-plugin-publish-media-validation",
    shortName: "publish-media-validation",
    version: "1.1.7",
    description:
      "Enforces required media fields at publish time — fixes the known Strapi v5 gap where required media is not validated on publish.",
    npm: "https://www.npmjs.com/package/strapi-plugin-publish-media-validation",
    github:
      "https://github.com/DansPlaying/strapi-plugin-publish-media-validation",
    tags: ["strapi-v5", "media", "validation"],
  },
  {
    name: "strapi-plugin-relation-publish",
    shortName: "relation-publish",
    version: "1.0.0",
    description:
      "Adds a Publish button with confirmation dialog directly inside the relation edit modal in Strapi v5.",
    npm: "https://www.npmjs.com/package/strapi-plugin-relation-publish",
    github: "https://github.com/DansPlaying/strapi-plugin-relation-publish",
    tags: ["strapi-v5", "relation", "content-manager"],
  },
];

// Duplicate to fill 6 slots for the 3D ring
const ITEMS = [...packages, ...packages];
const N = ITEMS.length; // 6
const ANGLE_STEP = 360 / N; // 60°
const RADIUS = 320; // px — tuned so side cards stay within max-w-7xl on lg+

function PackageCard({
  pkg,
  isFront,
}: {
  pkg: (typeof packages)[0];
  isFront: boolean;
}) {
  return (
    <div
      className={`relative bg-background rounded-xl border p-4 flex flex-col gap-2 h-full transition-colors duration-300 ${
        isFront ? "border-accent-purple/60 shadow-glow" : "border-border"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div
          className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${
            isFront
              ? "bg-accent-purple/20 border-accent-purple/40 text-accent-purple"
              : "bg-accent-purple/10 border-accent-purple/20 text-accent-purple"
          }`}
        >
          <Package size={16} />
        </div>
        <span className="font-mono text-xs bg-accent-purple/10 text-accent-purple border border-accent-purple/20 rounded-full px-2.5 py-0.5 flex-shrink-0">
          v{pkg.version}
        </span>
      </div>

      {/* Name */}
      <div>
        <div className="font-mono text-xs text-text-secondary mb-0.5">
          strapi-plugin /
        </div>
        <h3
          className={`font-mono text-sm font-bold leading-tight transition-colors ${
            isFront ? "text-accent-purple" : "text-text-primary"
          }`}
        >
          {pkg.shortName}
        </h3>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-xs leading-relaxed flex-grow">
        {pkg.description}
      </p>

      {/* Install command */}
      <div className="bg-background-tertiary rounded-lg px-2.5 py-1.5 flex items-center gap-2 border border-border">
        <Terminal size={12} className="text-accent-cyan flex-shrink-0" />
        <code className="font-mono text-xs text-accent-cyan truncate">
          npm install {pkg.name}
        </code>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {pkg.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 bg-background-tertiary text-text-secondary text-xs font-mono rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-2 border-t border-border">
        <a
          href={pkg.npm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-purple transition-colors font-medium"
        >
          <ExternalLink size={12} />
          NPM
        </a>
        <a
          href={pkg.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-text-secondary hover:text-accent-cyan transition-colors font-medium"
        >
          <FaGithub size={12} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export function OpenSource() {
  const t = useTranslations("openSource");
  const [activeIndex, setActiveIndex] = useState(0);
  const [cumulativeRotation, setCumulativeRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Stable next/prev — use functional setState to avoid stale closure
  const next = useCallback(() => {
    setCumulativeRotation((r) => r - ANGLE_STEP);
    setActiveIndex((i) => (i + 1) % N);
  }, []);

  const prev = useCallback(() => {
    setCumulativeRotation((r) => r + ANGLE_STEP);
    setActiveIndex((i) => (i - 1 + N) % N);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [isPaused, next]);

  // Navigate to a specific carousel slot via shortest path
  const navigateTo = (targetIdx: number, currentActive: number) => {
    if (targetIdx === currentActive) return;
    let offset = (((targetIdx - currentActive) % N) + N) % N;
    if (offset > N / 2) offset -= N;
    setCumulativeRotation((r) => r - offset * ANGLE_STEP);
    setActiveIndex(targetIdx);
  };

  // Click dot → navigate to nearest copy of that package
  const goToPackage = (pkgIdx: number) => {
    const copies = [pkgIdx, pkgIdx + packages.length];
    let bestIdx = copies[0];
    let bestDist = Infinity;
    for (const idx of copies) {
      let off = (((idx - activeIndex) % N) + N) % N;
      if (off > N / 2) off -= N;
      if (Math.abs(off) < bestDist) {
        bestDist = Math.abs(off);
        bestIdx = idx;
      }
    }
    navigateTo(bestIdx, activeIndex);
  };

  // Opacity by angular distance from front
  const getOpacity = (i: number): number => {
    const offset = (((i - activeIndex) % N) + N) % N;
    const d = offset > N / 2 ? N - offset : offset;
    if (d === 0) return 1;
    if (d === 1) return 0.55;
    if (d === 2) return 0.15;
    return 0;
  };

  const activePkgIdx = activeIndex % packages.length;

  return (
    <section
      id="open-source"
      className="py-16 md:py-20 lg:py-24 bg-background-secondary relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse, rgba(168, 85, 247, 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Badge */}
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-accent-purple/30 bg-accent-purple/10 rounded-full px-4 py-1.5 text-sm font-mono text-accent-purple">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
              {t("badge")}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="pt-4 pb-2">
            <SectionHeading
              title={t("title")}
              highlight={t("highlight")}
              description={t("description")}
            />
          </div>
        </ScrollReveal>

        {/* Mobile: single-card carousel */}
        <div className="lg:hidden mt-4">
          <div className="relative px-10">
            {/* Fixed height = tallest card — prevents layout jump on transition */}
            <div className="h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePkgIdx}
                  className="h-full"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <PackageCard pkg={packages[activePkgIdx]} isFront={true} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background border border-border hover:border-accent-purple/50 flex items-center justify-center text-text-secondary hover:text-accent-purple transition-all"
              aria-label="Previous package"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background border border-border hover:border-accent-purple/50 flex items-center justify-center text-text-secondary hover:text-accent-purple transition-all"
              aria-label="Next package"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToPackage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activePkgIdx === i
                    ? "w-6 bg-accent-purple"
                    : "w-2 bg-border hover:bg-accent-purple/40"
                }`}
                aria-label={`Package ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop (lg+): 3D circular carousel */}
        <div
          className="hidden lg:block relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Perspective viewport */}
          <div
            className="flex items-center justify-center"
            style={{ height: "380px", perspective: "1000px" }}
          >
            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-0 z-20 w-10 h-10 rounded-full bg-background border border-border hover:border-accent-purple/50 flex items-center justify-center text-text-secondary hover:text-accent-purple transition-all"
              aria-label="Previous package"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-0 z-20 w-10 h-10 rounded-full bg-background border border-border hover:border-accent-purple/50 flex items-center justify-center text-text-secondary hover:text-accent-purple transition-all"
              aria-label="Next package"
            >
              <ChevronRight size={20} />
            </button>

            {/* Rotating 3D ring */}
            <motion.div
              animate={{ rotateY: cumulativeRotation }}
              transition={{ type: "spring", stiffness: 75, damping: 18 }}
              style={{
                width: "280px",
                height: "340px",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {ITEMS.map((pkg, i) => {
                const isFront = i === activeIndex;
                return (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      width: "280px",
                      height: "340px",
                      transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(${RADIUS}px)`,
                      opacity: getOpacity(i),
                      transition: "opacity 0.35s ease",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    <PackageCard pkg={pkg} isFront={isFront} />
                    {/* Clickable overlay for non-front cards */}
                    {!isFront && (
                      <div
                        className="absolute inset-0 cursor-pointer rounded-xl"
                        onClick={() => navigateTo(i, activeIndex)}
                      />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => goToPackage(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activePkgIdx === i
                    ? "w-6 bg-accent-purple"
                    : "w-2 bg-border hover:bg-accent-purple/40"
                }`}
                aria-label={`Go to package ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-secondary text-xs mt-8 pb-4 font-mono pt-4">
            <span className="text-accent-purple">&gt;</span> {t("footer")}{" "}
            <a
              href="https://www.npmjs.com/~dans007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:text-text-highlight underline underline-offset-2 transition-colors"
            >
              npmjs.com
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
