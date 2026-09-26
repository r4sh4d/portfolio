"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Config } from "@/config";
import { cn } from "@/lib/utils";
import { pad } from "@/lib/content";
import { Magnetic } from "./motion/magnetic";
import { ArrowSwap } from "./ui/arrow-swap";
import { LocalTime } from "./ui/local-time";

const links = [
  { id: "projects", label: "Work" },
  { id: "index", label: "Index" },
  { id: "about", label: "About" },
  { id: "experiences", label: "Experience" },
];

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [observed, setActive] = useState<string | null>(null);
  const active = isHome ? observed : null;
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -54% 0px" }
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Full-screen menu: lock page scroll, trap focus, close on Escape or when
  // the viewport grows past the mobile breakpoint.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    root.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") return close(true);
      if (event.key !== "Tab" || !menuRef.current) return;

      const focusable = [
        toggleRef.current,
        ...menuRef.current.querySelectorAll<HTMLElement>("a, button"),
      ].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = matchMedia("(min-width: 48rem)");
    const onResize = () => desktop.matches && close(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open, close]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative z-10 mx-auto flex items-center justify-between transition-[max-width,margin,padding,background-color,border-color,border-radius] duration-700 ease-out-expo",
          "border border-transparent",
          scrolled && !open
            ? "mt-3 w-[calc(100%-1.5rem)] max-w-[46rem] rounded-full border-line bg-surface/75 px-2 py-2 backdrop-blur-xl md:mt-4"
            : "w-full max-w-[120rem] rounded-none px-(--margin) py-5"
        )}
      >
        <Link
          href="/"
          aria-label={`${Config.name} — home`}
          className="group flex items-center gap-3"
          onClick={() => close(false)}
        >
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-full font-display text-[0.9rem] font-semibold tracking-[-0.01em] transition-colors duration-500",
              scrolled && !open
                ? "bg-fg text-bg"
                : "bg-transparent text-fg ring-1 ring-line-strong"
            )}
          >
            RM
          </span>
          <span
            className={cn(
              "type-label hidden overflow-hidden whitespace-nowrap text-muted transition-[max-width,opacity] duration-700 ease-out-expo lg:block",
              scrolled ? "max-w-0 opacity-0" : "max-w-64 opacity-100"
            )}
          >
            {Config.name}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link, index) => {
              const current = active === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={`/#${link.id}`}
                    aria-current={current ? "location" : undefined}
                    className={cn(
                      "type-label group flex items-center gap-2 rounded-full px-3 py-2 transition-colors duration-300 hover:text-fg",
                      current ? "text-fg" : "text-muted"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "transition-colors duration-300",
                        current
                          ? "text-accent"
                          : "text-faint group-hover:text-muted"
                      )}
                    >
                      {pad(index + 1)}
                    </span>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden md:inline-block">
            <Link
              href="/#contact"
              className={cn(
                "type-label group flex items-center gap-2 rounded-full px-4 py-3 transition-colors duration-300",
                active === "contact"
                  ? "bg-accent text-bg"
                  : "bg-fg text-bg hover:bg-accent"
              )}
            >
              Contact
              <ArrowSwap />
            </Link>
          </Magnetic>

          <button
            ref={toggleRef}
            type="button"
            className="type-label flex h-10 items-center gap-3 rounded-full px-4 text-fg ring-1 ring-line-strong md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close(true) : setOpen(true))}
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true" className="relative block h-2 w-4">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo",
                  open ? "top-1 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500 ease-out-expo",
                  open ? "top-1 -rotate-45" : "top-2"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        data-lenis-prevent
        inert={!open}
        className={cn(
          "fixed inset-0 flex flex-col justify-between overflow-y-auto bg-bg px-(--margin) pb-8 pt-28 transition-[clip-path] duration-700 ease-in-out-quart md:hidden",
          open ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(0_0_100%_0)]"
        )}
      >
        <nav aria-label="Mobile">
          <ul className="border-t border-line">
            {[...links, { id: "contact", label: "Contact" }].map(
              (link, index) => (
                <li
                  key={link.id}
                  className="overflow-hidden border-b border-line"
                >
                  <Link
                    href={`/#${link.id}`}
                    onClick={() => close(false)}
                    className={cn(
                      "flex items-baseline justify-between py-4 transition-transform duration-700 ease-out-expo",
                      open ? "translate-y-0" : "translate-y-full"
                    )}
                    style={{
                      transitionDelay: open ? `${150 + index * 60}ms` : "0ms",
                    }}
                  >
                    <span className="font-display text-[clamp(2.5rem,12vw,4rem)] font-medium leading-none tracking-[-0.05em]">
                      {link.label}
                    </span>
                    <span className="type-label text-faint">
                      {pad(index + 1)}
                    </span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div
          className={cn(
            "mt-12 grid gap-6 transition-opacity duration-700",
            open ? "opacity-100 delay-500" : "opacity-0"
          )}
        >
          <a href={`mailto:${Config.email}`} className="text-lg text-fg">
            {Config.email}
          </a>
          <div className="flex items-end justify-between gap-4">
            <ul className="type-label flex gap-5 text-muted">
              <li>
                <a href={Config.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={Config.links.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={Config.links.cv} download>
                  CV
                </a>
              </li>
            </ul>
            <p className="type-label text-right text-faint">
              {Config.location}
              <br />
              <LocalTime />
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
