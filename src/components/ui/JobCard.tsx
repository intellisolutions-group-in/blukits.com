"use client";

import { Briefcase, MapPin } from "lucide-react";

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
  return (
    <div className="shadow-two dark:bg-dark dark:shadow-three rounded-xs bg-white p-8">
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
      <button
        type="button"
        onClick={() => onApply(job)}
        className="rounded-xs bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
