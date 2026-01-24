"use client";
import React, { useEffect, useRef } from "react";

type Img = { src: string; alt?: string };

export default function ScrollAnimatedImages({
  left = [],
  center,
  right = [],
}: {
  left?: Img[];
  center: Img | null;
  right?: Img[];
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll<HTMLElement>(".sa-item");
    if (!els) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4 w-full mx-auto px-6">
      {/* Left column */}
      <div className="flex flex-col gap-4 w-1/4">
        {left.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[16/9] overflow-hidden rounded shadow sa-item from-left"
          >
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Center */}
      <div className="w-2/4">
        {center && (
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded shadow sa-item from-left">
            <img
              src={center.src}
              alt={center.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Right column */}
      <div className="flex flex-col gap-4 w-1/4">
        {right.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-[16/9] overflow-hidden rounded shadow sa-item from-right"
          >
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
