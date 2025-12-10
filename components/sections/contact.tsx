"use client";
import { Config } from "@/config";
import ContactForm from "../contact-form";
import { SectionTitle } from "../section-title";

export default function ContactSection() {
  const { contact } = Config;
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 transition-[background-color,border-color] duration-500">
      <SectionTitle className="mb-8 text-neutral-900 dark:text-white">
        {contact.title}
      </SectionTitle>
      <p className="text-center text-xl font-medium mb-32 max-w-4xl mx-auto text-neutral-600 dark:text-neutral-300">
        {contact.description}
      </p>

      <div className="flex flex-col-reverse justify-between items-center lg:items-start gap-10 lg:flex-row lg:gap-20 mt-32">
        <ContactForm className="flex-1 mt-8 lg:mt-0" />
      </div>
    </section>
  );
}
