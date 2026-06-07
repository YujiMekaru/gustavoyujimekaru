export type Locale = "pt" | "en";

export interface Translations {
  hero: {
    subtitle: string;
    description: string;
    location: string;
  };
  skills: {
    sectionTitle: string;
    languages: string;
    technologies: string;
  };
  experience: {
    sectionTitle: string;
    jobs: {
      title: string;
      company: string;
      period: string;
      highlights: string[];
    }[];
  };
  education: {
    sectionTitle: string;
    items: {
      degree: string;
      school: string;
    }[];
  };
  footer: {
    cta: string;
    builtBy: string;
  };
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
}
