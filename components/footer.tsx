"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Config } from "@/config";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

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
    icon: <IconBrandGithub />,
  },
  {
    label: "LinkedIn",
    href: Config.footer.linkedInUrl,
    icon: <IconBrandLinkedin size={24} stroke={1.5} />,
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
