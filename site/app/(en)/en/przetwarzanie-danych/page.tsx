import { PrivacyPage } from "@/components/privacy-page";
import { buildMetadata, privacyPath } from "@/lib/site-metadata";

export const metadata = buildMetadata("en", privacyPath);

export default function Page() {
  return <PrivacyPage lang="en" />;
}
