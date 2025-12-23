// ============================================================================
// Core Types
// ============================================================================

export type Status = "completed" | "in-progress" | "planned" | "archived";
export type ProficiencyLevel =
  | "beginner"
  | "intermediate"
  | "advanced"
  | "expert";
export type EmploymentType =
  | "full-time"
  | "part-time"
  | "contract"
  | "freelance"
  | "internship";
export type ProjectType =
  | "web"
  | "mobile"
  | "desktop"
  | "api"
  | "library"
  | "other";

// ============================================================================
// Personal Information
// ============================================================================

export interface ContactLink {
  type: "email" | "phone" | "website" | "calendar";
  label: string;
  value: string;
  href: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  shortName?: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  avatar?: string;
  location: {
    city: string;
    state?: string;
    country: string;
    timezone: string;
    remote: boolean;
  };
  contact: ContactLink[];
  availability: {
    status: "available" | "limited" | "unavailable";
    message: string;
  };
}

// ============================================================================
// clients
// ============================================================================

export interface clientInfo {
  name: string;
  industry: string;
}

export interface testimonialInfo {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

// ============================================================================
// Technologies
// ============================================================================

export interface Technology {
  name: string;
  icon: string;
  category: string;
  years: number;
}

// ============================================================================
// Process Steps
// ============================================================================

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

// ============================================================================
// Skills
// ============================================================================

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "mobile"
  | "design"
  | "tools"
  | "soft-skills"
  | "other";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: ProficiencyLevel;
  proficiencyPercent: number; // 0-100
  icon?: string;
  color?: string;
  yearsOfExperience?: number;
  featured: boolean;
  order: number;
}

export interface SkillCategoryConfig {
  id: SkillCategory;
  label: string;
  icon: string;
  description?: string;
  order: number;
}

// ============================================================================
// Projects
// ============================================================================

export interface ProjectLink {
  type:
    | "live"
    | "demo"
    | "repository"
    | "case-study"
    | "documentation"
    | "video";
  label: string;
  url: string;
  icon?: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  type: "thumbnail" | "screenshot" | "logo" | "hero";
  order: number;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  type: ProjectType;
  status: Status;
  featured: boolean;
  order: number;
  techStack: string[];
  links: ProjectLink[];
  images: ProjectImage[];
  highlights?: string[];
  client?: string;
  duration?: string;
  year: number;
  tags: string[];
}

// ============================================================================
// Experience
// ============================================================================

export interface ExperienceHighlight {
  text: string;
  metrics?: string;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  role: string;
  type: EmploymentType;
  location: string;
  remote: boolean;
  startDate: string; // ISO date string
  endDate?: string; // ISO date string, undefined = current
  current: boolean;
  description: string;
  responsibilities: string[];
  highlights: ExperienceHighlight[];
  techStack: string[];
  order: number;
}

// ============================================================================
// Education
// ============================================================================

export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  institutionLogo?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  gpa?: string;
  honors?: string[];
  relevantCourses?: string[];
  order: number;
}

// ============================================================================
// Certifications
// ============================================================================

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issuerLogo?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  featured: boolean;
  order: number;
}

// ============================================================================
// Social Links
// ============================================================================

export type SocialPlatform =
  | "github"
  | "linkedin"
  | "twitter"
  | "instagram"
  | "facebook"
  | "youtube"
  | "dribbble"
  | "behance"
  | "medium"
  | "dev"
  | "stackoverflow"
  | "codepen"
  | "discord"
  | "telegram"
  | "whatsapp"
  | "tiktok"
  | "threads"
  | "mastodon"
  | "other";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  icon: string;
  username?: string;
  order: number;
}

// ============================================================================
// Services (for agencies/freelancers)
// ============================================================================

export interface ServiceFeature {
  text: string;
  included: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  order: number;
}

// ============================================================================
// Testimonials
// ============================================================================

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  companyUrl?: string;
  avatar?: string;
  content: string;
  rating?: number; // 1-5
  projectId?: string;
  featured: boolean;
  order: number;
}

// ============================================================================
// Blog / Articles (optional)
// ============================================================================

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  tags: string[];
  readingTime: number; // in minutes
  featured: boolean;
  external?: {
    url: string;
    platform: string;
  };
  order: number;
}

// ============================================================================
// SEO & Metadata
// ============================================================================

export interface OpenGraphImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: "website" | "profile" | "article";
  twitterHandle?: string;
  twitterCardType: "summary" | "summary_large_image" | "app" | "player";
  openGraph: {
    images: OpenGraphImage[];
  };
  keywords: string[];
  author: string;
  themeColor: string;
  favicon: string;
  appleTouchIcon?: string;
  manifest?: string;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title?: string;
    description?: string;
    images?: OpenGraphImage[];
  };
  noIndex?: boolean;
}

// ============================================================================
// Navigation
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
  order: number;
}

export interface NavigationConfig {
  main: NavItem[];
  footer: {
    sections: {
      title: string;
      links: NavItem[];
    }[];
  };
}

// ============================================================================
// Theme & Branding
// ============================================================================

export interface BrandColors {
  primary: string;
  secondary: string;
  accent?: string;
}

export interface BrandingConfig {
  name: string;
  tagline: string;
  logo: {
    light: string;
    dark: string;
    icon: string;
  };
  colors: BrandColors;
  fonts?: {
    heading?: string;
    body?: string;
    mono?: string;
  };
}

export interface PrincipleConfig {
  icon?: string;
  title: string;
  description: string;
}

export interface capabilitiesConfig {
  icon: string;
  label: string;
}

// ============================================================================
// Statistics / Metrics
// ============================================================================

export interface Statistic {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
  order: number;
}

// ============================================================================
// Call to Action
// ============================================================================

export interface CTA {
  id: string;
  title: string;
  description?: string;
  primaryButton: {
    text: string;
    href: string;
    icon?: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: string;
  };
}

// ============================================================================
// Main Configuration Interface
// ============================================================================

export interface Value {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioConfig {
  // Core Information
  personal: PersonalInfo;
  branding: BrandingConfig;
  values: Value[];
  principles: PrincipleConfig[];
  capabilities: capabilitiesConfig[];

  // Content Sections
  clients: clientInfo[];
  technologies: Technology[];
  processSteps: ProcessStep[];
  skills: Skill[];
  skillCategories: SkillCategoryConfig[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  services: Service[];
  testimonials: Testimonial[];
  blogPosts?: BlogPost[];

  // Links & Navigation
  socialLinks: SocialLink[];
  navigation: NavigationConfig;

  // SEO & Metadata
  seo: SEOConfig;
  pageSEO: Record<string, PageSEO>;

  // UI Configuration
  statistics: Statistic[];
  ctas: Record<string, CTA>;

  // Feature Flags
  features: {
    blog: boolean;
    testimonials: boolean;
    newsletter: boolean;
    darkMode: boolean;
    analytics: boolean;
  };
}
