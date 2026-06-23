"use client";

import { useState } from "react";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ScrollUp from "@/components/Common/ScrollUp";
import JobCard, { Job } from "@/components/ui/JobCard";
import CareerFormModal from "@/components/ui/CareerFormModal";
import CTASection from "@/components/sections/CTASection";
import { careers } from "@/lib/data";

const CareersContent = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <>
      <ScrollUp />
      <Breadcrumb
        pageName="Careers"
        description="Join BluKits Technologies and build software that makes a difference."
      />
      <section className="pb-16 pt-8 md:pb-20 lg:pb-28">
        <div className="container">
          <p className="mx-auto mb-12 max-w-[700px] text-center text-base text-body-color dark:text-body-color-dark">
            We are always looking for talented developers, designers, analysts, and QA
            professionals. Explore current openings below and apply online.
          </p>
          <div className="grid grid-cols-1 gap-8">
            {careers.map((job) => (
              <JobCard key={job.id} job={job} onApply={setSelectedJob} />
            ))}
          </div>
        </div>
      </section>
      {selectedJob && (
        <CareerFormModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
      <CTASection
        title="Did not find a suitable role?"
        description="Send your profile to info@blukits.com and we will reach out when a matching opportunity opens."
        primaryLabel="Contact Us"
        primaryHref="/contact/"
        secondaryLabel="About Us"
        secondaryHref="/about/"
      />
    </>
  );
};

export default CareersContent;
