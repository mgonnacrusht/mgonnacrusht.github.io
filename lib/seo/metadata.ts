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
  const brandedTitle = `${title} · ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_GB",
      type: "website",
      images: [{ url: `${siteConfig.domain}${ogImage}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [`${siteConfig.domain}${ogImage}`],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}
