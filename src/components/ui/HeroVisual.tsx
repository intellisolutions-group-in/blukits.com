"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Code2, Globe, Rocket, Smartphone } from "lucide-react";
import company from "@/data/company.json";

const codeSnippets = [
  'const product = build({ quality: "enterprise" });',
  "await deploy({ scale: true, secure: true });",
  "shipFeatures(clients, roadmap);",
];

const pillars = [
  { Icon: Globe, label: "Web", x: "6%", y: "10%", delay: 0 },
  { Icon: Smartphone, label: "Mobile", x: "78%", y: "8%", delay: 0.12 },
  { Icon: Cloud, label: "Cloud", x: "4%", y: "72%", delay: 0.24 },
  { Icon: Rocket, label: "Delivery", x: "76%", y: "70%", delay: 0.36 },
];

const stats = [
  { value: "18+", label: "Services" },
  { value: String(company.establishedYear), label: "Since" },
  { value: "India", label: "HQ" },
];

const HeroVisual = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const currentLine = codeSnippets[lineIndex];
  const typed = currentLine.slice(0, charIndex);

  useEffect(() => {
    const isComplete = charIndex >= currentLine.length;
    const timeout = setTimeout(
      () => {
        if (isComplete) {
          setCharIndex(0);
          setLineIndex((i) => (i + 1) % codeSnippets.length);
        } else {
          setCharIndex((c) => c + 1);
        }
      },
      isComplete ? 1800 : 38,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, currentLine.length]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-br from-primary/[0.06] via-white to-primary/[0.04] dark:from-primary/10 dark:via-gray-dark dark:to-primary/5">
      <div
        className="absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,108,247,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(74,108,247,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 320"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.circle
          cx="200"
          cy="160"
          r="88"
          fill="none"
          stroke="url(#heroRing)"
          strokeWidth="1"
          strokeDasharray="6 10"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 160px" }}
        />
        <motion.circle
          cx="200"
          cy="160"
          r="118"
          fill="none"
          stroke="rgba(74,108,247,0.15)"
          strokeWidth="1"
          strokeDasharray="4 14"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "200px 160px" }}
        />
        <defs>
          <linearGradient id="heroRing" x1="0" y1="0" x2="400" y2="320">
            <stop stopColor="#4a6cf7" stopOpacity="0.8" />
            <stop offset="1" stopColor="#4a6cf7" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {pillars.map(({ Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute z-20"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.5, delay },
            y: { duration: 4 + delay * 2, repeat: Infinity, ease: "easeInOut", delay },
          }}
        >
          <div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md dark:bg-dark/90 dark:shadow-none">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={16} strokeWidth={2} />
            </span>
            <span className="text-xs font-semibold text-dark dark:text-white">{label}</span>
          </div>
        </motion.div>
      ))}

      <div className="absolute left-1/2 top-1/2 z-30 w-[78%] max-w-[300px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-primary/20 bg-white/95 shadow-2xl backdrop-blur-sm dark:bg-[#1a1f2e]/95"
        >
          <div className="flex items-center gap-1.5 border-b border-stroke/60 px-3 py-2 dark:border-stroke-dark">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            <span className="ml-2 text-[10px] font-medium text-body-color dark:text-body-color-dark">
              blukits-engineering.ts
            </span>
          </div>
          <div className="space-y-2 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
            <p className="text-body-color dark:text-body-color-dark">
              <span className="text-primary">import</span> {"{ build, deploy }"}{" "}
              <span className="text-primary">from</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-400">&apos;@blukits/core&apos;</span>
            </p>
            <p className="min-h-[1.25rem] text-dark dark:text-white">
              <span className="text-primary">{"// "}</span>
              {typed}
              <motion.span
                className="ml-0.5 inline-block h-3.5 w-0.5 bg-primary align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {["Next.js", "React", "Node", "TypeScript"].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute -right-2 -top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg"
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={20} strokeWidth={2} />
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 px-4 sm:gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="rounded-lg border border-primary/15 bg-white/80 px-3 py-2 text-center shadow-md backdrop-blur-sm dark:bg-dark/80"
          >
            <p className="text-sm font-bold text-primary">{stat.value}</p>
            <p className="text-[10px] font-medium text-body-color dark:text-body-color-dark">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
