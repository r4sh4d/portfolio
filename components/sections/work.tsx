import Link from "next/link";
import { Config } from "@/config";
import { projects, type Project } from "@/data";
import { pad, projectNumber, tintStyle } from "@/lib/content";
import { Reveal } from "../motion/reveal";
import { SplitWords } from "../motion/split-words";
import {
  MediaLink,
  ProjectHighlights,
  ProjectLinks,
  ProjectMeta,
  ProjectTitle,
} from "../project/project-meta";
import { ProjectMedia } from "../project/project-media";
import { SectionHeader } from "../section-header";
import { ArrowSwap } from "../ui/arrow-swap";

const FEATURED_COUNT = 4;

/** Full-bleed image between a title row and a metadata row. */
function Cinematic({ project }: { project: Project }) {
  return (
    <article className="group" style={tintStyle(project)}>
      <div className="frame grid-12 items-end gap-y-6">
        <ProjectTitle project={project} className="col-span-4 md:col-span-7" />
        <Reveal
          as="p"
          delay={200}
          className="col-span-4 max-w-md text-muted md:col-span-4 md:col-start-9"
        >
          {project.intro}
        </Reveal>
      </div>

      <MediaLink project={project} className="mt-10 md:mt-14">
        <ProjectMedia
          project={project}
          variant="cover"
          sizes="100vw"
          className="aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]"
        />
      </MediaLink>

      <div className="frame grid-12 mt-8 gap-y-8">
        <ProjectMeta
          project={project}
          className="col-span-4 grid-cols-2 md:col-span-6 md:grid-cols-3"
        />
        <ProjectHighlights
          project={project}
          className="col-span-4 md:col-span-3"
        />
        <ProjectLinks
          project={project}
          className="col-span-4 self-start md:col-span-3 md:justify-end"
        />
      </div>
    </article>
  );
}

/** Information pinned beside a tall, tinted stage. */
function Pinned({ project }: { project: Project }) {
  return (
    <article
      className="group frame grid-12 gap-y-10"
      style={tintStyle(project)}
    >
      <div className="col-span-4 md:col-span-5 lg:col-span-4">
        <div className="flex flex-col gap-8 md:sticky md:top-28">
          <ProjectTitle project={project} />
          <Reveal as="p" className="text-muted">
            {project.intro}
          </Reveal>
          <ProjectHighlights project={project} />
          <ProjectMeta
            project={project}
            className="grid-cols-2 md:grid-cols-1"
          />
          <ProjectLinks project={project} />
        </div>
      </div>

      <MediaLink
        project={project}
        className="col-span-4 md:col-span-7 md:col-start-6 lg:col-span-7 lg:col-start-6"
      >
        <ProjectMedia
          project={project}
          variant="inset"
          sizes="(min-width: 768px) 75vw, 100vw"
          className="aspect-[4/5] w-full"
        />
      </MediaLink>
    </article>
  );
}

/** Oversized title laid across the top edge of the image. */
function Layered({ project }: { project: Project }) {
  return (
    <article className="group" style={tintStyle(project)}>
      <div className="relative">
        <MediaLink project={project} className="frame">
          <ProjectMedia
            project={project}
            variant="cover"
            sizes="(min-width: 768px) 76vw, 100vw"
            className="mx-auto aspect-[4/3] w-full md:aspect-[16/10] md:w-[76%]"
          />
        </MediaLink>
        <Reveal
          as="h3"
          variant="words"
          className="type-display frame pointer-events-none absolute inset-x-0 top-0 -translate-y-1/2 text-center mix-blend-difference"
        >
          <SplitWords text={project.name} />
        </Reveal>
      </div>

      <div className="frame grid-12 mt-10 gap-y-8">
        <div className="col-span-4 md:col-span-5">
          <p className="type-label text-tint">
            Project / {projectNumber(project)}
          </p>
          {project.tagline && (
            <p className="type-heading mt-4 text-fg">{project.tagline}</p>
          )}
          <Reveal as="p" className="mt-5 max-w-md text-muted">
            {project.intro}
          </Reveal>
        </div>
        <ProjectMeta
          project={project}
          className="col-span-4 grid-cols-2 md:col-span-4 md:col-start-7"
        />
        <div className="col-span-4 flex flex-col gap-8 md:col-span-2 md:col-start-11">
          <ProjectHighlights project={project} />
        </div>
        <ProjectLinks project={project} className="col-span-4 md:col-span-12" />
      </div>
    </article>
  );
}

/** Image pans sideways as the page scrolls; details sit opposite. */
function Drift({ project }: { project: Project }) {
  return (
    <article
      className="group frame grid-12 items-center gap-y-10"
      style={tintStyle(project)}
    >
      <MediaLink project={project} className="col-span-4 md:col-span-7">
        <ProjectMedia
          project={project}
          variant="drift"
          sizes="(min-width: 768px) 70vw, 100vw"
          className="aspect-[4/3] w-full"
        />
      </MediaLink>
      <div className="col-span-4 flex flex-col gap-8 md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
        <ProjectTitle project={project} />
        <Reveal as="p" className="text-muted">
          {project.intro}
        </Reveal>
        <ProjectMeta project={project} className="grid-cols-2" />
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

const compositions = [Cinematic, Pinned, Layered, Drift];

export function Work() {
  const featured = projects.slice(0, FEATURED_COUNT);

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-labelledby="projects-title"
      className="pt-28 outline-none md:pt-40"
    >
      <SectionHeader
        index={1}
        label="Selected Work"
        title={Config.projects.title}
        titleId="projects-title"
        description={Config.projects.description}
        aside={`${pad(featured.length)} / ${pad(projects.length)}`}
      />

      <div className="mt-24 flex flex-col gap-36 md:mt-36 md:gap-56">
        {featured.map((project, index) => {
          const Composition = compositions[index % compositions.length];
          return <Composition key={project.slug} project={project} />;
        })}
      </div>

      <div className="frame mt-28 md:mt-40">
        <Link
          href="#index"
          className="group flex items-center justify-between gap-6 border-y border-line py-8 transition-colors duration-500 hover:text-accent"
        >
          <span className="type-heading">
            {pad(projects.length - featured.length)} more in the index
          </span>
          <span className="inline-block rotate-90 text-2xl">
            <ArrowSwap direction="right" />
          </span>
        </Link>
      </div>
    </section>
  );
}
