import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { technicalScope } from "@/lib/content/services";
import {
  engagementNotes,
  hourlyRate,
  pricingGroups,
} from "@/lib/content/pricing";
import { landingPages } from "@/lib/content/landing-pages";
import {
  cityLineMapFeatured,
  portfolioProjects,
} from "@/lib/content/portfolio";
import Link from "next/link";
import { Fragment } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { PriceQuiz } from "@/components/quiz/PriceQuiz";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "App, Website and Automation Services with UK Prices",
  description:
    "Mobile apps, websites, n8n automation, server setup and app maintenance for UK startups and small businesses. Published prices and an instant project estimate.",
  path: "/services/",
});

const jumpLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Estimate", href: "#estimate" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#work" },
];

// Live work first, closed beta last.
const recentWork = [
  ...portfolioProjects.filter((project) => project.slug === "palia-clock"),
  cityLineMapFeatured,
  ...portfolioProjects.filter((project) => project.slug === "savet"),
];

export default function ServicesPage() {
  const callHref = siteConfig.calLink || "/contact/";

  return (
    <>
      <PageHero
        eyebrow="UK company, remote delivery"
        title="Apps, websites and automation, with published prices"
        lead="Mobile apps, websites, n8n workflows and the servers behind them, for UK startups and small businesses. Every price below is a real range, and the scope is agreed in writing before work starts."
      >
        <Button href="/contact/" className="px-8 py-3.5 text-base">
          Get a quote
        </Button>
        <nav
          aria-label="On this page"
          className="flex w-full flex-wrap items-center justify-center gap-x-3 gap-y-2 pt-2 text-sm"
        >
          {jumpLinks.map((link, index) => (
            <Fragment key={link.href}>
              {index > 0 ? (
                <span aria-hidden="true" className="text-muted/60">
                  ·
                </span>
              ) : null}
              <a
                href={link.href}
                className="text-muted underline underline-offset-4 hover:text-foreground"
              >
                {link.label}
              </a>
            </Fragment>
          ))}
        </nav>
      </PageHero>

      <Section id="pricing" className="scroll-mt-16 bg-surface pt-12 sm:pt-14">
        <Container>
          <FadeIn>
            <h2 className="text-2xl font-bold">Pricing</h2>
            <p className="mt-3 max-w-2xl text-muted">
              Ranges in GBP. Final quotes are scope-based after a short discovery
              call or written brief.
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pricingGroups.map((group, index) => (
              <FadeIn key={group.title} delay={index * 0.05} className="h-full">
                <Link
                  href={group.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-lg font-bold">{group.range}</p>
                  <p className="mt-2 flex-1 text-sm text-muted">{group.note}</p>
                  <span className="mt-4 text-sm font-semibold text-accent">
                    Details{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted">
            Hourly work is {hourlyRate}. Every project starts with a free 15 to
            30 minute discovery call, with no obligation.{" "}
            <a
              href={callHref}
              className="font-semibold text-accent underline"
              {...(siteConfig.calLink
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Book a discovery call
            </a>
          </p>
          <p className="mt-10 text-center text-muted">
            Not sure what your project will cost? Use the estimator below, or
            read our guides to{" "}
            <Link
              href="/blog/how-much-does-a-mobile-app-cost-uk/"
              className="text-accent underline"
            >
              app costs
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/how-much-does-a-small-business-website-cost-uk/"
              className="text-accent underline"
            >
              website costs
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

      <Section id="services" className="scroll-mt-16">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Services provided</h2>
          <ServiceCardGrid />
          <p className="mt-8 text-sm text-muted">
            In more detail:{" "}
            {landingPages.map((page, index) => (
              <span key={page.slug}>
                {index > 0 ? " · " : null}
                <Link
                  href={`/services/${page.slug}/`}
                  className="text-accent underline underline-offset-4"
                >
                  {page.eyebrow}
                </Link>
              </span>
            ))}
          </p>
        </Container>
      </Section>

      <Section id="work" className="scroll-mt-16 bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">Recent work</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentWork.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold">Engagement model</h2>
            <ul className="mt-5 space-y-2 text-muted">
              {engagementNotes.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Technical scope</h2>
            <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
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
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface py-14 sm:py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Ready to scope your project?</h2>
          <p className="mt-3 text-muted">
            Tell us what you want to build and we will reply within two working
            days with next steps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/contact/">Get a quote</Button>
            <Button
              href={callHref}
              variant="secondary"
              external={Boolean(siteConfig.calLink)}
            >
              Book a free discovery call
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
