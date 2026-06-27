import { notFound } from "next/navigation";
import ScrollUp from "@/components/Common/ScrollUp";
import BlogDetailContent from "@/components/sections/blog/BlogDetailContent";
import CTASection from "@/components/sections/CTASection";
import { buildMetadata, breadcrumbSchema } from "@/lib/seo";
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
    ogType: "article",
    ogImage: post.image?.startsWith("/")
      ? `${company.url}${post.image}`
      : `${company.url}/images/og-default.png`,
    ogImageAlt: post.title,
    articleMeta: {
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.tags,
    },
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = getRelatedBlogs(slug);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image?.startsWith("/")
      ? `${company.url}${post.image}`
      : `${company.url}/images/og-default.png`,
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    url: `${company.url}/blog/${slug}/`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${company.url}/blog/${slug}/`,
    },
    wordCount: post.content ? Math.ceil(post.content.split(/\s+/).length) : undefined,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.designation,
    },
    publisher: {
      "@type": "Organization",
      name: company.brandName,
      url: company.url,
      logo: {
        "@type": "ImageObject",
        url: `${company.url}/images/logo.png`,
      },
    },
    keywords: post.tags?.join(", "),
  };

  const crumbSchema = breadcrumbSchema([
    { name: "Home", url: company.url },
    { name: "Blog", url: `${company.url}/blog/` },
    { name: post.title, url: `${company.url}/blog/${slug}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbSchema) }}
      />
      <ScrollUp />
      <BlogDetailContent post={post} related={related} />
      <CTASection />
    </>
  );
}

