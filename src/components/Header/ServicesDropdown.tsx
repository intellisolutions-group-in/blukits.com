"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServicesMenuColumns } from "@/lib/nav-services";
import { getServiceIcon } from "@/lib/service-icons";

type ServicesDropdownProps = {
  open: boolean;
  onNavigate: () => void;
  activePath?: string;
};

const columns = getServicesMenuColumns();

const ServicesDropdown = ({ open, onNavigate, activePath }: ServicesDropdownProps) => {
  const isServiceActive = (path: string) =>
    activePath?.replace(/\/$/, "") === path.replace(/\/$/, "");

  return (
    <div
      className={`lg:absolute lg:top-full lg:left-1/2 lg:z-50 lg:-translate-x-1/2 lg:pt-2 ${
        open ? "block" : "hidden lg:group-hover:block"
      }`}
    >
      <div className="submenu overflow-hidden rounded-md bg-gray-light py-2 lg:w-[min(860px,calc(100vw-2rem))] lg:rounded-2xl lg:border lg:border-stroke lg:bg-white lg:p-0 lg:shadow-three lg:dark:border-stroke-dark lg:dark:bg-dark">
        <div className="flex flex-col lg:flex-row">
          <aside className="bg-primary px-5 py-5 text-white lg:w-[210px] lg:shrink-0 lg:px-6 lg:py-7">
            <p className="mb-2 text-lg font-bold leading-snug">Our Services</p>
            <p className="mb-5 text-sm leading-relaxed text-white/80">
              18 solutions across web, mobile, cloud, and enterprise software.
            </p>
            <Link
              href="/services/"
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-xs bg-white px-4 py-2.5 text-sm font-semibold text-primary transition hover:bg-white/90"
            >
              View all services
              <ArrowRight size={15} />
            </Link>
          </aside>

          <div className="grid flex-1 grid-cols-1 gap-5 px-4 py-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 lg:px-5 lg:py-5">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mb-3 border-b border-stroke pb-2 text-xs font-bold uppercase tracking-wide text-primary dark:border-stroke-dark">
                  {column.title}
                </p>
                <ul className="space-y-0.5">
                  {column.items.map((item) => {
                    const Icon = getServiceIcon(item.slug);
                    const active = isServiceActive(item.path);

                    return (
                      <li key={item.slug}>
                        <Link
                          href={item.path}
                          onClick={onNavigate}
                          className={`group flex items-start gap-2.5 rounded-lg px-2 py-2 transition-colors ${
                            active
                              ? "bg-primary/10 text-primary"
                              : "text-dark hover:bg-primary/5 dark:text-white/80 dark:hover:bg-primary/10 dark:hover:text-white"
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                              active
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
                            }`}
                          >
                            <Icon size={15} strokeWidth={2} />
                          </span>
                          <span className="text-sm font-medium leading-snug">{item.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
