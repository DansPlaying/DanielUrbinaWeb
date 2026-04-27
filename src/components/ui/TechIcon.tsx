"use client";

import { type IconType } from "react-icons";
import {
  SiTypescript,
  SiAngular,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiLaravel,
  SiPhp,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGraphql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiNpm,
  SiComposer,
  SiInsomnia,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiVercel,
  SiGithub,
  SiNestjs,
  SiExpress,
  SiAstro,
  SiWordpress,
} from "react-icons/si";
import {
  Globe,
  MessageCircle,
  Users,
  Lightbulb,
  RefreshCw,
  Layers,
} from "lucide-react";

// Tech icons from Simple Icons
const techIconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Angular: SiAngular,
  "Vue.js": SiVuedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  HTML5: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  Dart: SiDart,
  Astro: SiAstro,
  WordPress: SiWordpress,
  Laravel: SiLaravel,
  PHP: SiPhp,
  "Express.js": SiExpress,
  "Node.js": SiNodedotjs,
  "Nest.js": SiNestjs,
  Python: SiPython,
  SQL: SiPostgresql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  GraphQL: SiGraphql,
  Firebase: SiFirebase,
  Git: SiGit,
  Docker: SiDocker,
  NPM: SiNpm,
  Composer: SiComposer,
  Insomnia: SiInsomnia,
  Figma: SiFigma,
  Vercel: SiVercel,
  GitHub: SiGithub,
};

// Soft skill icons from Lucide
const softSkillIcons: Record<string, typeof Globe> = {
  Communication: MessageCircle,
  "Team Work": Users,
  "Problem Solving": Lightbulb,
  Agile: RefreshCw,
  "Clean Architecture": Layers,
  "RESTful APIs": Globe,
};

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 32, className }: TechIconProps) {
  // Check tech icons first
  const TechIcon = techIconMap[name];
  if (TechIcon) {
    return <TechIcon size={size} className={className} />;
  }

  // Check soft skill icons
  const SoftIcon = softSkillIcons[name];
  if (SoftIcon) {
    return <SoftIcon size={size} className={className} />;
  }

  // Fallback to Globe icon for unknown technologies
  return <Globe size={size} className={className} />;
}
