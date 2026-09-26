import Image from "next/image";
import { Config } from "@/config";
import { educationDetail, experiences, projects } from "@/data";
import { careerStartYear, currentRole, pad } from "@/lib/content";
import { Parallax } from "../motion/parallax";
import { Reveal } from "../motion/reveal";
import { ScrollText } from "../motion/scroll-text";

const facts = [
  { label: "Building since", value: careerStartYear },
  { label: "Roles held", value: pad(experiences.length) },
  { label: "Selected projects", value: pad(projects.length) },
];

export function About() {
  const education = educationDetail;

  return (
    <section
      id="about"
      tabIndex={-1}
      aria-labelledby="about-title"
      className="pt-36 outline-none md:pt-56"
    >
      <div className="frame">
        <div className="type-label flex items-center justify-between border-t border-line pt-4 text-muted">
          <h2 id="about-title">
            <span className="text-accent">(03)</span>
            <span className="ml-3">{Config.about.title}</span>
          </h2>
          <p>{Config.location}</p>
        </div>

        <ScrollText
          text={Config.about.description}
          className="type-statement mt-10 max-w-[22ch] text-[clamp(2rem,4.6vw,4.75rem)] md:mt-16"
        />
      </div>

      <div className="frame grid-12 mt-24 gap-y-14 md:mt-36">
        <figure className="col-span-4 md:col-span-4">
          <Reveal
            variant="clip"
            className="relative aspect-[4/5] overflow-hidden bg-raised"
          >
            <div data-reveal-inner className="absolute inset-0">
              <Parallax amount={8}>
                <Image
                  src="/rashad.jpg"
                  alt={`Portrait of ${Config.name}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top grayscale"
                />
              </Parallax>
            </div>
          </Reveal>
          <figcaption className="type-label mt-4 flex justify-between text-muted">
            <span>{Config.name}</span>
            <span>{Config.role}</span>
          </figcaption>
        </figure>

        <div className="col-span-4 flex flex-col justify-between gap-14 md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7">
          <Reveal
            as="p"
            className="text-[clamp(1.0625rem,1.3vw,1.25rem)] leading-relaxed text-fg/85"
          >
            {Config.hero.description}
          </Reveal>

          <dl className="grid grid-cols-3 gap-x-4 border-t border-line pt-6 md:gap-x-6">
            {facts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 90}>
                <dt className="type-label text-faint">{fact.label}</dt>
                <dd className="mt-3 font-display text-[clamp(2.25rem,4vw,4.25rem)] font-medium leading-none tracking-[-0.05em] tabular-nums">
                  {fact.value}
                </dd>
              </Reveal>
            ))}
          </dl>

          {currentRole && (
            <p className="type-label flex items-center gap-2 text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Now — {currentRole.role} at {currentRole.company}
            </p>
          )}
        </div>
      </div>

      <div id="education" className="frame grid-12 mt-28 gap-y-10 md:mt-40">
        <div className="col-span-4 border-t border-line pt-4 md:col-span-3">
          <h3 className="type-label text-muted">{Config.education.title}</h3>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
            {Config.education.description}
          </p>
        </div>

        <Reveal className="col-span-4 border-t border-line pt-4 md:col-span-5">
          <p className="type-label text-faint">
            {education.period} · {education.location}
          </p>
          <p className="type-heading mt-6">{education.school}</p>
          <p className="mt-3 text-fg/85">{education.degree}</p>
          <p className="mt-8 max-w-lg leading-relaxed text-muted">
            {education.summary}
          </p>
        </Reveal>

        <Reveal
          delay={120}
          className="col-span-4 border-t border-line pt-4 md:col-span-4"
        >
          <p className="type-label text-faint">Highlights</p>
          <ul className="mt-6 grid gap-3">
            {education.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span aria-hidden="true" className="text-accent">
                  +
                </span>
                {highlight}
              </li>
            ))}
          </ul>
          <p className="type-label mt-10 text-faint">Foundation tracks</p>
          <p className="mt-3 leading-relaxed text-muted">
            {education.focus.join(" / ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
