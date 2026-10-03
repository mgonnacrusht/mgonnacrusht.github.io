import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config/site";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${siteConfig.domain}/blog/${post.slug}/`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated,
          mainEntityOfPage: url,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
          },
        }}
      />

      <Section className="border-b border-border bg-surface pb-12 pt-12 sm:pb-14 sm:pt-16">
        <Container className="max-w-3xl">
          <p className="text-sm text-muted">
            <Link href="/blog/" className="text-accent underline">
              Guides
            </Link>{" "}
            · {formatPostDate(post.date)}
            {post.updated !== post.date
              ? ` · Updated ${formatPostDate(post.updated)}`
              : ""}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {post.description}
          </p>
        </Container>
      </Section>

      <Section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <article
            className="prose-legal"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="mt-12 rounded-2xl border border-border bg-surface p-6 text-center">
            <h2 className="text-xl font-bold">Have a project in mind?</h2>
            <p className="mt-2 text-muted">
              See an indicative price range in a minute, or tell us what you
              want to build.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Button href="/services/#estimate">Estimate your project</Button>
              <Button href="/contact/" variant="secondary">
                Get a quote
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
