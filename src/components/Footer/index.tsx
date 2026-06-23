"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import company from "@/data/company.json";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <div className="mb-8">
                <Logo height={32} />
              </div>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {company.description}
              </p>
              <div className="flex items-center gap-4">
                <span
                  className="text-body-color dark:text-body-color-dark"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </span>
                <span
                  className="text-body-color dark:text-body-color-dark"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Company
              </h2>
              <ul>
                {[
                  { label: "About Us", href: "/about/" },
                  { label: "Why Choose Us", href: "/why-choose-us/" },
                  { label: "Our Process", href: "/our-process/" },
                  { label: "Blog", href: "/blog/" },
                  { label: "Careers", href: "/careers/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Services
              </h2>
              <ul>
                {[
                  { label: "All Services", href: "/services/" },
                  { label: "Web Development", href: "/services/web-development/" },
                  { label: "Mobile Apps", href: "/services/mobile-app-development/" },
                  { label: "Software Consulting", href: "/services/software-consulting/" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                Contact
              </h2>
              <ul className="space-y-3 text-base text-body-color dark:text-body-color-dark">
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-center text-base text-body-color dark:text-white">
            Copyright {new Date().getFullYear()} {company.brandName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="text-base text-body-color hover:text-primary dark:text-body-color-dark">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="text-base text-body-color hover:text-primary dark:text-body-color-dark">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
