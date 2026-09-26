"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
} from "react";

/** `mark` only flags the element as seen; the component styles the rest. */
type Variant = "fade" | "clip" | "words" | "mark";

const callbacks = new Map<Element, () => void>();
let observer: IntersectionObserver | undefined;

/** One shared observer for every reveal on the page; each fires once. */
function observeOnce(element: Element, onEnter: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        callbacks.get(entry.target)?.();
        callbacks.delete(entry.target);
        observer?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" }
  );

  callbacks.set(element, onEnter);
  observer.observe(element);

  return () => {
    callbacks.delete(element);
    observer?.unobserve(element);
  };
}

type RevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: Variant;
  /** Delay in milliseconds. */
  delay?: number;
};

/**
 * Marks its element as in view the first time it enters the viewport. The
 * visual transition lives in CSS (`[data-reveal]`), so this never re-renders.
 */
export function Reveal({
  as: Tag = "div",
  variant = "fade",
  delay = 0,
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    return observeOnce(element, () => element.setAttribute("data-inview", ""));
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      style={{ ...style, "--delay": `${delay}ms` } as CSSProperties}
      {...rest}
    />
  );
}
