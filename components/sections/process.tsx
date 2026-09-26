"use client";

import { useMotionValue, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef } from "react";
import { Config } from "@/config";
import { workflows } from "@/data";
import { pad } from "@/lib/content";
import { Reveal } from "../motion/reveal";
import { SplitWords } from "../motion/split-words";

/** Matches the `pin:` variant in globals.css. */
const PIN_QUERY =
  "(min-width: 64rem) and (prefers-reduced-motion: no-preference)";

/**
 * The development pipeline as a sequence of phases. On desktop the section
 * pins and the phases travel sideways with the scroll; elsewhere they stack.
 */
export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);

  // Horizontal travel = track width minus what's visible. The section gets
  // exactly that much extra height to scroll through.
  useEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!section || !viewport || !track) return;

    const query = matchMedia(PIN_QUERY);
    const measure = () => {
      const travel = query.matches
        ? Math.max(0, track.scrollWidth - viewport.clientWidth)
        : 0;
      distance.set(travel);
      section.style.setProperty("--travel", `${travel}px`);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(track);
    observer.observe(viewport);
    query.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      query.removeEventListener("change", measure);
    };
  }, [distance]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());
  const phase = useTransform(scrollYProgress, (value) =>
    pad(Math.min(workflows.length, Math.floor(value * workflows.length) + 1))
  );

  return (
    <section
      id="workflow"
      ref={sectionRef}
      tabIndex={-1}
      aria-labelledby="workflow-title"
      className="relative mt-36 outline-none md:mt-56 pin:h-[calc(100svh+var(--travel,0px))]"
    >
      <div
        ref={viewportRef}
        className="pin:sticky pin:top-0 pin:flex pin:h-svh pin:flex-col pin:justify-center pin:overflow-hidden"
      >
        <m.div
          ref={trackRef}
          style={{ x }}
          className="flex flex-col pin:w-max pin:flex-row pin:items-stretch"
        >
          <div className="frame pin:mx-0 pin:flex pin:w-[40vw] pin:max-w-none pin:shrink-0 pin:flex-col pin:justify-between pin:pr-[5vw]">
            <p className="type-label border-t border-line pt-4 text-muted">
              <span className="text-accent">(05)</span>
              <span className="ml-3">Process</span>
            </p>
            <div className="mt-10 pin:mt-0">
              <Reveal
                as="h2"
                id="workflow-title"
                variant="words"
                className="type-display pin:text-[5.4vw]"
              >
                <SplitWords text={Config.workflow.title} />
              </Reveal>
              <Reveal
                as="p"
                delay={150}
                className="mt-8 max-w-md leading-relaxed text-muted"
              >
                {Config.workflow.description}
              </Reveal>
            </div>
          </div>

          <ol className="mt-16 flex flex-col pin:mt-0 pin:flex-row">
            {workflows.map((item, index) => (
              <li
                key={item.id}
                className="frame flex flex-col gap-8 border-t border-line py-12 md:grid md:grid-cols-12 md:gap-x-(--gutter) pin:mx-0 pin:flex pin:h-[68svh] pin:w-[min(30vw,32rem)] pin:max-w-none pin:shrink-0 pin:flex-col pin:justify-between pin:border-l pin:border-t-0 pin:px-[2.2vw] pin:py-0"
              >
                <p
                  aria-hidden="true"
                  className="type-display text-faint md:col-span-3"
                >
                  {pad(index + 1)}
                </p>
                <div className="md:col-span-5">
                  <p className="type-label text-accent">
                    {item.phase} — {item.badge}
                  </p>
                  <h3 className="type-heading mt-4">{item.title}</h3>
                  <p className="mt-5 max-w-md leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                <ul className="grid gap-3 border-t border-line pt-5 text-sm leading-relaxed md:col-span-4 md:self-end">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true" className="text-accent">
                        →
                      </span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li
              aria-hidden="true"
              className="hidden pin:block pin:w-(--margin) pin:shrink-0"
            />
          </ol>
        </m.div>

        <div
          aria-hidden="true"
          className="frame type-label absolute inset-x-0 bottom-8 hidden items-center gap-6 text-muted pin:flex"
        >
          <span>
            Phase <m.span className="text-fg">{phase}</m.span> /{" "}
            {pad(workflows.length)}
          </span>
          <span className="relative h-px flex-1 bg-line">
            <m.span
              className="absolute inset-0 origin-left bg-fg"
              style={{ scaleX: scrollYProgress }}
            />
          </span>
        </div>
      </div>
    </section>
  );
}
