import { PageHero } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";

type LegalPageLayoutProps = {
  title: string;
  lead?: string;
  html: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function LegalPageLayout({
  title,
  lead,
  html,
  primaryCta,
  secondaryCta,
}: LegalPageLayoutProps) {
  return (
    <>
      <PageHero title={title} lead={lead}>
        {primaryCta ? (
          <Button href={primaryCta.href} variant="secondary">
            {primaryCta.label}
          </Button>
        ) : null}
        {secondaryCta ? (
          <Button href={secondaryCta.href} variant="ghost">
            {secondaryCta.label}
          </Button>
        ) : null}
      </PageHero>
      <article className="prose-legal mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </>
  );
}
