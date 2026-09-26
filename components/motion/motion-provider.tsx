"use client";

import { LazyMotion, domMin } from "motion/react";

/**
 * Loads only the DOM renderer for `m.*` components. The site uses motion
 * purely for scroll- and pointer-linked values, so nothing heavier ships.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMin} strict>
      {children}
    </LazyMotion>
  );
}
