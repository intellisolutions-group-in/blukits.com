"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import CTASection from "@/components/sections/CTASection";
import { PAGE_TOP_PADDING } from "@/lib/layout";
import type { BlogPost } from "@/types/blog";

type BlogListContentProps = {
  posts: BlogPost[];
};

const BlogListContent = ({ posts }: BlogListContentProps) => {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className={`relative overflow-hidden pb-8 ${PAGE_TOP_PADDING}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #4a6cf7 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="container relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link href="/" className="text-body-color hover:text-primary dark:text-body-color-dark">
              Home
            </Link>
            <ChevronRight size={14} className="text-body-color" />
            <span className="font-medium text-primary">Blog</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 max-w-[720px]"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Insights and Updates
            </span>
            <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white md:text-4xl">
              Software Development Blog
            </h1>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-lg">
              Practical articles on web development, mobile apps, cloud, security, and
              software delivery for businesses across India.
            </p>
          </motion.div>

          {featured && (
            <div className="mb-10">
              <BlogCard post={featured} featured delay={0.1} />
            </div>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <BlogCard key={post.slug} post={post} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need help with your software project?"
        description="Talk to BluKits Technologies about your requirements and get a practical delivery plan."
      />
    </>
  );
};

export default BlogListContent;
