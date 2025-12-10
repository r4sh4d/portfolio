import Image from "next/image";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";
import { educationDetail } from "@/data";

export default function EducationsSection() {
  const { education } = Config;
  const detail = educationDetail;
  const [degreeTitle, degreeFocus] = detail.degree
    .split("—")
    .map((part) => part.trim());

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white py-24 text-neutral-900 transition-[background-color,border-color] duration-500 dark:from-neutral-950 dark:via-neutral-900/50 dark:to-neutral-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.12),transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 text-center">
        <SectionTitle className="mb-4 text-neutral-900 dark:text-white">
          {education.title}
        </SectionTitle>
        <p className="mx-auto mb-4 max-w-3xl text-lg text-neutral-600 dark:text-neutral-300">
          {education.description}
        </p>

        <div className="grid gap-8 lg:grid-cols-5 text-left">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/90 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.45)] dark:border-white/10 dark:bg-white/5 lg:col-span-3">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,210,254,0.25),transparent_65%)] dark:bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.2),transparent_65%)] blur-3xl" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-3 shadow-md">
                    <Image
                      src={detail.logo}
                      alt={detail.school}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                      {detail.period}
                    </p>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                      {detail.school}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      {detail.location}
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-neutral-200/70 bg-white/80 px-4 py-3 text-xs font-semibold shadow-inner dark:border-white/10 dark:bg-white/10">
                  <div className="flex flex-col leading-tight text-left">
                    <span>{degreeTitle}</span>
                    {degreeFocus && (
                      <span className="text-sm text-brand-600 dark:text-brand-200/80">
                        {degreeFocus}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
                {detail.summary}
              </p>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                  Highlights
                </p>
                <ul className="space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
                  {detail.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500/70 dark:bg-brand-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-white/10 bg-white/90 p-6 shadow-[0_15px_50px_-35px_rgba(15,23,42,0.5)] dark:border-white/10 dark:bg-white/5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
                Foundation Tracks
              </p>
              <div className="mt-4 grid gap-3 text-sm text-neutral-700 dark:text-neutral-200">
                {detail.focus.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-neutral-200/60 bg-white/95 px-4 py-3 dark:border-white/10 dark:bg-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
