export type Service = {
  name: string;
  summary: string;
  iconLabel: string;
};

export const services: Service[] = [
  {
    name: "Mobile Application Development",
    summary:
      "Native-feeling iOS and Android apps with Flutter, built end-to-end.",
    iconLabel: "MOB",
  },
  {
    name: "Android Development",
    summary:
      "Android-first builds with Google Play publishing and release support.",
    iconLabel: "AND",
  },
  {
    name: "Cloud Application Development",
    summary:
      "Cloud-native services deployed on AWS, GCP, or a lean VPS.",
    iconLabel: "CLD",
  },
  {
    name: "Custom Software Development",
    summary:
      "Bespoke product and internal tools built to fit the real workflow.",
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
      "Multi-tenant SaaS platforms with pragmatic architecture choices.",
    iconLabel: "SAAS",
  },
];

export const deliveryScope = [
  "Flutter app development",
  "Spring Boot API and backend engineering",
  "AWS, GCP, and VPS deployment",
  "PostgreSQL schema design and optimization",
  "CI/CD and release pipeline setup",
  "Google Play publishing and launch support",
];
