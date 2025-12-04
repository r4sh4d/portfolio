import React from "react";

export const ProjectParagraph = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`text-base leading-relaxed ${className}`.trim()}>{children}</p>
);
