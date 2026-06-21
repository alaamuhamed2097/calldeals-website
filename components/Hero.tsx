import { heroStats } from "@/lib/data";
import Image from "next/image";

export function Hero() {
  return (
    <section aria-label="Hero" className="bg-white">
      {/* Two-column hero layout */}
      <div className="mx-auto max-w-site px-4 pt-12 pb-0 sm:px-6 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* Left column: Text content */}
          <div>
            <h1 className="mb-5 text-[clamp(30px,3.8vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] text-ink [text-wrap:balance]">
              We Built the Remote Workforce Model That Actually Works for Your Business
            </h1>
            <p className="mb-3 text-[clamp(15px,1.6vw,18px)] font-semibold text-navy">
              We combine people, process, and technology to deliver seamless experiences worldwide.
            </p>
            <p className="mb-9 max-w-[480px] text-[16px] leading-[1.65] text-slate">
              CallDeals deploys elite, college-educated professionals into your business in 72 hours, driving revenue and cutting costs by 70%.
            </p>
            <a
              href="/contact"
              className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#0087A5] px-10 text-[16px] font-semibold text-white no-underline transition-colors hover:bg-[#006E8A]"
            >
              Book Meeting
            </a>
          </div>

          {/* Right column: Hero image with decorative chevrons */}
          <div className="relative hidden lg:flex items-center justify-end">
            {/* Decorative arrow shapes matching Figma */}
            <div aria-hidden="true" className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10">
              <div className="h-12 w-12 bg-[#0087A5] opacity-20" style={{ clipPath: "polygon(0 50%,100% 0,100% 100%)" }} />
              <div className="h-9 w-9 bg-[#0087A5] opacity-15" style={{ clipPath: "polygon(0 50%,100% 0,100% 100%)" }} />
              <div className="h-6 w-6 bg-[#0087A5] opacity-10" style={{ clipPath: "polygon(0 50%,100% 0,100% 100%)" }} />
            </div>
            <div className="w-full max-w-[460px] overflow-hidden rounded-[20px] bg-[#D6EEF5]" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/assets/hero-person.png"
                alt="CallDeals support agent wearing a headset and holding a mug"
                width={460}
                height={345}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <dl className="mt-10 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#E4EEF4] bg-white shadow-[0_4px_24px_-10px_rgba(0,80,120,0.08)] sm:grid-cols-4 lg:mt-14">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 py-6 text-center ${i < heroStats.length - 1 ? "border-r border-[#E4EEF4]" : ""}`}
            >
              <dd className="text-[clamp(24px,2.8vw,38px)] font-bold tracking-[-0.02em] text-navy">
                {stat.prefix && <span className="text-[#0087A5]">{stat.prefix}</span>}
                {stat.value}
                {stat.suffix && <span className="text-[#0087A5]">{stat.suffix}</span>}
              </dd>
              <dt className="mt-1 text-[14px] text-slate">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Building solutions / icon row */}
      <div className="mt-12 border-t border-b border-[#E8EFF4] bg-[#F8FBFD]">
        <div className="mx-auto max-w-site px-4 py-8 sm:px-6 lg:px-12">
          <ul className="grid list-none grid-cols-2 gap-6 p-0 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "Dedicated Agents", icon: <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>, extra: <><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { label: "Proactive Management", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
              { label: "Verified Top Talent", icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/> },
              { label: "72-Hour Deployment", icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></> },
              { label: "Global Coverage", icon: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></> },
            ].map((item) => (
              <li key={item.label} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#D6EEF5]" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0087A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                    {item.extra}
                  </svg>
                </div>
                <span className="text-[13px] font-semibold leading-tight text-navy">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
