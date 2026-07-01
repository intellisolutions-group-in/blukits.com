"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronRight,
  Clock,
  User,
  Share2,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import { parseServiceParagraphs } from "@/lib/service-content";
import type { BlogPost } from "@/types/blog";

type BlogDetailContentProps = {
  post: BlogPost;
  related: BlogPost[];
};

const BlogDetailContent = ({ post, related }: BlogDetailContentProps) => {
  const paragraphs = parseServiceParagraphs(post.content);

  // Initials for avatar
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  // States
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy Link
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Render Rich Paragraphs
  const renderParagraph = (para: string, index: number) => {
    if (para.startsWith("### ")) {
      const headingText = para.slice(4);
      return (
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          key={index}
          className="mt-10 mb-5 text-2xl font-bold tracking-tight text-dark border-b border-stroke pb-3 dark:border-stroke-dark dark:text-white first:mt-4"
        >
          {headingText}
        </motion.h3>
      );
    }

    if (para.startsWith("> ")) {
      const quoteText = para.slice(2);
      return (
        <motion.blockquote
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          key={index}
          className="relative my-8 border-l-4 border-primary bg-primary/5 pl-6 py-4 pr-4 italic text-lg md:text-xl text-dark/95 dark:text-white/95 rounded-r-2xl font-medium leading-relaxed shadow-xs"
        >
          <span className="absolute -left-3 -top-4 text-7xl text-primary/15 font-serif select-none pointer-events-none">“</span>
          {quoteText}
        </motion.blockquote>
      );
    }

    if (para.startsWith("- ")) {
      const listItems = para.split("\n").map(line => line.replace(/^-\s*/, ""));
      return (
        <motion.ul
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          key={index}
          className="my-6 pl-1 space-y-3.5 list-none"
        >
          {listItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-base text-body-color dark:text-body-color-dark leading-relaxed">
              <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      );
    }

    // Default text paragraph
    // Add Drop Cap for the first regular paragraph
    if (index === 0) {
      return (
        <p key={index} className="mb-8 text-lg leading-relaxed text-dark dark:text-white font-medium md:text-xl md:leading-9 first-letter:text-5xl first-letter:font-extrabold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
          {para}
        </p>
      );
    }

    return (
      <p key={index} className="mb-6 text-base leading-relaxed text-body-color dark:text-body-color-dark md:text-[17px] md:leading-8">
        {para}
      </p>
    );
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 z-50 h-[4px] w-full bg-stroke dark:bg-stroke-dark">
        <div
          className="h-full bg-primary shadow-[0_0_8px_rgba(26,115,232,0.6)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-transparent to-primary/0 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl opacity-60" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl opacity-40" />
        </div>

        <div className="container mt-8 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex flex-wrap items-center gap-2 text-sm"
          >
            <Link href="/" className="text-body-color hover:text-primary dark:text-body-color-dark transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-body-color/60" />
            <Link href="/blog/" className="text-body-color hover:text-primary dark:text-body-color-dark transition-colors">
              Blog
            </Link>
            <ChevronRight size={14} className="text-body-color/60" />
            <span className="line-clamp-1 font-medium text-primary">{post.title}</span>
          </motion.nav>

          {/* Heading and category badge */}
          <div className="mx-auto max-w-[900px] text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-5 inline-block rounded-full bg-primary/10 px-4.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs"
            >
              {post.category}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-3xl font-extrabold leading-tight text-dark dark:text-white sm:text-4xl md:text-5xl lg:text-[50px] tracking-tight"
            >
              {post.title}
            </motion.h1>

            {/* Quick metadata panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-body-color dark:text-body-color-dark border-t border-stroke/60 pt-6 dark:border-stroke-dark/40"
            >





              <span className="inline-flex items-center gap-1.5">
                <Clock size={15} className="text-primary" />
                {post.readTime}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Layout Area */}
      <section className="pb-24 pt-10 dark:bg-black/20">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* LEFT: Blog content (8 Columns) */}
            <div className="lg:col-span-8">
              {post.image && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative mb-12 aspect-[21/10] w-full overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 to-primary/5 shadow-two dark:shadow-three"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    priority
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                </motion.div>
              )}

              {/* Parsed Blog Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none text-base md:text-lg">
                {paragraphs.map((para, index) => renderParagraph(para, index))}
              </div>

              {/* Share actions in content block */}
              <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-y border-stroke py-6 dark:border-stroke-dark/60">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-primary" />
                  <span className="text-sm font-medium text-dark dark:text-white">Tags:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(tag => (
                      <span key={tag} className="rounded-md bg-gray-light px-2.5 py-1 text-xs font-semibold text-body-color dark:bg-dark dark:text-body-color-dark">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>


              </div>
            </div>

            {/* RIGHT: Sticky Sidebar (4 Columns) */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">



                {/* Call-to-action Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-[#1d5fb9] p-8 text-white shadow-feature-2"
                >
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-all" />
                  <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                      <Sparkles size={22} className="animate-pulse" />
                    </div>

                    <h4 className="mb-4 text-xl font-bold leading-snug">Have a Custom Project in Mind?</h4>
                    <p className="mb-6 text-sm text-white/80 leading-relaxed">
                      Let's build a secure, highly scalable solution customized to solve your specific workflows and drive operational growth.
                    </p>

                    <Link
                      href="/contact/"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-primary transition-all duration-300 hover:bg-gray-light hover:gap-3 shadow-md"
                    >
                      Talk to our Experts
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="border-t border-stroke py-20 dark:border-stroke-dark/40 bg-gray-light/20 dark:bg-black/10">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-dark dark:text-white tracking-tight">
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
