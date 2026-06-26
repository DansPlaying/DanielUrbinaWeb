"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useVelocity, useAnimationFrame } from "framer-motion";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MountainScene } from "@/components/ui/MountainScene";
import { skills } from "@/data/skills";
import { Skill } from "@/lib/types";

const CATEGORIES = [
  { key: "other",    label: "Soft Skills",    direction: "left"  },
  { key: "frontend", label: "Frontend",        direction: "right" },
  { key: "backend",  label: "Backend",         direction: "left"  },
  { key: "devops",   label: "Tools & DevOps",  direction: "right" },
] as const;

const AVG_PILL_PX = 168; // avg pill width + gap in px
const BASE_SPEED = 55;   // px/s base track auto-scroll speed
const SCROLL_FACTOR = 0.18; // page scroll px/s → track px/s contribution

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-background-tertiary border border-border hover:border-accent hover:shadow-glow transition-all duration-300 cursor-default select-none">
      <span className="text-accent-cyan flex-shrink-0">
        <TechIcon name={skill.name} size={22} />
      </span>
      <span className="text-sm font-medium text-text-primary whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Skill[];
  direction: "left" | "right";
}) {
  // 4 copies so the track is always wider than any viewport
  const track = [...items, ...items, ...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // loopPx = 2 copies = the seamless wrap distance (= -50% of the 4-copy track)
  const loopPx = 2 * items.length * AVG_PILL_PX;

  // Unbounded raw pixel offset — we only apply modulo for the visual transform
  // Left starts at 0 (translateX 0%) and moves forward.
  // Right starts at loopPx (translateX -50%) and moves backward.
  const rawRef = useRef(direction === "right" ? loopPx : 0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;

    const dt = delta / 1000; // seconds

    // Page scroll velocity: positive = scrolling down, negative = scrolling up.
    // Clamp to suppress noise spikes.
    const pageVel = Math.max(-2500, Math.min(2500, scrollVelocity.get()));

    // Total track speed in px/s.
    // Scroll down (pageVel > 0) speeds up in the designated direction.
    // Scroll up (pageVel < 0) slows and can reverse if |pageVel| > BASE_SPEED / SCROLL_FACTOR.
    const totalSpeed = BASE_SPEED + pageVel * SCROLL_FACTOR;

    rawRef.current += direction === "left" ? totalSpeed * dt : -totalSpeed * dt;

    // Wrap to [0, loopPx) seamlessly using modulo
    const display = ((rawRef.current % loopPx) + loopPx) % loopPx;

    // -50% of the track = one full loop distance
    trackRef.current.style.transform = `translateX(${-(display / loopPx) * 50}%)`;
  });

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="flex gap-3" style={{ width: "max-content" }}>
        {track.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const t = useTranslations("skills");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isLight = mounted && theme === "light";

  const rows = CATEGORIES.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  })).filter((r) => r.items.length > 0);

  return (
    <section id="skills" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <MountainScene lightMode={isLight} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title={t("title")}
            highlight={t("highlight")}
            description={t("description")}
          />
        </ScrollReveal>
      </div>

      <div className="relative z-10 mt-10 md:mt-14 space-y-5">
        {rows.map((row, i) => (
          <ScrollReveal key={row.key} delay={i * 0.08}>
            {/* Category label */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-2 flex items-center gap-3">
              <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest flex-shrink-0">
                {row.label}
              </span>
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-mono text-text-secondary tabular-nums">
                {row.items.length}
              </span>
            </div>

            {/* JS-driven infinite marquee — hover pauses only this row */}
            <MarqueeRow items={row.items} direction={row.direction} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
