import { mediaUrl } from "@/lib/api";
import type { IndustrySolution } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/** "Related services" — CMS solutions linked to this industry. */
export function RelatedServices({ solutions }: { solutions: IndustrySolution[] }) {
  if (!solutions.length) return null;

  return (
    <section aria-label="Related services" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <Reveal variant="fade-up">
          <h2 className="mb-10 text-[clamp(28px,4.4vw,56px)] font-semibold leading-[1.08] tracking-[-0.03em] text-navy">
            Related services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, i) => {
            const image = mediaUrl(solution.mainImage, "Solutions");
            return (
              <Reveal key={solution.id} variant="fade-up" delay={(i % 4) * 80} className="group">
                <article className="flex h-full flex-col">
                  {image && (
                    <div className="mb-5 aspect-square overflow-hidden rounded-[40px]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={image}
                        alt={solution.name}
                        loading="lazy"
                        className="h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="mb-2 text-[20px] font-semibold text-navy">{solution.name}</h3>
                  <p className="mb-4 flex-1 text-[15px] leading-[1.6] text-slateblue">
                    {solution.shortDescription}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 self-start text-[15px] font-semibold text-cyan no-underline"
                  >
                    Learn More
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal variant="fade-in" className="mt-12">
          <div className="flex flex-col items-center justify-between gap-5 rounded-[20px] bg-[linear-gradient(120deg,#0098D2_0%,#00749f_100%)] px-7 py-7 text-white sm:flex-row sm:px-10">
            <p className="text-[clamp(20px,2.4vw,28px)] font-semibold">
              Book your free strategy session
            </p>
            <a
              href="#contact"
              className="inline-flex h-[56px] flex-none items-center justify-center rounded-full bg-navy px-8 text-[16px] font-medium text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Free Strategy Call
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
