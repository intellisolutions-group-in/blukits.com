import ScrollUp from "@/components/Common/ScrollUp";
import BlogListContent from "@/components/sections/blog/BlogListContent";
import { buildMetadata } from "@/lib/seo";
import { blogs } from "@/lib/data";
import company from "@/data/company.json";

export const metadata = buildMetadata({
  title: "Blog",
  description: `Read software development insights, guides, and best practices from ${company.brandName}.`,
  keywords: ["software blog", "web development articles", "IT insights India"],
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <>
      <ScrollUp />
      <BlogListContent posts={blogs} />
    </>
  );
}
