"use client";

import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type CSSProperties } from "react";
import { projectTints, type Project } from "@/data";
import { cn } from "@/lib/utils";
import { Reveal } from "../motion/reveal";

/** Scroll-linked movement is dropped entirely for reduced motion. */
const still = "motion-reduce:transform-none!";

type Variant =
  /** Screenshot fills the frame and drifts vertically. */
  | "cover"
  /** Screenshot sits on a tinted stage, cropped off the right edge. */
  | "inset"
  /** Oversized screenshot pans horizontally as the page scrolls. */
  | "drift";

/**
 * Framed project imagery with a clip reveal on entry and scroll-linked
 * movement. The frame's size comes from `className` (aspect ratio, width).
 */
export function ProjectMedia({
  project,
  variant = "cover",
  sizes,
  preload,
  className,
}: {
  project: Project;
  variant?: Variant;
  sizes: string;
  preload?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const coverY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const insetY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const detailY = useTransform(scrollYProgress, [0, 1], ["22%", "-22%"]);
  const driftX = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  const image = (
    <Image
      src={project.thumbnail}
      alt={`${project.name} — ${project.tagline ?? project.category}`}
      fill
      preload={preload}
      sizes={sizes}
      className={cn(
        "object-cover transition-[scale] duration-[1.4s] ease-out-expo group-hover:scale-[1.035]",
        variant === "cover" ? "object-center" : "object-top"
      )}
    />
  );

  const frameClass =
    "absolute overflow-hidden rounded-md bg-surface shadow-[0_40px_120px_-30px_rgb(0_0_0/0.75)] ring-1 ring-white/10";

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--tint": projectTints[project.color],
          backgroundColor: "color-mix(in oklab, var(--tint) 22%, #121211)",
        } as CSSProperties
      }
    >
      <Reveal variant="clip" className="absolute inset-0">
        <div data-reveal-inner className="absolute inset-0">
          {variant === "cover" && (
            <m.div
              className={cn("absolute inset-x-0 -inset-y-[8%]", still)}
              style={{ y: coverY }}
            >
              {image}
            </m.div>
          )}

          {variant === "inset" && (
            <>
              {/* Framed overview, cropped by the right edge. */}
              <m.div
                className={cn(frameClass, "left-[8%] top-[9%] w-[118%]", still)}
                style={{ y: insetY }}
              >
                <div className="relative aspect-[16/9]">{image}</div>
              </m.div>
              {/* A zoomed detail of the same screen, floating a layer above. */}
              <m.div
                aria-hidden="true"
                className={cn(
                  frameClass,
                  "bottom-[6%] left-[4%] aspect-[4/3] w-[50%]",
                  still
                )}
                style={{ y: detailY }}
              >
                <Image
                  src={project.thumbnail}
                  alt=""
                  fill
                  sizes={sizes}
                  className="origin-[50%_90%] scale-[1.7] object-cover object-[50%_90%]"
                />
              </m.div>
            </>
          )}

          {variant === "drift" && (
            <m.div
              className={cn("absolute inset-y-0 left-0 w-[122%]", still)}
              style={{ x: driftX }}
            >
              {image}
            </m.div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
