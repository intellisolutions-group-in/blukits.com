"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getServiceIcon } from "@/lib/service-icons";
import { PAGE_TOP_PADDING } from "@/lib/layout";

type ServiceHeroProps = {
  title: string;
  slug: string;
  category: string;
  description: string;
  technologies: string[];
};

const ServiceHero = ({
  title,
  slug,
  category,
  description,
  technologies,
}: ServiceHeroProps) => {
  const Icon = getServiceIcon(slug);

  return (
    <section className={`relative overflow-hidden pb-12 md:pb-16 ${PAGE_TOP_PADDING}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #4a6cf7 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-wrap items-center gap-2 text-sm"
        >
          <Link href="/" className="text-body-color hover:text-primary dark:text-body-color-dark">
            Home
          </Link>
          <ChevronRight size={14} className="text-body-color dark:text-body-color-dark" />
          <Link
            href="/services/"
            className="text-body-color hover:text-primary dark:text-body-color-dark"
          >
            Services
          </Link>
          <ChevronRight size={14} className="text-body-color dark:text-body-color-dark" />
          <span className="font-medium text-primary">{title}</span>
        </motion.nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {category}
            </span>
            <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[44px]">
              {title}
            </h1>
            <p className="mb-8 max-w-[600px] text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xs bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-submit transition hover:bg-primary/90 dark:shadow-submit-dark"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-xs border border-stroke px-7 py-3.5 text-base font-semibold text-dark transition hover:border-primary hover:text-primary dark:border-stroke-dark dark:text-white"
              >
                All Services
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="shadow-feature-2 relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 dark:bg-dark md:p-10">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-primary/15 blur-2xl" />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <p className="mb-5 text-sm font-medium text-body-color dark:text-body-color-dark">
                  Technologies we use for this service
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
