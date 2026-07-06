import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.svg",
  noIndex = false,
}: PageMeta): Metadata {
  const url = `${siteConfig.domain}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: `${siteConfig.domain}${ogImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.domain}${ogImage}`],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
