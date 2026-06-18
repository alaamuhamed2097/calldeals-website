import { Button } from "./ui/Button";

export function QuoteCTA() {
  return (
    <section
      aria-label="Get a quote"
      className="px-4 pt-14 sm:px-6 sm:pt-20 lg:px-12 lg:pt-24"
    >
      <div
        className="relative mx-auto max-w-site overflow-hidden rounded-[24px] border border-[#eee8df]"
        style={{
          background: "#fbfaf7 url('/assets/stripes.png') center / 520px",
        }}
      >
        <div className="relative bg-[linear-gradient(180deg,rgba(251,250,247,0.72)_0%,rgba(251,250,247,0.9)_100%)] px-6 py-12 text-center sm:py-16 lg:py-[84px]">
          <h2 className="mb-3.5 text-[clamp(26px,3.6vw,44px)] font-bold tracking-[-0.02em] text-navy">
            Build your perfect remote team
          </h2>
          <p className="mb-2 text-[clamp(16px,2vw,20px)] font-semibold text-slateblue">
            No surprises. No hidden costs. Just results.
          </p>
          <p className="mx-auto mb-[30px] max-w-[660px] text-base leading-[1.55] text-slate">
            We will give you an exact quote for your specific requirements within
            24 hours, and have your agent active within 72 hours of signing.
          </p>
          <Button href="#contact" className="px-11 py-4 text-[17px]">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
}
