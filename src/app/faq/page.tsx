import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import FAQItem from "@/components/ui/FAQItem";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { faq } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about BluKits Technologies services, process, and engagement models.",
  keywords: ["FAQ", "software development questions"],
  path: "/faq/",
});

export default function FAQPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="FAQ"
        description="Answers to frequently asked questions about our software development services."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            {faq.map((section) => (
              <div key={section.id} className="mb-12">
                <h2 className="mb-6 text-2xl font-bold text-dark dark:text-white">
                  {section.title}
                </h2>
                {section.items.map((item) => (
                  <FAQItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
