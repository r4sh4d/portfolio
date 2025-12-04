import { motion } from "motion/react";
import { SectionTitle } from "../section-title";
import { Config } from "@/config";

export default function AboutSection() {
  const { about } = Config;
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <SectionTitle className="mb-8">{about.title}</SectionTitle>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-center text-xl text-neutral-300 font-medium mb-32 max-w-4xl mx-auto"
      >
        {about.description}
      </motion.p>
    </section>
  );
}
