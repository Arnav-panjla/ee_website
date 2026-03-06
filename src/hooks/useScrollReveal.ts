"use client";

import { RefObject, useEffect } from "react";

type UseScrollRevealOptions = {
  threshold?: number;
  selector?: string;
};

export default function useScrollReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: UseScrollRevealOptions = {},
) {
  const { threshold = 0.2, selector = ".sa-item" } = options;

  useEffect(() => {
    const nodes = containerRef.current?.querySelectorAll<HTMLElement>(selector);
    if (!nodes?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [containerRef, selector, threshold]);
}
