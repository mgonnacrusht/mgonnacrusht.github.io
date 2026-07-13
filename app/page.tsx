import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { homepagePortfolio } from "@/lib/content/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { savetContent } from "@/lib/content/savet";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config/site";

export const metadata = buildMetadata({
  title: "Product engineering for startups",
  description:
    "MgonnacrushT delivers mobile apps, SaaS backends, and cloud infrastructure for startups. SaveT is the flagship in-house product.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteConfig.name,
          legalName: "MgonnacrushT Limited",
          url: siteConfig.domain,
          email: siteConfig.emails.hello,
          foundingDate: "2025",
          founder: {
            "@type": "Person",
            name: "Alihan Ersoy",
            jobTitle: "Director",
            url: siteConfig.linkedIn.director,
          },
          sameAs: [
            siteConfig.linkedIn.company,
            "https://github.com/alihan98ersoy",
          ],
        }}
      />

      <Section className="border-b border-border bg-surface pb-20 pt-16 sm:pt-20">
        <Container className="max-w-4xl text-center">
          <FadeIn>
            <Eyebrow>Product engineering for startups</Eyebrow>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Remote software delivery from idea to launch
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              MgonnacrushT helps startups and founders ship mobile apps, SaaS
              backends, and cloud infrastructure. SaveT is the flagship
              in-house product and a detailed case study of how the company
              builds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/services/">See services</Button>
              <Button href="/products/" variant="secondary">
                View work
              </Button>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 text-center">
            <Eyebrow>For product teams</Eyebrow>
            <h2 className="text-3xl font-bold">Product engineering services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              End-to-end delivery across Flutter apps, Spring Boot APIs, cloud
              deployment, and Google Play publishing.
            </p>
          </div>
          <ServiceCardGrid limit={6} />
          <div className="mt-8 text-center">
            <Button href="/services/">See full services</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <FadeIn>
              <Eyebrow>Case study</Eyebrow>
              <h2 className="text-3xl font-bold">SaveT</h2>
              <p className="mt-2 text-xl font-semibold text-accent">
                {savetContent.tagline}
              </p>
              <p className="mt-2 text-sm font-medium text-muted">
                {savetContent.statusLine}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {savetContent.caseStudy.problem}
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                {savetContent.caseStudy.solution}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {savetContent.caseStudy.results.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border bg-background p-4"
                  >
                    <p className="text-xs font-semibold uppercase text-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 font-bold">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="/savet/">Explore SaveT case study</Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Image
                src="/images/savet/savet_logodark.svg"
                alt="SaveT logo"
                width={400}
                height={400}
                className="mx-auto"
              />
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <Eyebrow>Portfolio</Eyebrow>
              <h2 className="text-3xl font-bold">Selected work</h2>
            </div>
            <Link href="/products/" className="text-sm font-semibold text-accent">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {homepagePortfolio.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container className="grid items-center gap-8 lg:grid-cols-[200px_1fr_auto]">
          <Image
            src="/images/logo/MgonnacrushT_logo.webp"
            alt={siteConfig.name}
            width={160}
            height={160}
            className="rounded-2xl border border-border object-cover"
          />
          <div>
            <Eyebrow>Company</Eyebrow>
            <h2 className="text-2xl font-bold">UK-registered software company</h2>
            <p className="mt-3 max-w-2xl text-muted">
              MgonnacrushT Limited builds SaveT and delivers product engineering
              for small teams that want shipped software.
            </p>
          </div>
          <Button href="/about/" variant="secondary">
            About the company
          </Button>
        </Container>
      </Section>

      <Section>
        <Container className="rounded-3xl border border-border bg-surface px-8 py-12 text-center shadow-sm sm:px-12">
          <h2 className="text-3xl font-bold">Ready to talk about your product?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Tell MgonnacrushT about your app, SaaS idea, or timeline. Replies
            come by email.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact/">Get in touch</Button>
            <Button
              href={`mailto:${siteConfig.emails.hello}`}
              variant="secondary"
            >
              {siteConfig.emails.hello}
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
