"use client";

import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import ThankYouModal from "./ThankYouModal";

type ContactFormProps = {
  submitLabel?: string;
  showSubject?: boolean;
};

const inputClass =
  "border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none";

const labelClass =
  "mb-3 block text-sm font-medium text-dark dark:text-white";

const ContactForm = ({
  submitLabel = "Send Message",
  showSubject = true,
}: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    if (!String(form.get("name") || "").trim()) next.name = "Name is required";
    if (!String(form.get("email") || "").trim())
      next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.get("email"))))
      next.email = "Enter a valid email";
    if (!String(form.get("phone") || "").trim())
      next.phone = "Phone is required";
    if (!String(form.get("message") || "").trim())
      next.message = "Message is required";
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
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setModalOpen(true);
    formEl.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={inputClass}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={inputClass}
                placeholder="Your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className={inputClass}
                placeholder="Your phone number"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>
          {showSubject && (
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label htmlFor="subject" className={labelClass}>
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className={inputClass}
                  placeholder="How can we help?"
                />
              </div>
            </div>
          )}
          <div className="w-full px-4">
            <div className="mb-8">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="w-full px-4">
            <button
              type="submit"
              disabled={loading}
              className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 disabled:opacity-70 dark:shadow-submit-dark"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </span>
              ) : (
                submitLabel
              )}
            </button>
          </div>
        </div>
      </form>
      <ThankYouModal
        isOpen={modalOpen}
        message="Thank you! We will reach you soon."
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ContactForm;
