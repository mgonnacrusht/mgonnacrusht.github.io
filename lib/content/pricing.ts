export type PricingBand = {
  label: string;
  range: string;
  note: string;
};

export const pricingBands: PricingBand[] = [
  {
    label: "Hourly",
    range: "£40–60 / hour",
    note: "Useful for advisory slices and tightly scoped changes.",
  },
  {
    label: "Small scoped work",
    range: "~£650–£1,700",
    note: "Single feature, focused bug-fix package, or a small Flutter/Android slice.",
  },
  {
    label: "Small Flutter / Android MVP",
    range: "£2,400–£5,100",
    note: "Typically 2–4 weeks with a fixed scope and clear milestones.",
  },
  {
    label: "Discovery call",
    range: "Free, 15–30 minutes",
    note: "No obligation. Agree fit and next steps before any quote.",
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
