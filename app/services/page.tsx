import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { deliveryScope, technicalScope } from "@/lib/content/services";
import {
  engagementNotes,
  pricingBands,
} from "@/lib/content/pricing";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PriceQuiz } from "@/components/quiz/PriceQuiz";

export const metadata = buildMetadata({
  title: "UK App Development Services and Cost Estimate",
  description:
    "Mobile apps, backends, automation, hosting and websites for startups. Published pricing, an instant project estimate, and remote delivery from a UK company.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="UK company, remote delivery"
        title="App development for startups and small businesses"
        lead="Mobile apps, the systems behind them, hosting and store release, delivered remotely. Websites and ongoing maintenance fit the same engagement when a project needs them."
      >
        <Button href="/contact/">Get a quote</Button>
      </PageHero>

      <Section id="pricing" className="bg-surface pt-12 sm:pt-14">
        <Container>
          <FadeIn>
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Ranges in GBP. Final quotes are scope-based after a short discovery
              call or written brief.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pricingBands.map((band, index) => (
              <FadeIn key={band.label} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-background p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {band.label}
                  </h3>
                  <p className="mt-2 text-lg font-bold">{band.range}</p>
                  <p className="mt-2 text-sm text-muted">{band.note}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <p className="mt-10 text-center text-muted">
            Not sure what your project will cost? Use the estimator below, or
            read our{" "}
            <Link
              href="/blog/how-much-does-a-mobile-app-cost-uk/"
              className="text-accent underline"
            >
              guide to app costs
            </Link>
            .
          </p>
          <div id="estimate" className="mt-6 scroll-mt-24">
            <FadeIn>
              <PriceQuiz />
            </FadeIn>
          </div>
        </Container>
      </Section>

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
              {engagementNotes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              In-house products:{" "}
              <a href="/savet/" className="text-accent underline">
                SaveT
              </a>{" "}
              (closed beta) and{" "}
              <a href="/citylinemap/" className="text-accent underline">
                City Line Map
              </a>{" "}
              (live).
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-12 sm:py-14">
        <Container>
          <h2 className="text-lg font-bold">Technical scope</h2>
          <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {technicalScope.map((group) => (
              <div key={group.label}>
                <dt className="text-sm font-semibold uppercase tracking-widest text-accent">
                  {group.label}
                </dt>
                <dd className="mt-1 text-sm text-muted">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
