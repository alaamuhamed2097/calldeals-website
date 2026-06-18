import { vettingSteps } from "@/lib/data";
import { Button } from "./ui/Button";

export function TalentPool() {
  return (
    <section
      id="talent"
      aria-label="Talent pool"
      className="scroll-mt-24 px-4 pt-14 sm:px-6 sm:pt-20 lg:px-12 lg:pt-24"
    >
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[26px] bg-[linear-gradient(150deg,#0F2A4A_0%,#0B1F3C_100%)] p-9 text-white sm:p-12 lg:p-[68px]">
        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-[180px] w-[180px] opacity-50"
          style={{
            backgroundImage: "radial-gradient(#1f4068 1.4px, transparent 1.4px)",
            backgroundSize: "14px 14px",
          }}
        />
        <div className="relative grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.18em] text-[#5fd0f5]">
              OUR TALENT POOL
            </p>
            <h2 className="mb-4 mt-3.5 text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.1] tracking-[-0.02em]">
              We only hire the top 1% of all applicants
            </h2>
            <p className="mb-[38px] max-w-[560px] text-base leading-relaxed text-[#aebfd2]">
              Our vetting process is designed to reject candidates, not pass them.
              Every applicant goes through a rigorous multi-stage assessment before
              they ever reach a client account. We screen for skill,
              professionalism, and industry fit. Most do not make it through. The
              ones who do are exceptional before day one.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-x-10 gap-y-[30px] sm:grid-cols-2">
              {vettingSteps.map((step) => (
                <div key={step.title}>
                  <div
                    aria-hidden="true"
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-[11px] bg-cyan/15 text-lg text-[#5fd0f5]"
                  >
                    {step.icon}
                  </div>
                  <h3 className="mb-1.5 text-[17px] font-semibold">{step.title}</h3>
                  <p className="text-sm leading-[1.55] text-[#9fb2c8]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="#contact" className="px-[34px] py-3.5 text-base">
              Book a Strategy Call
            </Button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-[18px] border border-[#1c3756] bg-white/[0.02] p-[30px] text-center">
              <div className="text-[13px] tracking-[0.12em] text-[#9fb2c8]">ONLY</div>
              <div className="my-1.5 text-[64px] font-bold leading-none tracking-[-0.03em] text-[#5fd0f5]">
                1%
              </div>
              <div className="text-sm text-[#aebfd2]">of applicants placed</div>
            </div>
            <div className="rounded-[18px] border border-[#1c3756] bg-white/[0.02] p-6">
              <div className="text-[34px] font-bold tracking-[-0.02em] text-white">
                10,000<span className="text-[#5fd0f5]">+</span>
              </div>
              <div className="mt-1 text-sm text-[#aebfd2]">Candidates assessed</div>
            </div>
            <div className="rounded-[18px] border border-[#1c3756] bg-white/[0.02] p-6">
              <div className="text-[34px] font-bold tracking-[-0.02em] text-white">
                4 Stages
              </div>
              <div className="mt-1 text-sm text-[#aebfd2]">
                Vetting stages — every agent
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
