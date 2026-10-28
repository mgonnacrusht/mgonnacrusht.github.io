import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import { almanogramContent, almanogramUrls } from "@/lib/content/almanogram";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { SaveTSteps } from "@/components/savet/SaveTSections";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "Almanogram",
  description: almanogramContent.metaDescription,
  path: "/almanogram/",
});

export default function AlmanogramPage() {
  const { logo, appGalleryBadge } = almanogramContent;

  return (
    <>
      <Section className="border-b border-border bg-surface pb-16 pt-12 sm:pt-16">
        <Container className="max-w-3xl text-center">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={160}
            height={160}
            className="mx-auto rounded-[2rem] shadow-sm"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            {almanogramContent.name}
          </h1>
          <p className="mt-3 text-2xl font-bold text-accent sm:text-3xl">
            {almanogramContent.tagline}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium text-muted">
            {almanogramContent.statusLine}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {almanogramContent.lead}
          </p>
          <a
            href={almanogramUrls.appGallery}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block transition-opacity hover:opacity-90"
          >
            <Image
              src={appGalleryBadge.src}
              alt={appGalleryBadge.alt}
              width={280}
              height={108}
            />
          </a>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-2 text-center text-2xl font-bold">
            How Almanogram works
          </h2>
          {/* Same zigzag layout as the SaveT page. */}
          <SaveTSteps
            steps={[...almanogramContent.steps]}
            intro={almanogramContent.stepsIntro}
            overlap={false}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <FadeIn className="lg:col-span-2">
              <Eyebrow>What is inside</Eyebrow>
              <ul className="grid gap-3 sm:grid-cols-2">
                {almanogramContent.features.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm text-muted"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.05}>
              <Eyebrow>At a glance</Eyebrow>
              <dl className="grid grid-cols-2 gap-4">
                {almanogramContent.facts.map((item) => (
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
        </Container>
      </Section>

      <Section>
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-bold">Your data</h2>
          <p className="mt-4 leading-relaxed text-muted">
            Your puzzle progress and settings are stored on your phone. To
            improve the puzzles, the game sends usage statistics, linked to a
            random app ID, to our own analytics server in Germany. You can turn
            them off at any time in Settings. The privacy policy explains what
            is sent, how it is used and your rights.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={almanogramUrls.privacy}>Privacy Policy</Button>
            <Button href={almanogramUrls.terms} variant="secondary">
              Terms of Use
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="text-center text-sm text-muted">
          <p>
            For questions about Almanogram, email{" "}
            <a
              href={`mailto:${siteConfig.emails.support}`}
              className="text-accent underline"
            >
              {siteConfig.emails.support}
            </a>
            .
          </p>
          <p className="mt-4">
            <Link href="/products/" className="text-accent underline">
              Portfolio
            </Link>
            {" · "}
            <Link href="/about/" className="text-accent underline">
              About
            </Link>
            {" · "}
            <Link href="/contact/" className="text-accent underline">
              Get in touch
            </Link>
          </p>
        </Container>
      </Section>
    </>
  );
}
