"use client";

import { useState } from "react";
import type { IndustryFeature } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

/**
 * "How CallDeals VAs Support ..." — accordion list (left) + a cyan gradient
 * detail card (right) showing the selected feature, matching the Figma layout.
 */
export function SupportFeatures({
  features,
  industryName,
}: {
  features: IndustryFeature[];
  industryName: string;
}) {
  const [active, setActive] = useState(0);
  if (!features.length) return null;

  const current = features[active] ?? features[0];

  return (
    <section aria-label="How we support you" className="scroll-mt-24">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <Reveal variant="fade-up">
          <h2 className="mb-10 max-w-[820px] text-[clamp(28px,4.4vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-navy">
            How CallDeals VAs Support {industryName}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: accordion list */}
          <Reveal variant="fade-up" className="flex flex-col gap-4">
            {features.map((feature, i) => {
              const isActive = i === active;
              return (
                <button
                  key={feature.id}
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 rounded-r-[10px] py-4 pl-0 pr-4 text-left transition-colors ${
                    isActive ? "bg-mist" : "bg-white hover:bg-mist/60"
                  }`}
                >
                  <span
                    className={`h-[44px] w-[6px] flex-none rounded-r-[8px] transition-colors ${
                      isActive ? "bg-cyan" : "bg-transparent"
                    }`}
                  />
                  <span
                    className={`text-[clamp(18px,2vw,24px)] font-medium ${
                      isActive ? "text-cyan" : "text-navy"
                    }`}
                  >
                    {feature.title}
                  </span>
                </button>
              );
            })}
          </Reveal>

          {/* Right: detail card */}
          <Reveal variant="scale-in">
            <div className="flex flex-col gap-6 rounded-[20px] bg-[linear-gradient(180deg,#00AEEF_0%,#00749f_100%)] px-7 py-9 text-white shadow-[0_30px_60px_-34px_rgba(0,150,210,0.7)] sm:px-9">
              <div className="flex items-center gap-5">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[10px] bg-[#00749f] text-[22px]">
                  {current.icon?.trim() || "◆"}
                </span>
                <h3 className="text-[clamp(24px,3vw,36px)] font-semibold leading-[1.1]">
                  {current.title}
                </h3>
              </div>
              <RichText html={current.description} className="text-[clamp(15px,1.6vw,17px)] text-mist" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
