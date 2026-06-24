"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = ({
  height = 40,
  className = "",
  compact = false,
}: {
  height?: number;
  className?: string;
  compact?: boolean;
}) => {
  const logoHeight = compact ? Math.min(height, 32) : height;
  // The logo image has roughly 4:1 aspect ratio
  const logoWidth = Math.round(logoHeight * 4);

  return (
    <Link
      href="/"
      className={`inline-flex max-w-none items-center whitespace-nowrap ${className}`}
      aria-label="BluKits Technologies Logo"
    >
      {/* Light mode logo */}
      <Image
        src="/images/logo.png"
        alt="BluKits Technologies"
        width={logoWidth}
        height={logoHeight}
        priority
        className="object-contain dark:hidden"
        style={{ height: logoHeight, width: "auto" }}
      />
      {/* Dark mode logo */}
      <Image
        src="/images/logo-white.png"
        alt="BluKits Technologies"
        width={logoWidth}
        height={logoHeight}
        priority
        className="object-contain hidden dark:block"
        style={{ height: logoHeight, width: "auto" }}
      />
    </Link>
  );
};

export default Logo;

