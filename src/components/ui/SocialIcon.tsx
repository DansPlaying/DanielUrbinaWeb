import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  Database,
  Server,
  Monitor,
  Smartphone,
  Terminal,
  Palette,
  Layers,
  Cloud,
  GitBranch,
  Container,
  Shield,
  Cpu,
  Braces,
  FileCode,
  Layout,
  Figma,
  Boxes,
} from "lucide-react";
import { type LucideProps } from "lucide-react";
import { type ComponentType } from "react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  Code,
  Database,
  Server,
  Monitor,
  Smartphone,
  Terminal,
  Palette,
  Layers,
  Cloud,
  GitBranch,
  Container,
  Shield,
  Cpu,
  Braces,
  FileCode,
  Layout,
  Figma,
  Boxes,
};

interface SocialIconProps {
  iconName: string;
  size?: number;
}

export function SocialIcon({ iconName, size = 20 }: SocialIconProps) {
  const Icon = iconMap[iconName];
  if (!Icon) return null;
  return <Icon size={size} />;
}
