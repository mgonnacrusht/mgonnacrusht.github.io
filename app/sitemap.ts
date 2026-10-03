import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { getAllPosts } from "@/lib/blog";
import { landingPages } from "@/lib/content/landing-pages";

export const dynamic = "force-static";

type Route = { path: string; priority: number; lastModified: string };

const posts = getAllPosts();

// Update `lastModified` (YYYY-MM-DD) when a page's content meaningfully changes.
const routes: Route[] = [
  { path: "/", priority: 1, lastModified: "2026-10-03" },
  { path: "/savet/", priority: 0.9, lastModified: "2026-09-05" },
  { path: "/citylinemap/", priority: 0.85, lastModified: "2026-09-05" },
  { path: "/services/", priority: 0.85, lastModified: "2026-10-03" },
  { path: "/products/", priority: 0.8, lastModified: "2026-10-03" },
  { path: "/about/", priority: 0.8, lastModified: "2026-10-03" },
  { path: "/contact/", priority: 0.8, lastModified: "2026-09-05" },
  { path: "/palia-clock/", priority: 0.6, lastModified: "2026-10-03" },
  {
    path: "/blog/",
    priority: 0.6,
    lastModified: posts[0]?.updated ?? "2026-10-03",
  },
  ...landingPages.map((page) => ({
    path: `/services/${page.slug}/`,
    priority: 0.8,
    lastModified: "2026-10-03",
  })),
  ...posts.map((post) => ({
    path: `/blog/${post.slug}/`,
    priority: 0.6,
    lastModified: post.updated,
  })),
  { path: "/legal/privacy/", priority: 0.4, lastModified: "2026-10-03" },
  { path: "/legal/terms/", priority: 0.4, lastModified: "2026-09-05" },
  { path: "/savet/legal/privacy/", priority: 0.4, lastModified: "2026-09-05" },
  { path: "/savet/legal/terms/", priority: 0.4, lastModified: "2026-09-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, lastModified }) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly",
    priority,
  }));
}
