"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export interface TimelineEntry {
  title: React.ReactNode;
  content: React.ReactNode;
  markerBgClass?: string;
  markerBorderClass?: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  const progressTransform = useTransform(smoothProgress, [0, 1], [0, 1]);
  const opacityTransform = useTransform(smoothProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className={cn(
              "flex justify-start md:gap-10",
              index !== 0 ? "pt-10 md:pt-40" : ""
            )}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className={cn(
                  "h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center border",
                  item.markerBorderClass
                )}
              >
                <div
                  className={cn("h-4 w-4 rounded-full", item.markerBgClass)}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              scaleY: progressTransform,
              opacity: opacityTransform,
              transformOrigin: "top",
            }}
            className="absolute inset-x-0 top-0 h-full w-[2px] rounded-full bg-gradient-to-t from-brand-500 via-accent-electric to-transparent from-[0%] via-[10%] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
};
