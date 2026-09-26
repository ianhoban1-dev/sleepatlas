import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders article text with two inline marks, server-side:
 *   [link text](/path/ or https://...)  and  **bold**
 * Everything else is plain text, so content stays crawlable HTML.
 */
const TOKEN = /(\[[^\]]+\]\([^)\s]+\)|\*\*[^*]+\*\*)/g;

export default function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((p) => p !== "");
  return (
    <>
      {parts.map((part, i) => {
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (/^https?:\/\//.test(href)) {
            return (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            );
          }
          return (
            <Link key={i} href={href}>
              {label}
            </Link>
          );
        }
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
