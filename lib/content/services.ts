export type ServiceIcon =
  | "smartphone"
  | "api"
  | "cloud"
  | "database"
  | "saas"
  | "workflow"
  | "website"
  | "maintenance";

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
      "Flutter and native Android apps from first screen to store release, including small MVPs and Google Play publishing. iOS scoped per project.",
    icon: "smartphone",
    href: "/services/flutter-app-development/",
    chips: ["Flutter", "Native Android", "Google Play"],
  },
  {
    name: "SaaS MVPs",
    summary:
      "Small SaaS first versions and fixed-scope backends, designed pragmatically for solo founders and small teams.",
    icon: "saas",
    chips: ["MVP", "Fixed scope", "Backends"],
  },
  {
    name: "Websites",
    summary:
      "Fast, mobile-friendly company websites built with Next.js, with search basics set up and deployed to your domain.",
    icon: "website",
    href: "/services/website-development/",
    chips: ["Next.js", "TypeScript", "SEO basics"],
  },
  {
    name: "Automation",
    summary:
      "Connect your tools and automate repetitive work with n8n workflows, installed, configured and handed over.",
    icon: "workflow",
    href: "/services/n8n-automation/",
    chips: ["n8n", "Integrations", "Automation"],
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
    name: "Databases",
    summary:
      "Reliable data storage for your product, with PostgreSQL schema design, migrations and performance tuning.",
    icon: "database",
    chips: ["PostgreSQL", "Schema", "Tuning"],
  },
  {
    name: "Hosting & Servers",
    summary:
      "Get your app online and running reliably with Linux VPS setup, Docker and CI/CD, plus AWS or GCP when needed.",
    icon: "cloud",
    href: "/services/server-setup/",
    chips: ["Linux VPS", "Docker", "CI/CD"],
  },
  {
    name: "Maintenance & Support",
    summary:
      "Updates, fixes and small improvements after launch, including Google Play target API updates and store policy changes.",
    icon: "maintenance",
    href: "/services/app-maintenance/",
    chips: ["Updates", "Bug fixes", "Store compliance"],
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
