"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Layers,
  Monitor,
  Palette,
  Plug,
  Smartphone,
  TestTube2,
} from "lucide-react";

const expertise = [
  { icon: Code2, title: "Full Stack Web", desc: "Next.js, React, Node.js" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Android, iOS, cross-platform" },
  { icon: Monitor, title: "Desktop Software", desc: "Windows and enterprise tools" },
  { icon: Cloud, title: "Cloud Solutions", desc: "AWS, Azure, scalable deploys" },
  { icon: Plug, title: "API Integration", desc: "REST, GraphQL, third-party" },
  { icon: Database, title: "Database Design", desc: "SQL, NoSQL, optimisation" },
  { icon: Palette, title: "UI/UX Design", desc: "User-centred interfaces" },
  { icon: TestTube2, title: "QA and Testing", desc: "Manual and automated QA" },
  { icon: Layers, title: "Enterprise Systems", desc: "Large-scale applications" },
];

const AboutExpertise = () => {
  return (
    <section className="dark:bg-bg-color-dark relative overflow-hidden bg-gray-light py-16 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[560px]"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
              Software Development Expertise
            </h2>
            <p className="text-body-color dark:text-body-color-dark">
              Our teams deliver across the full software stack — from user interfaces to
              backend systems, integrations, and quality assurance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-xl bg-primary px-8 py-5 text-center text-white shadow-feature-2"
          >
            <p className="text-3xl font-bold">9+</p>
            <p className="text-sm font-medium text-white/80">Core Capabilities</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center gap-4 rounded-xl border border-primary/10 bg-white p-5 transition-all hover:border-primary/30 hover:shadow-two dark:bg-dark dark:hover:shadow-three"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <item.icon size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-semibold text-dark dark:text-white">{item.title}</h3>
                <p className="text-sm text-body-color dark:text-body-color-dark">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;
