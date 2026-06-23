"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import company from "@/data/company.json";

type ServiceInquiryProps = {
  title: string;
};

const ServiceInquiry = ({ title }: ServiceInquiryProps) => {
  return (
    <section className="dark:bg-bg-color-dark relative overflow-hidden bg-gray-light py-16 md:py-20">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white md:text-3xl">
              Start Your {title} Project
            </h2>
            <p className="mb-8 text-body-color dark:text-body-color-dark">
              Tell us about your requirements and our team will respond with a practical plan,
              timeline estimate, and next steps.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: MessageSquare,
                  label: "Share your goals",
                  desc: "Describe what you want to build and who will use it.",
                },
                {
                  icon: Phone,
                  label: "Quick consultation",
                  desc: "We discuss scope, technology, and delivery approach.",
                },
                {
                  icon: Mail,
                  label: "Tailored proposal",
                  desc: "Receive a clear plan aligned with your budget and timeline.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-dark dark:text-white">{item.label}</p>
                    <p className="text-sm text-body-color dark:text-body-color-dark">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-primary/10 bg-white/60 p-5 dark:bg-dark/60">
              <p className="text-sm text-body-color dark:text-body-color-dark">
                Prefer email? Reach us at{" "}
                <a href={`mailto:${company.email}`} className="font-medium text-primary">
                  {company.email}
                </a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="shadow-feature-2 rounded-2xl bg-white p-8 dark:bg-dark md:p-10">
              <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
                Request a Consultation
              </h3>
              <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
                Fill in the form and we will get back to you shortly.
              </p>
              <ContactForm submitLabel="Send Inquiry" showSubject={false} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceInquiry;
