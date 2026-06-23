"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import type { BlogPost } from "@/types/blog";

type BlogCardProps = {
  post: BlogPost;
  delay?: number;
  featured?: boolean;
};

const BlogCard = ({ post, delay = 0, featured = false }: BlogCardProps) => {
  const initials = post.author.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={`group relative h-full overflow-hidden rounded-2xl bg-white shadow-two transition-shadow hover:shadow-feature-2 dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark ${
        featured ? "md:flex md:items-stretch" : ""
      }`}
    >
      <Link
        href={`/blog/${post.slug}/`}
        className={`relative block overflow-hidden bg-linear-to-br from-primary/20 via-primary/10 to-primary/5 ${
          featured ? "md:w-2/5" : "aspect-[16/10] w-full"
        }`}
      >
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        <div className="absolute top-4 left-4 z-10">
          <span className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm backdrop-blur-xs dark:bg-dark/95">
            {post.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
      </Link>

      <div className={`flex flex-col p-6 sm:p-8 ${featured ? "md:w-3/5 md:justify-center" : ""}`}>
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={`mb-3 font-bold text-dark transition-colors group-hover:text-primary dark:text-white ${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
        </h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-body-color dark:text-body-color-dark md:text-base">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-stroke pt-5 dark:border-stroke-dark">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              {initials}
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-dark dark:text-white">
                <User size={14} className="text-primary" />
                {post.author.name}
              </p>
              <p className="text-xs text-body-color dark:text-body-color-dark">
                {post.author.designation}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-body-color dark:text-body-color-dark">
            <span className="inline-flex items-center gap-1">
              <Calendar size={14} className="text-primary" />
              {new Date(post.publishDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock size={14} className="text-primary" />
              {post.readTime}
            </span>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}/`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
        >
          Read Article
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
};

export default BlogCard;
