import { Metadata } from "next";
import company from "@/data/company.json";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
};

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
}: SEOProps): Metadata {
  const url = `${company.url}${path}`;
  const fullTitle = `${title} | ${company.brandName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.brandName,
      locale: "en_IN",
      type: "website",
    },
    alternates: {
      canonical: url,
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    url: company.url,
    email: company.email,
    foundingDate: String(company.establishedYear),
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };
}

export function serviceSchema(
  name: string,
  description: string,
  slug: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    areaServed: "India",
    url: `${company.url}/services/${slug}/`,
  };
}
