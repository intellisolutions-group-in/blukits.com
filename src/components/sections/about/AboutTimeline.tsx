"use client";

import { motion } from "framer-motion";
import company from "@/data/company.json";

const milestones = [
  {
    year: "2011",
    title: "Company Founded",
    desc: `${company.brandName} established in Vadodara with a focus on custom software development.`,
  },
  {
    year: "2011",
    title: "Digital Presence",
    desc: `Domain ${company.domain} registered, marking our long-term commitment to IT services.`,
  },
  {
    year: "2014",
    title: "Mobile Expansion",
    desc: "Extended capabilities to mobile application development for Android and iOS platforms.",
  },
  {
    year: "2018",
    title: "Enterprise Growth",
    desc: "Delivered larger-scale enterprise applications and API integration projects across India.",
  },
  {
    year: "2021",
    title: "Remote Delivery",
    desc: "Strengthened remote collaboration models to serve clients nationwide with distributed teams.",
  },
  {
    year: "Today",
    title: "Full-Stack Partner",
    desc: "End-to-end software partner covering web, mobile, desktop, cloud, design, and QA services.",
  },
];

const AboutTimeline = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Our Journey
          </h2>
          <p className="mx-auto max-w-[560px] text-body-color dark:text-body-color-dark">
            From a Vadodara-based startup in {company.establishedYear} to a trusted software
            partner serving businesses across {company.country}.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-[720px]">
          <div className="absolute bottom-2 left-[19px] top-2 w-0.5 bg-primary/20 md:left-1/2 md:-ml-px" />

          <div className="space-y-8">
            {milestones.map((item, i) => (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.07 }}
                className="relative flex gap-6 md:gap-0"
              >
                <div className="hidden flex-1 md:block md:pr-10 md:text-right">
                  {i % 2 === 0 && (
                    <>
                      <span className="mb-1 inline-block text-sm font-bold text-primary">
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        {item.desc}
                      </p>
                    </>
                  )}
                </div>

                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white dark:bg-dark md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>

                <div className="flex-1 md:pl-10">
                  {i % 2 !== 0 ? (
                    <div className="hidden md:block">
                      <span className="mb-1 inline-block text-sm font-bold text-primary">
                        {item.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                        {item.desc}
                      </p>
                    </div>
                  ) : null}

                  <div className="rounded-xl border border-primary/10 bg-white p-5 shadow-two dark:bg-dark dark:shadow-three md:hidden">
                    <span className="mb-1 inline-block text-sm font-bold text-primary">
                      {item.year}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                      {item.desc}
                    </p>
                  </div>

                  {i % 2 !== 0 ? null : (
                    <div className="md:hidden" />
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

export default AboutTimeline;
