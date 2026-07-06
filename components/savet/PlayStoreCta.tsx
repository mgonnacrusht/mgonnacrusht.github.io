import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/Button";

export function PlayStoreCta() {
  if (!siteConfig.playStoreUrl) {
    return null;
  }

  return (
    <div className="mt-8 text-center">
      <Button href={siteConfig.playStoreUrl} external>
        Get SaveT on Google Play
      </Button>
    </div>
  );
}
