"use client";

import Link from "next/link";

const Logo = ({
  height = 40,
  className = "",
  compact = false,
}: {
  height?: number;
  className?: string;
  compact?: boolean;
}) => {
  const fontSize =
    height <= 32 || compact ? "text-base sm:text-lg" : "text-lg sm:text-xl";

  return (
    <Link
      href="/"
      className={`inline-flex max-w-none items-center whitespace-nowrap ${className}`}
      aria-label="BluKits Technologies Logo"
    >
      <span
        className={`${fontSize} inline-flex items-center gap-1.5 font-bold leading-none tracking-tight`}
      >
        <span className="text-primary">BluKits</span>
        <span className="text-dark dark:text-white">Technologies</span>
      </span>
    </Link>
  );
};

export default Logo;
