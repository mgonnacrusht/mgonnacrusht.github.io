import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "About Us: A UK Software Company",
  description:
    "MgonnacrushT Limited is a UK software company led by Alihan Ersoy, building mobile apps, websites and automation for startups and small businesses.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A UK software company for apps, websites and automation"
        lead="MgonnacrushT Limited builds mobile apps, websites, n8n automations and the servers behind them for UK startups and small businesses. Solo founder, remote delivery, invoiced through the UK company."
      >
        <Button href="/contact/">Get a quote</Button>
        <Button href="/products/" variant="secondary">
          See our work
        </Button>
      </PageHero>

      <Section>
        <Container className="max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold">The company</h2>
            <p className="mt-4 leading-relaxed text-muted">
              MgonnacrushT Limited is registered in England and Wales (Company
              No.{" "}
              <a
                href={siteConfig.companiesHouseUrl}
                className="text-accent underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.companyNumber}
              </a>
              ). It is run by a solo founder, so the person scoping the work is
              the person building it. The company builds in-house products,
              including SaveT and City Line Map, and takes on client work for
              founders who need working software, not slide decks.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Technical scope includes Flutter and native Java Android apps,
              Java Spring Boot REST APIs, PostgreSQL, Linux VPS deployment with
              Docker, CI/CD, and Google Play publishing. Remote worldwide.
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
              I lead MgonnacrushT as Director. Most of my time goes into SaveT,
              City Line Map, and shipping client projects end to end, from
              architecture to store release.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Before founding MgonnacrushT, I spent three years as a Unity
              Developer Technical Support Engineer, helping developers integrate
              mobile services and take their apps and games through publishing
              on Huawei AppGallery.
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
          <h2 className="mb-8 text-2xl font-bold">What we build</h2>
          <ServiceCardGrid />
          <p className="mt-8 text-sm text-muted">
            Technical scope includes Flutter and native Java Android apps,
            Next.js websites, Java Spring Boot APIs, PostgreSQL, n8n, Linux
            servers with Docker, CI/CD, and Google Play publishing. Availability:
            Remote.{" "}
            <Link href="/services/#pricing" className="text-accent underline">
              See pricing on Services
            </Link>
            .
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
          <PrincipleList
            items={[
              "Fix a real problem before adding features.",
              "Ship code you can hand over to someone else.",
              "Listen to users and adjust.",
            ]}
          />

          <h2 className="mt-10 text-2xl font-bold">Privacy and trust</h2>
          <PrincipleList
            items={[
              "Your data stays yours.",
              "Security and reliability belong in v1, not a later patch.",
              "Policies should be plain English, not legalese wallpaper.",
            ]}
          />
        </Container>
      </Section>
    </>
  );
}

function PrincipleList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2 text-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
