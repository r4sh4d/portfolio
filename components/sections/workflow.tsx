import { Config } from "@/config";
import { workflows } from "@/data";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { GlowingEffect } from "../ui/glowing-effect";
import { SectionTitle } from "../section-title";

export default function WorkflowSection() {
  const { workflow } = Config;

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24 text-neutral-900 dark:bg-neutral-950 dark:text-white transition-[background-color,border-color] duration-500">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-10 top-12 h-96 w-96 rounded-full bg-brand-500/15 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <SectionTitle className="mb-6 text-neutral-900 dark:text-white">
          {workflow.title}
        </SectionTitle>
        <p className="mx-auto mb-16 max-w-3xl text-center text-lg text-neutral-600 dark:text-slate-200">
          {workflow.description}
        </p>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-5 xl:grid-rows-2">
          {workflows.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className={cn("list-none", item.area)}
            >
              <div className="relative h-full rounded-2xl border border-white/20 bg-white/80 p-2 shadow-xl shadow-black/5 backdrop-blur-md transition dark:border-white/10 dark:bg-white/5 md:rounded-3xl md:p-3">
                <GlowingEffect
                  spread={48}
                  glow
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1.5}
                />
                <div
                  className={cn(
                    "relative flex h-full flex-col justify-between gap-3 overflow-hidden rounded-2xl border border-white/60 p-6 transition",
                    "bg-gradient-to-br",
                    item.accent,
                    "dark:border-white/10"
                  )}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl border border-neutral-200/60 bg-white/80 p-3 text-neutral-900 shadow-inner dark:border-white/10 dark:bg-white/10 dark:text-white">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-[0.65rem] uppercase tracking-[0.35em] text-neutral-600 dark:text-white/60">
                          {item.phase}
                        </p>
                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                          {item.badge}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold leading-tight text-balance md:text-[1.25rem]">
                        {item.title}
                      </h3>
                      <p className="text-sm text-neutral-600 dark:text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {item.highlights.map((highlight, hlIndex) => (
                      <div
                        key={`${item.id}-${hlIndex}`}
                        className="flex items-start gap-2 text-sm text-neutral-700 dark:text-white/70"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-500/70 dark:bg-white/60" />
                        <p>{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
