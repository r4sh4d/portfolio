import Link from "next/link";
import type { Project } from "@/data";
import { hostOf, projectNumber } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "../motion/reveal";
import { SplitWords } from "../motion/split-words";
import { ArrowSwap } from "../ui/arrow-swap";

export function ProjectTitle({
  project,
  size = "title",
  className,
}: {
  project: Project;
  size?: "title" | "display";
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="type-label text-accent">
        Project / {projectNumber(project)}
      </p>
      <Reveal
        as="h3"
        variant="words"
        className={cn(
          "mt-5 transition-transform duration-700 ease-out-expo group-hover:translate-x-2",
          size === "display" ? "type-display" : "type-title"
        )}
      >
        <SplitWords text={project.name} />
      </Reveal>
      {project.tagline && (
        <Reveal as="p" delay={150} className="type-heading mt-3 text-muted">
          {project.tagline}
        </Reveal>
      )}
    </div>
  );
}

export function ProjectMeta({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const rows = [
    ["Category", project.category],
    ["Role", project.role],
    ["Stack", project.technologies.join(", ")],
  ];

  return (
    <dl className={cn("type-label grid gap-x-6 gap-y-5", className)}>
      {rows.map(([term, detail]) => (
        <div key={term}>
          <dt className="text-faint">{term}</dt>
          <dd className="mt-1.5 leading-relaxed text-fg">{detail}</dd>
        </div>
      ))}
    </dl>
  );
}

export function ProjectHighlights({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-2 text-fg", className)}>
      {project.highlights.map((highlight) => (
        <li key={highlight} className="flex gap-3">
          <span aria-hidden="true" className="text-accent">
            +
          </span>
          {highlight}
        </li>
      ))}
    </ul>
  );
}

export function ProjectLinks({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <Link
        href={`/projects/${project.slug}`}
        className="type-label group inline-flex items-center gap-2 rounded-full bg-fg px-5 py-3.5 text-bg transition-colors duration-300 hover:bg-accent"
      >
        Case study<span className="sr-only">: {project.name}</span>
        <ArrowSwap direction="right" />
      </Link>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="type-label group inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-fg ring-1 ring-line-strong transition-shadow duration-300 hover:ring-fg"
      >
        {hostOf(project.link)}
        <ArrowSwap />
      </a>
    </div>
  );
}

/** Media that links to the case study. Pointer-only: the CTA is the accessible link. */
export function MediaLink({
  project,
  className,
  children,
}: {
  project: Project;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      tabIndex={-1}
      aria-hidden="true"
      data-cursor="View"
      className={cn("block", className)}
    >
      {children}
    </Link>
  );
}
