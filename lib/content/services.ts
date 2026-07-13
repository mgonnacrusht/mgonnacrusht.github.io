export type Service = {
  name: string;
  summary: string;
  iconLabel: string;
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
      "Native and Flutter Android builds with Google Play publishing and release support.",
    iconLabel: "AND",
  },
  {
    name: "Cloud Application Development",
    summary:
      "Cloud-native services on AWS, GCP, or a lean VPS — sized to the project, not enterprise theatre.",
    iconLabel: "CLD",
  },
  {
    name: "Custom Software Development",
    summary:
      "Bespoke product and internal tools built around how the team actually works.",
    iconLabel: "CST",
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
      "Small SaaS MVPs and fixed-scope backends — pragmatic architecture for solo or small-team products.",
    iconLabel: "SAAS",
  },
];

export const deliveryScope = [
  "Flutter app development",
  "Spring Boot API and backend engineering",
  "Fixed-scope SaaS backends",
  "AWS, GCP, and VPS deployment",
  "PostgreSQL schema design and optimization",
  "CI/CD and release pipeline setup",
  "Google Play publishing and launch support",
];
