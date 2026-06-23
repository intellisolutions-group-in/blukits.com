import ScrollUp from "@/components/Common/ScrollUp";
import LegalPageContent from "@/components/sections/legal/LegalPageContent";
import termsData from "@/data/terms.json";
import { buildMetadata } from "@/lib/seo";
import type { LegalPageData } from "@/types/legal";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: `Terms of Service for using the ${company.brandName} website.`,
  keywords: ["terms of service", "BluKits website terms"],
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <ScrollUp />
      <LegalPageContent data={termsData as LegalPageData} pageSlug="terms" />
    </>
  );
}
