import { Timeline } from "@/components/ui/timeline";
import { SectionTitle } from "../section-title";
import { BackgroundBeams } from "../ui/background-beams";
import { experiences } from "@/data";
import { Config } from "@/config";

export default function ExperiencesSection() {
  const { experiences: experienceConfig } = Config;
  return (
    <div className="relative w-full py-24 overflow-clip">
      <div className="px-4 sm:px-12 max-w-6xl mx-auto">
        <SectionTitle className="mb-8">
          {experienceConfig.title}
        </SectionTitle>
        <p className="text-center text-xl text-neutral-300 font-medium mb-32 max-w-4xl mx-auto">
          {experienceConfig.description}
        </p>
      </div>
      <Timeline data={experiences} />
      <BackgroundBeams />
    </div>
  );
}
