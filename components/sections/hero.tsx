import { Config } from "@/config";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "../ui/background-lines";

export default function HeroSection() {
  const { hero } = Config;
  return (
    // <HeroParallax
    //   title={
    //     <div className="flex flex-col">
    //       <span className="text-5xl">
    //         <EncryptedText text={hero.greeting} />
    //       </span>
    //       <EncryptedText text={hero.name} flipDelayMs={10} />
    //     </div>
    //   }
    //   description={
    //     <p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1, delay: 1 }}
    //       className="text-md"
    //     >
    //       {hero.description}
    //     </p>
    //   }
    //   products={projects}
    // />
    <BackgroundLines className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black px-4">
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#ad46ff70_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="flex flex-col justify-center items-center text-center text-black dark:text-white bg-white dark:bg-black rounded-[22px] py-12 md:py-16 px-4">
        <p className="relative z-20 text-4xl font-bold sm:text-7xl">
          {hero.greeting}
        </p>
        <p className="relative z-20 text-4xl font-bold sm:text-7xl mt-4 md:mt-8">
          {hero.name} -
        </p>
        <p className="text-lg max-w-2xl z-20 mt-8">{hero.description}</p>
      </div>
    </BackgroundLines>
  );
}
