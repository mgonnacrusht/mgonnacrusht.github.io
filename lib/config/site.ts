export const siteConfig = {
  name: "MgonnacrushT",
  domain: "https://mgonnacrusht.co.uk",
  showRoadmap: false,
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
  formspreeFormId:
    process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID ?? "mwvdyvkr",
  formspreeEndpoint: "https://formspree.io/f/mwvdyvkr",
  umamiWebsiteId: "957b7146-060b-40e6-8ee1-4f8dec3ad333",
  copyright: "MgonnacrushT Limited, registered in England and Wales.",
  emails: {
    hello: "hello@mgonnacrusht.co.uk",
    support: "support@mgonnacrusht.co.uk",
    legal: "legal@mgonnacrusht.co.uk",
  },
} as const;
