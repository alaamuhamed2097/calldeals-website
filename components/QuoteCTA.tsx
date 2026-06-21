import { Button } from "./ui/Button";

export function QuoteCTA() {
  return (
    <section
      aria-label="Get a quote"
      className="bg-white px-4 pt-14 sm:px-6 sm:pt-20 lg:px-12 lg:pt-24"
    >
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#0087A5_0%,#006E8A_100%)] px-6 py-12 text-center sm:py-16 lg:py-[84px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.18),transparent_42%)]"
        />
        <h2 className="relative mb-3.5 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-white">
          Build your perfect remote team
        </h2>
        <p className="relative mb-2 text-[clamp(16px,2vw,20px)] font-semibold text-white/90">
          No surprises. No hidden costs. Just results.
        </p>
        <p className="relative mx-auto mb-[30px] max-w-[680px] text-[17px] leading-[1.55] text-white/85">
          We will give you an exact quote for your specific requirements within
          24 hours, and have your agent active within 72 hours of signing.
        </p>
        <Button href="/contact" variant="white" className="relative px-11 py-4 text-[17px]">
          Book Meeting
        </Button>
      </div>
    </section>
  );
}
