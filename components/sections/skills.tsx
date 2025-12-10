"use client";

import Image from "next/image";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "../ui/glowing-effect";

type Skill = {
  name: string;
  icon: string;
  area: string;
  description: string;
};

type SkillGroup = {
  id: string;
  title: string;
  caption: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    id: "core",
    title: "Core Stack",
    caption: "Frameworks & languages I use daily to ship production apps.",
    skills: [
      {
        name: "React",
        icon: "/react.webp",
        area: "Frontend",
        description: "Hooks, Suspense, Concurrent features.",
      },
      {
        name: "React Native",
        icon: "/react-native.webp",
        area: "Mobile",
        description: "Expo, native modules, OTA updates.",
      },
      {
        name: "JavaScript",
        icon: "/javascript.png",
        area: "Language",
        description: "The language that powers my work.",
      },
      {
        name: "TypeScript",
        icon: "/typescript.webp",
        area: "Language",
        description: "Type-safe APIs, utility types, generics.",
      },
      {
        name: "Next.js",
        icon: "/nextjs.webp",
        area: "Full-stack",
        description: "App Router, RSC, Edge deployments.",
      },
      {
        name: "Tailwind CSS",
        icon: "/tailwindcss.png",
        area: "Styling",
        description: "Design systems, adaptive theming.",
      },
      {
        name: "React Query",
        icon: "/tanstack.png",
        area: "Data",
        description: "Server-state caching, infinite queries.",
      },
    ],
  },
  {
    id: "ecosystem",
    title: "Ecosystem",
    caption: "Supporting tools and runtimes I rely on for scale and DX.",
    skills: [
      {
        name: "GraphQL",
        icon: "/graphql.webp",
        area: "API",
        description: "Schema-first design, Apollo Federation.",
      },
      {
        name: "Apollo Client",
        icon: "/apollo.png",
        area: "Data",
        description: "Cache orchestration, optimistic UI.",
      },
      {
        name: "Zustand",
        icon: "/zustand.png",
        area: "State",
        description: "Composable stores with persistence.",
      },
      {
        name: "React Hook Form",
        icon: "/react-hook-form.png",
        area: "Forms",
        description: "Accessible headless validations.",
      },
      {
        name: "Node.js",
        icon: "/nodejs.webp",
        area: "Runtime",
        description: "APIs, SSR helpers, tooling scripts.",
      },
      {
        name: "Strapi",
        icon: "/strapi.webp",
        area: "CMS",
        description: "Composable content APIs for marketing and docs.",
      },
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Ops",
    caption: "Collaboration and delivery stack that keeps releases moving.",
    skills: [
      {
        name: "Expo",
        icon: "/expo.webp",
        area: "Mobile",
        description: "Build service, OTA, app store pipelines.",
      },
      {
        name: "Figma",
        icon: "/figma.webp",
        area: "Design",
        description: "Component libraries, motion handoff.",
      },
      {
        name: "Tailwind UI & shadcn",
        icon: "/shadcn.png",
        area: "UI Kits",
        description: "Product UI scaffolding at velocity.",
      },
      {
        name: "Git & GitHub",
        icon: "/github.png",
        area: "Versioning",
        description: "Trunk-based flow, protected releases.",
      },
      {
        name: "GitLab",
        icon: "/gitlab.webp",
        area: "CI/CD",
        description: "Multi-stage pipelines, review apps.",
      },
      {
        name: "TanStack Router",
        icon: "/tanstack.png",
        area: "Routing",
        description: "Typed routing and data loaders.",
      },
    ],
  },
];

export default function SkillsSection() {
  const { skills } = Config;
  const [activeGroup, setActiveGroup] = useState(skillGroups[0]);

  return (
    <section className="relative py-24 bg-white dark:bg-neutral-950 transition-[background-color,border-color] duration-500">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.8),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(15,13,30,0.9),transparent_70%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-8">
        <SectionTitle className="mb-6 text-neutral-900 dark:text-white">
          {skills.title}
        </SectionTitle>
        <p className="mx-auto max-w-3xl text-center text-lg text-neutral-600 dark:text-neutral-300">
          {skills.description}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveGroup(group)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wide transition cursor-pointer",
                activeGroup.id === group.id
                  ? "bg-brand-500 text-white border-brand-500 shadow-brand-500/30 shadow-lg"
                  : "border-neutral-300 text-neutral-600 hover:border-brand-300 hover:text-brand-500 dark:border-white/20 dark:text-neutral-200 dark:hover:border-brand-400 dark:hover:text-brand-200"
              )}
            >
              {group.title}
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          {activeGroup.caption}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activeGroup.skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="group relative h-full">
      <div className="relative h-full rounded-2xl border border-neutral-200 bg-white/85 p-3 shadow-[0px_15px_35px_rgba(15,23,42,0.08)] transition dark:border-white/10 dark:bg-neutral-900/70 dark:shadow-[0px_15px_45px_rgba(0,0,0,0.35)]">
        <GlowingEffect
          spread={48}
          glow
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1.5}
        />
        <div className="relative z-10 flex h-full flex-col rounded-xl border border-white/50 bg-white/90 p-5 transition dark:border-white/10 dark:bg-neutral-900/80">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-600 dark:border-brand-500/30 dark:text-brand-200">
                  {skill.area}
                </span>
                <div className="h-12 w-12 rounded-xl border border-brand-100 bg-white p-2 shadow-inner dark:border-brand-500/40 dark:bg-neutral-800">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-white">
                {skill.name}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {skill.description}
              </p>
            </div>
            <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-brand-200 to-transparent opacity-0 transition translate-y-1 group-hover:translate-y-0 group-hover:opacity-100 dark:via-brand-500/50" />
          </div>
        </div>
      </div>
    </div>
  );
};
