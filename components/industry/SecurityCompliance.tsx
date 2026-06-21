import { securityLeft, securityRight } from "@/lib/data";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/**
 * Static "Security & Compliance" section. Identical across every industry page
 * in Figma, so it reuses the shared `securityLeft`/`securityRight` copy.
 */
export function SecurityCompliance() {
  const items = [...securityLeft, ...securityRight];

  return (
    <section aria-label="Security and compliance" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <Reveal variant="fade-up">
          <h2 className="mb-2.5 text-[clamp(28px,4.4vw,56px)] font-semibold tracking-[-0.03em] text-navy">
            Security &amp; Compliance
          </h2>
          <p className="mb-10 max-w-[560px] text-[clamp(16px,1.6vw,18px)] leading-relaxed text-slateblue">
            Enterprise-ready protocols to keep your data and vision secure.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} variant="fade-up" delay={(i % 3) * 90}>
              <div className="flex h-full gap-4 rounded-[18px] border border-[#e6eef4] bg-white p-6">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-mint/15 text-[15px] font-bold text-mint"
                >
                  ✓
                </span>
                <div>
                  <h3 className="mb-1.5 text-[17px] font-semibold text-navy">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-slate">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
