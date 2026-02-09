"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "15+", label: "Technologies" },
  { value: "100%", label: "Commitment" },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="About"
            highlight="Me"
            description="Get to know the person behind the code"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <ScrollReveal delay={0.1} direction="left">
            <div>
              <div className="font-mono text-sm text-accent-cyan bg-background-tertiary rounded-lg p-4 inline-block mb-6">
                <span className="text-text-secondary">&gt;</span> daniel.about()
              </div>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-text-secondary">
                <p>
                  I&apos;m a{" "}
                  <span className="text-text-primary font-medium">
                    Full-Stack Developer
                  </span>{" "}
                  with experience developing scalable and efficient web
                  applications. Specialized in Laravel, Python and Angular,
                  with additional knowledge in Vue.js and Flutter.
                </p>
                <p>
                  Hands-on experience implementing RESTful APIs, database design,
                  automated testing, and project deployment. Focused on code
                  quality, best practices, and agile methodologies.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stats */}
          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="bg-background-tertiary rounded-lg p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-4xl font-bold text-accent-cyan">
                    {stat.value}
                  </div>
                  <div className="text-text-secondary text-sm mt-2">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
