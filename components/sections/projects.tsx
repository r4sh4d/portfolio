import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";

const content = projects.map((project) => ({
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
  return (
    <div className="relative pt-24 bg-white">
      <SectionTitle className="mb-8 text-black">
        {projectsConfig.title}
      </SectionTitle>
      <p className="text-center text-lg text-neutral-700 mb-24 max-w-3xl mx-auto px-4">
        {projectsConfig.description}
      </p>
      <StickyScroll content={content} />
    </div>
  );
}
