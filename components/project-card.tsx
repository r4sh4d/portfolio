"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import clsx from "clsx";
import Image from "next/image";
import { GlowingEffect } from "./ui/glowing-effect";

type ProjectCardProps = {
  thumbnail: string;
  href: string;
  className?: string;
  containerClassName?: string;
};

export function ProjectCard({
  thumbnail,
  href,
  className,
  containerClassName,
}: ProjectCardProps) {
  return (
    <CardContainer
      className={clsx("inter-var", className)}
      containerClassName={containerClassName}
    >
      <CardBody className="relative group/card dark:shadow-md dark:hover:shadow-xl dark:border-white/20 border-black/10 w-auto sm:w-120 h-auto rounded-3xl p-4 border transition-shadow duration-300 ">
        <GlowingEffect
          borderWidth={3}
          spread={20}
          glow={true}
          disabled={false}
          proximity={20}
          inactiveZone={0}
        />
        <CardItem translateZ={100} className="w-full">
          <Image
            src={thumbnail}
            height="1000"
            width="1000"
            className="w-full aspect-video object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-8">
          <CardItem
            translateZ={20}
            as="a"
            href={href || "https://twitter.com/mannupaaji"}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Check project →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
