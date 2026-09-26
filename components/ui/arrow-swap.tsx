import { IconArrowRight, IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

/** Arrow that exits and re-enters when its `group` parent is hovered. */
export function ArrowSwap({
  direction = "up-right",
  className,
}: {
  direction?: "up-right" | "right";
  className?: string;
}) {
  const Icon = direction === "right" ? IconArrowRight : IconArrowUpRight;
  return (
    <span aria-hidden="true" className={cn("arrow-swap", className)}>
      <Icon className="size-[1.1em]" stroke={1.5} />
      <Icon className="size-[1.1em]" stroke={1.5} />
    </span>
  );
}
