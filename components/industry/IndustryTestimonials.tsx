"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { mediaUrl } from "@/lib/api";
import type { IndustryTestimonial } from "@/types";
import { Container } from "../ui/Container";

/**
 * "What Our Clients Are Saying" — a scroll-snap carousel of client reviews
 * (dynamic from the CMS). Shows 1/2/3 cards per view (mobile/tablet/desktop) and
 * lets users page through with the arrows or dots. Renders nothing with no data.
 */
export function IndustryTestimonials({
  testimonials,
  mediaFolder = "IndustryTestimonials",
}: {
  testimonials: IndustryTestimonial[];
  mediaFolder?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // Active = the card whose left edge is closest to the track's scroll offset.
    let nearest = 0;
    let min = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const d = Math.abs((child as HTMLElement).offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < min) {
        min = d;
        nearest = i;
      }
    });
    setActive(nearest);
    setAtStart(track.scrollLeft <= 4);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4);
  }, []);

  useEffect(() => {
    sync();
    const track = trackRef.current;
    if (!track) return;
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(testimonials.length - 1, i));
    const card = track.children[clamped] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  if (!testimonials.length) return null;

  const arrowBtn =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#cdeefb] bg-white text-[20px] text-cyan transition-colors hover:bg-cyan hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-cyan";

  return (
    <section aria-label="Client testimonials" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-[clamp(28px,4.4vw,56px)] font-semibold tracking-[-0.03em] text-navy">
            What Our Clients Are Saying
          </h2>
          {testimonials.length > 1 && (
            <div className="hidden flex-none gap-3 sm:flex">
              <button type="button" aria-label="Previous testimonial" onClick={() => scrollToIndex(active - 1)} disabled={atStart} className={arrowBtn}>
                ‹
              </button>
              <button type="button" aria-label="Next testimonial" onClick={() => scrollToIndex(active + 1)} disabled={atEnd} className={arrowBtn}>
                ›
              </button>
            </div>
          )}
        </div>

        <div
          ref={trackRef}
          onScroll={sync}
          className="flex snap-x snap-proximity gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => {
            const avatar = mediaUrl(t.image, mediaFolder);
            const rating = Math.max(0, Math.min(5, t.rate));
            return (
              <figure
                key={t.id}
                className="flex shrink-0 basis-full snap-start flex-col rounded-[14px] border border-[#cdeefb] border-t-2 border-t-cyan bg-white p-8 shadow-[0_24px_50px_-36px_rgba(0,120,160,0.5)] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
              >
                <div aria-label={`Rated ${rating} out of 5`} className="mb-5 flex gap-1 text-[18px] text-cyan">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} aria-hidden="true" className={s < rating ? "" : "text-[#d7e3ec]"}>
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="mb-7 flex-1 font-serif text-[clamp(18px,2vw,21px)] font-bold italic leading-[1.5] text-[#3e005b]">
                  “{t.review}”
                </blockquote>
                <figcaption className="flex items-center gap-3.5">
                  {avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={avatar} alt={t.name} loading="lazy" className="h-12 w-12 flex-none rounded-full object-cover" />
                  ) : (
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-mist text-[17px] font-bold text-cyan">
                      {t.name.charAt(0)}
                    </span>
                  )}
                  <div>
                    <div className="text-[15px] font-semibold text-navy">{t.name}</div>
                    <div className="text-[14px] text-slate">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            );
          })}
        </div>

        {/* Dot pagination */}
        {testimonials.length > 1 && (
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === active ? "w-7 bg-cyan" : "w-2.5 bg-[#cdeafb] hover:bg-cyan/50"
                }`}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
