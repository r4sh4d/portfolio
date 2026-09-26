import { Config } from "@/config";
import { ContactForm } from "../contact-form";
import { Magnetic } from "../motion/magnetic";
import { Reveal } from "../motion/reveal";
import { SplitWords } from "../motion/split-words";
import { ArrowSwap } from "../ui/arrow-swap";
import { CopyEmail } from "../ui/copy-email";
import { LocalTime } from "../ui/local-time";

const elsewhere = [
  { label: "GitHub", href: Config.links.github, external: true },
  { label: "LinkedIn", href: Config.links.linkedIn, external: true },
  { label: "CV", href: Config.links.cv, external: false },
];

export function Contact() {
  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-title"
      className="pb-24 pt-36 outline-none md:pb-32 md:pt-64"
    >
      <div className="frame">
        <div className="type-label flex items-center justify-between border-t border-line pt-4 text-muted">
          <p>
            <span className="text-accent">(07)</span>
            <span className="ml-3">{Config.contact.title}</span>
          </p>
          <p>
            {Config.location} · <LocalTime />
          </p>
        </div>

        <div className="relative mt-12 md:mt-20">
          <Reveal
            as="h2"
            id="contact-title"
            variant="words"
            className="type-display max-w-[14ch] text-[clamp(3.25rem,10.5vw,12.5rem)]"
          >
            <SplitWords text={Config.contact.headline} />
          </Reveal>

          <Magnetic className="mt-10 md:absolute md:bottom-[4%] md:right-[6%] md:mt-0">
            <a
              href={`mailto:${Config.email}`}
              className="group flex size-36 flex-col items-center justify-center gap-2 rounded-full bg-accent text-bg transition-[scale] duration-700 ease-out-expo hover:scale-105 md:size-[clamp(10rem,15vw,15rem)]"
            >
              <span className="type-label">Write to me</span>
              <ArrowSwap className="text-2xl" />
            </a>
          </Magnetic>
        </div>

        <div className="grid-12 mt-16 gap-y-14 md:mt-28">
          <Reveal
            as="p"
            className="col-span-4 max-w-md text-[1.0625rem] leading-relaxed text-muted md:col-span-5"
          >
            {Config.contact.description}
          </Reveal>

          <Reveal
            delay={120}
            className="col-span-4 md:col-span-6 md:col-start-7"
          >
            <p className="type-label text-faint">Email</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Magnetic strength={0.15}>
                <a
                  href={`mailto:${Config.email}`}
                  className="link-line font-display text-[clamp(1.375rem,2.5vw,2.375rem)] tracking-[-0.03em] break-all"
                >
                  {Config.email}
                </a>
              </Magnetic>
              <CopyEmail email={Config.email} />
            </div>

            <p className="type-label mt-12 text-faint">Elsewhere</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.external
                      ? { target: "_blank", rel: "noreferrer" }
                      : { download: true })}
                    className="type-heading group inline-flex items-center gap-2 transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                    <span
                      className={item.external ? "" : "inline-block rotate-90"}
                    >
                      <ArrowSwap
                        direction={item.external ? "up-right" : "right"}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid-12 mt-28 gap-y-10 border-t border-line pt-6 md:mt-40">
          <p className="type-label col-span-4 text-muted md:col-span-3">
            Or write here
          </p>
          <ContactForm className="col-span-4 md:col-span-9 lg:col-span-8 lg:col-start-5" />
        </div>
      </div>
    </section>
  );
}
