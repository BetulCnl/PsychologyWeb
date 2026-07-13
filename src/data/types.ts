import type { LucideIcon } from "lucide-react";

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  detail?: string;
  status?: "devam" | "tamamlandı";
}

export interface ExperienceItem {
  organization: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
}

export interface ProjectItem {
  title: string;
  context: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  accredited?: string;
}
