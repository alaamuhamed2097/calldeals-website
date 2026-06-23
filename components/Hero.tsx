import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section aria-label="Hero">
      {/* Hero wrapper */}
      <div className="relative overflow-hidden bg-[#C5E9F7]" style={{ minHeight: "620px" }}>
        {/* Left section: Dark teal background */}
        <div className="absolute left-0 top-0 bottom-0 bg-[#0D5F7A] lg:w-[55%]" />
        
        {/* Diagonal separator SVG overlay */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 620"
          fill="#0D5F7A"
        >
          <polygon points="0,0 0,620 660,620 0,0" />
        </svg>

        {/* Inverted triangle - bottom decorative element */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-[0.06]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 400"
          fill="none"
        >
          <polygon points="0,0 1440,0 720,400" fill="#0D5F7A" opacity="0.1" />
        </svg>

        {/* Decorative wave lines - positioned on left with white opacity */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full opacity-[0.15]"
          style={{ width: "55%", mixBlendMode: "screen" }}
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
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* Bottom wave decoration */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.08]"
          preserveAspectRatio="none"
          viewBox="0 0 1440 200"
          fill="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q360,10 720,50 T1440,50 L1440,200 L0,200 Z"
            fill="url(#waveGradient)"
            stroke="white"
            strokeWidth="1.5"
          />
          <path
            d="M0,80 Q360,40 720,80 T1440,80 L1440,200 L0,200 Z"
            fill="none"
            stroke="white"
            strokeWidth="1"
            opacity="0.6"
          />
        </svg>

        {/* Hero content - positioned above backgrounds */}
        <div className="relative z-20 flex flex-col lg:flex-row items-stretch gap-0 h-full">
          {/* Left column: Text content */}
          <div className="w-full lg:w-[55%] flex items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-20">
            <div className="max-w-[450px]">
              <h1 className="mb-6 text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
                More Than Calls,
                <br />
                Power Business Growth
              </h1>
              <p className="mb-4 text-[16px] sm:text-[18px] font-semibold text-white">
                Smart Agents. Seamless Support. For Every Industry.
              </p>
              <p className="mb-10 text-[14px] sm:text-[15px] leading-[1.6] text-white/90">
                CallDeals deploys elite, college-educated professionals into your
                business in 72 hours. We combine high-caliber talent with smart
                processes to drive revenue and cut costs by 70%.
              </p>
              <a
                href="#contact"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-10 text-[16px] font-semibold text-[#0D5F7A] no-underline shadow-[0_12px_24px_-8px_rgba(0,40,70,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_32px_-8px_rgba(0,40,70,0.4)]"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          {/* Right column: Large agent image */}
          <div className="w-full lg:w-[45%] flex items-end justify-end overflow-hidden lg:pr-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2027-kBY0YnTOlVUxrk2oS7nqAbmnScuYAZ.png"
              alt="CallDeals support agent wearing headphones and holding cup"
              className="h-[600px] w-auto object-contain object-bottom max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Light-blue stats bar */}
      <div className="bg-[#C5E9F7] px-4 sm:px-6 lg:px-12 py-8 sm:py-10">
        <dl className="mx-auto max-w-site grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <dd className="text-[clamp(24px,4vw,36px)] font-bold tracking-[-0.02em] text-[#0D5F7A]">
                {stat.prefix && <span>{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span>{stat.suffix}</span>}
              </dd>
              <dt className="mt-2 text-[13px] sm:text-[14px] text-[#2d6a85]">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
