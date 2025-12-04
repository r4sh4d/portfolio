"use client";
import { projectColorVariants } from "@/theme";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode | string;
    content?: React.ReactNode | any;
    category: string;
    role: string;
    technologies: string[];
    highlights: string[];
    color: keyof typeof projectColorVariants;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeColor = projectColorVariants[content[activeCard].color];
  const isLightText = activeColor.text.includes("black");
  const badgeClass = isLightText
    ? "border border-black/10 bg-black/5 text-black"
    : "border border-white/20 bg-white/10 text-white";
  const highlightChipClass = isLightText
    ? "border border-black/10 bg-black/5 text-black"
    : "border border-white/20 bg-white/10 text-white";
  const techChipClass = isLightText
    ? "border border-black/10 bg-black/5 text-black"
    : "border border-white/20 bg-white/10 text-white";

  useEffect(() => {
    const handleScroll = () => {
      const targetLine = window.innerHeight / 3;

      let newActiveCard = 0;
      let minDistance = Infinity;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const distanceFromTarget = Math.abs(rect.top - targetLine);

        // Prefer whichever card is closest to the target line within the viewport
        if (rect.top <= targetLine && distanceFromTarget < minDistance) {
          minDistance = distanceFromTarget;
          newActiveCard = index;
        }
      });

      setActiveCard(newActiveCard);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [content.length]);

  return (
    <motion.div
      className={cn(
        "relative flex min-h-screen w-full justify-center lg:space-x-10 transition-colors duration-300 bg-linear-to-br py-10",
        activeColor.from,
        activeColor.to,
        activeColor.text
      )}
      ref={ref}
    >
      <div className="div relative flex items-start px-4 mr-0">
        <div className="lg:max-w-2xl w-full gap-20 my-4 lg:my-20 flex flex-col">
          {content.map((item, index) => {
            const initial = { opacity: 0 };
            const animate = { opacity: activeCard === index ? 1 : 0.3 };
            const accentAnimate = { opacity: activeCard === index ? 1 : 0.45 };
            const chipAnimate = { opacity: activeCard === index ? 1 : 0.35 };
            return (
              <div
                key={item.title + index}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <motion.h2
                  initial={initial}
                  animate={animate}
                  className="text-2xl font-bold max-w-lg lg:pr-16"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={initial}
                  animate={accentAnimate}
                  className="mt-4 flex flex-wrap gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em]"
                >
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 backdrop-blur",
                      badgeClass
                    )}
                  >
                    <span aria-hidden>📂</span>
                    {item.category}
                  </span>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full px-3 py-1 backdrop-blur",
                      badgeClass
                    )}
                  >
                    <span aria-hidden>🧑‍💻</span>
                    {item.role}
                  </span>
                </motion.div>
                <motion.div
                  initial={initial}
                  animate={chipAnimate}
                  className="mt-4 flex flex-wrap gap-2 text-sm font-medium"
                >
                  {item.highlights.map((highlight, highlightIndex) => (
                    <span
                      key={highlight + highlightIndex}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-1",
                        highlightChipClass
                      )}
                    >
                      <span aria-hidden>⭐</span>
                      {highlight}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={initial}
                  animate={chipAnimate}
                  className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide"
                >
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={tech + techIndex}
                      className={cn("rounded-full px-3 py-1", techChipClass)}
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={initial}
                  animate={animate}
                  className="block lg:hidden mt-10"
                >
                  {item.content ?? null}
                </motion.div>
                <motion.div
                  initial={initial}
                  animate={animate}
                  className="text-lg mt-10 max-w-lg lg:pr-16"
                >
                  {item.description}
                </motion.div>
              </div>
            );
          })}
          <div />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-35 self-start hidden lg:block pr-4",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
