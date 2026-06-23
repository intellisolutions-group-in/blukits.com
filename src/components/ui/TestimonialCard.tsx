"use client";

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
  return (
    <div className="shadow-two hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark rounded-xs bg-white p-8 duration-300">
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
  );
};

export default TestimonialCard;
