import { mediaUrl } from "@/lib/api";
import type { IndustrySummary } from "@/types";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function IndustryHero({ industry }: { industry: IndustrySummary }) {
  const photo = mediaUrl(industry.subImage ?? industry.image, "Industries");

  return (
    <section aria-label="Hero" className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pt-7">
      <div className="relative mx-auto grid max-w-site grid-cols-1 items-center gap-8 overflow-hidden rounded-[26px] bg-mist px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-[60px] lg:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ice/50 blur-2xl"
        />
        <Reveal variant="fade-up" className="relative max-w-[600px]">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-cyan">
            Hire a Qualified
          </p>
          <h1 className="mb-5 text-[clamp(32px,4.4vw,56px)] font-bold leading-[1.05] tracking-[-0.03em] text-navy">
            {industry.name}
          </h1>
          <p className="mb-8 text-[clamp(16px,1.7vw,19px)] leading-[1.55] text-slate">
            {industry.shortDescription}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" className="px-9 py-4 text-[16px]">
              Build My {industry.name.split(" ").slice(-1)[0]} Team
            </Button>
            <Button href="#contact" variant="outline" className="px-9 py-4 text-[16px]">
              Free Strategy Call
            </Button>
          </div>
        </Reveal>

        {photo && (
          <Reveal variant="scale-in" className="relative hidden justify-center lg:flex">
            <div className="absolute inset-0 m-auto h-[78%] w-[78%] rounded-full bg-[linear-gradient(160deg,#16B6F1_0%,#0098D2_100%)]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo}
              alt={industry.name}
              loading="eager"
              className="relative z-10 block h-auto w-[88%] max-w-none rounded-[20px] object-cover drop-shadow-[0_24px_40px_rgba(0,60,90,0.25)]"
            />
          </Reveal>
        )}
      </div>
    </section>
  );
}
