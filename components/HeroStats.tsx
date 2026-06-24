"use client";

import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";

/** Animates 0 → value (ease-out) once `run` flips true; jumps to value under reduced motion. */
function AnimatedNumber({ value, run }: { value: number; run: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    let raf = 0;
    let start = 0;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return <>{Math.round(display).toLocaleString("en-US")}</>;
}

export function HeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#C5E9F7] px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
      <dl className="mx-auto max-w-site grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {heroStats.map((stat) => {
          const numeric = parseFloat(stat.value);
          return (
            <div key={stat.label} className="text-center">
              <dd className="text-[clamp(24px,4vw,36px)] font-bold tracking-[-0.02em] text-[#0D5F7A]">
                {stat.prefix && <span>{stat.prefix}</span>}
                {Number.isFinite(numeric) ? <AnimatedNumber value={numeric} run={run} /> : stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </dd>
              <dt className="mt-2 text-[13px] sm:text-[14px] text-[#2d6a85]">{stat.label}</dt>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
