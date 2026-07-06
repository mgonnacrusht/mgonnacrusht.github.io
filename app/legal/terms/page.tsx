import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { companyTermsHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for MgonnacrushT website, content usage, and service inquiry interactions.",
  path: "/legal/terms/",
});

export default function CompanyTermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Use"
      lead="Draft policy page, subject to legal review."
      html={companyTermsHtml}
      primaryCta={{ label: "Back home", href: "/" }}
      secondaryCta={{ label: "Privacy Policy", href: "/legal/privacy/" }}
    />
  );
}
