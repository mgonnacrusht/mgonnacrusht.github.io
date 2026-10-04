import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import {
  cityLineMapFeatured,
  portfolioProjects,
} from "@/lib/content/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "Portfolio: Apps and Websites We Have Built",
  description: siteConfig.tagline,
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero title="Portfolio" lead={siteConfig.tagline} />

      <Section>
        <Container className="space-y-10">
          <ProjectCard project={cityLineMapFeatured} featured />

          <div>
            <h2 className="mb-6 text-2xl font-bold">More shipped work</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolioProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact/">Get a quote</Button>
            <Button
              href={`mailto:${siteConfig.emails.hello}`}
              variant="secondary"
            >
              {siteConfig.emails.hello}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
