import { notFound } from "next/navigation";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceDetailContent from "@/components/sections/services/ServiceDetailContent";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/data";
import company from "@/data/company.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.shortDescription,
    keywords: service.keywords,
    path: `/services/${slug}/`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug);
  const svcSchema = serviceSchema(service.title, service.shortDescription, slug);
  const crumbSchema = breadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Services", url: `${company.url}/services/` },
    { name: service.title, url: `${company.url}/services/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      <ScrollUp />
      <ServiceDetailContent service={service} related={related} />
      <CTASection
        title={`Start your ${service.title.toLowerCase()} project`}
        description="Contact BluKits Technologies to discuss scope, timelines, and delivery approach."
      />
    </>
  );
}

