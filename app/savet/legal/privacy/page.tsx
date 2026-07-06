import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { savetPrivacyHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "SaveT Privacy Policy",
  description:
    "Privacy Policy for SaveT, including product data handling, account data, and user rights.",
  path: "/savet/legal/privacy/",
});

export default function SaveTPrivacyPage() {
  return (
    <LegalPageLayout
      title="SaveT Privacy Policy"
      html={savetPrivacyHtml}
      primaryCta={{ label: "Back to SaveT", href: "/savet/" }}
      secondaryCta={{ label: "SaveT Terms of Use", href: "/savet/legal/terms/" }}
    />
  );
}
