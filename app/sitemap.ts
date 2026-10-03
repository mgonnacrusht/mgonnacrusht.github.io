import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export const dynamic = "force-static";

// Update `lastModified` (YYYY-MM-DD) when a page's content meaningfully changes.
const routes: Array<{ path: string; priority: number; lastModified: string }> = [
  { path: "/", priority: 1, lastModified: "2026-10-03" },
  { path: "/savet/", priority: 0.9, lastModified: "2026-09-05" },
  { path: "/citylinemap/", priority: 0.85, lastModified: "2026-09-05" },
  { path: "/services/", priority: 0.85, lastModified: "2026-10-03" },
  { path: "/products/", priority: 0.8, lastModified: "2026-09-05" },
  { path: "/about/", priority: 0.8, lastModified: "2026-10-03" },
  { path: "/contact/", priority: 0.8, lastModified: "2026-09-05" },
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
