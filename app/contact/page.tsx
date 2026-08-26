import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/config/site";
import { contactBlurb } from "@/lib/content/pricing";

const calLink = siteConfig.calLink;

export const metadata = buildMetadata({
  title: "App Development Quote",
  description: calLink
    ? "Tell MgonnacrushT what you want built. UK app development company. Book a free discovery call or send a brief through the contact form."
    : "Tell MgonnacrushT what you want built. UK app development company. Send a brief through the contact form and get a scope-based quote in GBP.",
  path: "/contact/",
});

const buckets = [
  {
    eyebrow: "SaveT",
    title: "SaveT",
    description:
      "Product feedback, feature suggestions, partnership and API collaboration ideas.",
    href: "/savet/",
    label: "Explore SaveT",
  },
  {
    eyebrow: "Services",
    title: "A project",
    description:
      "Mobile apps, Java Spring Boot APIs, Linux VPS deployment, PostgreSQL, CI/CD, and Google Play publishing.",
    href: "/services/",
    label: "App development services",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get a quote for your app"
        lead={
          calLink
            ? "Tell MgonnacrushT what you want built. Prefer a call? Book below. Prefer email? Use the form."
            : "Tell MgonnacrushT what you want built. Quotes are scope-based in GBP, so a short brief is enough to start."
        }
      />

      <Section className="bg-surface">
        <Container>
          <div
            className={
              calLink
                ? "grid gap-10 lg:grid-cols-2 lg:items-start"
                : "mx-auto max-w-2xl"
            }
          >
            {calLink ? (
              <FadeIn>
                <article className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                    Book a call
                  </p>
                  <h2 className="mt-2 text-xl font-bold">
                    Free discovery call
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {contactBlurb}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    15–30 minutes. No obligation.
                  </p>
                  <div className="mt-6">
                    <Button href={calLink} external>
                      Book a free discovery call
                    </Button>
                  </div>
                  <p className="mt-4 text-sm text-muted">
                    See{" "}
                    <Link href="/services/#pricing" className="text-accent underline">
                      services pricing
                    </Link>{" "}
                    for GBP ranges.
                  </p>
                </article>
              </FadeIn>
            ) : null}

            <FadeIn delay={calLink ? 0.05 : 0}>
              <div className={calLink ? "" : undefined}>
                {calLink ? (
                  <>
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                      Send a message
                    </p>
                    <h2 className="mt-2 mb-6 text-xl font-bold">
                      Send a brief
                    </h2>
                  </>
                ) : (
                  <p className="mb-6 text-sm text-muted">
                    {contactBlurb}{" "}
                    <Link href="/services/#pricing" className="text-accent underline">
                      See pricing
                    </Link>
                    .
                  </p>
                )}
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {buckets.map((bucket, index) => (
              <FadeIn key={bucket.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {bucket.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl font-bold">{bucket.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {bucket.description}
                  </p>
                  <Link
                    href={bucket.href}
                    className="mt-5 text-sm font-semibold text-accent"
                  >
                    {bucket.label} →
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
