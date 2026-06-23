"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ui/ServiceCard";

type RelatedService = {
  slug: string;
  title: string;
  shortDescription: string;
  category?: string;
  technologies?: string[];
};

type ServiceRelatedProps = {
  services: RelatedService[];
};

const ServiceRelated = ({ services }: ServiceRelatedProps) => {
  return (
    <section className="pb-16 pt-4 md:pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-3 text-2xl font-bold text-dark dark:text-white md:text-3xl">
            Related Services
          </h2>
          <p className="text-body-color dark:text-body-color-dark">
            Explore other services that complement your project needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.shortDescription}
              slug={s.slug}
              category={s.category}
              technologies={s.technologies}
              index={i}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRelated;
