"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Mail,
  Scale,
  Shield,
} from "lucide-react";
import company from "@/data/company.json";

import { PAGE_TOP_PADDING } from "@/lib/layout";
import type { LegalPageData } from "@/types/legal";

const sectionIcons: Record<string, typeof Shield> = {
  "information-we-collect": Shield,
  "how-we-use-information": FileText,
  "sharing-and-disclosure": Shield,
  "data-retention": FileText,
  "data-security": Shield,
  "your-rights": Scale,
  cookies: FileText,
  "policy-updates": FileText,
  acceptance: Scale,
  "use-of-website": FileText,
  "services-and-engagements": FileText,
  "intellectual-property": Shield,
  "user-submissions": FileText,
  "third-party-links": FileText,
  disclaimer: Scale,
  "limitation-of-liability": Scale,
  "governing-law": Scale,
  "changes-to-terms": FileText,
  contact: Mail,
};

type LegalPageContentProps = {
  data: LegalPageData;
  pageSlug: "privacy" | "terms";
};

const LegalPageContent = ({ data, pageSlug }: LegalPageContentProps) => {

  return (
    <>
      <section className={`relative overflow-hidden pb-12 ${PAGE_TOP_PADDING}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link href="/" className="text-body-color hover:text-primary dark:text-body-color-dark">
              Home
            </Link>
            <ChevronRight size={14} className="text-body-color dark:text-body-color-dark" />
            <span className="font-medium text-primary">{data.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {data.badge}
            </span>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-dark dark:text-white md:text-4xl lg:text-[42px]">
              {data.title}
            </h1>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              {data.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="dark:bg-bg-color-dark/40 bg-gray-light/60 pb-16 md:pb-20 lg:pb-28">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 xl:col-span-3"
            >
              <div className="shadow-two sticky top-28 space-y-6 rounded-2xl border border-stroke bg-white p-6 dark:border-stroke-dark dark:bg-dark dark:shadow-three lg:top-32">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-wide text-primary">
                    On this page
                  </p>
                  <nav className="space-y-1">
                    {data.sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="hover:bg-primary/5 dark:hover:bg-primary/10 block rounded-lg px-3 py-2 text-sm text-body-color transition-colors hover:text-primary dark:text-body-color-dark dark:hover:text-white"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="border-t border-stroke pt-5 dark:border-stroke-dark">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-primary">
                    Related
                  </p>
                  <Link
                    href={data.relatedPage.href}
                    className="hover:bg-primary/5 dark:hover:bg-primary/10 block rounded-lg px-3 py-2 transition-colors"
                  >
                    <p className="text-sm font-semibold text-dark dark:text-white">
                      {data.relatedPage.title}
                    </p>
                    <p className="mt-0.5 text-xs text-body-color dark:text-body-color-dark">
                      {data.relatedPage.description}
                    </p>
                  </Link>
                </div>

                <div className="rounded-xl bg-primary/5 p-4 dark:bg-primary/10">
                  <p className="mb-2 text-sm font-semibold text-dark dark:text-white">
                    Need help?
                  </p>
                  <p className="mb-3 text-xs text-body-color dark:text-body-color-dark">
                    Reach our team for questions about {pageSlug === "privacy" ? "privacy" : "these terms"}.
                  </p>
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Contact us
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.aside>

            <div className="space-y-6 lg:col-span-8 xl:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="shadow-two rounded-2xl border-l-4 border-primary bg-white p-6 md:p-8 dark:bg-dark dark:shadow-three"
              >
                <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
                  {data.intro}
                </p>
              </motion.div>

              {data.sections.map((section, index) => {
                const Icon = sectionIcons[section.id] ?? FileText;
                const isContact = section.id === "contact";

                return (
                  <motion.article
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="shadow-two scroll-mt-32 rounded-2xl border border-stroke bg-white p-6 md:p-8 dark:border-stroke-dark dark:bg-dark dark:shadow-three"
                  >
                    <div className="mb-4 flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon size={20} strokeWidth={2} />
                      </span>
                      <h2 className="pt-1.5 text-xl font-bold text-dark dark:text-white md:text-2xl">
                        {section.title}
                      </h2>
                    </div>

                    <p className="mb-4 leading-relaxed text-body-color dark:text-body-color-dark">
                      {section.content}
                    </p>

                    {section.points && section.points.length > 0 && (
                      <ul className="space-y-2.5">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-body-color dark:text-body-color-dark md:text-base"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    {isContact && (
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <a
                          href={`mailto:${company.email}`}
                          className="hover:border-primary/30 flex items-center gap-3 rounded-xl border border-stroke bg-gray-light/50 px-4 py-3 transition-colors dark:border-stroke-dark dark:bg-white/5"
                        >
                          <Mail size={18} className="shrink-0 text-primary" />
                          <div>
                            <p className="text-xs text-body-color dark:text-body-color-dark">Email</p>
                            <p className="text-sm font-medium text-dark dark:text-white">
                              {company.email}
                            </p>
                          </div>
                        </a>
                      </div>
                    )}
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPageContent;
