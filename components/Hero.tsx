import { heroStats } from "@/lib/data";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section aria-label="Hero" className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pt-7">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#13B4F0_0%,#02A6E2_52%,#0098D2_100%)] shadow-[0_30px_70px_-38px_rgba(0,150,210,0.7)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.18),transparent_38%)]"
        />
        {/* Diagonal white wedge behind the agent photo (desktop only) */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 hidden h-full w-[44%] bg-white lg:block"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 8% 100%)" }}
        />

        <div className="relative grid grid-cols-1 items-stretch gap-5 px-6 pt-8 sm:px-10 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-[60px] lg:pt-[60px]">
          <div className="max-w-[560px] pb-10 lg:pb-12">
            <h1 className="mb-[18px] text-[clamp(36px,4.6vw,62px)] font-bold leading-[1.04] tracking-[-0.03em] text-ink">
              More Than Calls,
              <br />
              Power Business Growth
            </h1>
            <p className="mb-4 text-[clamp(18px,2vw,24px)] font-semibold text-[#06354F]">
              Smart Agents. Seamless Support. For Every Industry.
            </p>
            <p className="mb-[30px] max-w-[480px] text-[17px] leading-[1.55] text-[#0a3b56]">
              CallDeals deploys elite, college-educated professionals into your
              business in 72 hours. We combine high-caliber talent with smart
              processes to drive revenue and cut costs by 70%.
            </p>
            <Button href="#contact" variant="white" className="px-[42px] py-4 text-[17px]">
              Let&apos;s Talk
            </Button>
          </div>

          <div className="relative hidden items-end justify-center lg:flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-person.png"
              alt="Smiling CallDeals support agent wearing a headset and holding a mug"
              className="block h-auto w-[118%] max-w-none self-end drop-shadow-[0_24px_40px_rgba(0,60,90,0.25)]"
            />
          </div>
        </div>

        {/* Stats bar */}
        <dl className="relative grid grid-cols-2 border-t border-[#eef3f6] bg-white sm:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-6 text-center ${
                i < heroStats.length - 1 ? "sm:border-r sm:border-[#eef3f6]" : ""
              } ${i % 2 === 0 ? "border-r border-[#eef3f6] sm:border-r" : ""}`}
            >
              <dd className="text-[clamp(26px,3vw,40px)] font-bold tracking-[-0.02em] text-navy">
                {stat.prefix && <span className="text-cyan">{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span className="text-cyan">{stat.suffix}</span>}
              </dd>
              <dt className="mt-1 text-[14px] text-slate">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
