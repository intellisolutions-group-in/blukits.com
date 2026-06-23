"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, ListChecks, Wrench } from "lucide-react";
import { getServiceIcon } from "@/lib/service-icons";
import {
  groupServiceParagraphs,
  parseServiceParagraphs,
} from "@/lib/service-content";

type ServiceOverviewProps = {
  slug: string;
  title: string;
  category: string;
  content: string;
  technologies: string[];
  benefits: string[];
};

const ServiceOverview = ({
  slug,
  title,
  category,
  content,
  technologies,
  benefits,
}: ServiceOverviewProps) => {
  const paragraphs = parseServiceParagraphs(content);
  const leadParagraph = paragraphs[0] ?? "";
  const bodyParagraphs = paragraphs.slice(1);
  const sections = groupServiceParagraphs(bodyParagraphs);
  const Icon = getServiceIcon(slug);

  return (
    <section className="dark:bg-bg-color-dark/40 bg-gray-light/60 py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="mb-8">
              <h2 className="mb-3 text-2xl font-bold text-dark dark:text-white md:text-3xl">
                About {title}
              </h2>
              <p className="max-w-[640px] text-body-color dark:text-body-color-dark">
                A detailed look at how BluKits Technologies delivers {title.toLowerCase()}{" "}
                for organisations across India.
              </p>
            </div>

            {leadParagraph && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="shadow-two mb-8 rounded-2xl border-l-4 border-primary bg-white p-6 md:p-8 dark:bg-dark dark:shadow-three"
              >
                <p className="text-base leading-relaxed text-dark dark:text-white md:text-lg md:leading-8">
                  {leadParagraph}
                </p>
              </motion.div>
            )}

            <div className="shadow-two space-y-8 rounded-2xl bg-white p-6 md:p-8 dark:bg-dark dark:shadow-three">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: sectionIndex * 0.05 }}
                  className={
                    sectionIndex < sections.length - 1
                      ? "border-b border-stroke pb-8 dark:border-stroke-dark"
                      : ""
                  }
                >
                  <h3 className="mb-4 flex items-center gap-3 text-lg font-bold text-dark dark:text-white md:text-xl">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </h3>
                  <div className="space-y-4">
                    {section.paragraphs.map((para) => (
                      <p
                        key={para.slice(0, 48)}
                        className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-[17px] md:leading-8"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-medium text-primary dark:bg-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-28 space-y-6">
              <div className="shadow-two overflow-hidden rounded-2xl bg-white dark:bg-dark dark:shadow-three">
                <div className="bg-primary/5 p-6 dark:bg-primary/10">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-dark dark:text-white">At a Glance</h3>
                </div>
                <ul className="divide-y divide-stroke p-6 dark:divide-stroke-dark">
                  <li className="flex items-center justify-between py-3 first:pt-0">
                    <span className="flex items-center gap-2 text-sm text-body-color dark:text-body-color-dark">
                      <Layers size={16} className="text-primary" />
                      Category
                    </span>
                    <span className="text-sm font-semibold text-dark dark:text-white">
                      {category}
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <span className="flex items-center gap-2 text-sm text-body-color dark:text-body-color-dark">
                      <Wrench size={16} className="text-primary" />
                      Technologies
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {technologies.length}+
                    </span>
                  </li>
                  <li className="flex items-center justify-between py-3 last:pb-0">
                    <span className="flex items-center gap-2 text-sm text-body-color dark:text-body-color-dark">
                      <ListChecks size={16} className="text-primary" />
                      Key Benefits
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {benefits.length}
                    </span>
                  </li>
                </ul>
                <div className="border-t border-stroke p-6 dark:border-stroke-dark">
                  <Link
                    href="/contact/"
                    className="block w-full rounded-xs bg-primary py-3 text-center text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
