"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceProcessProps = {
  process: string[];
};

const ServiceProcess = ({ process }: ServiceProcessProps) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-[640px]"
        >
          <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white md:text-3xl">
            Our Methodology
          </h2>
          <p className="text-body-color dark:text-body-color-dark">
            A structured delivery approach that keeps your project transparent, predictable,
            and aligned with business goals.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-primary/15 lg:block" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="shadow-two relative rounded-2xl bg-white p-6 pt-10 dark:bg-dark dark:shadow-three">
                  <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-white text-sm font-bold text-primary dark:bg-dark">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {step}
                  </p>
                  {i < process.length - 1 && (
                    <ArrowRight
                      className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-primary/40 lg:block"
                      size={20}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
