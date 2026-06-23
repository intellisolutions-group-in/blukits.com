"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.querySelector(hash);
      if (!target) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });
    };

    scrollToHash();

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a[href*='#']");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const [path, hash] = href.split("#");
      if (!hash) return;

      const currentPath = pathname.replace(/\/$/, "") || "/";
      const linkPath = (path || currentPath).replace(/\/$/, "") || "/";

      if (linkPath === currentPath) {
        e.preventDefault();
        const target = document.getElementById(hash);
        if (!target) return;

        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        window.history.pushState(null, "", `#${hash}`);
        target.scrollIntoView({
          behavior: prefersReducedMotion ? "auto" : "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
};

export default SmoothScroll;
