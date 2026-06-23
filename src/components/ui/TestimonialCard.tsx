"use client";

import { useState } from "react";
import { Quote } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  designation: string;
  content: string;
};

const TestimonialCard = ({
  name,
  designation,
  content,
}: TestimonialCardProps) => {
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
      className="relative shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300 overflow-hidden"
    >
      {/* Spotlight Hover Glow Layer */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(280px circle at ${coords.x}px ${coords.y}px, rgba(74, 108, 247, 0.1), transparent 80%)`
          }}
        />
      )}

      <div className="relative z-10">
        <Quote className="mb-4 text-primary" size={28} />
        <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
          {content}
        </p>
        <div>
          <h4 className="text-lg font-semibold text-dark dark:text-white">
            {name}
          </h4>
          <p className="text-sm text-body-color dark:text-body-color-dark">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
