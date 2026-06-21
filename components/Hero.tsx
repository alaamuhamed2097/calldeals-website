import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section aria-label="Hero">
      {/* Full-width hero with dark teal background */}
      <div className="relative overflow-hidden bg-[#0D5F7A]">
        {/* Decorative wave lines */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
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

        {/* Light-blue diagonal background section (only shows on lg+) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(135deg,#CCEFFC_0%,#E8F9FE_100%)] lg:block"
          style={{ clipPath: "polygon(100% 0%, 100% 100%, 40% 100%)" }}
        />

        {/* Grid layout for content and image */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0">
          {/* Left column: Text content */}
          <div className="mx-auto max-w-site px-4 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-[100px]">
            <div className="max-w-[420px]">
              <h1 className="mb-6 text-[clamp(36px,5.5vw,62px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
                More Than Calls,
                <br />
                Power Business Growth
              </h1>
              <p className="mb-4 text-[clamp(18px,2.2vw,24px)] font-semibold text-white">
                Smart Agents. Seamless Support. For Every Industry.
              </p>
              <p className="mb-10 max-w-[420px] text-[16px] leading-[1.6] text-white/85">
                CallDeals deploys elite, college-educated professionals into your
                business in 72 hours. We combine high-caliber talent with smart
                processes to drive revenue and cut costs by 70%.
              </p>
              <a
                href="#contact"
                className="inline-flex h-[56px] items-center justify-center rounded-full bg-white px-12 text-[17px] font-semibold text-[#0D5F7A] no-underline shadow-[0_14px_30px_-14px_rgba(0,40,70,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(0,40,70,0.55)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Right column: Agent image (hidden on mobile, visible on lg+) */}
          <div className="hidden lg:flex items-end justify-center py-[100px] pr-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-s4ZM7uH36Z0A72As84C2Ngb1INHFIE.png"
              alt="CallDeals support agent wearing headphones"
              className="h-[400px] w-auto object-contain object-bottom"
            />
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
              <dd className="text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.02em] text-[#0D5F7A]">
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
