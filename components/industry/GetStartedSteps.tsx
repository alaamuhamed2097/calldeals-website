import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const STEPS = [
  { bg: "#5BC7D9", label: "Book a personalized strategy session" },
  { bg: "#2AA5BE", label: "Co-create your success plan" },
  { bg: "#0087A5", label: "Get indispensable talent & resources" },
];

/** Static "Get Started" — 3 large colored step cards (Figma layout). */
export function GetStartedSteps({ industryName }: { industryName: string }) {
  return (
    <section aria-label="Get started" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <Reveal variant="fade-up">
          <h2 className="mb-10 max-w-[680px] text-[clamp(28px,4.4vw,56px)] font-semibold leading-[1.1] tracking-[-0.03em] text-navy">
            Hire a dedicated {industryName} virtual assistant with CallDeals today.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.label} variant="scale-in" delay={i * 110}>
              <div
                className="flex aspect-square flex-col justify-between rounded-[25px] p-8"
                style={{ backgroundColor: step.bg }}
              >
                <span className="text-[clamp(56px,7vw,76px)] font-black leading-none text-white">
                  {i + 1}
                </span>
                <p className="text-[clamp(18px,2vw,24px)] font-normal leading-[1.25] text-navy">
                  {step.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
