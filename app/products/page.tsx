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
    "Product engineering and practical software for startups and small teams.",
  path: "/products/",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Portfolio"
        lead="Product engineering and practical software for startups and small teams."
      />

      <Section>
        <Container className="space-y-10">
          <ProjectCard project={savetFeatured} featured />

          <div>
            <h2 className="mb-6 text-2xl font-bold">More shipped work</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
