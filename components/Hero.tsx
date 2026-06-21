import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section aria-label="Hero">
      {/* Full-width teal band */}
      <div className="relative overflow-hidden bg-[#005677]">
        {/* Faint concentric curved texture in the lower-left */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.13]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1440 600"
          fill="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M -80 ${120 + i * 95} Q ${380 + i * 30} ${520 + i * 30}, ${
                1080 + i * 40
              } ${360 - i * 20}`}
              stroke="white"
              strokeWidth="1.4"
            />
          ))}
        </svg>

        {/* Light-blue triangle (apex at the top-right, widening to the base) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-[linear-gradient(135deg,#CCEFFC_0%,#eaf8ff_100%)] lg:block"
          style={{ clipPath: "polygon(97% 0, 100% 0, 100% 100%, 48% 100%)" }}
        />

        {/* Agent photo inside the triangle (desktop) */}
        <div className="absolute bottom-0 right-[3%] hidden h-full w-[38%] items-end justify-center lg:flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero-agent.png"
            alt="CallDeals support agent wearing headphones"
            className="h-[108%] w-auto max-w-none object-contain object-bottom"
          />
        </div>

        <div className="relative mx-auto grid max-w-site grid-cols-1 gap-6 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-[120px]">
          <div className="max-w-[600px]">
            <h1 className="mb-5 text-[clamp(34px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.02em] text-white">
              More Than Calls,
              <br />
              Power Business Growth
            </h1>
            <p className="mb-4 text-[clamp(18px,2.2vw,24px)] font-semibold text-white">
              Smart Agents. Seamless Support. For Every Industry.
            </p>
            <p className="mb-8 max-w-[500px] text-[16px] leading-[1.6] text-white/80">
              CallDeals deploys elite, college-educated professionals into your
              business in 72 hours. We combine high-caliber talent with smart
              processes to drive revenue and cut costs by 70%.
            </p>
            <a
              href="#contact"
              className="inline-flex h-[54px] items-center justify-center rounded-full bg-white px-11 text-[17px] font-semibold text-deep no-underline shadow-[0_14px_30px_-14px_rgba(0,40,70,0.45)] transition-all hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>

      {/* Light-blue stats bar */}
      <div className="px-4 sm:px-6 lg:px-12">
        <dl className="mx-auto -mt-px grid max-w-site grid-cols-2 gap-y-6 rounded-b-[18px] bg-[#CCEFFC] py-7 sm:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 text-center ${
                i < heroStats.length - 1 ? "sm:border-r sm:border-white/60" : ""
              }`}
            >
              <dd className="text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.02em] text-[#005677]">
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </dd>
              <dt className="mt-1 text-[14px] text-[#2d6a85]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
