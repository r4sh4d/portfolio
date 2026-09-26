import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Config } from "@/config";
import { projects } from "@/data";
import { pad } from "@/lib/content";
import { SplitWords } from "@/components/motion/split-words";
import { ProjectList } from "@/components/project/project-list";

export const metadata: Metadata = {
  title: `Projects — ${Config.name}`,
  description: Config.projects.description,
};

export default function ProjectsPage() {
  return (
    <section className="frame pb-32 pt-28 md:pb-48 md:pt-36">
      <div
        className="animate-fade type-label flex items-center justify-between border-t border-line pt-4 text-muted"
        style={{ "--delay": "400ms" } as CSSProperties}
      >
        <p>
          <span className="text-accent">(—)</span>
          <span className="ml-3">All projects</span>
        </p>
        <p>{pad(projects.length)} entries</p>
      </div>

      <div className="grid-12 mt-12 gap-y-8 md:mt-20">
        <h1 className="animate-words type-hero col-span-4 text-[clamp(3.25rem,12vw,13rem)] md:col-span-12">
          <SplitWords text={Config.index.title} />
        </h1>
        <p
          className="animate-fade col-span-4 max-w-md text-muted md:col-span-4 md:col-start-9"
          style={{ "--delay": "500ms" } as CSSProperties}
        >
          {Config.projects.description}
        </p>
      </div>

      <div className="mt-20 md:mt-28">
        <ProjectList />
      </div>
    </section>
  );
}
