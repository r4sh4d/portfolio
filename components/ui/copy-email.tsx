"use client";

import { IconCheck, IconCopy } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context): the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="type-label inline-flex items-center gap-2 rounded-full px-4 py-3 text-fg ring-1 ring-line-strong transition-shadow duration-300 hover:ring-fg"
    >
      {copied ? (
        <IconCheck aria-hidden="true" className="size-3.5 text-accent" />
      ) : (
        <IconCopy aria-hidden="true" className="size-3.5" />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
