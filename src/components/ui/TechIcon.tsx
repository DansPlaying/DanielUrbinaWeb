"use client";

import { type IconType } from "react-icons";
import {
  SiTypescript,
  SiAngular,
  SiVuedotjs,
  SiHtml5,
  SiTailwindcss,
  SiFlutter,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiNpm,
  SiComposer,
  SiInsomnia,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiVercel,
  SiGithub,
  SiNestjs,
  SiExpress,
} from "react-icons/si";
import {
  Globe,
  MessageCircle,
  Users,
  Lightbulb,
  RefreshCw,
} from "lucide-react";

// Tech icons from Simple Icons
const techIconMap: Record<string, IconType> = {
  TypeScript: SiTypescript,
  Angular: SiAngular,
  "Vue.js": SiVuedotjs,
  HTML5: SiHtml5,
  "Tailwind CSS": SiTailwindcss,
  Flutter: SiFlutter,
  Laravel: SiLaravel,
  Python: SiPython,
  SQL: SiPostgresql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  NPM: SiNpm,
  Composer: SiComposer,
  Insomnia: SiInsomnia,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Nest.js": SiNestjs,
  "Express.js": SiExpress,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
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
