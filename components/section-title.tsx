import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { PropsWithChildren } from "react";

export const SectionTitle: React.FC<
  PropsWithChildren<HTMLMotionProps<"h2">>
> = ({ children, className, ...props }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={cn(
        "text-4xl font-bold text-center mb-32 font-poppins",
        className
      )}
      {...props}
    >
      {children}
    </motion.h2>
  );
};
