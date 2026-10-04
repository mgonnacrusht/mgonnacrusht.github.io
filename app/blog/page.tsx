import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Guides: App, Website and Automation Costs",
  description:
    "Plain guides on what apps, websites and automations cost in the UK, how to keep them running, and how to choose the right technology.",
  path: "/blog/",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        eyebrow="Guides"
        title="Guides for apps, websites and automation"
        lead="Plain answers on costs, upkeep and choosing the right technology, with our real prices."
      />
      <Section>
        <Container className="max-w-3xl">
          <ul className="space-y-6">
            {posts.map((post, index) => (
              <li key={post.slug}>
                <FadeIn delay={index * 0.05}>
                  <article className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md">
                    <p className="text-sm text-muted">
                      {post.updated !== post.date
                        ? `Updated ${formatPostDate(post.updated)}`
                        : formatPostDate(post.date)}
                    </p>
                    <h2 className="mt-2 text-xl font-bold">
                      <Link
                        href={`/blog/${post.slug}/`}
                        className="hover:text-accent"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted">
                      {post.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-accent">
                      <Link href={`/blog/${post.slug}/`}>Read the guide →</Link>
                    </p>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
