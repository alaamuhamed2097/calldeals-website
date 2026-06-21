import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function ClientResults() {
  return (
    <section aria-label="Client results" className="bg-white">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="mb-[18px] text-[clamp(28px,3.4vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
              We didn&apos;t say #1.
              <br />
              Our clients did.
            </h2>
            <p className="mb-[30px] max-w-[440px] text-[17px] leading-relaxed text-slate">
              Our clients consistently rank CallDeals at the top because the teams
              we deploy deliver measurable, real-world impact inside their
              businesses every week.
            </p>
            <Button href="#talent" className="px-[34px] py-3.5 text-base">
              See How It Works
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="rounded-[18px] border border-[#e8eef3] bg-white p-7 shadow-[0_24px_50px_-34px_rgba(20,50,90,0.3)] sm:col-span-2">
              <div className="text-[20px] tracking-[3px] text-[#FFB400]">★★★★★</div>
              <div className="mt-2 text-[48px] font-bold tracking-[-0.02em] text-navy">
                500<span className="text-cyan">+</span>
              </div>
              <div className="mt-0.5 text-base font-semibold text-navy">
                Five-star reviews
              </div>
              <div className="mt-0.5 text-sm text-slate">
                Across Google, Meta, &amp; Clutch
              </div>
            </div>

            <div className="rounded-[18px] border border-[#dcf0fb] bg-mist p-6">
              <div className="text-[38px] font-bold tracking-[-0.02em] text-navy">
                93<span className="text-cyan">%</span>
              </div>
              <div className="mt-1 text-[15px] text-slate">Client retention rate</div>
            </div>
            <div className="rounded-[18px] border border-[#dcf0fb] bg-mist p-6">
              <div className="text-[38px] font-bold tracking-[-0.02em] text-navy">
                3 days
              </div>
              <div className="mt-1 text-[15px] text-slate">Average time to hire</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
