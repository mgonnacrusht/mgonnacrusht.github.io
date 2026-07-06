import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { deliveryScope } from "@/lib/content/services";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Remote product engineering services by MgonnacrushT for mobile apps, SaaS platforms, APIs, cloud infrastructure, and deployment.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="For startups & product teams"
        title="Product engineering services"
        lead="MgonnacrushT provides remote, end-to-end software delivery for startups, founders, and product teams — from mobile apps to SaaS backends and cloud deployment."
      >
        <Button href={`mailto:${siteConfig.emails.hello}`}>
          Email {siteConfig.emails.hello}
        </Button>
        <Button href="/about/" variant="secondary">
          About the team
        </Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Services provided</h2>
          <ServiceCardGrid />
        </Container>
      </Section>

      <Section className="bg-surface">
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
              For our flagship product, visit{" "}
              <a href="/savet/" className="text-accent underline">
                SaveT
              </a>
              .
            </p>
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
