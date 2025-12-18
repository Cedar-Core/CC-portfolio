import config from "./index";
import type {
  Skill,
  SkillCategory,
  Project,
  Experience,
  Service,
  Testimonial,
  SocialLink,
  Statistic,
  NavItem,
  Certification,
  Education,
} from "./types";

export const getSkills = (): Skill[] => {
  return [...config.skills].sort((a, b) => a.order - b.order);
};

export const getFeaturedSkills = (): Skill[] => {
  return getSkills().filter((skill) => skill.featured);
};

export const getSkillsByCategory = (category: SkillCategory): Skill[] => {
  return getSkills().filter((skill) => skill.category === category);
};

export const getSkillsGroupedByCategory = (): Map<SkillCategory, Skill[]> => {
  const grouped = new Map<SkillCategory, Skill[]>();

  config.skillCategories
    .sort((a, b) => a.order - b.order)
    .forEach((cat) => {
      grouped.set(cat.id, getSkillsByCategory(cat.id));
    });

  return grouped;
};

export const getSkillCategory = (id: SkillCategory) => {
  return config.skillCategories.find((cat) => cat.id === id);
};

export const getProjects = (): Project[] => {
  return [...config.projects].sort((a, b) => a.order - b.order);
};

export const getFeaturedProjects = (): Project[] => {
  return getProjects().filter((project) => project.featured);
};

export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return getProjects().filter((project) => project.status === status);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return getProjects().filter((project) => project.category === category);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return config.projects.find((project) => project.slug === slug);
};

export const getProjectCategories = (): string[] => {
  const categories = new Set(config.projects.map((p) => p.category));
  return Array.from(categories);
};

export const getProjectTags = (): string[] => {
  const tags = new Set(config.projects.flatMap((p) => p.tags));
  return Array.from(tags);
};

export const getExperiences = (): Experience[] => {
  return [...config.experience].sort((a, b) => a.order - b.order);
};

export const getCurrentExperience = (): Experience | undefined => {
  return config.experience.find((exp) => exp.current);
};

export const getTotalExperienceYears = (): number => {
  const startDates = config.experience.map((exp) => new Date(exp.startDate));
  const earliest = new Date(Math.min(...startDates.map((d) => d.getTime())));
  const now = new Date();
  return Math.floor(
    (now.getTime() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365)
  );
};

export const getEducation = (): Education[] => {
  return [...config.education].sort((a, b) => a.order - b.order);
};

export const getCertifications = (): Certification[] => {
  return [...config.certifications].sort((a, b) => a.order - b.order);
};

export const getFeaturedCertifications = (): Certification[] => {
  return getCertifications().filter((cert) => cert.featured);
};

export const getValidCertifications = (): Certification[] => {
  const now = new Date();
  return getCertifications().filter((cert) => {
    if (!cert.expiryDate) return true;
    return new Date(cert.expiryDate) > now;
  });
};

export const getServices = (): Service[] => {
  return [...config.services].sort((a, b) => a.order - b.order);
};

export const getServiceById = (id: string): Service | undefined => {
  return config.services.find((service) => service.id === id);
};

export const getTestimonials = (): Testimonial[] => {
  return [...config.testimonials].sort((a, b) => a.order - b.order);
};

export const getFeaturedTestimonials = (): Testimonial[] => {
  return getTestimonials().filter((testimonial) => testimonial.featured);
};

export const getTestimonialsForProject = (projectId: string): Testimonial[] => {
  return getTestimonials().filter((t) => t.projectId === projectId);
};

export const getSocialLinks = (): SocialLink[] => {
  return [...config.socialLinks].sort((a, b) => a.order - b.order);
};

export const getSocialLinkByPlatform = (
  platform: SocialLink["platform"]
): SocialLink | undefined => {
  return config.socialLinks.find((link) => link.platform === platform);
};

export const getMainNavigation = (): NavItem[] => {
  return [...config.navigation.main].sort((a, b) => a.order - b.order);
};

export const getFooterNavigation = () => {
  return config.navigation.footer.sections;
};

export const getStatistics = (): Statistic[] => {
  return [...config.statistics].sort((a, b) => a.order - b.order);
};

export const getPageSEO = (page: string) => {
  return (
    config.pageSEO[page] || {
      title: config.seo.defaultTitle,
      description: config.seo.description,
    }
  );
};

export const getFullPageTitle = (pageTitle?: string): string => {
  if (!pageTitle) return config.seo.defaultTitle;
  return config.seo.titleTemplate.replace("%s", pageTitle);
};

export const getCTA = (id: string) => {
  return config.ctas[id];
};

export const getPersonalInfo = () => config.personal;

export const getBranding = () => config.branding;

export const getPrinciples = () => config.principles;

export const getCapabilities = () => config.capabilities;

export const getContactLinks = () => config.personal.contact;

export const getAvailability = () => config.personal.availability;

export const getValues = () => config.values;

export const isFeatureEnabled = (
  feature: keyof typeof config.features
): boolean => {
  return config.features[feature];
};

export const getAllTechnologies = (): string[] => {
  const techs = new Set<string>();

  config.projects.forEach((p) => p.techStack.forEach((t) => techs.add(t)));
  config.experience.forEach((e) => e.techStack.forEach((t) => techs.add(t)));

  return Array.from(techs).sort();
};

export const getProjectsByTechnology = (tech: string): Project[] => {
  return getProjects().filter((p) =>
    p.techStack.some((t) => t.toLowerCase() === tech.toLowerCase())
  );
};
