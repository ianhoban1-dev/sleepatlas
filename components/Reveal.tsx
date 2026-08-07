"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Progressive-enhancement scroll reveal.
 * Content is ALWAYS present in the server HTML (DOM-first requirement);
 * this only adds a subtle entrance transition once JS loads.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    el.classList.add("reveal");
    if (delay) el.style.transitionDelay = `${delay}ms`;
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
