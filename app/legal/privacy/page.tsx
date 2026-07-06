import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { companyPrivacyHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for MgonnacrushT website, service inquiries, and related business communications.",
  path: "/legal/privacy/",
});

export default function CompanyPrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lead="Draft policy page, subject to legal review."
      html={companyPrivacyHtml}
      primaryCta={{ label: "Back home", href: "/" }}
      secondaryCta={{ label: "Terms of Use", href: "/legal/terms/" }}
    />
  );
}
