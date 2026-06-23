import ScrollUp from "@/components/Common/ScrollUp";
import AboutIntro from "@/components/sections/about/AboutIntro";
import AboutMissionVision from "@/components/sections/about/AboutMissionVision";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutExpertise from "@/components/sections/about/AboutExpertise";
import AboutTimeline from "@/components/sections/about/AboutTimeline";
import AboutLocation from "@/components/sections/about/AboutLocation";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${company.brandName}, an India-based software development company established in ${company.establishedYear}.`,
  keywords: ["about BluKits", "software company India", "IT company Vadodara"],
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <ScrollUp />
      <AboutIntro />
      <AboutMissionVision />
      <AboutValues />
      <AboutExpertise />
      <AboutTimeline />
      <AboutLocation />
      <CTASection />
    </>
  );
}
