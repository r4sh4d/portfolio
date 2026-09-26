"use client";

import { useActionState, useEffect, useRef } from "react";
import { handleContact, type ContactFormState } from "@/services/contact";
import { cn } from "@/lib/utils";
import { Magnetic } from "./motion/magnetic";
import { ArrowSwap } from "./ui/arrow-swap";

const initialState: ContactFormState = { success: false, message: "" };

const fields = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    autoComplete: "email",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    placeholder: "What are we building?",
    autoComplete: "off",
  },
] as const;

const inputClass =
  "w-full border-b border-line-strong bg-transparent pb-3 pt-2 text-lg text-fg outline-none transition-colors duration-300 placeholder:text-faint focus:border-accent";

export function ContactForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    handleContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className={cn("grid gap-10", className)}
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-6">
        {fields.map((field) => (
          <label key={field.name} className="block">
            <span className="type-label text-muted">{field.label}</span>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              required
              className={inputClass}
            />
          </label>
        ))}
      </div>

      <label className="block">
        <span className="type-label text-muted">Message</span>
        <textarea
          name="body"
          rows={4}
          placeholder="Tell me about the product, timeline and team."
          required
          className={cn(inputClass, "resize-none")}
        />
      </label>

      <div className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center">
        <p
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-6 text-sm",
            state.success ? "text-accent" : "text-[#f2a19a]"
          )}
        >
          {state.message}
        </p>
        <Magnetic>
          <button
            type="submit"
            disabled={pending}
            className="type-label group inline-flex items-center gap-3 rounded-full bg-fg px-7 py-4 text-bg transition-colors duration-300 hover:bg-accent disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
            <ArrowSwap direction="right" />
          </button>
        </Magnetic>
      </div>
    </form>
  );
}
