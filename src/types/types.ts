import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

export type iconTypes = LucideIcon | IconType;

export interface SkillCardProps {
  src: string;
  title: string;
}

export interface SocialIcon {
  href: string;
  icon: iconTypes;
  color: "zinc" | "green" | "rose" | "blue" | "sky" | "purple" | "orange" | "pink";
}

export interface ProjectsProps {
  label: string;
  projects: ProjectCardProps[];
}

export interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  badges: string[];
  images: string[];
  link?: string;
  onClick?: () => void;
}

export interface NavigationProps {
  href: string;
  label: string;
  active?: boolean;
}