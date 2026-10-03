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
  href?: string;
  chips: string[];
};

export type TechnicalScopeGroup = {
  label: string;
  items: string[];
};

export const services: Service[] = [
  {
    name: "Mobile Apps",
    summary:
      "Flutter apps from first screen to store release, including small MVPs. Proven on Android, with iOS scoped per project.",
    icon: "smartphone",
    href: "/services/flutter-app-development/",
    chips: ["Flutter", "Android", "MVP"],
  },
  {
    name: "Android Apps",
    summary:
      "Native Java and Flutter Android builds, with Google Play publishing and release support for your launch.",
    icon: "android",
    href: "/services/android-app-development/",
    chips: ["Java", "Flutter", "Google Play"],
  },
  {
    name: "Backend & APIs",
    summary:
      "The system behind your product: data, accounts and integrations, built in Java and Spring Boot and ready to deploy.",
    icon: "api",
    href: "/services/backend-development/",
    chips: ["Spring Boot", "REST APIs", "Integrations"],
  },
  {
    name: "Hosting & Servers",
    summary:
      "Get your app online and running reliably with Linux VPS setup, Docker and CI/CD, plus AWS or GCP when needed.",
    icon: "cloud",
    href: "/services/automation-and-hosting/",
    chips: ["Linux VPS", "Docker", "CI/CD"],
  },
  {
    name: "Databases",
    summary:
      "Reliable data storage for your product, with PostgreSQL schema design, migrations and performance tuning.",
    icon: "database",
    chips: ["PostgreSQL", "Schema", "Tuning"],
  },
  {
    name: "SaaS MVPs",
    summary:
      "Small SaaS first versions and fixed-scope backends, designed pragmatically for solo founders and small teams.",
    icon: "saas",
    chips: ["MVP", "Fixed scope", "Backends"],
  },
  {
    name: "Automation",
    summary:
      "Connect your tools and automate repetitive work with n8n workflows, installed, configured and handed over.",
    icon: "workflow",
    href: "/services/automation-and-hosting/",
    chips: ["n8n", "Integrations", "Automation"],
  },
  {
    name: "Websites",
    summary:
      "Fast, mobile-friendly company websites built with Next.js, with search basics set up and deployed to your domain.",
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
