"use client";
import React, { useEffect, useMemo, useState } from "react";

type Slide = {
  src: string;
  alt?: string;
  title?: string;
  description?: string;
  cta?: string;
  dateLabel?: string;
  dateSub?: string;
};

type DualCarouselProps = {
  leftImages: Slide[];
  rightImages: Slide[];
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

  const nextLeft = () =>
    safeLeft.length && setLeftIndex((i) => (i + 1) % safeLeft.length);
  const prevLeft = () =>
    safeLeft.length &&
    setLeftIndex((i) => (i - 1 + safeLeft.length) % safeLeft.length);
  const nextRight = () =>
    safeRight.length && setRightIndex((i) => (i + 1) % safeRight.length);
  const prevRight = () =>
    safeRight.length &&
    setRightIndex((i) => (i - 1 + safeRight.length) % safeRight.length);

  return (
    <div className="flex flex-col lg:flex-row gap-2 w-full">
      {/* Left: full-image horizontal carousel with foreground text */}
      <div className="flex-[3] w-full">
        <div className="relative w-full overflow-hidden shadow-2xl bg-white aspect-[3/2]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${leftIndex * 100}%)` }}
          >
            {safeLeft.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt ?? `Slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />

                  <div className="relative z-10 h-full w-full flex items-end align-middle p-5 sm:p-6 md:p-8">
                    <div className="w-full bg-black/35 backdrop-blur-sm border border-white/20 p-4 sm:p-5 md:p-6 text-white shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="h-14 w-14 sm:h-16 sm:w-16 bg-white text-red-600 shadow-md flex flex-col items-center justify-center text-xs sm:text-sm font-semibold shrink-0">
                          <span>{slide.dateLabel ?? "15"}</span>
                          <span className="text-gray-600 font-normal text-[10px] sm:text-xs">
                            {slide.dateSub ?? "Jan, 2024"}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                            {slide.title ?? "Something about Research and Innovation"}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-white/90 leading-relaxed line-clamp-3 sm:line-clamp-4">
                            {slide.description ??
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {safeLeft.length > 1 && (
            <div className="absolute inset-0 flex items-center justify-between px-3">
              <button
                type="button"
                onClick={prevLeft}
                className="h-10 w-10 rounded-full bg-black/50 text-white text-lg flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextLeft}
                className="h-10 w-10 rounded-full bg-black/50 text-white text-lg flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Right: full-image vertical carousel with foreground text */}
      <div className="flex-[1] w-full">
        <div className="relative w-full overflow-hidden shadow-2xl bg-white aspect-[1/2]">
          <div
            className="flex flex-col h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${rightIndex * 100}%)` }}
          >
            {safeRight.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={slide.src}
                    alt={slide.alt ?? `Slide ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />

                  <div className="relative z-10 h-full w-full flex items-end p-4 sm:p-5">
                    <div className="w-full rounded-lg bg-black/40 border border-white/20 backdrop-blur-sm p-4 text-white shadow-lg">
                      <h4 className="text-lg sm:text-xl font-bold leading-tight">
                        {slide.title ?? "Lab Highlight"}
                      </h4>
                      <p className="mt-2 text-sm text-white/90 leading-relaxed line-clamp-4">
                        {slide.description ??
                          "A concise highlight of ongoing research and breakthroughs, focusing on impact and collaboration."}
                      </p>
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <span className="text-xs uppercase tracking-wide text-white/80">
                          {slide.dateLabel ?? "15"} {slide.dateSub ?? "Jan, 2024"}
                        </span>
                        <span className="text-sm font-semibold text-red-300">
                          {slide.cta ?? "Read More"}
                        </span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          {safeRight.length > 1 && (
            <div className="absolute inset-y-3 right-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={prevRight}
                className="h-9 w-9 rounded-full bg-black/55 text-white text-base flex items-center justify-center hover:bg-black/75 transition-colors"
                aria-label="Previous"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={nextRight}
                className="h-9 w-9 rounded-full bg-black/55 text-white text-base flex items-center justify-center hover:bg-black/75 transition-colors"
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
