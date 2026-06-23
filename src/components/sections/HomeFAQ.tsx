import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import FAQItem from "@/components/ui/FAQItem";
import { faq } from "@/lib/data";

const HomeFAQ = () => {
  const items = faq[0].items.slice(0, 4);

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          paragraph="Quick answers to common questions about our services, process, and engagement models."
          center
          mb="60px"
        />
        <div className="mx-auto max-w-[800px]">
          {items.map((item) => (
            <FAQItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/faq/" className="text-base font-medium text-primary hover:opacity-80">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
