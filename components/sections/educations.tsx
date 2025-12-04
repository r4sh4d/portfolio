import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { SVGProps, useState } from "react";
import { SectionTitle } from "../section-title";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { CanvasRevealEffect } from "../ui/canvas-reveal-effect";
import { Config } from "@/config";
import { cn } from "@/lib/utils";

export default function EducationsSection() {
  const { education } = Config;
  return (
    <section className="relative w-full py-24">
      <BackgroundRippleEffect />
      <div className="relative max-w-4xl mx-auto px-4 text-center z-50">
        <SectionTitle className="mb-8">{education.title}</SectionTitle>
        <p className="text-center text-xl text-neutral-300 font-medium mb-32 max-w-4xl mx-auto">
          {education.description}
        </p>

        <div className="flex w-full justify-center items-center">
          <Card
            title={`Computer Science \n 2017 — 2021 \n Baku State University \n Bachelor of Science (BS)`}
            icon={
              <Image
                src="/bsu.png"
                alt="Baku State University Logo"
                className="w-full aspect-square bg-white rounded-full"
                width={24 * 4}
                height={24 * 4}
              />
            }
          >
            <CanvasRevealEffect
              animationSpeed={3}
              showGradient
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
          </Card>
        </div>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  return (
    <div
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerEnter}
      onPointerUp={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      className="select-none border border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20 relative w-96 h-[450px]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="pointer-events-none h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div
          className={cn(
            "text-center transition duration-200 w-full mx-auto flex items-center justify-center",
            hovered ? "-translate-y-4 opacity-0" : "opacity-100"
          )}
        >
          {icon}
        </div>
        <h2
          className={cn(
            "text-xl relative z-10 mt-4 font-bold transition duration-200 whitespace-pre-line dark:text-white",
            hovered
              ? "opacity-100 -translate-y-2 text-white"
              : "opacity-0 text-black dark:text-white"
          )}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
