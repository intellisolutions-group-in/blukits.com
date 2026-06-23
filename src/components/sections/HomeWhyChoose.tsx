"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import company from "@/data/company.json";

const points = [
  "Established in 2011 with a focus on dependable software delivery",
  "Experienced teams across web, mobile, desktop, and enterprise development",
  "Transparent communication and milestone-based project execution",
  "Security-conscious engineering and structured quality assurance",
  "Flexible engagement models for startups and established organisations",
  "Long-term maintenance and support after go-live",
];

const HomeWhyChoose = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              title="Why Businesses Choose BluKits"
              paragraph={`${company.brandName} combines technical depth with practical delivery to help organisations across ${company.country} build software that lasts.`}
              mb="40px"
            />
            <ul className="space-y-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-primary" size={20} />
                  <span className="text-base text-body-color dark:text-body-color-dark">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/why-choose-us/"
              className="mt-8 inline-block rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white hover:bg-primary/90"
            >
              Learn More
            </Link>
          </div>
          <div className="shadow-three dark:bg-gray-dark rounded-xs bg-white p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Engineering with Purpose
            </h3>
            <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
              We align technology decisions with business outcomes. Every project begins with
              understanding your users, workflows, and constraints before writing code.
            </p>
            <p className="text-base text-body-color dark:text-body-color-dark">
              Our teams work as an extension of your organisation, providing the expertise
              needed to move from concept to production with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChoose;
