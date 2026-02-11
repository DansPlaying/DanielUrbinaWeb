"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";
import { projects } from "@/data/projects";
import { Project } from "@/lib/types";

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative bg-background rounded-lg overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-min min-h-[550px]">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-background-tertiary">
        <div className="absolute inset-2 rounded-md overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          {project.title}
        </h3>

        {/* Description with Read More */}
        <div className="mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={isExpanded ? "expanded" : "collapsed"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-text-secondary text-sm"
            >
              {isExpanded
                ? project.longDescription || project.description
                : project.description}
            </motion.p>
          </AnimatePresence>
          {project.longDescription && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-accent-cyan hover:text-text-highlight text-sm mt-2 transition-colors"
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp size={14} />
                </>
              ) : (
                <>
                  Read more <ChevronDown size={14} />
                </>
              )}
            </button>
          )}
        </div>

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

        {/* Links - pushed to bottom */}
        <div className="flex items-center gap-4 mt-auto">
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
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 bg-background-secondary"
    >
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
                <ProjectCard project={project} />
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
