"use client";

import { Package, ExternalLink, Terminal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/ScrollReveal";

const packages = [
  {
    name: "strapi-plugin-publish-confirmation",
    shortName: "publish-confirmation",
    version: "1.0.2",
    description:
      "Adds a confirmation dialog before publishing content in Strapi v5, preventing accidental publishes.",
    npm: "https://www.npmjs.com/package/strapi-plugin-publish-confirmation",
    github:
      "https://github.com/DansPlaying/strapi-plugin-publish-confirmation",
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

function PackageCard({ pkg }: { pkg: (typeof packages)[0] }) {
  return (
    <div className="group relative bg-background rounded-xl border border-border hover:border-accent-purple/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow p-6 flex flex-col gap-4">
      {/* Header row */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-10 h-10 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple flex-shrink-0 group-hover:bg-accent-purple/20 transition-colors">
          <Package size={20} />
        </div>
        <span className="font-mono text-xs bg-accent-purple/10 text-accent-purple border border-accent-purple/20 rounded-full px-2.5 py-0.5 flex-shrink-0">
          v{pkg.version}
        </span>
      </div>

      {/* Package name */}
      <div>
        <div className="font-mono text-xs text-text-secondary mb-0.5">
          strapi-plugin /
        </div>
        <h3 className="font-mono text-base font-bold text-text-primary group-hover:text-accent-purple transition-colors leading-tight">
          {pkg.shortName}
        </h3>
      </div>

      {/* Description */}
      <p className="text-text-secondary text-sm leading-relaxed flex-grow">
        {pkg.description}
      </p>

      {/* Install command */}
      <div className="bg-background-tertiary rounded-lg px-3 py-2.5 flex items-center gap-2 border border-border">
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
      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <a
          href={pkg.npm}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-purple transition-colors font-medium"
        >
          <ExternalLink size={14} />
          NPM
        </a>
        <a
          href={pkg.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent-cyan transition-colors font-medium"
        >
          <FaGithub size={14} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export function OpenSource() {
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
        {/* Contributor badge */}
        <ScrollReveal>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 border border-accent-purple/30 bg-accent-purple/10 rounded-full px-4 py-1.5 text-sm font-mono text-accent-purple">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
              Open Source Contributor
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <SectionHeading
            title="NPM"
            highlight="Packages"
            description="3 open source Strapi v5 plugins published to the NPM registry — solving real gaps in the Strapi ecosystem"
          />
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <StaggerItem key={pkg.name}>
              <PackageCard pkg={pkg} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-text-secondary text-sm mt-10 font-mono">
            <span className="text-accent-purple">&gt;</span>{" "}
            All packages available on{" "}
            <a
              href="https://www.npmjs.com/~dansplaying"
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
