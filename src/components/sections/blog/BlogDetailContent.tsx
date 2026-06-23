"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, User } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { parseServiceParagraphs } from "@/lib/service-content";
import { PAGE_TOP_PADDING } from "@/lib/layout";
import type { BlogPost } from "@/types/blog";

type BlogDetailContentProps = {
  post: BlogPost;
  related: BlogPost[];
};

const BlogDetailContent = ({ post, related }: BlogDetailContentProps) => {
  const paragraphs = parseServiceParagraphs(post.content);
  const lead = paragraphs[0] ?? "";
  const body = paragraphs.slice(1);
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <>
      <section className={`relative overflow-hidden pb-10 ${PAGE_TOP_PADDING}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
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
            <Link href="/blog/" className="text-body-color hover:text-primary dark:text-body-color-dark">
              Blog
            </Link>
            <ChevronRight size={14} className="text-body-color" />
            <span className="line-clamp-1 font-medium text-primary">{post.title}</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-[800px]"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
              {post.category}
            </span>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-dark dark:text-white md:text-4xl lg:text-[42px]">
              {post.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-6 border-b border-stroke pb-8 dark:border-stroke-dark">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {initials}
                </div>
                <div>
                  <p className="flex items-center gap-1 font-medium text-dark dark:text-white">
                    <User size={14} className="text-primary" />
                    {post.author.name}
                  </p>
                  <p className="text-sm text-body-color dark:text-body-color-dark">
                    {post.author.designation}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 text-sm text-body-color dark:text-body-color-dark">
                <Calendar size={14} className="text-primary" />
                {new Date(post.publishDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="inline-flex items-center gap-1 text-sm text-body-color dark:text-body-color-dark">
                <Clock size={14} className="text-primary" />
                {post.readTime}
              </span>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="dark:bg-bg-color-dark/40 bg-gray-light/60 pb-16 md:pb-20">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            {lead && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="shadow-two mb-8 rounded-2xl border-l-4 border-primary bg-white p-6 md:p-8 dark:bg-dark dark:shadow-three"
              >
                <p className="text-base leading-relaxed text-dark dark:text-white md:text-lg md:leading-8">
                  {lead}
                </p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="shadow-two space-y-6 rounded-2xl bg-white p-6 md:p-8 dark:bg-dark dark:shadow-three"
            >
              {body.map((para) => (
                <p
                  key={para.slice(0, 60)}
                  className="text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-[17px] md:leading-8"
                >
                  {para}
                </p>
              ))}
            </motion.div>

            <div className="mt-10 rounded-2xl bg-primary/5 p-6 text-center dark:bg-primary/10 md:p-8">
              <p className="mb-4 text-lg font-semibold text-dark dark:text-white">
                Planning a software project?
              </p>
              <p className="mb-6 text-body-color dark:text-body-color-dark">
                BluKits Technologies can help you turn ideas into dependable applications.
              </p>
              <Link
                href="/contact/"
                className="inline-block rounded-xs bg-primary px-8 py-3 text-base font-semibold text-white hover:bg-primary/90"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-bold text-dark dark:text-white md:text-3xl">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((item, i) => (
                <BlogCard key={item.slug} post={item} delay={i * 0.08} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogDetailContent;
