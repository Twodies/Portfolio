export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  platform: 'Android' | 'iOS' | 'Cross-platform';
  category: string;
  links?: {
    github?: string;
    live?: string;
    playStore?: string;
    appStore?: string;
  };
  features?: string[];
  role?: string;
  impact?: string[];
  challenges?: string[];
  downloads?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  category: string;
  icon?: string;
  proficiency?: number;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  color?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
