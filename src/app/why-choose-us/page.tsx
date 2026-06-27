import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "Why Choose Us",
  description: `Discover why businesses across India choose ${company.brandName} for software development.`,
  keywords: ["why choose BluKits", "software development partner"],
  path: "/why-choose-us/",
});

const reasons = [
  {
    title: "Proven Delivery Since 2011",
    content:
      "With over a decade of experience, we understand the realities of software projects—from scope definition to post-launch support.",
  },
  {
    title: "Full-Stack Capability",
    content:
      "Web, mobile, desktop, cloud, APIs, databases, UI/UX, and QA under one roof reduces coordination overhead and accelerates delivery.",
  },
  {
    title: "Transparent Communication",
    content:
      "Regular updates, documented decisions, and demo sessions keep stakeholders aligned throughout the project lifecycle.",
  },
  {
    title: "Quality Engineering",
    content:
      "We apply structured testing, code reviews, and maintainable architecture patterns suited to long-term product evolution.",
  },
  {
    title: "Flexible Engagement",
    content:
      "Dedicated teams, staff augmentation, or end-to-end project delivery—we adapt to your internal capacity and priorities.",
  },
  {
    title: "India-Focused Expertise",
    content:
      "We understand the operational context of Indian businesses including compliance considerations, user behaviour, and scaling challenges.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Why Choose Us"
        description="What sets BluKits Technologies apart as a software development partner."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-dark dark:text-white">
            Why Businesses Choose BluKits Technologies
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item) => (
              <div
                key={item.title}
                className="shadow-two dark:bg-dark dark:shadow-three rounded-xs bg-white p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                  {item.title}
                </h3>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
