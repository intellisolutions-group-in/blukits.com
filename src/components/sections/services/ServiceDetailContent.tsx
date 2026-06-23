"use client";

import ServiceHero from "./ServiceHero";
import ServiceOverview from "./ServiceOverview";
import ServiceBenefits from "./ServiceBenefits";
import ServiceProcess from "./ServiceProcess";
import ServiceInquiry from "./ServiceInquiry";
import ServiceRelated from "./ServiceRelated";

export type ServiceDetailData = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  content: string;
  technologies: string[];
  benefits: string[];
  process: string[];
};

type ServiceDetailContentProps = {
  service: ServiceDetailData;
  related: ServiceDetailData[];
};

const ServiceDetailContent = ({ service, related }: ServiceDetailContentProps) => {
  return (
    <>
      <ServiceHero
        title={service.title}
        slug={service.slug}
        category={service.category}
        description={service.shortDescription}
        technologies={service.technologies}
      />
      <ServiceOverview
        slug={service.slug}
        title={service.title}
        category={service.category}
        content={service.content}
        technologies={service.technologies}
        benefits={service.benefits}
      />
      <ServiceBenefits title={service.title} benefits={service.benefits} />
      <ServiceProcess process={service.process} />
      <ServiceInquiry title={service.title} />
      <ServiceRelated services={related} />
    </>
  );
};

export default ServiceDetailContent;
