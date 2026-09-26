"use client";

import { useScroll } from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, useState } from "react";
import { Config } from "@/config";
import { experiences } from "@/data";
import { careerStartYear, yearOf } from "@/lib/content";
import { cn } from "@/lib/utils";
import { SectionHeader } from "../section-header";

export function Experience() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 60%"],
  });

  // The role crossing the middle of the viewport is the current one.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(Number((entry.target as HTMLElement).dataset.index));
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    list
      .querySelectorAll("[data-index]")
      .forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiences"
      tabIndex={-1}
      aria-labelledby="experiences-title"
      className="pt-36 outline-none md:pt-56"
    >
      <SectionHeader
        index={4}
        label="Career"
        title={Config.experiences.title}
        titleId="experiences-title"
        description={Config.experiences.description}
        aside={`${careerStartYear} — Now`}
      />

      <div className="frame relative mt-20 md:mt-32">
        {/* Progress rail in the page margin. */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[calc(var(--margin)/2)] hidden w-px bg-line md:block"
        >
          <m.div
            className="h-full w-full origin-top bg-accent motion-reduce:transform-none!"
            style={{ scaleY: scrollYProgress }}
          />
        </div>

        <ol ref={listRef}>
          {experiences.map((item, index) => {
            const current = active === index;
            return (
              <li
                key={`${item.company}-${item.start}`}
                data-index={index}
                className="grid-12 gap-y-8 border-t border-line py-12 md:py-20"
              >
                <div className="col-span-4 md:col-span-3">
                  <div className="md:sticky md:top-28">
                    <p
                      className={cn(
                        "type-title tabular-nums transition-colors duration-700",
                        current ? "text-fg" : "text-fg md:text-faint"
                      )}
                    >
                      {yearOf(item.start)}
                    </p>
                    <p className="type-label mt-4 flex items-center gap-2 text-muted">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "size-1.5 rounded-full transition-colors duration-700",
                          current ? "bg-accent" : "bg-line-strong"
                        )}
                      />
                      {item.start} — {item.end}
                    </p>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-4">
                  <h3 className="type-heading">{item.company}</h3>
                  <p className="type-label mt-3 text-accent">{item.role}</p>
                  <p className="mt-6 leading-relaxed text-fg/85">
                    {item.summary}
                  </p>
                  <div className="mt-8 border-l border-accent/60 pl-4">
                    <p className="type-label text-faint">Impact</p>
                    <p className="mt-2 leading-relaxed">{item.impact}</p>
                  </div>
                </div>

                <div className="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-9">
                  <ul className="grid gap-5">
                    {item.highlights.map((highlight) => (
                      <li key={highlight.title}>
                        <p className="font-medium">{highlight.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted">
                          {highlight.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <p className="type-label mt-8 leading-relaxed text-muted">
                    <span className="text-faint">Stack — </span>
                    {item.stack.join(" / ")}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
