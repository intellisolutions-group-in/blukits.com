"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import company from "@/data/company.json";
import HeroVisual from "@/components/ui/HeroVisual";
import ThreeDCanvas from "@/components/canvas/ThreeDCanvas";
import Magnetic from "@/components/ui/Magnetic";

const HomeHero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]"
    >
      {/* 3D Wireframe Cyber-Terrain Wave */}
      <ThreeDCanvas />

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[600px] lg:text-left"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                IT and Software Development
              </span>
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-[42px] md:leading-tight">
                Trusted Software Development Partner for Modern Businesses in India
              </h1>
              <p className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                {company.brandName} delivers web, mobile, desktop, and enterprise software with
                engineering discipline, transparent delivery, and long-term support since{" "}
                {company.establishedYear}.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Magnetic>
                  <Link
                    href="/contact/"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 block"
                  >
                    Start a Project
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    href="/services/"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Explore Services
                  </Link>
                </Magnetic>
              </div>
            </motion.div>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative mx-auto mt-12 max-w-[540px] lg:mt-0 lg:ml-auto"
            >
              <div className="shadow-feature-2 relative overflow-hidden rounded-2xl border border-primary/10 bg-white dark:bg-dark">
                <div className="aspect-[5/4] w-full sm:aspect-[4/3]">
                  <HeroVisual />
                </div>
              </div>
              <div className="pointer-events-none absolute -right-3 -top-3 h-20 w-20 rounded-full bg-primary/20 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 top-0 z-[-1] opacity-20 lg:opacity-40">
        <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_hero)" />
          <defs>
            <linearGradient id="paint0_linear_hero" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1] opacity-20 lg:opacity-40">
        <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_hero_wave)"
          />
          <defs>
            <linearGradient id="paint0_linear_hero_wave" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default HomeHero;
