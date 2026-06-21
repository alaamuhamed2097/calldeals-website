import { mediaUrl } from "@/lib/api";
import type { IndustrySummary } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

/** "Turn ... time Into Revenue, Not Admin Work" intro: image left, copy right. */
export function RevenueIntro({ industry }: { industry: IndustrySummary }) {
  const image = mediaUrl(industry.image ?? industry.subImage, "Industries");
  const firstWord = industry.name.split(" ")[0];

  return (
    <section aria-label="Overview" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {image && (
            <Reveal variant="fade-up" className="order-2 lg:order-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={industry.name}
                loading="lazy"
                className="aspect-[519/339] w-full rounded-[16px] object-cover shadow-[0_28px_60px_-34px_rgba(0,60,90,0.45)]"
              />
            </Reveal>
          )}

          <Reveal variant="fade-up" delay={80} className="order-1 lg:order-2">
            <h2 className="mb-6 text-[clamp(28px,4.4vw,56px)] font-bold leading-[1.08] tracking-[-0.03em] text-navy">
              Turn {firstWord} time Into Revenue, Not Admin Work
            </h2>
            <RichText html={industry.description} className="text-[clamp(16px,1.6vw,18px)] text-slateblue" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
