import { trustedLogos } from "@/lib/data";

export function TrustedBy() {
  return (
    <section
      aria-label="Trusted by"
      className="mx-auto max-w-[980px] px-6 pt-14 text-center sm:pt-20 lg:pt-[84px]"
    >
      <h2 className="mb-3.5 text-[clamp(22px,2.4vw,28px)] font-semibold text-navy">
        Trusted by Operators Who Demand Results
      </h2>
      <p className="mx-auto max-w-[760px] text-base leading-relaxed text-slate">
        From solo investors building their first acquisition team to established
        firms expanding their operational capacity, CallDeals serves businesses
        that cannot afford to settle for average.
      </p>
      <ul className="mt-9 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-5 p-0 opacity-55 sm:gap-x-14">
        {trustedLogos.map((name) => (
          <li
            key={name}
            className="text-[20px] font-bold tracking-[-0.02em] text-[#7c8794]"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
