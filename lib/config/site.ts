export const siteConfig = {
  name: "MgonnacrushT",
  tagline:
    "Apps, websites and automation for UK startups and small businesses.",
  domain: "https://mgonnacrusht.co.uk",
  showRoadmap: false,
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
  // Public Cal.com booking page, so it lives in code rather than in a secret.
  calLink: "https://cal.com/mgonnacrusht/quickchat",
  formspreeFormId:
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "mwvdyvkr",
  formspreeEndpoint: "https://formspree.io/f/mwvdyvkr",
  umamiScriptUrl: "https://umami.mgonnacrusht.co.uk/script.js",
  umamiWebsiteId: "131b5837-1155-4e15-b3fa-2780d536a265",
  copyright: "MgonnacrushT Limited, registered in England and Wales.",
  companyNumber: "16877439",
  companiesHouseUrl:
    "https://find-and-update.company-information.service.gov.uk/company/16877439",
  linkedIn: {
    company: "https://www.linkedin.com/company/mgonnacrusht",
    director: "https://www.linkedin.com/in/alihan98ersoy",
  },
  emails: {
    hello: "hello@mgonnacrusht.co.uk",
    support: "support@mgonnacrusht.co.uk",
    legal: "legal@mgonnacrusht.co.uk",
  },
} as const;
