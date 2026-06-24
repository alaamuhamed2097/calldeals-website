import { HeroStats } from "./HeroStats";
import { Container } from "./ui/Container";

/**
 * Hero — the artwork (blue background + agent + wave lines) is a single image
 * at `/assets/hero-bg.png`; the copy and CTA are overlaid on the left. The base
 * background colour matches the image's left edge so the text area stays solid
 * blue when the image is cropped by `cover` on narrow screens.
 */
export function Hero() {
  return (
    <section aria-label="Hero">
      <div
        className="relative bg-[#066286] bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')", backgroundPosition: "right center" }}
      >
        {/* Subtle left scrim so copy stays readable over the artwork on small screens */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,98,134,0.94)_0%,rgba(6,98,134,0.78)_50%,rgba(6,98,134,0.45)_75%,rgba(6,98,134,0.15)_100%)] lg:bg-none"
        />
        <Container className="relative">
          <div className="flex min-h-[460px] items-center py-16 sm:min-h-[560px] lg:min-h-[640px]">
            <div className="max-w-[520px]">
              <h1 className="mb-5 text-[clamp(30px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                More Than Calls,
                <br />
                Power Business Growth
              </h1>
              <p className="mb-4 text-[16px] font-semibold text-white sm:text-[18px]">
                Smart Agents. Seamless Support. For Every Industry.
              </p>
              <p className="mb-9 max-w-[440px] text-[14px] leading-[1.6] text-white/90 sm:text-[15px]">
                CallDeals deploys elite, college-educated professionals into your
                business in 72 hours. We combine high-caliber talent with smart
                processes to drive revenue and cut costs by 70%.
              </p>
              <a
                href="/contact"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-10 text-[16px] font-semibold text-[#0D5F7A] no-underline shadow-[0_12px_24px_-8px_rgba(0,40,70,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,40,70,0.45)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Light-blue stats bar with scroll-triggered count-up */}
      <HeroStats />
    </section>
  );
}
