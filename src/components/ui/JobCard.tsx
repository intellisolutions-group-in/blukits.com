"use client";

import { useState } from "react";
import { Briefcase, MapPin } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export type Job = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

type JobCardProps = {
  job: Job;
  onApply: (job: Job) => void;
};

const JobCard = ({ job, onApply }: JobCardProps) => {
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
      className="relative shadow-two dark:bg-dark dark:shadow-three rounded-xs bg-white p-8 overflow-hidden transition-all duration-300"
    >
      {/* Spotlight Hover Glow Layer */}
      {isHovered && (
        <div 
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(74, 108, 247, 0.12), transparent 80%)`
          }}
        />
      )}

      <div className="relative z-10">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
              {job.title}
            </h3>
            <div className="flex flex-wrap gap-4 text-sm text-body-color dark:text-body-color-dark">
              <span className="inline-flex items-center gap-1">
                <Briefcase size={14} />
                {job.department}
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} />
                {job.location}
              </span>
            </div>
          </div>
          <span className="rounded-xs bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            {job.type}
          </span>
        </div>
        <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
          {job.description}
        </p>
        <ul className="mb-6 list-disc space-y-2 pl-5 text-sm text-body-color dark:text-body-color-dark">
          {job.requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
        
        {/* Magnetic Apply Button */}
        <Magnetic>
          <button
            type="button"
            onClick={() => onApply(job)}
            className="rounded-xs bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
          >
            Apply Now
          </button>
        </Magnetic>
      </div>
    </div>
  );
};

export default JobCard;
