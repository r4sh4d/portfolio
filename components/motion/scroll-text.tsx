"use client";

import { useScroll, useTransform, type MotionValue } from "motion/react";
import * as m from "motion/react-m";
import { useRef, type ElementType } from "react";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.16, 1]);
  return (
    <m.span style={{ opacity }} className="motion-reduce:opacity-100!">
      {children}
    </m.span>
  );
}

/** Text whose words light up one by one as it scrolls through the viewport. */
export function ScrollText({
  text,
  as: Tag = "p",
  className,
}: {
  text: string;
  as?: ElementType;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 50%"],
  });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={index}>
            <Word
              progress={scrollYProgress}
              range={[index / words.length, (index + 1) / words.length]}
            >
              {word}
            </Word>
            {index < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </Tag>
  );
}
