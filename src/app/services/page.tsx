import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/data";

export const metadata = buildMetadata({
  title: "Software Development Services",
  description:
    "Explore comprehensive IT and software development services from BluKits Technologies including web, mobile, cloud, and enterprise solutions.",
  keywords: ["software services", "IT services India", "web development", "mobile apps"],
  path: "/services/",
});

const categories = [...new Set(services.map((s) => s.category))];

export default function ServicesPage() {
  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Services"
        description="End-to-end software development services for businesses across India."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <span
                key={cat}
                className="rounded-xs bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                category={service.category}
                technologies={service.technologies}
                index={index}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
