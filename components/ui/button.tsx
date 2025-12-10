import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='h-'])]:h-4 [&_svg:not([class*='w-'])]:w-4",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-lg shadow-brand-500/30 hover:bg-brand-700",
        secondary: "bg-white/10 text-white hover:bg-white/20 hover:text-white",
        outline:
          "border border-neutral-300 text-neutral-900 hover:border-neutral-500 hover:text-brand-500 dark:border-white/20 dark:text-white dark:hover:border-white/50 dark:hover:text-brand-200",
        ghost: "text-white/70 hover:text-white",
        gradient:
          "bg-linear-to-r from-brand-400 via-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/30 hover:brightness-110",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
