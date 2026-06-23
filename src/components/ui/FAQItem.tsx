"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  // Spotlight coordinates state
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setCoords({ x: clientX - left, y: clientY - top });
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative border-stroke dark:border-stroke-dark mb-4 rounded-xs border bg-white dark:bg-gray-dark overflow-hidden transition-all duration-300"
    >
      {/* Spotlight Hover Glow Layer */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(74, 108, 247, 0.08), transparent 80%)`
          }}
        />
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative z-10 flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <span className="pr-4 text-base font-semibold text-dark dark:text-white">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 overflow-hidden"
          >
            <p className="border-stroke dark:border-stroke-dark border-t px-6 py-4 text-base text-body-color dark:text-body-color-dark">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQItem;
