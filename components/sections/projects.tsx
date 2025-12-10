import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data";
import Link from "next/link";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";
import { Button } from "@/components/ui/button";

const mapProjectsToContent = (list: typeof projects) =>
  list.map((project) => ({
    title: project.title,
    description: project.description,
    color: project.color,
    category: project.category,
    role: project.role,
    technologies: project.technologies,
    highlights: project.highlights,
    content: (
      <ProjectCard
        thumbnail={project.thumbnail}
        className="w-full"
        href={project.link}
        containerClassName={`bg-${project.color} py-0`}
      />
    ),
  }));

export default function ProjectsSection() {
  const { projects: projectsConfig } = Config;
  const previewContent = mapProjectsToContent(projects.slice(0, 3));

  return (
    <section className="relative bg-gradient-to-b from-white via-brand-50 to-white pt-24 dark:from-neutral-950 dark:via-[#170a24] dark:to-neutral-900 transition-[background-color,border-color] duration-500">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
        <div className="absolute inset-x-1/4 top-0 h-64 bg-[radial-gradient(circle,rgba(167,139,250,0.3),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(148,134,255,0.25),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex w-full flex-col px-4">
        <SectionTitle className="mb-8 text-neutral-900 dark:text-white drop-shadow-sm dark:drop-shadow">
          {projectsConfig.title}
        </SectionTitle>
        <p className="mx-auto mb-24 max-w-3xl px-2 text-center text-lg text-neutral-600 dark:text-slate-200">
          {projectsConfig.description}
        </p>
      </div>
      <div className="relative z-10 px-4">
        <StickyScroll content={previewContent} />
      </div>
      <div className="relative z-10 flex justify-center px-4 py-16">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_60%)] dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.15),transparent_60%)]" />
          <div className="absolute inset-x-1/4 top-0 h-64 bg-[radial-gradient(circle,rgba(167,139,250,0.3),transparent_60%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(148,134,255,0.25),transparent_60%)]" />
        </div>
        <Button asChild variant="outline" className="relative">
          <Link href="/projects">View all projects</Link>
        </Button>
      </div>
    </section>
  );
}
