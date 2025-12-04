import React from "react";

export const ProjectList = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <ul
    className={`list-disc list-inside space-y-1 text-sm opacity-90 ${className}`.trim()}
  >
    {children}
  </ul>
);
