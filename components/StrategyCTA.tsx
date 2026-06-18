import { Button } from "./ui/Button";

export function StrategyCTA() {
  return (
    <section
      aria-label="Book a strategy call"
      className="px-4 pt-14 sm:px-6 sm:pt-20 lg:px-12 lg:pt-[90px]"
    >
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#16B6F1_0%,#02A2DD_100%)] px-6 py-10 text-center sm:py-16 lg:py-[72px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.18),transparent_40%)]"
        />
        <h2 className="relative mb-4 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-ink">
          Build your perfect remote team
        </h2>
        <p className="relative mx-auto mb-[30px] max-w-[720px] text-[17px] leading-[1.55] text-[#063b58]">
          Book a free strategy call and we will map out exactly which roles your
          business needs, what your agents will do on day one, and what it will
          cost — with no pitch and no pressure.
        </p>
        <Button href="#contact" variant="white" className="relative px-[42px] py-4 text-[17px]">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
