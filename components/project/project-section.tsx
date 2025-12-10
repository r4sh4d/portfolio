import React from "react";

export const ProjectSection = ({
  title,
  children,
  className = "",
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`space-y-2 ${className}`.trim()}>
    <h3 className="font-semibold text-lg">{title}</h3>
    {children}
  </section>
);
