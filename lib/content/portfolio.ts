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
  imageFit?: "contain" | "cover";
  disclaimer?: string;
  cta?: { label: string; href: string; external?: boolean };
};

export const cityLineMapFeatured: PortfolioProject & { bullets: string[] } = {
  slug: "citylinemap",
  title: "City Line Map",
  description:
    "City Line Map is a free geographic map of London public transport on the real street network, not a schematic tube diagram. Underground, buses and river services sit on the city so routes can be compared where they actually run. Independent of TfL.",
  tags: ["Next.js", "MapLibre", "TfL Open Data"],
  image: "/images/citylinemap/hero.webp",
  imageFit: "cover",
  href: "/citylinemap/",
  status: "live",
  cta: { label: "Case study", href: "/citylinemap/" },
  disclaimer:
    "Independent of Transport for London. Not an official TfL map. Always check TfL before you travel.",
  bullets: [
    "Geographic map on real streets, not a schematic tube diagram",
    "Underground, buses and river services on one map",
    "Free public website with no account",
  ],
};

export const savetProject: PortfolioProject = {
  slug: "savet",
  title: "SaveT",
  description:
    "SaveT is a Flutter bookmarking app for links, places, media, and ideas. The flagship product is in closed beta and documented as a full case study.",
  tags: ["Flutter", "Firebase", "RevenueCat"],
  image: "/images/savet/savet_logodark.svg",
  href: "/savet/",
  status: "closed-beta",
  cta: { label: "Case study", href: "/savet/" },
};

export const portfolioProjects: PortfolioProject[] = [
  savetProject,
  {
    slug: "palia-clock",
    title: "Palia Clock",
    description:
      "Palia Clock is a native Java Android companion for the Palia community, built and published solo through Google Play Console.",
    tags: ["Java", "Android", "Material Design"],
    image: "/images/portfolio/palia_clock_icon.webp",
    href: "/palia-clock/",
    status: "live",
    cta: { label: "Case study", href: "/palia-clock/" },
  },
  {
    slug: "mgonnacrusht-website",
    title: "MgonnacrushT Website",
    description:
      "This site covers company positioning, product showcase, and legal pages linked from mobile apps. Rebuilt from Jekyll to Next.js 15 static export with SEO and legacy URL preservation.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/logo/MgonnacrushT_logo.webp",
    href: "/",
    status: "live",
    cta: { label: "View site", href: "/" },
  },
];

/** Homepage selected work: three cards, website stays on /products/ only. */
export const homepagePortfolio = [
  cityLineMapFeatured,
  ...portfolioProjects.filter((project) => project.slug !== "mgonnacrusht-website"),
];
