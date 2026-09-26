"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Context label that follows the pointer over elements with `data-cursor`
 * (e.g. `data-cursor="View"`). The native cursor stays everywhere else.
 * Mouse and trackpad only.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || !matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const smooth = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    const target = { x: -200, y: -200 };
    const position = { ...target };
    let frame = 0;

    const render = () => {
      position.x += (target.x - position.x) * (smooth ? 0.22 : 1);
      position.y += (target.y - position.y) * (smooth ? 0.22 : 1);
      element.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      const settled =
        Math.abs(target.x - position.x) < 0.1 &&
        Math.abs(target.y - position.y) < 0.1;
      frame = settled ? 0 : requestAnimationFrame(render);
    };

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      frame ||= requestAnimationFrame(render);
    };

    const onOver = (event: PointerEvent) => {
      const host = (event.target as Element | null)?.closest?.("[data-cursor]");
      if (host) setLabel(host.getAttribute("data-cursor") ?? "");
      setActive(Boolean(host));
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden [@media(hover:hover)_and_(pointer:fine)]:block"
    >
      <div
        className={cn(
          "type-label flex size-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-fg text-bg transition-[scale,opacity] duration-500 ease-out-expo",
          active ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        {label}
      </div>
    </div>
  );
}
