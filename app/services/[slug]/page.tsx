import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceLanding } from "@/components/sections/ServiceLanding";
import { getLandingPage, landingPages } from "@/lib/content/landing-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${page.slug}/`,
  });
}

export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();
  return <ServiceLanding page={page} />;
}
