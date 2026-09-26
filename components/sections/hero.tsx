"use client";

import Image from "next/image";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import * as m from "motion/react-m";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { Config } from "@/config";
import { careerStartYear, currentRole } from "@/lib/content";
import { Magnetic } from "../motion/magnetic";
import { ArrowSwap } from "../ui/arrow-swap";
import { LocalTime } from "../ui/local-time";

const [firstName, lastName] = Config.name.split(" ");

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

/** One line of the name, masked so each character rises into place. */
function NameLine({
  text,
  x,
  start,
  before,
}: {
  text: string;
  x: MotionValue<string>;
  start: number;
  before?: ReactNode;
}) {
  return (
    <m.span
      style={{ x }}
      className="block whitespace-nowrap motion-reduce:transform-none!"
    >
      <span className="inline-block overflow-hidden pb-[0.07em] pt-[0.03em]">
        {before}
        {[...text].map((char, index) => (
          <span
            key={index}
            className="animate-rise inline-block"
            style={delay(start + index * 35)}
          >
            {char}
          </span>
        ))}
      </span>
    </m.span>
  );
}

function Meta({
  label,
  children,
  ms,
  className,
}: {
  label: string;
  children: ReactNode;
  ms: number;
  className?: string;
}) {
  return (
    <div className={`animate-fade ${className ?? ""}`} style={delay(ms)}>
      <dt className="text-faint">{label}</dt>
      <dd className="mt-1.5 text-fg">{children}</dd>
    </div>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Scrolling out: the two name lines drift apart, the rest recedes.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const firstX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const lastX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const recede = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  // Pointer: a soft light follows the cursor while an outline echo of the
  // name shifts against it, giving the type a hint of depth.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 50, damping: 18 });
  const springY = useSpring(pointerY, { stiffness: 50, damping: 18 });
  const glowX = useTransform(springX, (v) => `${v * 80}vw`);
  const glowY = useTransform(springY, (v) => `${v * 80}vh`);
  const echoX = useTransform(springX, (v) => v * -26);
  const echoY = useTransform(springY, (v) => v * -18);

  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }
    const onMove = (event: PointerEvent) => {
      pointerX.set(event.clientX / window.innerWidth - 0.5);
      pointerY.set(event.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [pointerX, pointerY]);

  // The portrait sits inline with the surname, set to its cap height.
  const portraitBox =
    "relative mr-[0.1em] inline-block h-[0.7em] w-[0.54em] align-baseline";

  const name = (echo: boolean) => (
    <>
      <NameLine text={firstName} x={firstX} start={250} />
      <NameLine
        text={lastName}
        x={lastX}
        start={420}
        before={
          echo ? (
            <span className={portraitBox} />
          ) : (
            <span
              className={`${portraitBox} animate-rise group overflow-hidden bg-raised`}
              style={delay(380)}
            >
              <Image
                src="/rashad.jpg"
                alt=""
                fill
                preload
                sizes="(min-width: 768px) 9vw, 20vw"
                className="object-cover object-top grayscale transition-[filter,scale] duration-1000 ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
              />
            </span>
          )
        }
      />
    </>
  );

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col overflow-hidden pb-6 pt-24 md:pb-8 md:pt-28"
    >
      {/* Column guides: the grid the whole site is set on. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="frame grid-12 h-full">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className={`h-full border-x border-fg/[0.03] ${i >= 4 ? "hidden md:block" : ""}`}
            />
          ))}
        </div>
      </div>

      <m.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -ml-[35vmax] -mt-[35vmax] size-[70vmax] rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.12_295/0.08),transparent)]"
        style={{ x: glowX, y: glowY }}
      />

      <m.div
        style={{ opacity: recede }}
        className="frame relative motion-reduce:opacity-100!"
      >
        <dl className="grid-12 type-label gap-y-5">
          <Meta label="Role" ms={900} className="col-span-2 md:col-span-3">
            {Config.role}
          </Meta>
          <Meta label="Based in" ms={980} className="col-span-2 md:col-span-3">
            {Config.location}
            <span className="mt-1 block text-muted md:mt-0 md:inline">
              <span className="hidden md:inline"> · </span>
              <LocalTime />
            </span>
          </Meta>
          {currentRole && (
            <Meta
              label="Currently"
              ms={1060}
              className="col-span-2 md:col-span-3"
            >
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-accent [animation:pulse-dot_2.4s_ease-in-out_infinite]" />
                {currentRole.company}, since {currentRole.start}
              </span>
            </Meta>
          )}
          <Meta
            label="Building since"
            ms={1140}
            className="col-span-2 md:col-span-3 md:text-right"
          >
            {careerStartYear}
          </Meta>
        </dl>
      </m.div>

      <div className="frame relative flex flex-1 flex-col justify-end py-10 md:justify-center">
        <div className="relative">
          <h1 className="type-hero relative text-fg">
            <span className="sr-only">{Config.name}</span>
            <span aria-hidden="true" className="relative block">
              <m.span
                className="pointer-events-none absolute inset-0 hidden text-transparent [-webkit-text-stroke:1px_rgb(236_233_226/0.14)] motion-reduce:hidden! [@media(hover:hover)_and_(pointer:fine)]:block"
                style={{ x: echoX, y: echoY }}
              >
                {name(true)}
              </m.span>
              <span className="relative block">{name(false)}</span>
            </span>
          </h1>

          <p
            className="animate-fade mt-8 max-w-sm text-[clamp(1.125rem,1.5vw,1.5rem)] leading-snug tracking-[-0.01em] text-muted md:absolute md:right-0 md:top-[0.9vw] md:mt-0 md:w-[30%]"
            style={delay(1200)}
          >
            {Config.hero.currently}
          </p>
        </div>
      </div>

      <m.div
        style={{ opacity: recede }}
        className="frame relative motion-reduce:opacity-100!"
      >
        <div className="flex items-center justify-between gap-6 border-t border-line pt-5">
          <div
            aria-hidden="true"
            className="animate-fade type-label hidden items-center gap-3 text-faint md:flex"
            style={delay(1300)}
          >
            <span className="relative h-8 w-px overflow-hidden bg-line">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-fg [animation:scroll-cue_2.2s_var(--ease-in-out-quart)_infinite]" />
            </span>
            Scroll to explore
          </div>

          <div
            className="animate-fade flex w-full items-center gap-3 md:w-auto"
            style={delay(1380)}
          >
            <Magnetic>
              <a
                href="#projects"
                className="type-label group flex items-center gap-2 rounded-full bg-fg px-5 py-3.5 text-bg transition-colors duration-300 hover:bg-accent"
              >
                Selected work
                <span className="inline-block rotate-90">
                  <ArrowSwap direction="right" />
                </span>
              </a>
            </Magnetic>
            <a
              href={Config.links.cv}
              download
              className="type-label group flex items-center gap-2 rounded-full px-5 py-3.5 text-fg ring-1 ring-line-strong transition-shadow duration-300 hover:ring-fg"
            >
              Download CV
              <span className="inline-block rotate-90">
                <ArrowSwap direction="right" />
              </span>
            </a>
          </div>
        </div>
      </m.div>
    </section>
  );
}
