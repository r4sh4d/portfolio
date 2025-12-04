import React from "react";

export const ExperienceEntry = ({
  title,
  subtitle,
  children,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div>
    <p className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-200">
      {title}
    </p>
    <p className="text-neutral-700 dark:text-neutral-300 mb-6">{subtitle}</p>
    {children}
  </div>
);
