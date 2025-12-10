"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Config } from "@/config";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Education", href: "/#education" },
  { label: "Experience", href: "/#experiences" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
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
        "relative overflow-hidden bg-white text-neutral-900 border-t border-black/5 dark:bg-black dark:text-white dark:border-white/5 transition-[background-color,border-color] duration-500",
        className
      )}
    >
      <div className="absolute inset-0 bg-linear-to-r from-brand-200/40 via-transparent to-brand-400/30 blur-3xl dark:from-brand-900/30 dark:via-brand-600/20 dark:to-brand-800/25" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 flex-col gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-neutral-200 shadow-lg dark:border-white/10">
              <Image
                src="/rashad.jpg"
                fill
                alt="Rashad Murshudov portrait"
                sizes="80px"
                className="object-cover object-top grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 dark:text-white/70">
                {footer.name}
              </p>
              <p className="text-2xl font-semibold text-neutral-900 dark:text-white">
                {footer.position}
              </p>
            </div>
          </div>
          <p className="max-w-xl text-base text-neutral-600 dark:text-white/70">
            {footer.description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              variant="gradient"
              className="gap-2 tracking-[0.25em]"
            >
              <a href={footer.cvUrl} download>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  aria-hidden="true"
                  fill="currentColor"
                >
                  <path d="M12 3a1 1 0 0 1 1 1v8.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4A1 1 0 0 1 8.707 10.293L11 12.586V4a1 1 0 0 1 1-1ZM5 20a1 1 0 0 1 0-2h14a1 1 0 1 1 0 2Z" />
                </svg>
                Download CV
              </a>
            </Button>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 transition hover:-translate-y-1 hover:border-brand-300 hover:text-brand-500 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-start gap-4 lg:items-end lg:text-right">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500 dark:text-white/70">
            Navigate
          </p>
          <div className="flex flex-wrap gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-neutral-700 transition hover:bg-neutral-100 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/20"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-neutral-500 dark:text-white/50">
            © {new Date().getFullYear()} Rashad Murshudov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
