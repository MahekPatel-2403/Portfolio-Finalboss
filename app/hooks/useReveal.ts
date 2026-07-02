"use client";

import { useEffect, useRef } from "react";

/**
 * Attach this ref to a section container.
 * All children with className "reveal" will animate in
 * when the section enters the viewport.
 */
export function useReveal() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            items.forEach((item) => item.classList.add("visible"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return ref;
}
