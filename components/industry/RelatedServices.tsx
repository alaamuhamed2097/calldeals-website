import { mediaUrl } from "@/lib/api";
import type { IndustrySolution } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";

/** "Related services" — solution cards linked to this industry in the CMS. */
export function RelatedServices({ solutions }: { solutions: IndustrySolution[] }) {
  if (!solutions.length) return null;

  return (
    <section aria-label="Related services" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <Reveal variant="fade-up">
          <h2 className="mb-10 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            Related services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => {
            const image = mediaUrl(solution.mainImage, "Solutions");
            return (
              <Reveal key={solution.id} variant="fade-up" delay={(i % 4) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e6eef4] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,120,160,0.55)]">
                  {image && (
                    <div className="aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={solution.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-[18px] font-semibold text-navy">
                      {solution.name}
                    </h3>
                    <p className="mb-5 flex-1 text-[14px] leading-[1.6] text-slate">
                      {solution.shortDescription}
                    </p>
                    <Button
                      href="#contact"
                      variant="outline"
                      className="self-start px-6 py-2.5 text-[14px]"
                    >
                      Learn More
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade-in" className="mt-10">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[18px] bg-[linear-gradient(120deg,#0098D2_0%,#00749f_100%)] px-7 py-7 text-white sm:flex-row sm:px-10">
            <p className="text-[clamp(18px,2.2vw,24px)] font-semibold">
              Book your free strategy session
            </p>
            <Button href="#contact" variant="white" className="px-8 py-3.5 text-[15px]">
              Get Started
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
