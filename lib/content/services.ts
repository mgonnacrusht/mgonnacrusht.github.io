export type ServiceIcon = "smartphone" | "android" | "api" | "cloud" | "database" | "saas";

export type Service = {
  name: string;
  summary: string;
  icon: ServiceIcon;
  chips: string[];
};

export type TechnicalScopeGroup = {
  label: string;
  items: string[];
};

export const services: Service[] = [
  {
    name: "Mobile Application Development",
    summary:
      "Flutter mobile apps from first screen to store release, including small MVP builds, with proven Android delivery. iOS can be scoped per project when requirements fit.",
    icon: "smartphone",
    chips: ["Flutter", "Android", "MVP"],
  },
  {
    name: "Android Development",
    summary:
      "Native Java and Flutter Android builds with Google Play publishing and release support.",
    icon: "android",
    chips: ["Java", "Flutter", "Google Play"],
  },
  {
    name: "Backend API Development",
    summary:
      "Java and Spring Boot REST APIs with PostgreSQL, Docker, and production-ready deployment on a Linux VPS, including mobile API integrations.",
    icon: "api",
    chips: ["Spring Boot", "REST APIs", "Integrations"],
  },
  {
    name: "Cloud & VPS Deployment",
    summary:
      "Self-hosted Linux VPS setup, Docker, CI/CD, and n8n automation, with cloud options on AWS or GCP when the project calls for it.",
    icon: "cloud",
    chips: ["Linux VPS", "Docker", "n8n"],
  },
  {
    name: "Database Development",
    summary:
      "PostgreSQL schema design, migrations, and performance tuning.",
    icon: "database",
    chips: ["PostgreSQL", "Schema", "Tuning"],
  },
  {
    name: "SaaS Development",
    summary:
      "Small SaaS MVPs and fixed-scope backends with pragmatic architecture for solo or small-team products.",
    icon: "saas",
    chips: ["MVP", "Fixed scope", "Backends"],
  },
];

export const technicalScope: TechnicalScopeGroup[] = [
  {
    label: "Mobile",
    items: ["Flutter", "Native Android (Java)"],
  },
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
  },
  {
    label: "Deploy",
    items: ["Linux VPS", "Docker", "CI/CD", "AWS", "GCP"],
  },
  {
    label: "Web",
    items: ["Next.js", "TypeScript"],
  },
];

export const deliveryScope = [
  "Flutter and native Java Android apps",
  "Java Spring Boot REST APIs and backend engineering",
  "PostgreSQL schema design and optimization",
  "Linux VPS deployment with Docker",
  "CI/CD and release pipeline setup",
  "AWS and GCP when the project needs cloud scale",
  "Google Play publishing and launch support",
];
