import { Button } from "./ui/Button";

export function StrategyCTA() {
  return (
    <section
      aria-label="Book a strategy call"
      className="bg-white px-4 pt-16 pb-16 sm:px-6 sm:pt-20 sm:pb-20 lg:px-12 lg:pt-28 lg:pb-28"
    >
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#0087A5_0%,#006E8A_100%)] px-6 py-10 text-center sm:py-16 lg:py-[72px]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.15),transparent_40%)]"
        />
        <h2 className="relative mb-4 text-[clamp(28px,4vw,48px)] font-bold tracking-[-0.02em] text-white">
          Build your perfect remote team
        </h2>
        <p className="relative mx-auto mb-[30px] max-w-[720px] text-[17px] leading-[1.55] text-white/85">
          Book a free strategy call and we will map out exactly which roles your
          business needs, what your agents will do on day one, and what it will
          cost — with no pitch and no pressure.
        </p>
        <Button href="/contact" variant="white" className="relative px-[42px] py-4 text-[17px]">
          Let&apos;s Talk
        </Button>
      </div>
    </section>
  );
}
