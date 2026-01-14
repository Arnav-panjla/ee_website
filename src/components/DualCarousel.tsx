"use client";
import React, { useEffect, useMemo, useState } from "react";

type DualCarouselProps = {
  leftImages: { src: string; alt?: string }[];
  rightImages: { src: string; alt?: string }[];
  intervalMs?: number;
};

export default function DualCarousel({
  leftImages,
  rightImages,
  intervalMs = 4500,
}: DualCarouselProps) {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const safeLeft = useMemo(() => leftImages ?? [], [leftImages]);
  const safeRight = useMemo(() => rightImages ?? [], [rightImages]);

  useEffect(() => {
    if (safeLeft.length < 2) return;
    const id = setInterval(() => {
      setLeftIndex((i) => (i + 1) % safeLeft.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [safeLeft, intervalMs]);

  useEffect(() => {
    if (safeRight.length < 2) return;
    const id = setInterval(() => {
      setRightIndex((i) => (i + 1) % safeRight.length);
    }, intervalMs + 800);
    return () => clearInterval(id);
  }, [safeRight, intervalMs]);

  const nextLeft = () => setLeftIndex((i) => (i + 1) % safeLeft.length);
  const prevLeft = () =>
    setLeftIndex((i) => (i - 1 + safeLeft.length) % safeLeft.length);
  const nextRight = () => setRightIndex((i) => (i + 1) % safeRight.length);
  const prevRight = () =>
    setRightIndex((i) => (i - 1 + safeRight.length) % safeRight.length);

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Left: horizontal carousel */}
      <div className="lg:flex-[2] w-full">
        <div className="relative w-full overflow-hidden rounded shadow-lg bg-black/20 aspect-[4/3]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${leftIndex * 100}%)` }}
          >
            {safeLeft.map((img, idx) => (
              <div key={idx} className="w-full shrink-0 h-full relative">
                <img
                  src={img.src}
                  alt={img.alt ?? `Slide ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {safeLeft.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={prevLeft}
                className="h-9 w-9 rounded-full bg-black/45 text-white text-lg flex items-center justify-center hover:bg-black/65 transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextLeft}
                className="h-9 w-9 rounded-full bg-black/45 text-white text-lg flex items-center justify-center hover:bg-black/65 transition-colors"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right: vertical carousel */}
      <div className="lg:flex-[1] w-full">
        <div className="relative w-full overflow-hidden rounded shadow-lg bg-black/20 aspect-[3/4]">
          <div
            className="flex flex-col h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${rightIndex * 100}%)` }}
          >
            {safeRight.map((img, idx) => (
              <div key={idx} className="w-full h-full shrink-0 relative">
                <img
                  src={img.src}
                  alt={img.alt ?? `Slide ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {safeRight.length > 1 && (
            <div className="absolute inset-y-3 right-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={prevRight}
                className="h-8 w-8 rounded-full bg-black/45 text-white text-base flex items-center justify-center hover:bg-black/65 transition-colors"
                aria-label="Previous"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={nextRight}
                className="h-8 w-8 rounded-full bg-black/45 text-white text-base flex items-center justify-center hover:bg-black/65 transition-colors"
                aria-label="Next"
              >
                ↓
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
