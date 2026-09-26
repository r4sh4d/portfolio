import Link from "next/link";
import { ArrowSwap } from "@/components/ui/arrow-swap";

export default function NotFound() {
  return (
    <section className="frame flex min-h-svh flex-col justify-center pb-16 pt-28">
      <p className="type-label border-t border-line pt-4 text-muted">
        <span className="text-accent">(404)</span>
        <span className="ml-3">Not found</span>
      </p>
      <h1 className="type-hero mt-10">Lost the thread.</h1>
      <Link
        href="/"
        className="type-label group mt-12 inline-flex w-fit items-center gap-2 rounded-full bg-fg px-5 py-3.5 text-bg transition-colors duration-300 hover:bg-accent"
      >
        Back home
        <ArrowSwap direction="right" />
      </Link>
    </section>
  );
}
