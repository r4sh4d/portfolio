"use client";

import { useResizeObserver } from "@/hooks/use-resize-observer";
import Image from "next/image";
import {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";

export default function SkillsSection() {
  const { skills } = Config;
  const logos = [
    // Most used
    "/expo.webp",
    "/react-native.webp",
    "/react.webp",
    "/typescript.webp",
    "/nextjs.webp",
    // Secondary
    "/figma.webp",
    "/tanstack.png",
    "/nodejs.webp",
    "/tailwindcss.png",
    "/shadcn.png",
    "/git.png",
    "/github.png",
    "/gitlab.webp",
    "/graphql.webp",
    "/strapi.webp",
    "/react-hook-form.png",
    "/zustand.png",
    "/apollo.png",
  ];
  const logosStack1 = logos.slice(0, 5);
  const logosStack2 = logos.slice(5, 11);
  const logosStack3 = logos.slice(11);
  return (
    <div className="relative py-24">
      <div className="container mx-auto px-4 sm:px-12">
        <SectionTitle className="mb-8">{skills.title}</SectionTitle>

        <p className="text-center text-xl text-neutral-300 font-medium mb-32 max-w-4xl mx-auto">
          {skills.description}
        </p>

        <div className="relative flex h-[400px] items-center justify-center overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:top-0 before:z-10 md:h-[700px] before:bg-linear-[180deg,black_0%_10%,transparent_40%_60%,black_90%_100%] ">
          <div className="relative flex h-full w-full items-center justify-center">
            <StackCircle
              className="absolute aspect-square w-[calc(100%-40px)] border-pink-800/40 animate-[spin_infinite_linear_30s] border-2 sm:w-[500px] md:w-[630px] lg:w-[878px] xl:w-[978px] [&>div>img]:animate-[spin_infinite_linear_reverse_30s]"
              logos={logosStack3}
            />
            <StackCircle
              className="absolute aspect-square w-[calc(70%-40px)] border-purple-800/40 animate-[spin_infinite_linear_reverse_24s] border-2 sm:w-[350px] md:w-[430px] lg:w-[622px] [&>div>img]:animate-[spin_infinite_linear_24s]"
              logos={logosStack2}
            />
            <StackCircle
              className="absolute aspect-square w-[calc(40%-40px)] border-indigo-800/40 animate-[spin_infinite_linear_18s] border-2 sm:w-[200px] md:w-[250px] lg:w-[366px] [&>div>img]:animate-[spin_infinite_linear_reverse_18s]"
              logos={logosStack1}
            />
            <div className="relative aspect-square w-[clamp(30px,8%,45px)] sm:w-[60px] md:w-20 lg:w-[100px]">
              <div className="size-full rounded-lg sm:rounded-2xl overflow-hidden bg-linear-to-br from-blue-300 to-purple-500">
                <Image
                  src="/javascript.png"
                  className="size-full"
                  width={100}
                  height={100}
                  alt="Javascript Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const StackCircle: React.FC<
  PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  > & { logos: string[] }
> = ({ children, className, logos, ...props }) => {
  const [radius, setRadius] = useState(0);
  const onResize = useCallback((target: HTMLDivElement) => {
    setRadius(target.clientWidth / 2);
  }, []);

  const ref = useResizeObserver(onResize);
  const elementsCount = logos.length;
  const angle = 360 / elementsCount;

  return (
    <div
      className={twMerge("relative rounded-full", className)}
      ref={ref}
      {...props}
    >
      {logos.map((logo, index) => {
        return (
          <div
            key={index}
            style={{
              transform: `rotate(${
                angle * index * 1
              }deg) translate(${-radius}px) rotate(${angle * index * -1}deg)`,
              opacity: radius === 0 ? 0 : 1,
              transition: "opacity .3s",
            }}
            className="absolute left-1/2 top-1/2 -m-[15px] flex max-h-[30px] min-h-[30px] min-w-[30px] max-w-[30px] sm:-m-5 sm:max-h-10 sm:min-h-10 sm:min-w-10 sm:max-w-10 md:-m-[25px] md:max-h-[50px] md:min-h-[50px] md:min-w-[50px] md:max-w-[50px] lg:-m-[30px] lg:max-h-[60px] lg:min-h-[60px] lg:min-w-[60px] lg:max-w-[60px]"
          >
            <Image
              alt={"tech stack item logo"}
              src={logo}
              fill
              className="rounded-lg sm:rounded-2xl object-cover hover:scale-125 transition-transform duration-300 bg-white"
            />
          </div>
        );
      })}
      {children}
    </div>
  );
};
