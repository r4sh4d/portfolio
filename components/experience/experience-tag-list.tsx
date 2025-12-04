import React from "react";

export const ExperienceTagList = ({
  label,
  colorClass,
  tags,
}: {
  label: string;
  colorClass: string;
  tags: string[];
}) => (
  <div className="mb-4">
    <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
      {label}
    </h4>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`${colorClass} px-3 py-1 rounded-md text-xs font-medium`}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);
