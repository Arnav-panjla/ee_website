"use client";
import React, { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  label: string;
  minWidth?: string;
};

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let rafId = 0 as unknown as number;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = timestamp - start;
      const ratio = Math.min(progress / duration, 1);
      const current = Math.floor(ratio * target);
      setCount(current);
      if (ratio < 1) rafId = requestAnimationFrame(step);
      else setCount(target);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);

  return count;
}

export default function AnimatedStats({
  stats,
  duration = 1500,
}: {
  stats: Stat[];
  duration?: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16"
    >
      {stats.map((s, idx) => (
        <StatItem
          key={idx}
          value={hasStarted ? s.value : 0}
          label={s.label}
          minWidth={s.minWidth ?? "min-w-[120px]"}
          duration={duration}
        />
      ))}
    </div>
  );
}

function StatItem({
  value,
  label,
  minWidth = "min-w-[120px]",
  duration,
}: {
  value: number;
  label: string;
  minWidth?: string;
  duration: number;
}) {
  const count = useCountUp(value, duration);

  return (
    <div className={`flex flex-col items-center text-center ${minWidth}`}>
      <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
        {count}
      </div>
      <p className="text-gray-100 text-xs sm:text-sm font-semibold whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}
