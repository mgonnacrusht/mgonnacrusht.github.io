import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, Eyebrow, Section } from "@/components/layout/Section";
import { ServiceCardGrid } from "@/components/sections/ServiceCardGrid";
import { homepagePortfolio } from "@/lib/content/portfolio";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { paliaClock } from "@/lib/content/palia-clock";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/lib/config/site";
import { pricingGroups } from "@/lib/content/pricing";

export const metadata = buildMetadata({
  title: "App & Website Development for UK Small Businesses",
  description:
    "Mobile apps, websites and n8n automation for UK startups and small businesses. Published prices, an instant estimate, and delivery by a UK limited company.",
  path: "/",
});

const entryNotes: Record<string, string> = {
  Apps: "Flutter and native Android, from MVP to Google Play.",
  Websites: "Fast Next.js sites for small businesses, set up for search.",
  "Automation & hosting": "n8n workflows, self-hosted on your own server.",
};

const homeFacts = [
  { label: "Platform", value: "Native Java" },
  { label: "Status", value: "Live" },
  { label: "Reach", value: `${paliaClock.downloads} downloads` },
  { label: "Rating", value: `${paliaClock.rating} stars` },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": ["Organization", "ProfessionalService"],
          name: siteConfig.name,
          legalName: "MGONNACRUSHT LIMITED",
          url: siteConfig.domain,
          email: siteConfig.emails.hello,
          foundingDate: "2025",
          serviceType: [
            "Mobile app development",
            "Website development",
            "Workflow automation",
            "Server setup",
          ],
          areaServed: "GB",
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
            <Eyebrow>UK company · Published prices</Eyebrow>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Apps, websites and automation for UK startups and small
              businesses
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              We build the software your business runs on: mobile apps, fast
              websites, the servers behind them, and n8n workflows that save
              hours each week. Fixed scope, prices in GBP, no surprise
              invoices.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact/">Get a quote</Button>
              <Button href="/services/#estimate" variant="secondary">
                Estimate your project
              </Button>
            </div>
          </FadeIn>
          <ul className="mt-12 grid gap-4 text-left sm:grid-cols-3">
            {pricingGroups.map((group) => (
              <li key={group.title}>
                <Link
                  href={group.href}
                  className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
                >
                  <span className="text-lg font-bold group-hover:text-accent">
                    {group.title}{" "}
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-muted">
                    {entryNotes[group.title]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-10 text-center">
            <Eyebrow>Services</Eyebrow>
            <h2 className="text-3xl font-bold">What we build</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              One accountable team for the app or website, the system behind
              it, the server it runs on and the support after launch.
            </p>
          </div>
          <ServiceCardGrid />
          <div className="mt-8 text-center">
            <Button href="/services/">See full services</Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <FadeIn>
              <Eyebrow>Case study</Eyebrow>
              <h2 className="text-3xl font-bold">Palia Clock</h2>
              <p className="mt-2 text-xl font-semibold text-accent">
                Live on Google Play
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                A native Java Android companion app for the Palia player
                community, designed, built and published on Google Play as a
                solo project, including the store listing, releases and updates.
              </p>
              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {homeFacts.map((item) => (
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
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/palia-clock/">Read the case study</Button>
                <Button href={paliaClock.playUrl} variant="secondary" external>
                  View on Google Play
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="hidden lg:block">
              <Image
                src="/images/portfolio/palia_clock_icon.webp"
                alt="Palia Clock app icon"
                width={192}
                height={192}
                className="mx-auto rounded-[2rem] shadow-md"
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
          <div className="grid gap-6 md:grid-cols-2">
            {homepagePortfolio.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
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
              MgonnacrushT Limited builds its own products, SaveT and City Line
              Map, and the same team builds apps, websites and automations for
              clients.
            </p>
          </div>
          <Button href="/about/" variant="secondary">
            About the company
          </Button>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-3xl border border-border bg-surface px-8 py-12 text-center shadow-sm sm:px-12">
            <h2 className="text-3xl font-bold">
              Ready to talk about your product?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              Tell us about your app, website or the work you want to automate.
              We reply by email within two working days.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact/">Get a quote</Button>
              <Button href="/services/#pricing" variant="secondary">
                See pricing
              </Button>
              <Button
                href={`mailto:${siteConfig.emails.hello}`}
                variant="secondary"
              >
                {siteConfig.emails.hello}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
