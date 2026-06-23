"use client";

import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import company from "@/data/company.json";

const AboutMissionVision = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Mission and Vision
          </h2>
          <p className="mx-auto max-w-[600px] text-body-color dark:text-body-color-dark">
            The principles that guide how we build software and serve our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-two dark:bg-dark dark:shadow-three md:p-10"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-all group-hover:bg-primary/20" />
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Target size={28} strokeWidth={1.75} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">Our Mission</h3>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {company.mission}
              </p>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-primary p-8 shadow-feature-2 md:p-10"
          >
            <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 text-white">
                <Eye size={28} strokeWidth={1.75} />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-base leading-relaxed text-white/90">{company.vision}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
