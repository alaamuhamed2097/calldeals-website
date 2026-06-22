import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

/** Closing "Ready to Scale ..." CTA band. */
export function ScaleCTA({ industryName }: { industryName: string }) {
  return (
    <section
      aria-label="Get started"
      className="bg-white px-4 pt-14 sm:px-6 sm:pt-20 lg:px-12 lg:pt-24"
    >
      <Reveal variant="scale-in" className="mx-auto max-w-site">
        <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#0B1F3C_0%,#0078A0_100%)] px-6 py-14 text-center sm:py-16 lg:py-[84px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan/30 blur-3xl"
          />
          <h2 className="relative mb-4 text-[clamp(26px,3.6vw,44px)] font-bold tracking-[-0.02em] text-white">
            Ready to scale your {industryName} practice?
          </h2>
          <p className="relative mx-auto mb-8 max-w-[600px] text-[clamp(15px,1.8vw,18px)] leading-[1.55] text-ice">
            Get a vetted, industry-briefed virtual assistant active within 72 hours
            — with weekly reporting and a free replacement guarantee.
          </p>
          <div className="relative flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="white" className="px-10 py-4 text-[17px]">
              Let&apos;s Talk
            </Button>
            <Button href="/contact" variant="outlineLight" className="px-10 py-4 text-[17px]">
              Book a Demo
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
