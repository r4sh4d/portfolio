import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { Config } from "@/config";
import { projects, type ProjectSection } from "@/data";
import { getProject, hostOf, pad, projectNumber } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { ScrollText } from "@/components/motion/scroll-text";
import { SplitWords } from "@/components/motion/split-words";
import { ProjectMedia } from "@/components/project/project-media";
import { ArrowSwap } from "@/components/ui/arrow-swap";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${Config.name}`,
    description: project.intro,
  };
}

function Label({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <p className="type-label text-muted">
      <span className="text-accent">({pad(index)})</span>
      <span className="ml-3">{children}</span>
    </p>
  );
}

/** Title pinned on one side, numbered entries on the other; sides alternate. */
function Chapter({
  section,
  index,
  flip,
}: {
  section: ProjectSection;
  index: number;
  flip: boolean;
}) {
  return (
    <section className="frame grid-12 mt-32 gap-y-10 md:mt-48">
      <div
        className={cn(
          "col-span-4 md:row-start-1",
          flip ? "md:col-span-5 md:col-start-8" : "md:col-span-5"
        )}
      >
        <div className="md:sticky md:top-28">
          <Label index={index}>{pad(section.items.length)} entries</Label>
          <Reveal
            as="h2"
            variant="words"
            className="type-title mt-6 text-[clamp(2.25rem,4vw,4.5rem)] [overflow-wrap:anywhere] hyphens-auto"
          >
            <SplitWords text={section.title} />
          </Reveal>
        </div>
      </div>

      <ol
        className={cn(
          "col-span-4 border-t border-line md:row-start-1",
          flip ? "md:col-span-7 md:col-start-1" : "md:col-span-7 md:col-start-6"
        )}
      >
        {section.items.map((item, itemIndex) => (
          <Reveal
            as="li"
            key={typeof item === "string" ? item : item.term}
            delay={itemIndex * 40}
            className="grid grid-cols-[2.75rem_1fr] border-b border-line py-6 md:py-7"
          >
            <span className="type-label pt-2 text-faint">
              {pad(itemIndex + 1)}
            </span>
            {typeof item === "string" ? (
              <p className="text-[clamp(1.125rem,1.7vw,1.625rem)] leading-snug tracking-[-0.015em]">
                {item}
              </p>
            ) : (
              <div>
                <p className="type-heading">{item.term}</p>
                <p className="mt-2 text-muted">{item.detail}</p>
              </div>
            )}
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default async function CaseStudy({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const position = projects.indexOf(project);
  const next = projects[(position + 1) % projects.length];

  return (
    <article>
      <header className="frame pt-28 md:pt-36">
        <div
          className="animate-fade type-label flex items-center justify-between border-t border-line pt-4 text-muted"
          style={{ "--delay": "500ms" } as CSSProperties}
        >
          <Link
            href="/#index"
            className="group inline-flex items-center gap-2 transition-colors hover:text-fg"
          >
            <span className="inline-block rotate-180">
              <ArrowSwap direction="right" />
            </span>
            Index
          </Link>
          <p>
            Project <span className="text-fg">{projectNumber(project)}</span> /{" "}
            {pad(projects.length)}
          </p>
        </div>

        <h1 className="animate-words type-hero mt-12 text-[clamp(3.25rem,12.5vw,14rem)] md:mt-20">
          <SplitWords text={project.name} />
        </h1>
        {project.tagline && (
          <p
            className="animate-fade type-statement mt-6 text-muted"
            style={{ "--delay": "450ms" } as CSSProperties}
          >
            {project.tagline}
          </p>
        )}

        <dl
          className="animate-fade grid-12 type-label mt-16 gap-y-6 border-t border-line pt-5 md:mt-24"
          style={{ "--delay": "650ms" } as CSSProperties}
        >
          <div className="col-span-2 md:col-span-3">
            <dt className="text-faint">Role</dt>
            <dd className="mt-1.5 text-fg">{project.role}</dd>
          </div>
          <div className="col-span-2 md:col-span-3">
            <dt className="text-faint">Category</dt>
            <dd className="mt-1.5 text-fg">{project.category}</dd>
          </div>
          <div className="col-span-4 md:col-span-3">
            <dt className="text-faint">Stack</dt>
            <dd className="mt-1.5 leading-relaxed text-fg">
              {project.technologies.join(", ")}
            </dd>
          </div>
          <div className="col-span-4 md:col-span-3 md:text-right">
            <dt className="text-faint">Live</dt>
            <dd className="mt-1.5">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
              >
                {hostOf(project.link)}
                <ArrowSwap />
              </a>
            </dd>
          </div>
        </dl>
      </header>

      <ProjectMedia
        project={project}
        variant="cover"
        sizes="100vw"
        preload
        className="mt-10 aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[2/1]"
      />

      <section className="frame grid-12 mt-32 gap-y-8 md:mt-48">
        <div className="col-span-4 md:col-span-3">
          <Label index={1}>Overview</Label>
        </div>
        <ScrollText
          text={project.intro}
          className="type-statement col-span-4 md:col-span-9"
        />
      </section>

      <section className="frame mt-32 md:mt-48">
        <Label index={2}>Highlights</Label>
        <ol
          className="mt-8 grid border-t border-line md:grid-cols-[repeat(var(--n),minmax(0,1fr))]"
          style={{ "--n": project.highlights.length } as CSSProperties}
        >
          {project.highlights.map((highlight, index) => (
            <Reveal
              as="li"
              key={highlight}
              delay={index * 100}
              className="border-b border-line py-8 md:border-b-0 md:border-l md:px-6 md:py-10 md:first:border-l-0 md:first:pl-0"
            >
              <span className="type-label text-accent">{pad(index + 1)}</span>
              <p className="type-heading mt-8 max-w-[18ch]">{highlight}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {project.sections.map((section, index) => (
        <div key={section.title}>
          <Chapter section={section} index={index + 3} flip={index % 2 === 1} />
          {index === 0 && (
            <div className="frame mt-32 md:mt-48">
              <ProjectMedia
                project={project}
                variant="inset"
                sizes="(min-width: 768px) 84vw, 100vw"
                className="aspect-[4/5] w-full sm:aspect-[4/3] md:ml-auto md:w-[84%] lg:aspect-[16/10]"
              />
            </div>
          )}
          {index === 1 && project.sections.length > 2 && (
            <div className="frame mt-32 md:mt-48">
              <ProjectMedia
                project={project}
                variant="drift"
                sizes="(min-width: 768px) 66vw, 100vw"
                className="aspect-[4/3] w-full md:w-[66%]"
              />
            </div>
          )}
        </div>
      ))}

      <section className="frame grid-12 mt-32 gap-y-10 border-t border-line pt-5 md:mt-48">
        <div className="col-span-4 md:col-span-3">
          <Label index={project.sections.length + 3}>Built with</Label>
        </div>
        <ul className="col-span-4 flex flex-wrap gap-x-3 gap-y-1 md:col-span-9">
          {project.technologies.map((tech, index) => (
            <li
              key={tech}
              className="type-title text-[clamp(2rem,4.4vw,4.75rem)]"
            >
              {tech}
              {index < project.technologies.length - 1 && (
                <span aria-hidden="true" className="text-faint">
                  {" "}
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
        <div className="col-span-4 md:col-span-9 md:col-start-4">
          <Magnetic strength={0.2}>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="type-label group mt-6 inline-flex items-center gap-3 rounded-full bg-fg px-7 py-4 text-bg transition-colors duration-300 hover:bg-accent"
            >
              Visit {hostOf(project.link)}
              <ArrowSwap />
            </a>
          </Magnetic>
        </div>
      </section>

      <nav
        aria-label="Next project"
        className="mt-40 border-t border-line md:mt-56"
      >
        <Link
          href={`/projects/${next.slug}`}
          data-cursor="Next"
          className="group frame relative block overflow-hidden py-16 md:py-28"
        >
          <p className="type-label flex justify-between text-muted">
            <span>Next project</span>
            <span>
              {projectNumber(next)} / {pad(projects.length)}
            </span>
          </p>
          <p className="type-display relative z-10 mt-10 transition-transform duration-700 ease-out-expo group-hover:translate-x-4 md:mt-14">
            {next.name}
          </p>
          <p className="type-heading relative z-10 mt-4 text-muted">
            {next.tagline ?? next.category}
          </p>
          <div
            aria-hidden="true"
            className="absolute right-(--margin) top-1/2 hidden aspect-[16/10] w-[34%] -translate-y-1/2 overflow-hidden [clip-path:inset(100%_0_0_0)] transition-[clip-path] duration-700 ease-in-out-quart group-hover:[clip-path:inset(0)] md:block"
          >
            <Image
              src={next.thumbnail}
              alt=""
              fill
              sizes="34vw"
              className="scale-110 object-cover object-top transition-[scale] duration-1000 ease-out-expo group-hover:scale-100"
            />
          </div>
        </Link>
      </nav>
    </article>
  );
}
