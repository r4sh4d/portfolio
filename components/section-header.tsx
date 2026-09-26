import { pad } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./motion/reveal";
import { SplitWords } from "./motion/split-words";

/**
 * Opening of every home section: a hairline with index and label, a display
 * title, and optional supporting copy offset to the right.
 */
export function SectionHeader({
  index,
  label,
  title,
  titleId,
  description,
  aside,
  className,
}: {
  index: number;
  label: string;
  title: string;
  titleId?: string;
  description?: string;
  aside?: string;
  className?: string;
}) {
  return (
    <header className={cn("frame", className)}>
      <div className="type-label flex items-center justify-between border-t border-line pt-4 text-muted">
        <p>
          <span className="text-accent">({pad(index)})</span>
          <span className="ml-3">{label}</span>
        </p>
        {aside && <p>{aside}</p>}
      </div>

      <div className="grid-12 mt-10 gap-y-8 md:mt-16">
        <Reveal
          as="h2"
          id={titleId}
          variant="words"
          className="type-display col-span-4 md:col-span-9"
        >
          <SplitWords text={title} />
        </Reveal>
        {description && (
          <Reveal
            as="p"
            delay={200}
            className="col-span-4 max-w-xl self-end text-[1.0625rem] leading-relaxed text-muted md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
          >
            {description}
          </Reveal>
        )}
      </div>
    </header>
  );
}
