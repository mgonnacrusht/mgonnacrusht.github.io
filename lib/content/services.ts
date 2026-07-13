export type Service = {
  name: string;
  summary: string;
  iconLabel: string;
};

export type TechnicalScopeGroup = {
  label: string;
  items: string[];
};

export const services: Service[] = [
  {
    name: "Mobile Application Development",
    summary:
      "Flutter mobile apps from first screen to store release, with proven Android delivery. iOS can be scoped per project when requirements fit.",
    iconLabel: "MOB",
  },
  {
    name: "Android Development",
    summary:
      "Native Java and Flutter Android builds with Google Play publishing and release support.",
    iconLabel: "AND",
  },
  {
    name: "Backend API Development",
    summary:
      "Java and Spring Boot REST APIs with PostgreSQL, Docker, and production-ready deployment on a Linux VPS.",
    iconLabel: "API",
  },
  {
    name: "Cloud & VPS Deployment",
    summary:
      "Self-hosted Linux VPS setup, Docker, CI/CD, and cloud options on AWS or GCP when the project calls for it.",
    iconLabel: "OPS",
  },
  {
    name: "Database Development",
    summary:
      "PostgreSQL schema design, migrations, and performance tuning.",
    iconLabel: "DB",
  },
  {
    name: "SaaS Development",
    summary:
      "Small SaaS MVPs and fixed-scope backends with pragmatic architecture for solo or small-team products.",
    iconLabel: "SAAS",
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
