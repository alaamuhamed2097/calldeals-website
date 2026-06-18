import { mediaUrl } from "@/lib/api";
import type { IndustrySummary } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

/**
 * "Turn ... time Into Revenue, Not Admin Work" intro block.
 * Renders the industry's long-form description alongside the supporting image.
 */
export function RevenueIntro({ industry }: { industry: IndustrySummary }) {
  const image = mediaUrl(industry.image ?? industry.subImage, "Industries");

  return (
    <section aria-label="Overview" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {image && (
            <Reveal variant="fade-up" className="order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={industry.name}
                loading="lazy"
                className="h-full w-full rounded-[20px] object-cover shadow-[0_28px_60px_-34px_rgba(0,60,90,0.45)]"
              />
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={80} className="order-2">
            <h2 className="mb-6 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
              Turn {industry.name.split(" ")[0]} time Into Revenue,
              <br className="hidden sm:block" /> Not Admin Work
            </h2>
            <RichText html={industry.description} className="text-[16px] text-slate" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
