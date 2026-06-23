import services from "@/data/services.json";

export type NavServiceItem = {
  title: string;
  path: string;
  slug: string;
};

export type NavServiceColumn = {
  title: string;
  items: NavServiceItem[];
};

const MENU_COLUMN_SLUGS: { title: string; slugs: string[] }[] = [
  {
    title: "Apps & Platforms",
    slugs: [
      "web-development",
      "mobile-app-development",
      "progressive-web-apps",
      "cross-platform-development",
      "desktop-applications",
      "windows-application-development",
    ],
  },
  {
    title: "Enterprise & Cloud",
    slugs: [
      "custom-software-development",
      "enterprise-applications",
      "cloud-applications",
      "api-development",
      "database-development",
      "cms-development",
    ],
  },
  {
    title: "Design & Delivery",
    slugs: [
      "ui-ux-design",
      "software-testing",
      "ecommerce-development",
      "software-modernization",
      "software-consulting",
      "maintenance-support",
    ],
  },
];

function toNavItem(slug: string): NavServiceItem | null {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  return {
    title: service.title,
    path: `/services/${service.slug}/`,
    slug: service.slug,
  };
}

export function getServicesMenuColumns(): NavServiceColumn[] {
  return MENU_COLUMN_SLUGS.map((column) => ({
    title: column.title,
    items: column.slugs
      .map(toNavItem)
      .filter((item): item is NavServiceItem => item !== null),
  }));
}

export function getAllNavServices(): NavServiceItem[] {
  return services.map((service) => ({
    title: service.title,
    path: `/services/${service.slug}/`,
    slug: service.slug,
  }));
}
