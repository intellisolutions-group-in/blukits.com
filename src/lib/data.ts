import company from "@/data/company.json";
import offices from "@/data/offices.json";
import testimonials from "@/data/testimonials.json";
import faq from "@/data/faq.json";
import careers from "@/data/careers.json";
import blogs from "@/data/blogs.json";
import services from "@/data/services.json";

export { company, offices, testimonials, faq, careers, blogs, services };

export function getBlogBySlug(slug: string) {
  return blogs.find((post) => post.slug === slug);
}

export function getRelatedBlogs(slug: string, limit = 3) {
  return blogs.filter((post) => post.slug !== slug).slice(0, limit);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  return services.filter((s) => s.slug !== slug).slice(0, limit);
}
