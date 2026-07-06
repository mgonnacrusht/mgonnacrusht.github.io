import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import { savetContent } from "@/lib/content/savet";
import {
  SaveTSteps,
  UseCasesAccordion,
} from "@/components/savet/SaveTSections";
import { YouTubeFacade } from "@/components/savet/YouTubeFacade";
import { PlayStoreCta } from "@/components/savet/PlayStoreCta";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "SaveT",
  description:
    "SaveT helps you save and sort links, media, places, and ideas in one place.",
  path: "/savet/",
  ogImage: "/og/savet.svg",
});

export default function SaveTPage() {
  const { caseStudy } = savetContent;

  return (
    <>
      <Section className="border-b border-border bg-surface pb-16 pt-12 sm:pt-16">
        <Container className="max-w-3xl text-center">
          <Image
            src="/images/savet/Savet_logo_dark_big_1500_1500.png"
            alt="SaveT logo"
            width={200}
            height={200}
            className="mx-auto"
            priority
          />
          <h1 className="sr-only">SaveT</h1>
          <p className="mt-6 text-2xl font-bold text-accent sm:text-3xl">
            {savetContent.tagline}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {savetContent.lead}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/services/" variant="secondary">
              Company services
            </Button>
            <Button href="/contact/">Contact</Button>
          </div>
        </Container>
      </Section>

      <Section>
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
                    className="rounded-xl border border-border bg-surface p-4"
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
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-6 text-2xl font-bold">Core capabilities</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {savetContent.capabilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-2 text-center text-2xl font-bold">How SaveT works</h2>
          <SaveTSteps steps={savetContent.steps} intro={savetContent.stepsIntro} />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-center text-2xl font-bold">
            Use cases &amp; planned features
          </h2>
          <UseCasesAccordion items={savetContent.useCases} />
        </Container>
      </Section>

      <Section>
        <Container className="max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold">How to use SaveT</h2>
          <YouTubeFacade
            videoId={savetContent.videoId}
            caption={savetContent.videoCaption}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-2xl">
          <h2 className="text-2xl font-bold">Pricing roadmap</h2>
          <ul className="mt-5 space-y-2 text-muted">
            {savetContent.pricing.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            For SaveT product questions, email{" "}
            <a
              href={`mailto:${siteConfig.emails.hello}`}
              className="text-accent underline"
            >
              {siteConfig.emails.hello}
            </a>
            .
          </p>
          <PlayStoreCta />
        </Container>
      </Section>

      <Section>
        <Container className="text-center text-sm text-muted">
          <p>
            <Link href="/services/" className="text-accent underline">
              Services
            </Link>
            {" · "}
            <Link href="/about/" className="text-accent underline">
              About
            </Link>
            {" · "}
            <Link href="/contact/" className="text-accent underline">
              Contact
            </Link>
            {" · "}
            <Link href="/savet/legal/privacy/" className="text-accent underline">
              SaveT Privacy
            </Link>
            {" · "}
            <Link href="/savet/legal/terms/" className="text-accent underline">
              SaveT Terms
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
