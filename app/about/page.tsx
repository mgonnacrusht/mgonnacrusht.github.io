import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "About",
  description:
    "MgonnacrushT Limited is a UK-registered software company delivering mobile apps, APIs, and web work for startups.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MgonnacrushT Limited"
        lead="MgonnacrushT is a UK-registered software company delivering mobile apps, APIs, and web work for startups when the fit is right."
      >
        <Button href={`mailto:${siteConfig.emails.hello}`}>Get in touch</Button>
        <Button href="/savet/" variant="secondary">
          Explore SaveT
        </Button>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold">The company</h2>
            <p className="mt-4 leading-relaxed text-muted">
              MgonnacrushT Limited is registered in England and Wales (Company
              No. {siteConfig.companyNumber}). The company builds in-house
              products, including SaveT, and takes on client work for founders
              who need working software, not slide decks.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Technical scope includes Flutter apps, Spring Boot APIs, cloud
              deployment (AWS, GCP, or VPS), PostgreSQL, CI/CD, and Google Play
              publishing. Remote worldwide.
            </p>
            <p className="mt-4">
              <a
                href={siteConfig.linkedIn.company}
                className="text-sm font-semibold text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MgonnacrushT Ltd on LinkedIn
              </a>
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid items-center gap-10 lg:grid-cols-[240px_1fr]">
          <FadeIn>
            <Image
              src="/images/team/alihan-ersoy-pp.webp"
              alt="Alihan Ersoy, Director of MgonnacrushT"
              width={240}
              height={240}
              className="mx-auto rounded-2xl border border-border object-cover shadow-sm"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Alihan Ersoy, Director</h2>
            <p className="mt-4 leading-relaxed text-muted">
              I lead MgonnacrushT as Director. Most of my time goes into SaveT
              and shipping client projects end to end, from architecture to store
              release.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I prefer small scopes, clear communication, and software you can
              actually use and hand over.
            </p>
            <p className="mt-4">
              <a
                href={siteConfig.linkedIn.director}
                className="text-sm font-semibold text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alihan Ersoy on LinkedIn
              </a>
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="mb-8 text-2xl font-bold">What MgonnacrushT builds</h2>
          <ServiceCardGrid />
          <p className="mt-8 text-sm text-muted">
            Technical scope includes Flutter apps, Spring Boot APIs, cloud
            infrastructure (AWS/GCP/VPS), PostgreSQL, CI/CD, deployment, and
            Google Play publishing. Availability: Remote. Pricing: Contact for
            pricing.
          </p>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold">Product philosophy</h2>
          <p className="mt-4 text-muted">
            MgonnacrushT builds software worth maintaining: clear UX, stable
            architecture, and room to improve after launch.
          </p>
          <ul className="mt-5 space-y-2 text-muted">
            <li>Fix a real problem before adding features.</li>
            <li>Ship code you can hand over to someone else.</li>
            <li>Listen to users and adjust.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">Privacy and trust</h2>
          <ul className="mt-5 space-y-2 text-muted">
            <li>Your data stays yours.</li>
            <li>Security and reliability belong in v1, not a later patch.</li>
            <li>Policies should be plain English, not legalese wallpaper.</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
