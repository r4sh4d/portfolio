import React from "react";

export const ProjectContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`space-y-6 leading-relaxed ${className}`.trim()}>
    {children}
  </div>
);
