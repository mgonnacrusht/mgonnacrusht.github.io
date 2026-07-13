import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { deliveryScope, technicalScope } from "@/lib/content/services";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Remote product engineering by MgonnacrushT: mobile apps, Java Spring Boot APIs, Linux VPS deployment, and Google Play release.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="For startups & product teams"
        title="Product engineering services"
        lead="Remote product engineering for startups and founders: mobile apps, Java backends, Linux VPS deployment, and store release."
      >
        <Button href={`mailto:${siteConfig.emails.hello}`}>
          Email {siteConfig.emails.hello}
        </Button>
        <Button href="/about/" variant="secondary">
          About the company
        </Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Services provided</h2>
          <ServiceCardGrid />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Technical scope</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalScope.map((group) => (
              <FadeIn key={group.label}>
                <article className="rounded-2xl border border-border bg-background p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {group.label}
                  </h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold">Delivery scope</h2>
            <ul className="mt-5 space-y-2 text-muted">
              {deliveryScope.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Engagement model</h2>
            <ul className="mt-5 space-y-2 text-muted">
              <li>Remote collaboration</li>
              <li>Flexible project-based or milestone-based delivery</li>
              <li>Pricing: Contact for pricing</li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              In-house product:{" "}
              <a href="/savet/" className="text-accent underline">
                SaveT
              </a>{" "}
              (closed beta).
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
