import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  "Book a personalized strategy session",
  "Co-create your success plan",
  "Get indispensable talent & resources",
];

/** Static "Get Started" 3-step band (identical across industries in Figma). */
export function GetStartedSteps({ industryName }: { industryName: string }) {
  return (
    <section aria-label="Get started" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <Reveal variant="fade-up">
          <h2 className="mb-10 max-w-[640px] text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
            Get Started — hire a {industryName} virtual assistant with CallDeals today.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step} variant="scale-in" delay={i * 110}>
              <div className="flex h-full flex-col gap-5 rounded-[18px] bg-[linear-gradient(160deg,#16B6F1_0%,#0098D2_100%)] p-7 text-white shadow-[0_24px_50px_-32px_rgba(0,150,210,0.7)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-[22px] font-bold">
                  {i + 1}
                </span>
                <p className="text-[18px] font-semibold leading-[1.35]">{step}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
