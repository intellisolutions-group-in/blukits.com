import { MetadataRoute } from "next";
import { blogs, services } from "@/lib/data";
import company from "@/data/company.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = company.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/why-choose-us/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-process/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...servicePages];
}
