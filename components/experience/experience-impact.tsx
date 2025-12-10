import React from "react";

export const ExperienceImpact = ({
  background,
  border,
  labelClass,
  children,
}: {
  background: string;
  border: string;
  labelClass: string;
  children: React.ReactNode;
}) => (
  <div
    className={`${background} rounded-lg p-3 border ${border} transition-[background-color,border-color] duration-500`}
  >
    <p className="text-sm text-neutral-700 dark:text-neutral-300">
      <span className={`font-bold ${labelClass}`}>Impact:</span> {children}
    </p>
  </div>
);
