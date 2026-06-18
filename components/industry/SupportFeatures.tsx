import { mediaUrl } from "@/lib/api";
import type { IndustryFeature } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

/** "How CallDeals VAs Support ..." — the per-industry feature/support list. */
export function SupportFeatures({
  features,
  industryName,
}: {
  features: IndustryFeature[];
  industryName: string;
}) {
  if (!features.length) return null;

  return (
    <section aria-label="How we support you" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <Reveal variant="fade-up">
          <h2 className="mb-10 max-w-[760px] text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
            How CallDeals VAs Support {industryName}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            // `icon` is usually an emoji from the CMS editor; only render as an
            // image when it's an actual uploaded file.
            const iconUrl = mediaUrl(feature.icon);
            return (
              <Reveal key={feature.id} variant="fade-up" delay={(i % 3) * 90}>
                <article className="group h-full rounded-[18px] border border-[#e6eef4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ice hover:shadow-[0_24px_50px_-30px_rgba(0,120,160,0.55)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[14px] bg-mist text-[24px] leading-none text-cyan transition-colors group-hover:bg-cyan group-hover:text-white">
                    {iconUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={iconUrl} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                    ) : (
                      <span aria-hidden="true">{feature.icon?.trim() || "◆"}</span>
                    )}
                  </div>
                  <h3 className="mb-2.5 text-[19px] font-semibold text-navy">
                    {feature.title}
                  </h3>
                  <RichText html={feature.description} className="text-[15px] text-slate" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
