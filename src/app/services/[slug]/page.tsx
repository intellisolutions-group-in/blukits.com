import { notFound } from "next/navigation";
import ScrollUp from "@/components/Common/ScrollUp";
import ServiceDetailContent from "@/components/sections/services/ServiceDetailContent";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/data";

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
  const schema = serviceSchema(service.title, service.shortDescription, slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
