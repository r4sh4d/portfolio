import type { CSSProperties } from "react";

/**
 * Splits text into masked words for the `words` reveal. Screen readers get the
 * untouched sentence; the animated copy is hidden from them.
 */
export function SplitWords({ text }: { text: string }) {
  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <span key={index}>
            <span className="word">
              <span style={{ "--i": index } as CSSProperties}>{word}</span>
            </span>
            {index < words.length - 1 && " "}
          </span>
        ))}
      </span>
    </>
  );
}
