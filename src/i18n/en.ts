import { Translations } from "./types";

export const en: Translations = {
  hero: {
    subtitle: "Bachelor of Computer Science",
    description:
      "Full-Stack Software Engineer with solid experience in backend development and cloud infrastructure. Building scalable and efficient solutions.",
    location: "São Paulo, Brazil",
  },
  skills: {
    sectionTitle: "// Skills",
    languages: "Languages",
    technologies: "Technologies & Tools",
  },
  experience: {
    sectionTitle: "// Experience",
    jobs: [
      {
        title: "Full-Stack Software Engineer",
        company: "Engineering Brasil S.A.",
        period: "Apr. 2025 — Present",
        highlights: [
          "Development and maintenance of multiple applications for a major client using Node.js, TypeScript, PostgreSQL, and Vue.js.",
          "Built automations and internal tooling that helped Support and Production teams test and deploy applications faster and more reliably — using GCP, Linux Server, Docker, Nginx, and GitLab CI/CD.",
          "Developed AI-powered internal tools to automate analysis and validation tasks, improving operational efficiency.",
          "Collaborated with product and operations teams to translate client needs into MVPs and proofs of concept.",
        ],
      },
      {
        title: "Full-Stack Developer",
        company: "MadeinWeb Ltda.",
        period: "Jul. 2021 — Sep. 2024",
        highlights: [
          "Worked on 10+ client projects, from discovery to production.",
          "Built new features, maintained and optimized APIs aligned with client requirements.",
          "Contributed to feature refinement and sprint planning.",
          "Core stack: Git, Docker, C#, .NET, PostgreSQL, Oracle Database, TypeScript, Node.js, Nest.js, Vue.js, EF Core.",
        ],
      },
    ],
  },
  education: {
    sectionTitle: "// Education",
    items: [
      {
        degree: "Bachelor's in Computer Science",
        school: "Federal University of Technology — Paraná (UTFPR)",
      },
      {
        degree: "Technical High School in IT",
        school: "Federal Institute of São Paulo (IFSP)",
      },
    ],
  },
  footer: {
    cta: "// Let's talk",
    builtBy: "Built by Gustavo Yuji Mekaru",
  },
  meta: {
    title: "Gustavo Yuji Mekaru — Software Engineer",
    description:
      "Portfolio of Gustavo Yuji Mekaru, Full-Stack Software Engineer with experience in backend development and cloud infrastructure.",
    ogDescription:
      "Full-Stack Software Engineer with experience in backend development and cloud infrastructure.",
  },
};
