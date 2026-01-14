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
    <div className="flex flex-col lg:flex-row gap-6 w-full">
      {/* Left: horizontal carousel (text + image together) */}
      <div className="lg:flex-[2] w-full">
        <div className="relative w-full overflow-hidden rounded shadow-lg bg-white aspect-[4/3]">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${leftIndex * 100}%)` }}
          >
            {safeLeft.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0">
                <div className="h-full w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] bg-[#c8b4a1]/95 text-[#2a1d16] rounded overflow-hidden shadow-inner">
                  <div className="flex flex-col gap-3 sm:gap-4 p-5 sm:p-6 justify-center">
                    <div className="flex items-center gap-3">
                      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-white text-center text-[#c01a1a] shadow-md flex flex-col items-center justify-center text-sm font-semibold">
                        <span>{slide.dateLabel ?? "15"}</span>
                        <span className="text-sm text-gray-600 font-normal">
                          {slide.dateSub ?? "Jan, 2024"}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug text-[#2a1d16]">
                        {slide.title ??
                          "Something about Research and Innovation"}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-[#2a1d16]/90 line-clamp-4">
                      {slide.description ??
                        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                    </p>
                    {/* <button
                      type="button"
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white bg-[#b43b3b] px-4 py-2 rounded-full shadow hover:bg-[#9d2f2f] transition-colors"
                    >
                      {slide.cta ?? "Read More"}
                      <span>➜</span>
                    </button> */}
                  </div>
                  <div className="relative w-full h-full bg-black/10">
                    <img
                      src={slide.src}
                      alt={slide.alt ?? `Slide ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
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

      {/* Right: vertical carousel (text-focused, smaller image) */}
      <div className="lg:flex-[1] w-full">
        <div className="relative w-full overflow-hidden rounded shadow-lg bg-white aspect-[3/4]">
          <div
            className="flex flex-col h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateY(-${rightIndex * 100}%)` }}
          >
            {safeRight.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0">
                <div className="h-full w-full p-4 sm:p-5">
                  <div className="h-full w-full rounded shadow bg-white flex flex-col gap-4 p-4 sm:p-5">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                        {slide.title ?? "Lab Highlight"}
                      </h4>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                        {slide.description ??
                          "A concise highlight of ongoing research and breakthroughs, focusing on impact and collaboration."}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="relative h-20 w-24 sm:h-24 sm:w-28 rounded overflow-hidden bg-gray-200">
                        <img
                          src={slide.src}
                          alt={slide.alt ?? `Slide ${idx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1">
                        <span className="text-xs uppercase tracking-wide text-gray-500">
                          {slide.dateLabel ?? "15"}{" "}
                          {slide.dateSub ?? "Jan, 2024"}
                        </span>
                        <button
                          type="button"
                          className="text-sm font-semibold text-[#b43b3b] hover:text-[#9d2f2f] transition-colors w-fit"
                        >
                          {slide.cta ?? "Read More"}
                        </button>
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
