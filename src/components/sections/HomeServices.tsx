"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";
import SystemArchitecture from "@/components/sections/services/SystemArchitecture";

const stats = [
  { value: "18+", label: "Services" },
  { value: "6", label: "Categories" },
  { value: "2011", label: "Since" },
];

const bentoLayout = [
  { span: "lg:col-span-7 lg:row-span-2", variant: "featured" as const },
  { span: "lg:col-span-5", variant: "compact" as const },
  { span: "lg:col-span-5", variant: "compact" as const },
  { span: "lg:col-span-4", variant: "default" as const },
  { span: "lg:col-span-4", variant: "default" as const },
  { span: "lg:col-span-4", variant: "default" as const },
];

const HomeServices = () => {
  const preview = services.slice(0, 6);

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #4a6cf7 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="mb-14 flex flex-col gap-10 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[640px]"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles size={14} />
              What We Build
            </span>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px]">
              Software Services Built for Scale
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              From web platforms to enterprise systems, we deliver end-to-end
              development services tailored to your business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-4 lg:justify-end"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="shadow-two dark:bg-dark min-w-[100px] rounded-xl border border-primary/10 bg-white px-6 py-4 text-center dark:shadow-three"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wider text-body-color dark:text-body-color-dark">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
          {preview.map((service, i) => (
            <div key={service.slug} className={bentoLayout[i]?.span ?? ""}>
              <ServiceCard
                title={service.title}
                description={service.shortDescription}
                slug={service.slug}
                category={service.category}
                technologies={service.technologies}
                index={i}
                variant={bentoLayout[i]?.variant ?? "default"}
                delay={i * 0.08}
              />
            </div>
          ))}
        </div>

        {/* Interactive Architecture Flow Blueprint */}
        <SystemArchitecture />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/services/"
            className="group inline-flex items-center gap-2 rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white shadow-submit transition-all duration-300 hover:bg-primary/90 hover:shadow-feature-2 dark:shadow-submit-dark"
          >
            View All Services
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-xs border border-stroke px-8 py-4 text-base font-semibold text-dark transition-all duration-300 hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white"
          >
            Discuss Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
