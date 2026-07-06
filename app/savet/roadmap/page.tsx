/**
 * ROADMAP PAGE — hidden from navigation and sitemap while showRoadmap is false.
 *
 * To publish in production:
 * 1. Set showRoadmap: true in lib/config/site.ts
 * 2. Optionally add nav link in lib/content/navigation.ts
 * 3. Add /savet/roadmap/ to app/sitemap.ts
 * 4. Remove noIndex from metadata export below
 */
import { buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/config/site";
import { roadmapContent } from "@/lib/content/savet";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "SaveT Roadmap",
  description:
    "SaveT product roadmap — planned features, milestones, and what comes next.",
  path: "/savet/roadmap/",
  noIndex: !siteConfig.showRoadmap,
});

export default function SaveTRoadmapPage() {
  return (
    <>
      {!siteConfig.showRoadmap ? (
        <div className="border-b border-amber-200 bg-amber-50 px-5 py-2 text-center text-sm text-amber-900">
          Preview only — not linked in navigation. Set showRoadmap to true to publish.
        </div>
      ) : null}

      <PageHero
        eyebrow="SaveT"
        title="Roadmap"
        lead="A look at where SaveT is headed — planned features, milestones, and what comes next."
      >
        <Button href="/savet/">Back to SaveT</Button>
        <Button href="/contact/" variant="secondary">
          Contact
        </Button>
      </PageHero>

      <Section>
        <Container>
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
            <div
              className="relative w-full"
              style={{ aspectRatio: "100 / 141.4286" }}
            >
              <iframe
                src={roadmapContent.canvaEmbedUrl}
                title={roadmapContent.canvaTitle}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-muted">
            {roadmapContent.canvaTitle} by {roadmapContent.canvaAuthor}.{" "}
            <a
              href={roadmapContent.canvaViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              View on Canva
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
