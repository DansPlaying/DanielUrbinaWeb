"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechIcon } from "@/components/ui/TechIcon";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { skills } from "@/data/skills";

const categoryLabels: Record<string, string> = {
  other: "Soft Skills",
  frontend: "Frontend",
  backend: "Backend",
  devops: "Tools & DevOps",
};

export function Skills() {
  const categories = ["other", "frontend", "backend", "devops"] as const;
  const grouped = categories
    .map((cat) => ({
      key: cat,
      label: categoryLabels[cat],
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section id="skills" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Skills &"
            highlight="Technologies"
            description="The tools and technologies I work with"
          />
        </ScrollReveal>

        <div className="space-y-12">
          {grouped.map((group, groupIndex) => (
            <ScrollReveal key={group.key} delay={groupIndex * 0.1}>
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                {group.label}
              </h3>
              <StaggerContainer
                staggerDelay={0.05}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
              >
                {group.items.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <div className="group relative bg-background-secondary rounded-lg p-6 border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-glow">
                      <div
                        className="w-12 h-12 mb-4 text-accent-cyan flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <TechIcon name={skill.name} size={32} />
                      </div>
                      <h4 className="text-base font-semibold text-text-primary">
                        {skill.name}
                      </h4>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
