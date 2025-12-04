"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Config } from "@/config";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experiences" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: Config.footer.githubUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M12 .5C5.649.5.5 5.734.5 12.227c0 5.177 3.438 9.569 8.207 11.123.6.116.82-.268.82-.593 0-.293-.01-1.07-.017-2.1-3.338.75-4.042-1.66-4.042-1.66-.546-1.43-1.335-1.813-1.335-1.813-1.09-.77.083-.755.083-.755 1.204.086 1.838 1.277 1.838 1.277 1.073 1.913 2.815 1.36 3.5 1.04.11-.8.42-1.36.763-1.672-2.664-.31-5.466-1.384-5.466-6.16 0-1.36.465-2.472 1.235-3.344-.124-.312-.536-1.563.117-3.259 0 0 1.01-.333 3.31 1.276A11.078 11.078 0 0 1 12 5.8c1.02.005 2.046.14 3.005.41 2.3-1.61 3.31-1.276 3.31-1.276.655 1.696.243 2.947.12 3.259.772.872 1.233 1.984 1.233 3.344 0 4.788-2.807 5.846-5.48 6.15.431.386.816 1.143.816 2.301 0 1.661-.015 3-.015 3.413 0 .327.216.714.825.592 4.764-1.559 8.2-5.95 8.2-11.123C23.5 5.733 18.351.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: Config.footer.linkedInUrl,
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.32h4.51V22.5H.24zM7.53 8.32h4.32v1.93h.06c.6-1.14 2.08-2.35 4.28-2.35 4.57 0 5.42 3 5.42 6.9V22.5h-4.5v-6.5c0-1.55-.03-3.54-2.16-3.54-2.16 0-2.49 1.69-2.49 3.44v6.6h-4.5z" />
      </svg>
    ),
  },
];

export function Footer({ className }: { className?: string }) {
  const { footer } = Config;
  return (
    <footer
      className={cn(
        "relative overflow-hidden bg-black text-white border-t border-white/5",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-r from-purple-900/30 via-transparent to-indigo-900/30 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <Image
                src="/rashad.jpg"
                fill
                alt="Rashad Murshudov portrait"
                sizes="80px"
                className="object-cover grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                {footer.name}
              </p>
              <p className="text-2xl font-semibold">{footer.position}</p>
            </div>
          </div>
          <p className="max-w-xl text-base text-white/70">
            {footer.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={footer.cvUrl}
              download
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em]"
            >
              <span className="absolute inset-0 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 shadow-lg shadow-purple-500/40 transition duration-300 group-hover:scale-105" />
              <span className="relative flex items-center gap-2 text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.707 10.293L11 12.586V4a1 1 0 0 1 1-1ZM5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2Z" />
                </svg>
                Download CV
              </span>
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-4 lg:items-end lg:text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Navigate
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/80 transition hover:bg-white/20"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Rashad Murshudov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
