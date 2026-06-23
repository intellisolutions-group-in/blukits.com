import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

const CTASection = ({
  title = "Ready to start your next software project?",
  description = "Speak with BluKits Technologies to discuss your requirements and receive a practical delivery plan.",
  primaryLabel = "Contact Us",
  primaryHref = "/contact/",
  secondaryLabel = "View Services",
  secondaryHref = "/services/",
}: CTASectionProps) => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="shadow-three dark:bg-gray-dark rounded-xs bg-primary/5 px-8 py-12 text-center md:px-16 md:py-16">
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mb-8 max-w-[640px] text-base text-body-color dark:text-body-color-dark md:text-lg">
            {description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="rounded-xs bg-black px-8 py-4 text-base font-semibold text-white duration-300 hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
