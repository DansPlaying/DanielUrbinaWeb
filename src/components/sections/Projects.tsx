"use client";

import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            title="Featured"
            highlight="Projects"
            description="A selection of my recent work"
          />
        </ScrollReveal>

        {featured.length === 0 ? (
          <ScrollReveal>
            <p className="text-center text-text-secondary">
              Projects coming soon.
            </p>
          </ScrollReveal>
        ) : (
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featured.map((project) => (
              <StaggerItem key={project.id}>
                <div className="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-background-tertiary text-accent-cyan text-xs font-mono rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent-cyan hover:text-text-highlight transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-accent-cyan hover:text-text-highlight transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {projects.length > featured.length && (
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-accent-cyan hover:text-text-highlight transition-colors font-medium"
              >
                View All Projects
                <ArrowRight size={20} />
              </a>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
