import ScrollUp from "@/components/Common/ScrollUp";
import HomeHero from "@/components/sections/HomeHero";
import HomeIntro from "@/components/sections/HomeIntro";
import HomeServices from "@/components/sections/HomeServices";
import HomeWhyChoose from "@/components/sections/HomeWhyChoose";
import HomeProcess from "@/components/sections/HomeProcess";
import HomeTestimonials from "@/components/sections/HomeTestimonials";
import HomeFAQ from "@/components/sections/HomeFAQ";
import HomeContact from "@/components/sections/HomeContact";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "IT and Software Development Company in India",
  description: `${company.brandName} provides web, mobile, desktop, and enterprise software development services for businesses across India.`,
  keywords: [
    "software development company India",
    "IT services Vadodara",
    "web development",
    "mobile app development",
    "BluKits Technologies",
  ],
  path: "/",
});

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeWhyChoose />
      <HomeProcess />
      <HomeTestimonials />
      <HomeFAQ />
      <HomeContact />
      <CTASection />
    </>
  );
}
