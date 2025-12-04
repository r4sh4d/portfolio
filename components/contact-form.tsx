"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ContactFormState, handleContact } from "@/services/contact";
import { IconBrandGithub, IconBrandLinkedin, IconX } from "@tabler/icons-react";
import React, { useActionState, useRef, useState } from "react";
import { GlowingEffect } from "./ui/glowing-effect";
import { TextArea } from "./ui/textarea";

export default function ContactForm({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) {
  const initialState: ContactFormState = {
    success: false,
    message: "",
  };

  const [state, formAction, pending] = useActionState(
    handleContact,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className={cn(
        "relative shadow-input mx-auto w-full max-w-md bg-white rounded-2xl dark:bg-black p-4 z-60",
        className
      )}
      {...props}
    >
      <GlowingEffect
        borderWidth={2}
        spread={20}
        glow={true}
        disabled={false}
        proximity={20}
        inactiveZone={0}
      />
      <form action={formAction} ref={formRef}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="youremail@example.com"
            type="email"
            name="email"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input id="subject" placeholder="Subject" name="subject" required />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="body">Message</Label>
          <TextArea
            id="body"
            placeholder="Type your message here."
            name="body"
            required
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black text-sm to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {pending ? "Sending message..." : "Send message"}
          <BottomGradient />
        </button>

        {!dismissed && state.message ? (
          <InlineAlert
            message={state.message}
            type={state.success ? "success" : "error"}
            onDismiss={() => setDismissed(true)}
          />
        ) : null}

        <div className="my-8 h-px w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
            <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              LinkedIn
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const InlineAlert = ({
  message,
  type,
  onDismiss,
}: {
  message: string;
  type: "success" | "error";
  onDismiss: () => void;
}) => {
  return (
    <div
      className={cn(
        "mt-4 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium shadow-inner",
        type === "success"
          ? "bg-emerald-500/15 text-emerald-100 border border-emerald-500/30"
          : "bg-rose-500/15 text-rose-100 border border-rose-500/30"
      )}
      role="status"
      aria-live="polite"
    >
      <span className="pr-4">{message}</span>
      <button
        type="button"
        className="group rounded-full border border-white/30 p-1 transition hover:bg-white/20"
        onClick={onDismiss}
      >
        <IconX className="h-4 w-4 text-white opacity-80 group-hover:opacity-100" />
      </button>
    </div>
  );
};
