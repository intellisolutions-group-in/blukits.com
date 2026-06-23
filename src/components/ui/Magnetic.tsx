"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

type MagneticProps = {
  children: React.ReactElement;
};

export default function Magnetic({ children }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from cursor to center
    const x = clientX - centerX;
    const y = clientY - centerY;
    
    // Pull factor (detaches button and attracts it by 35% of the distance offset)
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    // Return back to static coordinate origin
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 180, damping: 12, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
