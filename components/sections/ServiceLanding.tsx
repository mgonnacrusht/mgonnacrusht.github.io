import Link from "next/link";
import { Check } from "lucide-react";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils";
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

function ProofLinks({ links }: { links: LandingLink[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
      {links.map((link) => (
        <li key={link.href}>
          <LinkOrAnchor
            link={link}
            className="text-accent underline underline-offset-4"
          />
        </li>
      ))}
    </ul>
  );
}

const priceColumns: Record<number, string> = {
  1: "",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function ServiceLanding({ page }: { page: LandingPage }) {
  const url = `${siteConfig.domain}/services/${page.slug}/`;
  // With a single "included" list, the right column holds the aside, or the
  // proof when there is no aside, so the row is never half empty.
  const single = page.included.length === 1;
  const side = single ? (page.aside ?? page.proof) : null;
  const proofInSide = side === page.proof;
  const asideBelow = !single && page.aside;
  // Alternate section backgrounds over the sections that actually render.
  const order = [
    "get",
    "how",
    ...(asideBelow ? ["aside"] : []),
    "pricing",
    ...(proofInSide ? [] : ["proof"]),
    "faq",
    "cta",
  ];
  const tone = (key: string) =>
    order.indexOf(key) % 2 === 1 ? "bg-surface" : undefined;

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

      <Section className={tone("get")}>
        <Container>
          <h2 className="mb-8 text-2xl font-bold">What you get</h2>
          <div className="grid gap-6 md:grid-cols-2">
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
            {side ? (
              <FadeIn delay={0.05}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-bold">{side.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{side.text}</p>
                  {proofInSide ? <ProofLinks links={page.proof.links} /> : null}
                </div>
              </FadeIn>
            ) : null}
          </div>
        </Container>
      </Section>

      <Section className={tone("how")}>
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

      {asideBelow ? (
        <Section className={cn("py-14 sm:py-16", tone("aside"))}>
          <Container>
            <FadeIn className="max-w-3xl">
              <h2 className="text-2xl font-bold">{page.aside!.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">
                {page.aside!.text}
              </p>
            </FadeIn>
          </Container>
        </Section>
      ) : null}

      <Section className={tone("pricing")}>
        <Container>
          <h2 className="text-2xl font-bold">Pricing</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Typical ranges in GBP. Final quotes are scope-based and agreed in
            writing before work starts.
          </p>
          <div
            className={`mt-8 grid gap-4 ${
              priceColumns[page.prices.length] ?? priceColumns[4]
            }`}
          >
            {page.prices.map((row) => (
              <FadeIn key={row.label} className="h-full">
                <article
                  className={cn(
                    "h-full rounded-2xl border border-border p-5",
                    tone("pricing") ? "bg-background" : "bg-surface",
                  )}
                >
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

      {proofInSide ? null : (
        <Section className={tone("proof")}>
          <Container>
            <FadeIn className="max-w-3xl">
              <h2 className="text-2xl font-bold">{page.proof.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{page.proof.text}</p>
              <ProofLinks links={page.proof.links} />
            </FadeIn>
          </Container>
        </Section>
      )}

      <Section className={tone("faq")}>
        <Container>
          <h2 className="text-2xl font-bold">Questions</h2>
          <dl className="mt-8 max-w-3xl space-y-6">
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

      <Section className={cn("py-14 sm:py-16", tone("cta"))}>
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
