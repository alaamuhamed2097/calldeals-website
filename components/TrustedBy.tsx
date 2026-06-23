const logos = [
  { name: "Dialpad", src: "/assets/logos/dialpad.png" },
  { name: "Western Dental & Orthodontics", src: "/assets/logos/western-dental.png" },
  { name: "REISift", src: "/assets/logos/reisift.png" },
  { name: "monday.com", src: "/assets/logos/monday.png" },
  { name: "asana", src: "/assets/logos/asana.png" },
  { name: "Sierra Interactive", src: "/assets/logos/sierra.png" },
  { name: "lululemon", src: "/assets/logos/lululemon.png" },
];

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="bg-white pt-16 pb-16 text-center sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
      <div className="mx-auto max-w-[980px] px-6">
        <h2 className="mb-3.5 text-[clamp(22px,2.4vw,28px)] font-semibold text-navy">
          Trusted by Operators Who Demand Results
        </h2>
        <p className="mx-auto max-w-[760px] text-base leading-relaxed text-slate">
          From solo investors building their first acquisition team to established
          firms expanding their operational capacity, CallDeals serves businesses
          that cannot afford to settle for average.
        </p>
      </div>

      {/* Auto-scrolling logo carousel */}
      <div
        className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <ul className="flex w-max animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...logos, ...logos].map((logo, i) => (
            <li key={i} className="flex-none">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="h-7 w-auto object-contain opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
