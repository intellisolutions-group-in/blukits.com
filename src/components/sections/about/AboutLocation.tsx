"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin } from "lucide-react";
import company from "@/data/company.json";
import { offices } from "@/lib/data";

const AboutLocation = () => {
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
            Where We Are
          </h2>
          <p className="mx-auto max-w-[560px] text-body-color dark:text-body-color-dark">
            Based in Vadodara, serving clients across India with on-site and remote engagement
            models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="shadow-feature-2 h-full rounded-2xl bg-white p-8 dark:bg-dark">
              <h3 className="mb-6 text-xl font-bold text-dark dark:text-white">
                Contact Information
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark dark:text-white">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-body-color hover:text-primary dark:text-body-color-dark"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-dark dark:text-white">
                      Business Hours
                    </p>
                    <p className="text-body-color dark:text-body-color-dark">
                      {company.businessHours}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            {offices.map((office) => (
              <div
                key={office.id}
                className="shadow-two overflow-hidden rounded-2xl bg-white dark:bg-dark dark:shadow-three"
              >
                <div className="border-b border-primary/10 bg-primary/5 p-6 dark:bg-primary/10">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 shrink-0 text-primary" size={22} />
                    <div>
                      <h3 className="text-lg font-bold text-dark dark:text-white">
                        {office.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="relative flex h-52 items-center justify-center bg-linear-to-br from-primary/5 via-transparent to-primary/10 md:h-64">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, #4a6cf7 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <MapPin size={24} />
                    </div>
                    <p className="font-semibold text-dark dark:text-white">
                      {office.city}, {office.state}
                    </p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      {office.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutLocation;
