import { priceRange, timeline } from "@/lib/quiz/prices";

export const hourlyRate = "£40 to £60 / hour";

export type PricingGroup = {
  title: string;
  href: string;
  /** Typical range for a small project, straight from quiz.json. */
  range: string;
  note: string;
};

/** One typical price per service group. The estimate covers everything else. */
export const pricingGroups: PricingGroup[] = [
  {
    title: "Apps",
    href: "/services/flutter-app-development/",
    range: priceRange("type_new_app", "size_s"),
    note: `A small Flutter or Android app. Typically ${timeline("type_new_app", "size_s")}.`,
  },
  {
    title: "Websites",
    href: "/services/website-development/",
    range: priceRange("type_website", "size_s"),
    note: `A small company or service website. Typically ${timeline("type_website", "size_s")}.`,
  },
  {
    title: "Automation & hosting",
    href: "/services/n8n-automation/",
    range: priceRange("type_automation", "size_s"),
    note: `1 to 3 n8n workflows connecting your tools. Typically ${timeline("type_automation", "size_s")}.`,
  },
];

export const engagementNotes = [
  "Milestone / fixed-price preferred",
  "Invoiced via MgonnacrushT Ltd",
  "Clear scope and milestones before start",
  "No surprise invoices",
  "Remote collaboration",
] as const;

export const contactBlurb =
  "Prefer a call? Book a free discovery slot. Prefer email? Use the form. Quotes are scope-based in GBP.";
