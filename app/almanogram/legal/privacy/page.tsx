import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { almanogramPrivacyHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "Almanogram Privacy Policy",
  description:
    "Privacy Policy for the Almanogram puzzle game: data on your device, anonymous self-hosted analytics, and your choices.",
  path: "/almanogram/legal/privacy/",
});

export default function AlmanogramPrivacyPage() {
  return (
    <LegalPageLayout
      title="Almanogram Privacy Policy"
      html={almanogramPrivacyHtml}
      primaryCta={{ label: "Back to Almanogram", href: "/almanogram/" }}
      secondaryCta={{
        label: "Almanogram Terms of Use",
        href: "/almanogram/legal/terms/",
      }}
    />
  );
}
