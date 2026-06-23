import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import CTASection from "@/components/sections/CTASection";
import ContactPageContent from "./ContactPageContent";
import { buildMetadata } from "@/lib/seo";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${company.brandName} for software development enquiries. Email ${company.email} and our team will respond promptly.`,
  keywords: ["contact BluKits", "software development enquiry", "IT company contact"],
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to discuss your software project requirements."
      />
      <ContactPageContent />
      <CTASection />
    </>
  );
}
