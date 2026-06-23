import { notFound } from "next/navigation";
import ScrollUp from "@/components/Common/ScrollUp";
import BlogDetailContent from "@/components/sections/blog/BlogDetailContent";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";
import { blogs, getBlogBySlug, getRelatedBlogs } from "@/lib/data";
import company from "@/data/company.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    path: `/blog/${slug}/`,
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishDate,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.designation,
    },
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
    },
    url: `${company.url}/blog/${slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ScrollUp />
      <BlogDetailContent post={post} related={related} />
      <CTASection />
    </>
  );
}
