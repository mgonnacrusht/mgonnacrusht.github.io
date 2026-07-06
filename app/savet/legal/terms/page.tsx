import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { savetTermsHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "SaveT Terms of Use",
  description:
    "Terms of Use for SaveT covering acceptable use, user responsibilities, and product limitations.",
  path: "/savet/legal/terms/",
});

export default function SaveTTermsPage() {
  return (
    <LegalPageLayout
      title="SaveT Terms of Use"
      lead="Draft policy page, subject to legal review."
      html={savetTermsHtml}
      primaryCta={{ label: "Back to SaveT", href: "/savet/" }}
      secondaryCta={{
        label: "SaveT Privacy Policy",
        href: "/savet/legal/privacy/",
      }}
    />
  );
}
