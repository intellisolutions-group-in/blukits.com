"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { getServiceIcon } from "@/lib/service-icons";

type ServiceCardProps = {
  title: string;
  description: string;
  slug: string;
  category?: string;
  technologies?: string[];
  index?: number;
  variant?: "default" | "featured" | "compact";
  delay?: number;
};

const ServiceCard = ({
  title,
  description,
  slug,
  category,
  technologies = [],
  index,
  variant = "default",
  delay = 0,
}: ServiceCardProps) => {
  const Icon = getServiceIcon(slug);
  const isFeatured = variant === "featured";
  const isCompact = variant === "compact";

  // Spotlight coordinates state
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCoords({ x: clientX - left, y: clientY - top });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative h-full overflow-hidden rounded-xl border border-transparent bg-white transition-shadow duration-300 dark:bg-dark ${
        isFeatured
          ? "shadow-feature-2 p-8 md:p-10 lg:p-12"
          : isCompact
            ? "shadow-two p-6 dark:shadow-three"
            : "shadow-two p-8 dark:shadow-three"
      } hover:shadow-feature-2 dark:hover:shadow-gray-dark`}
    >
      {/* Spotlight Hover Glow Layer */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(74, 108, 247, 0.12), transparent 80%)`
          }}
        />
      )}

      <div className="pointer-events-none absolute inset-0 rounded-xl bg-linear-to-br from-primary/0 via-primary/0 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-primary/5 group-hover:opacity-100" />

      <div
        className={`pointer-events-none absolute -right-8 -top-8 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20 ${
          isFeatured ? "h-40 w-40" : "h-24 w-24"
        }`}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className={`flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white ${
                isFeatured ? "h-14 w-14" : "h-12 w-12"
              }`}
            >
              <Icon size={isFeatured ? 26 : 22} strokeWidth={1.75} />
            </div>
            {index !== undefined && (
              <span className="text-3xl font-bold text-primary/15 dark:text-primary/25">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <Link
            href={`/services/${slug}/`}
            aria-label={`Learn more about ${title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-stroke text-body-color opacity-0 transition-all duration-300 group-hover:opacity-100 hover:border-primary hover:bg-primary hover:text-white dark:border-stroke-dark dark:text-body-color-dark"
          >
            <ArrowUpRight size={18} />
          </Link>
        </div>

        {category && (
          <span className="mb-2 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            {category}
          </span>
        )}

        <h3
          className={`mb-3 font-bold text-black dark:text-white ${
            isFeatured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mb-6 flex-1 text-body-color dark:text-body-color-dark ${
            isFeatured ? "text-base md:text-lg" : "text-sm md:text-base"
          }`}
        >
          {description}
        </p>

        {isFeatured && technologies.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/services/${slug}/`}
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
        >
          Learn more
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 rounded-full bg-primary transition-all duration-500 group-hover:w-full" />
    </motion.article>
  );
};

export default ServiceCard;
