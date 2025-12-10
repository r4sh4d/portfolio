import { Timeline } from "@/components/ui/timeline";
import { Config } from "@/config";
import { experiences } from "@/data";
import { SectionTitle } from "../section-title";

export default function ExperiencesSection() {
  const { experiences: experienceConfig } = Config;
  return (
    <div className="relative w-full py-24 overflow-clip bg-white dark:bg-neutral-950 transition-[background-color,border-color] duration-500">
      <div className="px-4 sm:px-12 max-w-7xl mx-auto">
        <SectionTitle className="mb-8 text-neutral-900 dark:text-white">
          {experienceConfig.title}
        </SectionTitle>
        <p className="text-center text-xl font-medium mb-32 max-w-4xl mx-auto text-neutral-600 dark:text-neutral-300">
          {experienceConfig.description}
        </p>
      </div>
      <Timeline data={experiences} />
    </div>
  );
}
