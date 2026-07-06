import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export const dynamic = "force-static";

const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/savet/", priority: 0.9 },
  { path: "/services/", priority: 0.85 },
  { path: "/products/", priority: 0.8 },
  { path: "/about/", priority: 0.8 },
  { path: "/contact/", priority: 0.8 },
  { path: "/legal/privacy/", priority: 0.4 },
  { path: "/legal/terms/", priority: 0.4 },
  { path: "/savet/legal/privacy/", priority: 0.4 },
  { path: "/savet/legal/terms/", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
