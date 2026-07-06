import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import {
  portfolioProjects,
  savetFeatured,
} from "@/lib/content/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Products and projects by MgonnacrushT, including SaveT and selected client work.",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        lead="Software we build and use ourselves, plus selected client projects in the same vein."
      />

      <Section>
        <Container className="space-y-10">
          <ProjectCard project={savetFeatured} featured />

          <div>
            <h2 className="mb-6 text-2xl font-bold">Other projects</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolioProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button href={`mailto:${siteConfig.emails.hello}`}>
              Email {siteConfig.emails.hello}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
