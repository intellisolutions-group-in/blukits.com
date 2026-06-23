"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type ServiceBenefitsProps = {
  title: string;
  benefits: string[];
};

const ServiceBenefits = ({ title, benefits }: ServiceBenefitsProps) => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white md:text-3xl">
            Key Benefits
          </h2>
          <p className="mx-auto max-w-[560px] text-body-color dark:text-body-color-dark">
            Why businesses choose BluKits Technologies for {title.toLowerCase()}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-two transition-shadow hover:shadow-feature-2 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-2xl font-bold text-primary/15 dark:text-primary/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                {benefit}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;
