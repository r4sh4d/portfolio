"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Config } from "@/config";
import { projects } from "@/data";
import { buildStackIndex, pad, tintStyle } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "../motion/reveal";
import { SectionHeader } from "../section-header";
import { ArrowSwap } from "../ui/arrow-swap";

const nodes = buildStackIndex(projects);

type Focus = { kind: "project" | "tech"; index: number } | null;
type Wire = { d: string; project: number; tech: number };

/**
 * Projects and the technologies they were built with, drawn as a wiring
 * diagram. Hovering or focusing either side traces its connections.
 * Below `lg` the wires give way to inline stacks and a tap-to-filter list.
 */
export function StackIndex() {
  const [focus, setFocus] = useState<Focus>(null);
  const [wires, setWires] = useState<Wire[]>([]);
  const mapRef = useRef<HTMLDivElement>(null);
  const projectPins = useRef<(HTMLSpanElement | null)[]>([]);
  const techPins = useRef<(HTMLSpanElement | null)[]>([]);

  // Wires are measured from the rendered pins, so they follow any layout.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const measure = () => {
      const origin = map.getBoundingClientRect();
      const center = (pin: HTMLElement | null) => {
        const rect = pin?.getBoundingClientRect();
        return rect
          ? {
              x: rect.left + rect.width / 2 - origin.left,
              y: rect.top + rect.height / 2 - origin.top,
            }
          : null;
      };

      const next: Wire[] = [];
      nodes.forEach((node, tech) => {
        const to = center(techPins.current[tech]);
        for (const project of node.projects) {
          const from = center(projectPins.current[project]);
          if (!from || !to || to.x === 0) continue;
          const mid = (from.x + to.x) / 2;
          next.push({
            d: `M${from.x},${from.y} C${mid},${from.y} ${mid},${to.y} ${to.x},${to.y}`,
            project,
            tech,
          });
        }
      });
      setWires(next);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(map);
    document.fonts.ready.then(measure);
    return () => observer.disconnect();
  }, []);

  const projectLit = (index: number) =>
    !focus ||
    (focus.kind === "project" && focus.index === index) ||
    (focus.kind === "tech" && nodes[focus.index].projects.includes(index));

  const techLit = (index: number) =>
    !focus ||
    (focus.kind === "tech" && focus.index === index) ||
    (focus.kind === "project" && nodes[index].projects.includes(focus.index));

  const wireLit = (wire: Wire) =>
    focus !== null &&
    (focus.kind === "project"
      ? wire.project === focus.index
      : wire.tech === focus.index);

  const readout = !focus
    ? `${pad(projects.length)} projects · ${pad(nodes.length)} technologies`
    : focus.kind === "project"
      ? `${projects[focus.index].name} — ${projects[focus.index].category} — ${pad(projects[focus.index].technologies.length)} technologies`
      : `${nodes[focus.index].name} — used in ${pad(nodes[focus.index].projects.length)} ${nodes[focus.index].projects.length === 1 ? "project" : "projects"}`;

  return (
    <section
      id="index"
      tabIndex={-1}
      aria-labelledby="index-title"
      className="pt-36 outline-none md:pt-56"
    >
      <SectionHeader
        index={2}
        label="Index"
        title={Config.index.title}
        titleId="index-title"
        description={Config.index.description}
        aside={`${pad(projects.length)} × ${pad(nodes.length)}`}
      />

      <Reveal variant="mark" className="frame mt-16 md:mt-24">
        <div
          ref={mapRef}
          onPointerLeave={() => setFocus(null)}
          className="relative grid-12 items-center gap-y-16"
          style={
            focus?.kind === "project"
              ? tintStyle(projects[focus.index])
              : undefined
          }
        >
          {/* Wires (desktop only) */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden size-full overflow-visible lg:block"
          >
            {wires.map((wire, index) => (
              <path
                key={`${wire.project}-${wire.tech}`}
                d={wire.d}
                pathLength={1}
                fill="none"
                style={
                  {
                    "--i": index,
                    ...tintStyle(projects[wire.project]),
                  } as CSSProperties
                }
                className={cn(
                  wireLit(wire)
                    ? "stroke-tint [stroke-opacity:1]"
                    : cn(
                        "stroke-fg",
                        focus
                          ? "[stroke-opacity:0.04]"
                          : "[stroke-opacity:0.14]"
                      )
                )}
                strokeWidth={1}
              />
            ))}
          </svg>

          <ol className="relative col-span-4 border-t border-line lg:col-span-5">
            {projects.map((project, index) => (
              <li
                key={project.slug}
                className="border-b border-line"
                style={tintStyle(project)}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="Open"
                  onPointerEnter={() => setFocus({ kind: "project", index })}
                  onFocus={() => setFocus({ kind: "project", index })}
                  onBlur={() => setFocus(null)}
                  className={cn(
                    "group flex items-center gap-4 py-4 transition-opacity duration-500 md:gap-6 lg:py-5",
                    projectLit(index) ? "opacity-100" : "opacity-25"
                  )}
                >
                  <span className="type-label w-6 shrink-0 text-faint">
                    {pad(index + 1)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "type-heading block transition-[translate,color] duration-500 ease-out-expo group-hover:translate-x-2 group-focus-visible:translate-x-2",
                        focus && projectLit(index) && "text-tint"
                      )}
                    >
                      {project.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="type-label mt-2 block text-muted lg:hidden"
                    >
                      {project.technologies.join(" / ")}
                    </span>
                    <span className="sr-only">
                      , built with {project.technologies.join(", ")}
                    </span>
                  </span>
                  <span
                    ref={(pin) => {
                      projectPins.current[index] = pin;
                    }}
                    aria-hidden="true"
                    className={cn(
                      "hidden size-1.5 shrink-0 rounded-full transition-colors duration-500 lg:block",
                      focus?.kind === "project" && focus.index === index
                        ? "bg-tint"
                        : "bg-line-strong"
                    )}
                  />
                </Link>
              </li>
            ))}
          </ol>

          <div className="relative col-span-4 lg:col-span-4 lg:col-start-9">
            <p className="type-label mb-5 text-faint lg:hidden">
              Filter by technology
            </p>
            <ul className="flex flex-wrap gap-2 lg:block">
              {nodes.map((node, index) => {
                const selected =
                  focus?.kind === "tech" && focus.index === index;
                return (
                  <li key={node.name}>
                    <button
                      type="button"
                      aria-pressed={selected}
                      onPointerEnter={(event) =>
                        event.pointerType === "mouse" &&
                        setFocus({ kind: "tech", index })
                      }
                      onFocus={() => setFocus({ kind: "tech", index })}
                      onBlur={() => setFocus(null)}
                      onClick={() =>
                        setFocus(selected ? null : { kind: "tech", index })
                      }
                      className={cn(
                        "flex items-center gap-3 rounded-full px-3 py-1.5 text-left ring-1 transition-[opacity,color,box-shadow] duration-500 lg:w-full lg:rounded-none lg:px-0 lg:py-[0.4rem] lg:ring-0",
                        techLit(index) ? "opacity-100" : "opacity-25",
                        selected
                          ? "text-accent ring-accent"
                          : "ring-line-strong"
                      )}
                    >
                      <span
                        ref={(pin) => {
                          techPins.current[index] = pin;
                        }}
                        aria-hidden="true"
                        className={cn(
                          "hidden size-1.5 shrink-0 rounded-full transition-colors duration-500 lg:block",
                          focus && techLit(index) ? "bg-tint" : "bg-line-strong"
                        )}
                      />
                      <span className="flex-1 text-[0.9375rem] lg:text-[1.0625rem]">
                        {node.name}
                      </span>
                      <span className="type-label text-faint">
                        ×{node.projects.length}
                      </span>
                      <span className="sr-only">
                        , used in{" "}
                        {node.projects.map((i) => projects[i].name).join(", ")}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="type-label col-span-4 flex items-center justify-between gap-6 border-t border-line pt-4 text-muted lg:col-span-12">
            <p aria-hidden="true" className="hidden lg:block">
              <span className="text-tint">→</span> {readout}
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 transition-colors hover:text-fg"
            >
              All projects as a list
              <ArrowSwap direction="right" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
