"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data";
import { pad, tintStyle } from "@/lib/content";
import { cn } from "@/lib/utils";
import { ArrowSwap } from "../ui/arrow-swap";

/**
 * Every project as a typographic row. On desktop a preview of the hovered
 * project trails the pointer; on touch each row carries its own thumbnail.
 */
export function ProjectList() {
  const [active, setActive] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const preview = previewRef.current;
    if (!preview || !matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: 0, y: 0 };
    const position = { x: 0, y: 0 };
    let frame = 0;

    const render = () => {
      position.x += (target.x - position.x) * (smooth ? 0.14 : 1);
      position.y += (target.y - position.y) * (smooth ? 0.14 : 1);
      preview.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      const settled =
        Math.abs(target.x - position.x) < 0.1 &&
        Math.abs(target.y - position.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      frame ||= requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <ol
        className="border-t border-line"
        onPointerLeave={() => setActive(null)}
      >
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className="border-b border-line"
            style={tintStyle(project)}
          >
            <Link
              href={`/projects/${project.slug}`}
              onPointerEnter={() => setActive(index)}
              className={cn(
                "group grid-12 items-center gap-y-4 py-6 transition-opacity duration-500 md:py-8",
                active !== null && active !== index
                  ? "md:opacity-30"
                  : "opacity-100"
              )}
            >
              <div className="relative col-span-4 aspect-[16/10] overflow-hidden bg-raised md:hidden">
                <Image
                  src={project.thumbnail}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                />
              </div>
              <span className="type-label col-span-1 text-faint">
                {pad(index + 1)}
              </span>
              <span className="col-span-3 md:col-span-5">
                <span className="block font-display text-[clamp(2rem,4.6vw,4.75rem)] font-medium leading-[0.95] tracking-[-0.045em] transition-[translate,color] duration-700 ease-out-expo group-hover:translate-x-3 group-hover:text-tint">
                  {project.name}
                </span>
                {project.tagline && (
                  <span className="mt-2 block text-muted">
                    {project.tagline}
                  </span>
                )}
              </span>
              <span className="type-label col-span-2 text-muted md:col-span-3">
                {project.category}
              </span>
              <span className="type-label col-span-2 text-muted md:col-span-2">
                {project.role}
              </span>
              <span className="hidden justify-end text-2xl md:col-span-1 md:flex">
                <ArrowSwap direction="right" />
              </span>
            </Link>
          </li>
        ))}
      </ol>

      <div
        ref={previewRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-40 hidden [@media(hover:hover)_and_(pointer:fine)]:block"
      >
        <div
          className={cn(
            "relative -ml-[13vw] -mt-[8.5vw] aspect-[16/10] w-[26vw] overflow-hidden bg-raised transition-[clip-path] duration-700 ease-in-out-quart",
            active === null
              ? "[clip-path:inset(50%_50%_50%_50%)]"
              : "[clip-path:inset(0)]"
          )}
        >
          {projects.map((project, index) => (
            <Image
              key={project.slug}
              src={project.thumbnail}
              alt=""
              fill
              sizes="26vw"
              className={cn(
                "object-cover object-top transition-[opacity,scale] duration-700 ease-out-expo",
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}
