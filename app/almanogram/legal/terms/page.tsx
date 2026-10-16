import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { almanogramTermsHtml } from "@/lib/content/legal";

export const metadata = buildMetadata({
  title: "Almanogram Terms of Use",
  description:
    "Terms of Use for the Almanogram puzzle game: licence, acceptable use, content ownership and liability.",
  path: "/almanogram/legal/terms/",
});

export default function AlmanogramTermsPage() {
  return (
    <LegalPageLayout
      title="Almanogram Terms of Use"
      html={almanogramTermsHtml}
      primaryCta={{ label: "Back to Almanogram", href: "/almanogram/" }}
      secondaryCta={{
        label: "Almanogram Privacy Policy",
        href: "/almanogram/legal/privacy/",
      }}
    />
  );
}
