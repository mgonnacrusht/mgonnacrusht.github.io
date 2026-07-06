export type PortfolioProject = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string | null;
  status: "live" | "coming-soon";
  featured?: boolean;
};

export const savetFeatured = {
  slug: "savet",
  title: "SaveT",
  description:
    "Bookmarking app for links, places, media, and ideas. For people who save too much online and lose it across tabs, screenshots, and notes.",
  tags: ["Flutter", "Firebase", "RevenueCat"],
  image: "/images/savet/Savet_logo_dark_big_1500_1500.png",
  href: "/savet/",
  status: "live" as const,
  bullets: [
    "Save and organize content from websites, social posts, short videos, articles, map POIs, and career-focused posts",
    "Nested list structure and search",
    "Automatic titles, tags, and sorting hints",
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    description:
      "Placeholder. Lightweight integration tool for small teams syncing data between services.",
    tags: ["Flutter", "Firebase"],
    image: "/images/portfolio/placeholder.svg",
    href: null,
    status: "coming-soon",
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    description:
      "Placeholder. Internal workflow dashboard with custom reporting and export.",
    tags: ["Next.js", "PostgreSQL"],
    image: "/images/portfolio/placeholder.svg",
    href: null,
    status: "coming-soon",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    description:
      "Placeholder. API bridge connecting legacy systems to modern cloud services.",
    tags: ["Spring Boot", "AWS"],
    image: "/images/portfolio/placeholder.svg",
    href: null,
    status: "coming-soon",
  },
];
