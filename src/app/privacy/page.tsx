import ScrollUp from "@/components/Common/ScrollUp";
import LegalPageContent from "@/components/sections/legal/LegalPageContent";
import privacyData from "@/data/privacy.json";
import { buildMetadata } from "@/lib/seo";
import type { LegalPageData } from "@/types/legal";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${company.brandName} website and services.`,
  keywords: ["privacy policy", "BluKits data protection"],
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <ScrollUp />
      <LegalPageContent data={privacyData as LegalPageData} pageSlug="privacy" />
    </>
  );
}
