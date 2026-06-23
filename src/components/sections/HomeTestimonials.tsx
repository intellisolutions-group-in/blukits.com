import Link from "next/link";
import SectionTitle from "@/components/Common/SectionTitle";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/lib/data";

const HomeTestimonials = () => {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Our Clients Say"
          paragraph="Feedback from professionals who have worked with our delivery teams on software initiatives."
          center
          mb="60px"
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {preview.map((item) => (
            <TestimonialCard
              key={item.id}
              name={item.name}
              designation={item.designation}
              content={item.content}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/testimonials/" className="text-base font-medium text-primary hover:opacity-80">
            Read More Testimonials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
