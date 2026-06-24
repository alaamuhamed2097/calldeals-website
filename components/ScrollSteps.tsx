"use client";

import { useEffect, useRef, useState } from "react";

export interface ScrollStep {
  title: string;
  description: string;
}

/**
 * A stepper whose progress bar fills as the user scrolls through the section.
 * Progress is driven by the section's position in the viewport (0 when its top
 * reaches ~75% down the screen, 1 when its bottom reaches ~35%), so the line and
 * step markers "activate" in sequence on scroll. Falls back to fully-filled when
 * the user prefers reduced motion.
 */
export function ScrollSteps({ steps }: { steps: ScrollStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.75; // begin filling once the top passes 75% of viewport
      const end = vh * 0.35; // finish once the bottom passes 35%
      const span = rect.height + (start - end);
      const scrolled = start - rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / span)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const last = Math.max(1, steps.length - 1);
  // A step is "reached" once the fill passes its position along the track.
  const isActive = (i: number) => progress + 0.001 >= i / last;

  return (
    <div ref={ref}>
      {/* Desktop: horizontal stepper */}
      <div className="hidden lg:block">
        <div className="relative mx-auto mb-8 px-[6%]">
          {/* track */}
          <div className="absolute left-[6%] right-[6%] top-5 h-1 -translate-y-1/2 rounded-full bg-[#d7e7ef]" />
          {/* fill */}
          <div
            className="absolute left-[6%] top-5 h-1 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#5BC7D9,#0087A5)] transition-[width] duration-150 ease-out"
            style={{ width: `calc((100% - 12%) * ${progress})` }}
          />
          {/* dots */}
          <div className="relative flex justify-between">
            {steps.map((step, i) => (
              <div
                key={step.title}
                aria-current={isActive(i) ? "step" : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-[15px] font-bold transition-colors duration-300 ${
                  isActive(i)
                    ? "border-cyan bg-cyan text-white"
                    : "border-[#d7e7ef] bg-white text-slate"
                }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0,1fr))` }}>
          {steps.map((step, i) => (
            <div key={step.title} className="px-3 text-center">
              <h3 className={`mb-2 text-[18px] font-semibold transition-colors ${isActive(i) ? "text-navy" : "text-slate"}`}>
                {step.title}
              </h3>
              <p className="text-[14px] leading-[1.55] text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stepper */}
      <div className="relative lg:hidden">
        <div className="absolute bottom-5 left-5 top-5 w-1 -translate-x-1/2 rounded-full bg-[#d7e7ef]" />
        <div
          className="absolute left-5 top-5 w-1 -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,#5BC7D9,#0087A5)] transition-[height] duration-150 ease-out"
          style={{ height: `calc((100% - 40px) * ${progress})` }}
        />
        <ol className="m-0 flex list-none flex-col gap-8 p-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative flex gap-4">
              <div
                aria-current={isActive(i) ? "step" : undefined}
                className={`relative z-10 flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 text-[15px] font-bold transition-colors duration-300 ${
                  isActive(i) ? "border-cyan bg-cyan text-white" : "border-[#d7e7ef] bg-white text-slate"
                }`}
              >
                {i + 1}
              </div>
              <div className="pt-1">
                <h3 className={`mb-1 text-[18px] font-semibold transition-colors ${isActive(i) ? "text-navy" : "text-slate"}`}>
                  {step.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-slate">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
