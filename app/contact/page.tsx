import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container, PageHero, Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Contact MgonnacrushT for SaveT questions, partnerships, and software development services.",
  path: "/contact/",
});

const buckets = [
  {
    eyebrow: "SaveT",
    title: "SaveT inquiries",
    description:
      "Product feedback, feature suggestions, partnership and API collaboration ideas.",
    href: "/savet/",
    label: "Explore SaveT",
  },
  {
    eyebrow: "Services",
    title: "Service inquiries",
    description:
      "Remote software delivery across Flutter, Spring Boot, AWS/GCP/VPS, PostgreSQL, CI/CD, and Google Play publishing.",
    href: "/services/",
    label: "See all services",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in touch"
        lead="Whether you have a product question or need a product engineering partner for your app or SaaS, we would be happy to hear from you."
      />

      <Section className="bg-surface">
        <Container className="max-w-2xl">
          <ContactForm />
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
