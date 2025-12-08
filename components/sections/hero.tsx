"use client";
import { Config } from "@/config";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

export default function HeroSection() {
  const { hero, footer } = Config;
  const heroRole = hero.role || "Software Engineer";
  const socials = [
    { label: "GitHub", href: footer.githubUrl, Icon: IconBrandGithub },
    { label: "LinkedIn", href: footer.linkedInUrl, Icon: IconBrandLinkedin },
  ].filter((link) => Boolean(link.href));

  return (
    <section className="relative isolate min-h-svh w-full flex justify-center items-center overflow-hidden bg-neutral-900 text-white pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#404040,#1a1a1a_65%)]" />
      <div className="absolute inset-x-0 -bottom-32 h-[420px] rounded-[50%] bg-linear-to-t from-neutral-800/40 via-neutral-800/30 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16 md:flex-row md:items-center md:gap-20">
        <div className="relative order-2 flex justify-center md:order-1 md:w-auto">
          <div className="group relative h-64 w-64 sm:h-72 sm:w-72">
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-neutral-700 via-neutral-800 to-neutral-900 blur-[70px]" />
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 bg-linear-to-b from-neutral-700 via-neutral-800 to-neutral-900" />
              <Image
                src="/rashad-bg.webp"
                alt="Rashad Murshudov portrait"
                fill
                className="relative z-10 object-contain object-bottom scale-105 pt-6 transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </div>

        <div className="order-1 flex flex-1 max-w-3xl flex-col gap-6 text-center md:order-2 md:text-left">
          <div className="flex flex-col gap-3 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">
              {hero.greeting}
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {hero.name} 👨🏻‍💻
            </h1>
          </div>

          <div className="space-y-3 text-lg font-semibold">
            <p className="text-3xl sm:text-4xl [&_path]:stroke-purple-300 whitespace-pre-line">
              a&nbsp;&nbsp;
              <RoughNotation type="box" show animationDuration={1000}>
                <span className="text-purple-400">{heroRole}.</span>
              </RoughNotation>
            </p>
            <p className="text-base font-normal text-neutral-200 mt-8 [&_path]:stroke-purple-300">
              Currently building thoughtful digital experiences with{" "}
              <RoughNotation type="underline" show animationDelay={1000}>
                <span className="font-semibold text-purple-300">
                  React, Next.js & React Native.
                </span>
              </RoughNotation>
            </p>
          </div>

          <p className="text-base leading-relaxed text-neutral-200">
            {hero.description}
          </p>

          <div className="mt-4 flex w-full flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Link
                href="#projects"
                className="rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-purple-600"
              >
                See my works
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/40"
              >
                Contact me
              </Link>
            </div>

            {socials.length > 0 && (
              <div className="flex items-center justify-center gap-4 md:justify-end">
                {socials.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition hover:text-purple-300"
                    aria-label={label}
                  >
                    <Icon size={28} stroke={1.5} />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
