"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Meteors } from "@/components/ui/Meteors";
import { skills } from "@/data/skills";
import { Skill } from "@/lib/types";

const CATEGORIES = [
  { key: "other",    label: "Soft Skills",    direction: "left"  },
  { key: "frontend", label: "Frontend",        direction: "right" },
  { key: "backend",  label: "Backend",         direction: "left"  },
  { key: "devops",   label: "Tools & DevOps",  direction: "right" },
] as const;

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
  // 4 copies so the track is always wider than the viewport (even on ultrawide);
  // animation moves by -50% = exactly 2 copies → seamless loop.
  const track = [...items, ...items, ...items, ...items];

  // Duration chosen so visual speed is ~55 px/s regardless of row length.
  // Track distance animated = 2 copies × items.length × ~168px per pill
  const distancePx = 2 * items.length * 168;
  const durationS = Math.max(12, Math.round(distancePx / 55));

  return (
    <div className="overflow-hidden w-full group">
      <div
        className="flex gap-3"
        style={{
          width: "max-content",
          animation: `marquee-${direction} ${durationS}s linear infinite`,
        }}
      >
        {track.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const rows = CATEGORIES.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.category === cat.key),
  })).filter((r) => r.items.length > 0);

  return (
    <section id="skills" className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      <Meteors count={22} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Skills &"
            highlight="Technologies"
            description="The tools and technologies I work with"
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

            {/* Infinite marquee — full width, no padding */}
            <MarqueeRow items={row.items} direction={row.direction} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
