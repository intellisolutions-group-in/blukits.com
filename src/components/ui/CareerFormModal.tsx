"use client";

import { FormEvent, useState } from "react";
import { Loader2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import company from "@/data/company.json";
import ThankYouModal from "./ThankYouModal";
import type { Job } from "./JobCard";

type CareerFormModalProps = {
  job: Job | null;
  onClose: () => void;
};

const inputClass =
  "border-stroke w-full rounded-xs border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark";

const CareerFormModal = ({ job, onClose }: CareerFormModalProps) => {
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!job) return null;

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    if (!String(form.get("fullName") || "").trim())
      next.fullName = "Full name is required";
    if (!String(form.get("email") || "").trim())
      next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.get("email"))))
      next.email = "Enter a valid email";
    if (!String(form.get("phone") || "").trim())
      next.phone = "Phone is required";
    if (!String(form.get("location") || "").trim())
      next.location = "Location is required";

    const file = form.get("resume") as File | null;
    if (!file || !file.name) next.resume = "Resume is required";
    else if (file.size > 5 * 1024 * 1024)
      next.resume = "Resume must be under 5MB";
    else if (!/\.(pdf|doc|docx)$/i.test(file.name))
      next.resume = "Only PDF or DOC files are allowed";

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length) return;

    setLoading(true);

    try {
      await fetch(`https://${company.domain}/api/career-application`, {
        method: "POST",
        body: form,
      });
    } catch {
      // ignore response or error per requirements
    }

    setLoading(false);
    onClose();
    setSuccessOpen(true);
    formEl.reset();
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99998] flex items-center justify-center bg-black/50 px-4 py-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-three dark:bg-gray-dark md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 text-body-color hover:text-primary"
            >
              <X size={20} />
            </button>
            <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
              Apply for {job.title}
            </h3>
            <p className="mb-6 text-sm text-body-color dark:text-body-color-dark">
              {job.department} | {job.location}
            </p>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="jobId" value={job.id} />
              <input type="hidden" name="jobTitle" value={job.title} />
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Full Name
                  </label>
                  <input name="fullName" type="text" className={inputClass} />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Email
                  </label>
                  <input name="email" type="email" className={inputClass} />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Phone
                  </label>
                  <input name="phone" type="tel" className={inputClass} />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Current Location
                  </label>
                  <input name="location" type="text" className={inputClass} />
                  {errors.location && (
                    <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Resume (PDF/DOC, max 5MB)
                  </label>
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className={inputClass}
                  />
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-500">{errors.resume}</p>
                  )}
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                    Cover Letter (optional)
                  </label>
                  <textarea
                    name="coverLetter"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full rounded-xs bg-primary py-3 text-base font-medium text-white hover:bg-primary/90 disabled:opacity-70"
              >
                {loading ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" size={18} />
                    Submitting...
                  </span>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <ThankYouModal
        isOpen={successOpen}
        message="Thank you! Our team will review your application and reach you soon."
        onClose={() => setSuccessOpen(false)}
      />
    </>
  );
};

export default CareerFormModal;
