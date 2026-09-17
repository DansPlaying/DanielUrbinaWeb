import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  Package,
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
import { SiUpwork } from "react-icons/si";
import { type ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ size?: string | number }>> = {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Globe,
  Package,
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
  Upwork: SiUpwork,
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
