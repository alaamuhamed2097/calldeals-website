import { Button } from "./ui/Button";

/** Full-bleed azure CTA band matching the Figma home design. */
export function QuoteCTA() {
  return (
    <section
      aria-label="Get a quote"
      className="bg-[#20B8F0] px-4 py-16 text-center sm:px-6 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[820px]">
        <h2 className="mb-3.5 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-white">
          Build your perfect remote team
        </h2>
        <p className="mb-2 text-[clamp(16px,2vw,20px)] font-semibold text-white">
          No surprises. No hidden costs. Just results.
        </p>
        <p className="mx-auto mb-[30px] max-w-[680px] text-[17px] leading-[1.55] text-white/90">
          We will give you an exact quote for your specific requirements within
          24 hours, and have your agent active within 72 hours of signing.
        </p>
        <Button href="/contact" variant="white" className="px-11 py-4 text-[17px]">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
