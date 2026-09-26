"use client";

import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Moves its content against the scroll direction while the container crosses
 * the viewport. The content is oversized by `amount` so edges never show.
 */
export function Parallax({
  children,
  amount = 12,
  className,
}: {
  children: ReactNode;
  /** Travel in percent of the container height. */
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${amount}%`, `${amount}%`]
  );

  return (
    <div
      ref={ref}
      className={cn("absolute inset-0 overflow-hidden", className)}
    >
      <m.div
        className="absolute inset-x-0 motion-reduce:transform-none!"
        style={{
          top: `-${amount}%`,
          bottom: `-${amount}%`,
          y,
        }}
      >
        {children}
      </m.div>
    </div>
  );
}
