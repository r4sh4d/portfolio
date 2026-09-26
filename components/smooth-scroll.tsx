"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let instance: Lenis | null = null;

/** The active Lenis instance, or null when smooth scrolling is off. */
export const getLenis = () => instance;

/**
 * Smooth wheel scrolling on desktop. Touch devices keep native scrolling and
 * reduced-motion users get no smoothing at all. Same-page anchor links are
 * animated here while still producing a normal history entry.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      stopInertiaOnNavigate: true,
    });
    instance = lenis;

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement)) return;

      const url = new URL(link.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        !url.hash
      ) {
        return;
      }

      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1))
      );
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, { duration: 1.4 });
      history.pushState(null, "", url.hash);
      target.focus({ preventScroll: true });
    };

    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
