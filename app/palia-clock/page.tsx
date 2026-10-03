import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { paliaClock } from "@/lib/content/palia-clock";

const { playUrl } = paliaClock;

export const metadata = buildMetadata({
  title: "Palia Clock Case Study",
  description: `Palia Clock is a native Java Android companion app, designed, built and published solo on Google Play. It has ${paliaClock.downloads} downloads and is rated ${paliaClock.rating}.`,
  path: "/palia-clock/",
});

const facts = [
  { label: "Platform", value: "Android, native Java" },
  { label: "Status", value: "Live on Google Play" },
  { label: "Reach", value: `${paliaClock.downloads} downloads` },
  { label: "Rating", value: `${paliaClock.rating} on Google Play` },
];

const work = [
  "Designed and built the app in native Java, with Material design and the Navigation Component.",
  "Added in-app review prompts with the Play In-App Review API.",
  "Created and maintained the Google Play store listing.",
  "Handled releases and updates through Google Play Console.",
];

const stack = [
  "Java 11",
  "Android SDK 36",
  "View Binding",
  "Material Design",
  "Navigation Component",
  "Play In-App Review",
];

export default function PaliaClockPage() {
  return (
    <>
      <Section className="border-b border-border bg-surface pb-16 pt-12 sm:pb-20 sm:pt-16">
        <Container className="max-w-3xl text-center">
          <Image
            src="/images/portfolio/palia_clock_icon.webp"
            alt="Palia Clock app icon"
            width={120}
            height={120}
            className="mx-auto h-24 w-24 rounded-2xl"
            priority
          />
          <div className="mt-6">
            <Eyebrow>Case study</Eyebrow>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Palia Clock
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            A native Java Android companion app for the Palia player
            community, designed, built and published on Google Play as a solo
            project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={playUrl} external>
              Get it on Google Play
            </Button>
            <Button href="/services/android-app-development/" variant="secondary">
              Android app development
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact) => (
              <FadeIn key={fact.label} className="h-full">
                <div className="h-full rounded-2xl border border-border bg-surface p-5">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-lg font-bold">{fact.value}</dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold">What we did</h2>
            <ul className="mt-5 space-y-3 text-muted">
              {work.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Built with</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-background px-3 py-1 text-sm font-medium text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </Container>
      </Section>

      <Section className="py-14 sm:py-16">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold">Need an Android app?</h2>
          <p className="mt-3 text-muted">
            We build and publish Android apps for startups, from first screen
            to Google Play release.
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
          <p className="mt-8 text-sm text-muted">
            See more work in the{" "}
            <Link href="/products/" className="text-accent underline">
              portfolio
            </Link>
            .
          </p>
          <p className="mt-6 text-xs text-muted">
            Palia Clock is an unofficial fan-made app. It is not affiliated
            with or endorsed by the developers of Palia.
          </p>
        </Container>
      </Section>
    </>
  );
}
