import React from "react";

type HighlightItem = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export const ExperienceHighlights = ({
  title,
  accentClass,
  items,
}: {
  title: string;
  accentClass: string;
  items: HighlightItem[];
}) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
      {title}
    </h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className={`border-l-2 ${accentClass} pl-4`}>
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {item.title}
          </h4>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);
