import { Config } from "@/config";
import { skillGroups } from "@/data";
import { pad } from "@/lib/content";
import { Reveal } from "../motion/reveal";
import { SectionHeader } from "../section-header";

export function Capabilities() {
  const total = skillGroups.reduce(
    (sum, group) => sum + group.skills.length,
    0
  );

  return (
    <section
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-title"
      className="pt-36 outline-none md:pt-56"
    >
      <SectionHeader
        index={6}
        label="Capabilities"
        title={Config.skills.title}
        titleId="skills-title"
        description={Config.skills.description}
        aside={`${pad(total)} tools`}
      />

      <div className="frame grid-12 mt-20 gap-y-20 md:mt-32">
        {skillGroups.map((group, groupIndex) => (
          <Reveal
            key={group.id}
            delay={groupIndex * 120}
            className="col-span-4 md:col-span-6 lg:col-span-4"
          >
            <div className="flex items-baseline justify-between gap-4 border-b border-fg pb-4">
              <h3 className="type-heading">{group.title}</h3>
              <span className="type-label text-faint">
                {pad(group.skills.length)}
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {group.caption}
            </p>

            <ul className="mt-8 border-t border-line">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-line py-4"
                >
                  <span className="text-lg tracking-[-0.01em] transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5">
                    {skill.name}
                  </span>
                  <span className="type-label text-faint transition-colors duration-500 group-hover:text-accent">
                    {skill.area}
                  </span>
                  <span className="col-span-2 mt-1 text-sm text-muted">
                    {skill.description}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
