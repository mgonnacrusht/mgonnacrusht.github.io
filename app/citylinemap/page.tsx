import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import {
  cityLineMapContent,
  cityLineMapLinkAttrs,
  cityLineMapUrls,
} from "@/lib/content/citylinemap";
import { cityLineMapFeatured } from "@/lib/content/portfolio";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "City Line Map",
  description: cityLineMapContent.metaDescription,
  path: "/citylinemap/",
  ogImage: "/og/citylinemap.webp",
});

export default function CityLineMapPage() {
  const { caseStudy, screenshot } = cityLineMapContent;

  return (
    <>
      <Section className="border-b border-border bg-surface pb-16 pt-12 sm:pt-16">
        <Container className="max-w-3xl text-center">
          <Eyebrow>Case study</Eyebrow>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {cityLineMapContent.name}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted">
            {cityLineMapContent.statusLine}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {cityLineMapContent.lead}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={cityLineMapUrls.map} external preserveReferrer>
              Open City Line Map
            </Button>
            <Button href="/contact/" variant="secondary">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeIn>
            <figure className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={screenshot.width}
                height={screenshot.height}
                className="h-auto w-full"
                priority
              />
              <figcaption className="border-t border-border px-4 py-3 text-center text-sm text-muted">
                London public transport on the real street network.
              </figcaption>
            </figure>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <FadeIn>
              <Eyebrow>Problem</Eyebrow>
              <p className="leading-relaxed text-muted">{caseStudy.problem}</p>
            </FadeIn>
            <FadeIn delay={0.05}>
              <Eyebrow>Solution</Eyebrow>
              <p className="leading-relaxed text-muted">{caseStudy.solution}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Eyebrow>Result</Eyebrow>
              <dl className="grid grid-cols-2 gap-4">
                {caseStudy.results.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-lg font-bold">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>
          <p className="mt-10 max-w-3xl text-muted">{cityLineMapContent.proof}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cityLineMapFeatured.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted">
            {cityLineMapContent.disclaimer}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={cityLineMapUrls.map} external preserveReferrer>
              Open City Line Map
            </Button>
            <Button href="/contact/" variant="secondary">
              Get in touch
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="text-center text-sm text-muted">
          <p>
            <Link href="/services/" className="text-accent underline">
              Services
            </Link>
            {" · "}
            <Link href="/products/" className="text-accent underline">
              Portfolio
            </Link>
            {" · "}
            <Link href="/contact/" className="text-accent underline">
              Get in touch
            </Link>
            {" · "}
            <a
              href={cityLineMapUrls.privacy}
              className="text-accent underline"
              {...cityLineMapLinkAttrs}
            >
              City Line Map Privacy
            </a>
            {" · "}
            <a
              href={cityLineMapUrls.terms}
              className="text-accent underline"
              {...cityLineMapLinkAttrs}
            >
              City Line Map Terms
            </a>
          </p>
          <p className="mt-4">
            For project enquiries, email{" "}
            <a
              href={`mailto:${siteConfig.emails.hello}`}
              className="text-accent underline"
            >
              {siteConfig.emails.hello}
            </a>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}
