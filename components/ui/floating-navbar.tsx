"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ReactNode } from "react";

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
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
      }}
      className={cn(
        "flex max-w-fit fixed top-4 sm:top-6 inset-x-0 mx-auto border border-white/10 hover:border-white/20 rounded-full  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-md bg-black/30 z-5000 p-1.5 sm:p-2.5 items-center justify-center space-x-2 transition-colors duration-300",
        className
      )}
    >
      {navItems.map((navItem: any, idx: number) => (
        <a
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative text-white items-center flex sm:space-x-1 hover:text-neutral-300 px-4 py-2 rounded-full hover:bg-neutral-900 transition-colors duration-300"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </a>
      ))}
      <a
        href="#contact"
        className="border text-sm font-medium relative border-white/10 hover:border-white/20 transition-colors duration-300 text-white px-4 py-2 rounded-full"
      >
        <span>Contact me</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-linear-to-r from-transparent via-purple-500 to-transparent h-px" />
      </a>
    </motion.div>
  );
};
