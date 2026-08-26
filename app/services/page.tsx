import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { deliveryScope, technicalScope } from "@/lib/content/services";
import {
  engagementNotes,
  pricingBands,
} from "@/lib/content/pricing";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "Mobile App Development Services",
  description:
    "Custom mobile app development, Android, MVP and SaaS backends for founders who already have a project. UK company, remote delivery, published pricing.",
  path: "/services/",
});

export default function ServicesPage() {
  const calLink = siteConfig.calLink;

  return (
    <>
      <PageHero
        eyebrow="For startups & product teams"
        title="App development services"
        lead="Remote app development for startups and founders: mobile apps, Java backends, Linux VPS deployment, and store release. Marketing websites and ongoing maintenance fit the same engagement when a project needs them."
      >
        {calLink ? (
          <Button href={calLink} external>
            Book a free discovery call
          </Button>
        ) : null}
        <Button
          href={`mailto:${siteConfig.emails.hello}`}
          variant={calLink ? "secondary" : "primary"}
        >
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
              {engagementNotes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
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

      <Section id="pricing" className="bg-surface">
        <Container>
          <FadeIn>
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Ranges in GBP. Final quotes are scope-based after a short discovery
              call or written brief.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pricingBands.map((band, index) => (
              <FadeIn key={band.label} delay={index * 0.05}>
                <article className="rounded-2xl border border-border bg-background p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {band.label}
                  </h3>
                  <p className="mt-2 text-lg font-bold">{band.range}</p>
                  <p className="mt-2 text-sm text-muted">{band.note}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {calLink ? (
              <Button href={calLink} external>
                Book a free discovery call
              </Button>
            ) : null}
            <Button href="/contact/" variant={calLink ? "secondary" : "primary"}>
              Get a quote
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
