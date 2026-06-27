import { Metadata } from "next";
import company from "@/data/company.json";

const OG_IMAGE_URL = `${company.url}/images/og-default.png`;
const OG_IMAGE_ALT = `${company.brandName} — IT and Software Development Company in India`;

type SEOProps = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: "website" | "article";
  articleMeta?: {
    publishedTime?: string;
    authors?: string[];
    tags?: string[];
  };
};

export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
  ogImage = OG_IMAGE_URL,
  ogImageAlt = OG_IMAGE_ALT,
  ogType = "website",
  articleMeta,
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
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      ...(ogType === "article" && articleMeta
        ? {
          publishedTime: articleMeta.publishedTime,
          authors: articleMeta.authors,
          tags: articleMeta.tags,
        }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function organizationSchema() {
  const sameAs = [
    company.social?.facebook,
    company.social?.instagram,
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    url: company.url,
    email: company.email,
    ...(company.phone ? { telephone: company.phone } : {}),
    logo: {
      "@type": "ImageObject",
      url: `${company.url}/images/logo.png`,
      width: 200,
      height: 60,
    },
    foundingDate: String(company.establishedYear),
    description: company.description,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.brandName,
    url: company.url,
    description: company.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${company.url}/blog/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    areaServed: "India",
    url: `${company.url}/services/${slug}/`,
    image: `${company.url}/images/og-default.png`,
  };
}

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type FaqItem = { question: string; answer: string };

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

