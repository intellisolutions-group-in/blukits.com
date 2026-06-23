"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Calendar,
  Globe,
  MapPin,
  Sparkles,
} from "lucide-react";
import company from "@/data/company.json";
import { PAGE_TOP_PADDING } from "@/lib/layout";
import ThreeDGlobe from "@/components/canvas/ThreeDGlobe";

const highlights = [
  { icon: Calendar, label: "Established", value: String(company.establishedYear) },
  { icon: Globe, label: "Online Since", value: company.domainRegisteredDate.split("-")[0] },
  { icon: Building2, label: "Headquarters", value: "Vadodara, India" },
  { icon: MapPin, label: "Serving", value: company.country },
];

const AboutIntro = () => {
  return (
    <section className={`relative overflow-hidden pb-16 md:pb-20 ${PAGE_TOP_PADDING}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
              <Sparkles size={14} />
              Our Story
            </span>
            <h2 className="mb-6 text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl">
              Building Software That Powers Business Growth
            </h2>
            <p className="mb-5 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              {company.brandName} is an IT and software development company headquartered in
              Vadodara, India. Since {company.establishedYear}, we have helped organisations
              design, build, and maintain business-critical applications across web, mobile,
              desktop, and cloud platforms.
            </p>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              Our domain <span className="font-medium text-primary">{company.domain}</span> has
              been registered since {company.domainRegisteredDate}. We partner with businesses
              that value quality engineering, practical delivery, and long-term collaboration.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="shadow-feature-2 relative overflow-hidden rounded-2xl border border-primary/10 bg-white p-8 dark:bg-dark md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/15 blur-2xl" />
              <p className="relative z-10 mb-6 text-lg font-medium leading-relaxed text-dark dark:text-white">
                &ldquo;{company.tagline}&rdquo;
              </p>
              
              {/* Interactive 3D Holographic Globe Map */}
              <div className="mb-8 relative z-10 overflow-hidden border border-primary/10 rounded-2xl bg-linear-to-b from-primary/5 to-transparent">
                <ThreeDGlobe />
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="rounded-xl border border-primary/10 bg-gray-light/80 p-4 dark:bg-white/5"
                  >
                    <item.icon className="mb-2 text-primary" size={20} />
                    <p className="text-xl font-bold text-primary">{item.value}</p>
                    <p className="text-xs font-medium uppercase tracking-wide text-body-color dark:text-body-color-dark">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
