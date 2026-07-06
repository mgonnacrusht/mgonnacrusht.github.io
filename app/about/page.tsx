import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "About",
  description:
    "MgonnacrushT builds SaveT and delivers mobile and SaaS product engineering services.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About MgonnacrushT Limited"
        lead="UK software company. We build SaveT and ship mobile and SaaS work for other teams when the fit is right."
      >
        <Button href={`mailto:${siteConfig.emails.hello}`}>Talk to us</Button>
        <Button href="/savet/" variant="secondary">
          Explore SaveT
        </Button>
      </PageHero>

      <Section>
        <Container className="grid items-center gap-10 lg:grid-cols-[240px_1fr]">
          <FadeIn>
            <Image
              src="/images/team/alihan-ersoy-pp.webp"
              alt="Alihan Ersoy, founder of MgonnacrushT"
              width={240}
              height={240}
              className="mx-auto rounded-2xl border border-border object-cover shadow-sm"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Solo founder story</h2>
            <p className="mt-4 leading-relaxed text-muted">
              I&apos;m Alihan. I run MgonnacrushT Limited, a UK software company.
              Most of my time goes into SaveT; the rest is client work for startups
              and founders who need mobile apps, SaaS backends, or cloud deployment
              done properly.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I prefer small scopes, clear communication, and shipping something
              you can actually use.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <h2 className="mb-8 text-2xl font-bold">What we build</h2>
          <ServiceCardGrid />
          <p className="mt-8 text-sm text-muted">
            Our technical scope includes Flutter apps, Spring Boot APIs, cloud
            infrastructure (AWS/GCP/VPS), PostgreSQL, CI/CD, deployment, and
            Google Play publishing. Availability: Remote. Pricing: Contact for
            pricing.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold">Product philosophy</h2>
          <p className="mt-4 text-muted">
            We build things we would want to maintain ourselves: clear UX, stable
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
