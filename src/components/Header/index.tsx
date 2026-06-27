"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import ServicesDropdown from "./ServicesDropdown";
import Logo from "@/components/ui/Logo";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "";
  const solidHeader = !isHome || scrolled;

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setNavbarOpen(false);
    setOpenIndex(-1);
  }, [pathname]);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const isActive = (path: string) => {
    if (path === "/") return isHome;
    return pathname?.startsWith(path.replace(/\/$/, ""));
  };

  const linkClass = (active: boolean) =>
    `inline-flex items-center text-base font-medium transition-colors ${
      active
        ? "text-primary dark:text-white"
        : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        solidHeader
          ? "bg-white/95 shadow-sticky backdrop-blur-md dark:bg-gray-dark/95 dark:shadow-sticky-dark"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex h-20 items-center justify-between gap-6">
          <Logo height={36} className="shrink-0" />

          <button
            onClick={navbarToggleHandler}
            id="navbarToggler"
            aria-label="Mobile Menu"
            aria-expanded={navbarOpen}
            aria-controls="navbarCollapse"
            className="ring-primary absolute top-1/2 right-4 z-50 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "top-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                navbarOpen ? "top-[-8px] -rotate-45" : ""
              }`}
            />
          </button>

          <nav
            id="navbarCollapse"
            className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute top-full right-0 z-40 mt-2 max-h-[calc(100vh-6rem)] w-[min(320px,calc(100vw-2rem))] overflow-y-auto rounded-lg border bg-white px-6 py-4 shadow-lg duration-300 lg:static lg:mt-0 lg:max-h-none lg:w-auto lg:overflow-visible lg:flex lg:flex-1 lg:justify-center lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none ${
              navbarOpen
                ? "visible opacity-100"
                : "invisible opacity-0 lg:visible lg:opacity-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-10">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  {"path" in menuItem && menuItem.path ? (
                    <Link
                      href={menuItem.path}
                      onClick={() => setNavbarOpen(false)}
                      className={`${linkClass(isActive(menuItem.path))} py-3 lg:py-0`}
                    >
                      {menuItem.title}
                    </Link>
                  ) : "megaMenu" in menuItem && menuItem.megaMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleSubmenu(index)}
                        className={`${linkClass(isActive("/services/"))} w-full py-3 lg:w-auto lg:py-0`}
                      >
                        <span className="inline-flex items-center gap-1">
                          {menuItem.title}
                          <svg width="18" height="18" viewBox="0 0 25 24" className="opacity-70">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </button>
                      <ServicesDropdown
                        open={openIndex === index}
                        onNavigate={() => setNavbarOpen(false)}
                        activePath={pathname ?? undefined}
                      />
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 pr-14 lg:gap-3 lg:pr-0">
            <Link
              href="/contact/"
              className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 hidden rounded-xs px-5 py-2.5 text-sm font-medium text-white transition duration-300 sm:inline-flex xl:px-8"
            >
              Get in Touch
            </Link>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
