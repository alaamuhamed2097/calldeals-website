"use client";

import { useState } from "react";
import { industries } from "@/lib/data";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const DEFAULT_KEY = "finance";

export function IndustryExpertise() {
  const [activeKey, setActiveKey] = useState(DEFAULT_KEY);
  const active =
    industries.find((industry) => industry.key === activeKey) ?? industries[0];

  return (
    <section id="industries" aria-label="Industry expertise" className="scroll-mt-24 bg-white">
      <Container className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: heading + tabs */}
          <div>
            <h2 className="mb-[18px] text-[clamp(30px,3.6vw,46px)] font-bold leading-[1.08] tracking-[-0.02em] text-navy">
              Deep Industry Expertise.
              <br />
              Elite Global Talent.
            </h2>
            <p className="mb-[34px] max-w-[520px] text-[17px] leading-relaxed text-slate">
              From Real Estate and Healthcare to Tech and Finance, every industry
              has its own rules. That&apos;s why we match you with professionals
              who are already experts in your sector. No learning curves, just
              high-caliber talent ready to execute at your exact standard.
            </p>

            <div role="tablist" aria-label="Industries" className="flex flex-col">
              {industries.map((industry) => {
                const isActive = industry.key === activeKey;
                return (
                  <button
                    key={industry.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveKey(industry.key)}
                    className="block cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-3.5 border-b border-[#eef3f6] px-[18px] py-4">
                      <span
                        className={`h-2 w-2 flex-none rounded-full ${
                          isActive ? "bg-cyan" : "bg-[#cfdae3]"
                        }`}
                      />
                      <span className="text-[19px] font-semibold text-navy">
                        {industry.label}
                      </span>
                    </div>
                    {isActive && (
                      <div className="-ml-[3px] rounded-[0_10px_10px_0] border-l-[3px] border-cyan bg-mist px-[22px] py-3.5">
                        <p className="text-[15px] leading-[1.55] text-slate">
                          {industry.blurb}
                        </p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: stat card */}
          <div className="rounded-[22px] bg-[linear-gradient(160deg,#0087A5_0%,#006E8A_100%)] p-7 text-white shadow-[0_30px_60px_-34px_rgba(0,110,138,0.6)] sm:p-11">
            <h3 className="mb-[30px] text-[clamp(22px,2.4vw,30px)] font-semibold">
              {active.cardTitle}
            </h3>
            <div className="flex flex-col gap-[26px]">
              {active.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="grid grid-cols-[120px_1fr] items-center gap-6"
                >
                  <div className="text-center">
                    <div className="text-[34px] font-bold leading-none tracking-[-0.02em]">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-[15px] opacity-90">{stat.label}</div>
                  </div>
                  <p className="text-[15px] leading-[1.5] text-[#eafaff]">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
            <Button
              href="/industries"
              variant="outlineLight"
              className="mt-[34px] px-[34px] py-[13px] text-[15px]"
            >
              View {active.label}
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button href="/industries" className="px-[38px] py-[15px] text-base">
            View All Industries
          </Button>
        </div>
      </Container>
    </section>
  );
}
