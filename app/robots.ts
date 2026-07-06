import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: siteConfig.showRoadmap ? undefined : "/savet/roadmap/",
    },
    sitemap: `${siteConfig.domain}/sitemap.xml`,
  };
}
