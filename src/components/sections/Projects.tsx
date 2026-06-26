"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { CybercoreGrid } from "@/components/ui/CybercoreGrid";
import { projects } from "@/data/projects";
import { Project } from "@/lib/types";

const CARD_W = 380;
const CARD_H = 256;
const CARD_TOP = 20;   // top offset within container
const X_STEP = 125;    // horizontal spread per card step
const ANGLE_STEP = 14; // degrees of rotation — applied around bottom-center pivot
const VISIBLE_SIDE = 3;
const CONTAINER_H = CARD_TOP + CARD_H + 80;

// Circular shortest-path: makes the wrap-around feel like a natural one-step move
function wrapRel(rawRel: number, total: number): number {
  let rel = rawRel % total;
  if (rel > total / 2) rel -= total;
  if (rel < -total / 2) rel += total;
  return rel;
}

function getFanValues(relIndex: number) {
  const abs = Math.abs(relIndex);
  const visible = abs <= VISIBLE_SIDE;
  return {
    x: relIndex * X_STEP,
    rotate: relIndex * ANGLE_STEP,
    scale: 1 - Math.min(abs, VISIBLE_SIDE + 1) * 0.065,
    opacity: visible ? 1 - abs * 0.1 : 0,
    zIndex: visible ? VISIBLE_SIDE + 2 - abs : 0,
  };
}

function FanCard({
  project,
  relIndex,
  onClick,
}: {
  project: Project;
  relIndex: number;
  onClick: () => void;
}) {
  const { x, rotate, scale, opacity, zIndex } = getFanValues(relIndex);
  const isActive = relIndex === 0;
  const isHidden = Math.abs(relIndex) > VISIBLE_SIDE;

  return (
    <motion.div
      className="absolute select-none"
      style={{
        width: CARD_W,
        height: CARD_H,
        top: CARD_TOP,
        left: `calc(50% - ${CARD_W / 2}px)`,
        // Pivot at bottom-center: rotation fans cards up+outward, bottoms stay roughly aligned
        transformOrigin: "50% 100%",
        cursor: isHidden ? "default" : "pointer",
        pointerEvents: isHidden ? "none" : "auto",
        zIndex,
      }}
      animate={{ x, rotate, scale, opacity }}
      transition={{ type: "spring", stiffness: 280, damping: 28 }}
      onClick={isHidden ? undefined : onClick}
      whileHover={
        !isActive && !isHidden
          ? { scale: scale + 0.04, opacity: Math.min(1, opacity + 0.1) }
          : undefined
      }
    >
      <div
        className={`w-full h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
          isActive
            ? "border-accent/60 shadow-[0_0_48px_rgba(108,99,255,0.6),0_0_96px_rgba(108,99,255,0.18)]"
            : "border-border"
        }`}
      >
        <div className="relative w-full h-full bg-background-tertiary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            quality={90}
            className="object-cover object-top transition-transform duration-500"
            sizes="(max-width: 768px) 320px, 380px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white font-semibold text-sm leading-snug drop-shadow-lg line-clamp-1">
              {project.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const t = useTranslations("projects");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && theme === "light";

  const [activeIndex, setActiveIndex] = useState(0);
  const featured = projects.filter((p) => p.featured);
  const total = featured.length;

  // Cyclic: wraps seamlessly at both ends
  const go = useCallback(
    (dir: number) => setActiveIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const active = featured[activeIndex];

  return (
    <section
      id="projects"
      className="bg-background-secondary overflow-hidden"
    >
      {/* ── Cybercore grid header ── */}
      <div className="relative h-56 md:h-72">
        <CybercoreGrid lightMode={isLight} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background-secondary pointer-events-none" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center pt-8">
          <ScrollReveal>
            <SectionHeading
              title={t("title")}
              highlight={t("highlight")}
              description={t("description")}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* ── Full-width fan carousel ── */}
      <ScrollReveal delay={0.15}>
        <div
          className="relative w-full mt-8 md:mt-10"
          style={{ height: CONTAINER_H }}
        >
          {/* Prev button */}
          <motion.button
            onClick={() => go(-1)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-background-tertiary/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
            whileTap={{ scale: 0.88 }}
            aria-label="Previous project"
          >
            <ChevronLeft size={18} />
          </motion.button>

          {/* All cards always in DOM — wrapRel gives each card its shortest-path relative position,
              so the wrap-around animates like a normal one-step move instead of jumping. */}
          {featured.map((project, idx) => {
            const rel = wrapRel(idx - activeIndex, total);
            return (
              <FanCard
                key={project.id}
                project={project}
                relIndex={rel}
                onClick={() => setActiveIndex(idx)}
              />
            );
          })}

          {/* Next button */}
          <motion.button
            onClick={() => go(1)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-background-tertiary/80 backdrop-blur-sm border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
            whileTap={{ scale: 0.88 }}
            aria-label="Next project"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </ScrollReveal>

      {/* ── Project details ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        {/* Pill dots */}
        <div className="flex justify-center gap-1.5 items-center mt-6">
          {featured.map((_, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              animate={{ width: idx === activeIndex ? 24 : 6 }}
              className={`h-1.5 rounded-full transition-colors duration-300 ${
                idx === activeIndex
                  ? "bg-accent"
                  : "bg-border hover:bg-text-secondary"
              }`}
              aria-label={`Project ${idx + 1}`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="font-mono text-xs text-accent-cyan">
                {active.date}
              </span>
              <span className="text-border">·</span>
              <span className="font-mono text-xs text-text-secondary capitalize">
                {t(`categories.${active.category}`)}
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
              {active.title}
            </h3>

            <p className="text-text-secondary leading-relaxed text-sm md:text-base">
              {t(`items.${active.id}.description`)}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {active.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-5">
              {active.links.demo && (
                <a
                  href={active.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-text-highlight transition-colors"
                >
                  <ExternalLink size={14} />
                  {t("liveDemo")}
                </a>
              )}
              {active.links.github && (
                <a
                  href={active.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-accent-cyan hover:text-text-highlight transition-colors"
                >
                  <Github size={14} />
                  {t("sourceCode")}
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
