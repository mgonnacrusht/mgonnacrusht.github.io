export type PortfolioStatus = "closed-beta" | "live" | "coming-soon";

export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string | null;
  status: PortfolioStatus;
  featured?: boolean;
  cta?: { label: string; href: string; external?: boolean };
};

export const savetFeatured: PortfolioProject & { bullets: string[] } = {
  slug: "savet",
  title: "SaveT",
  description:
    "SaveT is a Flutter bookmarking app for links, places, media, and ideas. The flagship product is in closed beta and documented as a full case study.",
  tags: ["Flutter", "Firebase", "RevenueCat"],
  image: "/images/savet/savet_logodark.svg",
  href: "/savet/",
  status: "closed-beta",
  cta: { label: "Case study", href: "/savet/" },
  bullets: [
    "Save and organize content from websites, social posts, short videos, articles, map POIs, and career-focused posts",
    "Nested list structure and search",
    "Automatic titles, tags, and sorting hints",
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "palia-clock",
    title: "Palia Clock",
    description:
      "Palia Clock is a native Java Android companion for the Palia community, built and published solo through Google Play Console.",
    tags: ["Java", "Android", "Material Design"],
    image: "/images/portfolio/palia-clock.svg",
    href: "https://play.google.com/store/apps/details?id=com.alihan98ersoy.paliaclock",
    status: "live",
    cta: {
      label: "Get on Play",
      href: "https://play.google.com/store/apps/details?id=com.alihan98ersoy.paliaclock",
      external: true,
    },
  },
  {
    slug: "mgonnacrusht-website",
    title: "MgonnacrushT Website",
    description:
      "This site — agency positioning, product showcase, and legal pages linked from mobile apps. Rebuilt from Jekyll to Next.js 15 static export with SEO and legacy URL preservation.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/logo/logo.svg",
    href: "/",
    status: "live",
    cta: { label: "View site", href: "/" },
  },
];

/** All portfolio items for homepage preview (SaveT + others). */
export const homepagePortfolio = [savetFeatured, ...portfolioProjects];
