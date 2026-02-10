"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Work"
            highlight="Experience"
            description="My professional journey so far"
          />
        </ScrollReveal>

        {experience.length === 0 ? (
          <ScrollReveal>
            <p className="text-center text-text-secondary">
              Experience details coming soon.
            </p>
          </ScrollReveal>
        ) : (
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

            <div className="space-y-12">
              {experience.map((entry, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={entry.id}
                    className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8"
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-glow z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.15 + 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />

                    {/* Card */}
                    <div
                      className={`${
                        isLeft
                          ? "md:col-start-1 md:text-right md:pr-8"
                          : "md:col-start-2 md:pl-8"
                      }`}
                    >
                      <div className="bg-background-secondary rounded-lg p-6 border border-border hover:border-accent transition-colors duration-200">
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <h3 className="text-lg font-semibold text-text-primary">
                            {entry.role}
                          </h3>
                          <span className="text-xs font-mono text-accent-cyan whitespace-nowrap">
                            {entry.startDate} —{" "}
                            {entry.endDate === "present"
                              ? "Present"
                              : entry.endDate}
                          </span>
                        </div>

                        <p className="text-sm text-text-secondary mb-2">
                          {entry.company}
                          {entry.location && ` · ${entry.location}`}
                        </p>

                        <p className="text-sm text-text-secondary leading-relaxed">
                          {entry.description}
                        </p>

                        {entry.achievements.length > 0 && (
                          <ul className="mt-4 space-y-2">
                            {entry.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-text-secondary flex items-start gap-2"
                              >
                                <span className="text-accent-cyan mt-0.5 flex-shrink-0">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {entry.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {entry.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
