import { Button } from "./ui/Button";

/** Full-bleed azure CTA band matching the Figma home design. */
export function StrategyCTA() {
  return (
    <section
      aria-label="Book a strategy call"
      className="bg-[#20B8F0] px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[820px]">
        <h2 className="mb-4 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-white">
          Build your perfect remote team
        </h2>
        <p className="mx-auto mb-[30px] max-w-[720px] text-[17px] leading-[1.55] text-white/90">
          Book a free strategy call and we will map out exactly which roles your
          business needs, what your agents will do on day one, and what it will
          cost — with no pitch and no pressure.
        </p>
        <Button href="/contact" variant="white" className="px-[42px] py-4 text-[17px]">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
