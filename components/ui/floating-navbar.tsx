"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconMoon, IconSun, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useState } from "react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const renderLinks = (isMobile = false) => (
    <div
      className={cn(
        "flex items-center gap-2",
        isMobile ? "flex-col gap-4 items-start" : "flex-row"
      )}
    >
      {navItems.map((navItem, idx: number) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className="relative items-center flex space-x-4 md:space-x-1 px-4 py-2 rounded-full text-sm transition dark:text-white dark:hover:text-neutral-300 dark:hover:bg-neutral-900/60 text-neutral-800 hover:text-neutral-600 hover:bg-white/70"
          onClick={() => isMobile && setOpen(false)}
        >
          {navItem.icon && (
            <span className={cn("md:hidden", isMobile ? "block" : "hidden")}>
              {navItem.icon}
            </span>
          )}
          <span className={cn(isMobile ? "block" : "hidden sm:block")}>
            {navItem.name}
          </span>
        </Link>
      ))}
    </div>
  );

  return (
    <motion.div
      className={cn(
        "flex md:w-max fixed md:top-6 top-4 md:left-0 inset-x-0 md:mx-auto rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md z-5000 p-1.5 md:p-2.5 items-center justify-between md:justify-center transition dark:border-white/10 dark:hover:border-white/20 dark:bg-black/30 dark:text-white border-black/10 hover:border-black/20 bg-white/80 text-neutral-900 shadow-lg",
        className,
        "left-4 right-4"
      )}
    >
      <div className="flex items-center gap-2 flex-1">
        <Link
          href="/#"
          className="h-9.5 w-9.5 rounded-full border flex items-center justify-center font-semibold tracking-tight border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10 transition"
        >
          RM
        </Link>
        <div className="hidden md:block">{renderLinks(false)}</div>
        <div className="flex-1 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="rounded-full border p-2.5 transition cursor-pointer border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
          >
            {theme === "light" ? (
              <IconMoon className="h-4 w-4" />
            ) : (
              <IconSun className="h-4 w-4" />
            )}
          </button>

          <Link
            href="/#contact"
            className="border text-sm font-medium relative px-4 py-2 rounded-full transition border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
          >
            <span>Contact me</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-linear-to-r from-transparent via-brand-500 to-transparent h-px" />
          </Link>
        </div>
      </div>

      <button
        type="button"
        className="md:hidden rounded-full border px-2.5 py-2.5 transition ml-2 cursor-pointer border-neutral-300 text-neutral-800 hover:border-neutral-500 hover:bg-neutral-100 dark:border-white/20 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
      >
        {open ? (
          <IconX className="h-4 w-4" />
        ) : (
          <IconMenu2 className="h-4 w-4" />
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 rounded-2xl border p-6 md:hidden backdrop-blur-md dark:border-white/10 dark:hover:border-white/20 dark:bg-black/30 dark:text-white border-black/10 hover:border-black/20 bg-white/80 text-neutral-900 shadow-lg">
          {renderLinks(true)}
        </div>
      )}
    </motion.div>
  );
};
