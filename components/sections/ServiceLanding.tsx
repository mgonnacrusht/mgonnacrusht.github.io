import Link from "next/link";
import { Check } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config/site";
import type { LandingLink, LandingPage } from "@/lib/content/landing-pages";

function LinkOrAnchor({
  link,
  className,
}: {
  link: LandingLink;
  className?: string;
}) {
  return link.external ? (
    <a
      href={link.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.label}
    </a>
  ) : (
    <Link href={link.href} className={className}>
      {link.label}
    </Link>
  );
}

export function ServiceLanding({ page }: { page: LandingPage }) {
  const url = `${siteConfig.domain}/services/${page.slug}/`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.h1,
          description: page.metaDescription,
          url,
          areaServed: { "@type": "Country", name: "United Kingdom" },
          provider: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.domain,
          },
        }}
      />

      <PageHero eyebrow={page.eyebrow} title={page.h1} lead={page.lead}>
        <Button href="/contact/">Get a quote</Button>
        <Button href="/services/#estimate" variant="secondary">
          Estimate your project
        </Button>
      </PageHero>

      <Section>
        <Container>
          <h2 className="mb-8 text-2xl font-bold">What you get</h2>
          <div
            className={`grid gap-6 ${
              page.included.length > 1 ? "md:grid-cols-2" : "max-w-2xl"
            }`}
          >
            {page.included.map((group) => (
              <FadeIn key={group.title ?? "included"}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  {group.title ? (
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                      {group.title}
                    </h3>
                  ) : null}
                  <ul className="space-y-2 text-muted">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-accent"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">How it works</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {page.steps.map((step, index) => (
              <li key={step.title}>
                <FadeIn delay={index * 0.05} className="h-full">
                  <div className="h-full rounded-2xl border border-border bg-background p-6">
                    <p className="text-sm font-semibold text-accent">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.text}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {page.aside ? (
        <Section className="py-14 sm:py-16">
          <Container className="max-w-3xl">
            <FadeIn>
              <h2 className="text-2xl font-bold">{page.aside.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {page.aside.text}
              </p>
            </FadeIn>
          </Container>
        </Section>
      ) : null}

      <Section className="bg-surface">
        <Container>
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Typical ranges in GBP. Final quotes are scope-based and agreed in
            writing before work starts.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.prices.map((row) => (
              <FadeIn key={row.label} className="h-full">
                <article className="h-full rounded-2xl border border-border bg-background p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {row.label}
                  </h3>
                  <p className="mt-2 text-lg font-bold">{row.range}</p>
                  <p className="mt-2 text-sm text-muted">{row.note}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          {page.priceNote ? (
            <p className="mt-6 text-sm text-muted">
              {page.priceNote}{" "}
              <Link href="/services/#estimate" className="text-accent underline">
                Estimate your project
              </Link>
              .
            </p>
          ) : null}
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold">{page.proof.title}</h2>
            <p className="mt-3 leading-relaxed text-muted">{page.proof.text}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              {page.proof.links.map((link) => (
                <li key={link.href}>
                  <LinkOrAnchor
                    link={link}
                    className="text-accent underline underline-offset-4"
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold">Questions</h2>
          <dl className="mt-8 space-y-6">
            {page.faq.map((item) => (
              <div key={item.question}>
                <dt className="font-semibold">{item.question}</dt>
                <dd className="mt-2 leading-relaxed text-muted">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="py-14 sm:py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Have a project in mind?</h2>
          <p className="mt-3 text-muted">
            Tell us what you want to build and we will reply within two working
            days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button href="/contact/" className="px-8 py-3.5 text-base">
              Get a quote
            </Button>
            <Button
              href="/services/#estimate"
              variant="secondary"
              className="px-8 py-3.5 text-base"
            >
              Estimate your project
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {page.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted underline underline-offset-4 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
