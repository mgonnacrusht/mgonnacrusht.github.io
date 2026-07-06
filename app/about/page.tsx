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
        lead="A UK-based product company focused on practical software with long-term value. Our primary product is SaveT, and we also ship mobile and SaaS products for other teams."
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
              src="/images/team/alihan-ersoy-pp.jpg"
              alt="Alihan Ersoy, founder of MgonnacrushT"
              width={240}
              height={240}
              className="mx-auto rounded-2xl border border-border object-cover shadow-sm"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold">Solo founder story</h2>
            <p className="mt-4 leading-relaxed text-muted">
              I am Alihan, the founder of MgonnacrushT Limited — a UK-registered
              software company built around shipping practical products and helping
              small teams move from idea to launch without unnecessary complexity.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              SaveT is our flagship product. Alongside it, I take on focused
              engineering engagements for startups and founders who need mobile
              apps, SaaS backends, and cloud deployment done properly.
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
            We prioritize clear UX, stable architecture, and sustainable product
            decisions over short-term hype.
          </p>
          <ul className="mt-5 space-y-2 text-muted">
            <li>Solving real user problems with focused scope.</li>
            <li>Shipping maintainable systems with sensible defaults.</li>
            <li>Improving products through iteration and feedback.</li>
          </ul>

          <h2 className="mt-10 text-2xl font-bold">Privacy and trust</h2>
          <ul className="mt-5 space-y-2 text-muted">
            <li>User data should remain user-first.</li>
            <li>Security and reliability should be built in, not patched in later.</li>
            <li>Policies and disclosures should be clear and readable.</li>
          </ul>
        </Container>
      </Section>
    </>
  );
}
