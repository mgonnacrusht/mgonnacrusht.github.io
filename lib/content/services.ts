export type ServiceIcon =
  | "smartphone"
  | "android"
  | "api"
  | "cloud"
  | "database"
  | "saas"
  | "workflow"
  | "website";

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
      "The system behind your app or product: data, user accounts and integrations, built with Java and Spring Boot and deployed to a Linux VPS.",
    icon: "api",
    chips: ["Spring Boot", "REST APIs", "Integrations"],
  },
  {
    name: "Cloud & VPS Deployment",
    summary:
      "Get your app or tool online and running reliably: Linux VPS setup, Docker and CI/CD, with AWS or GCP when the project needs them.",
    icon: "cloud",
    chips: ["Linux VPS", "Docker", "CI/CD"],
  },
  {
    name: "Database Development",
    summary:
      "Reliable data storage for your product: PostgreSQL schema design, migrations and performance tuning.",
    icon: "database",
    chips: ["PostgreSQL", "Schema", "Tuning"],
  },
  {
    name: "SaaS Development",
    summary:
      "Small SaaS first versions and fixed-scope backends, designed pragmatically for solo founders and small teams.",
    icon: "saas",
    chips: ["MVP", "Fixed scope", "Backends"],
  },
  {
    name: "Workflow Automation",
    summary:
      "Connect your tools and automate repetitive work with n8n workflows, installed, configured and handed over with short notes.",
    icon: "workflow",
    chips: ["n8n", "Integrations", "Automation"],
  },
  {
    name: "Website Development",
    summary:
      "Fast, mobile-friendly company and marketing websites built with Next.js, with search engine basics set up and deployed to your domain.",
    icon: "website",
    chips: ["Next.js", "TypeScript", "SEO basics"],
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
  "Workflow automation and tool integrations with n8n",
  "Company and marketing websites built with Next.js",
];
