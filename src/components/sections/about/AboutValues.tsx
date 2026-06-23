"use client";

import { motion } from "framer-motion";
import {
  Code2,
  MessageSquare,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import company from "@/data/company.json";

const valueMeta: Record<string, { icon: typeof Users; desc: string }> = {
  "Client-first delivery": {
    icon: Users,
    desc: "Your business goals shape every technical decision we make.",
  },
  "Engineering excellence": {
    icon: Code2,
    desc: "Clean architecture, tested code, and maintainable solutions.",
  },
  "Transparent communication": {
    icon: MessageSquare,
    desc: "Clear updates, honest timelines, and documented progress.",
  },
  "Continuous improvement": {
    icon: TrendingUp,
    desc: "We refine processes and skills with every project delivered.",
  },
  "Security by design": {
    icon: Shield,
    desc: "Security considerations built in from day one, not bolted on.",
  },
};

const AboutValues = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-[640px]"
        >
          <h2 className="mb-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
            Our Core Values
          </h2>
          <p className="text-body-color dark:text-body-color-dark">
            Five principles that define how {company.brandName} works with clients and
            delivers software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {company.values.map((value, i) => {
            const meta = valueMeta[value] ?? {
              icon: Code2,
              desc: "A core principle of our delivery culture.",
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-xl border border-transparent bg-white p-7 shadow-two transition-shadow hover:shadow-feature-2 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-dark dark:text-white">{value}</h3>
                <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
                  {meta.desc}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
