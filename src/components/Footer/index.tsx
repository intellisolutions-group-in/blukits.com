"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";
import company from "@/data/company.json";
import servicesData from "@/data/services.json";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <div className="mb-8">
                <Logo height={32} />
              </div>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                {company.description}
              </p>
              <div className="flex items-center gap-3">
                {company.social?.facebook && (
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BluKits Technologies Facebook page"
                    className="flex h-9 w-9 items-center justify-center rounded-sm bg-gray-2 text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:bg-primary dark:hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                )}
                {company.social?.instagram && (
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="BluKits Technologies Instagram profile"
                    className="flex h-9 w-9 items-center justify-center rounded-sm bg-gray-2 text-body-color duration-300 hover:bg-primary hover:text-white dark:bg-[#2C303B] dark:text-body-color-dark dark:hover:bg-primary dark:hover:text-white"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
              </div>

            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <p className="mb-10 text-xl font-bold text-black dark:text-white">
                Company
              </p>
              <ul>
                {[
                  { label: "About Us", href: "/about/" },
                  { label: "Why Choose Us", href: "/why-choose-us/" },
                  { label: "Our Process", href: "/our-process/" },
                  { label: "Blog", href: "/blog/" },
                  { label: "FAQ", href: "/faq/" },
                  { label: "Testimonials", href: "/testimonials/" },
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

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <p className="mb-10 text-xl font-bold text-black dark:text-white">
                Services
              </p>
              <ul>
                <li>
                  <Link
                    href="/services/"
                    className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    All Services
                  </Link>
                </li>
                {servicesData.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <p className="mb-10 text-xl font-bold text-black dark:text-white">
                Contact
              </p>
              <ul className="space-y-3 text-base text-body-color dark:text-body-color-dark">
                <li>
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                {company.phone && (
                  <li>
                    <a href={`tel:${company.phone}`} className="hover:text-primary">
                      {company.phone}
                    </a>
                  </li>
                )}
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
