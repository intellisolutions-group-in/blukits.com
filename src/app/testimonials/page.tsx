import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { testimonials } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Client Testimonials",
  description:
    "Read testimonials from professionals who have worked with BluKits Technologies on software projects.",
  keywords: ["testimonials", "client feedback", "software development reviews"],
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Testimonials"
        description="Feedback from clients and partners on our software delivery experience."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <h2 className="mb-10 text-3xl font-bold text-dark dark:text-white">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                designation={item.designation}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
