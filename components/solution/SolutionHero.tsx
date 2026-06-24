import { mediaUrl } from "@/lib/api";
import type { SolutionSummary } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function SolutionHero({ solution }: { solution: SolutionSummary }) {
  const photo = mediaUrl(solution.mainImage ?? solution.subImage, "Solutions");

  return (
    <section aria-label="Hero" className="bg-white">
      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal variant="fade-up" className="max-w-[640px]">
            <p className="mb-4 text-[16px] text-slateblue">Dedicated</p>
            <h1 className="mb-6 bg-gradient-to-b from-navy to-[#0087A5] bg-clip-text text-[clamp(34px,5.4vw,60px)] font-bold leading-[1.05] tracking-[-0.03em] text-transparent">
              {solution.name}
            </h1>
            <p className="mb-8 max-w-[560px] text-[clamp(16px,1.7vw,18px)] leading-[1.6] text-slateblue">
              {solution.shortDescription}
            </p>
            <a
              href="/contact"
              className="inline-flex h-[56px] items-center justify-center rounded-full bg-navy px-9 text-[18px] font-medium text-white no-underline transition-all hover:-translate-y-0.5 hover:bg-ink"
            >
              Build My Team
            </a>
          </Reveal>

          {photo && (
            <Reveal variant="scale-in" className="relative mx-auto hidden w-full max-w-[440px] lg:block">
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-0 bg-[linear-gradient(150deg,#0087A5_0%,#006E8A_100%)]"
                style={{ borderRadius: "46% 54% 58% 42% / 48% 44% 56% 52%" }}
              />
              <div
                className="relative aspect-[5/6] overflow-hidden"
                style={{ borderRadius: "46% 54% 58% 42% / 48% 44% 56% 52%" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo}
                  alt={solution.name}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
