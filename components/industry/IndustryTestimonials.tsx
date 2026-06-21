import { mediaUrl } from "@/lib/api";
import type { IndustryTestimonial } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/** "What Our Clients Are Saying" — renders nothing when there are no reviews. */
export function IndustryTestimonials({
  testimonials,
}: {
  testimonials: IndustryTestimonial[];
}) {
  if (!testimonials.length) return null;

  return (
    <section aria-label="Client testimonials" className="scroll-mt-24 bg-white">
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <Reveal variant="fade-up">
          <h2 className="mb-12 text-center text-[clamp(28px,4.4vw,56px)] font-semibold tracking-[-0.03em] text-navy">
            What Our Clients Are Saying
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const avatar = mediaUrl(t.image, "IndustryTestimonials");
            const rating = Math.max(0, Math.min(5, t.rate));
            return (
              <Reveal key={t.id} variant="fade-up" delay={(i % 3) * 90}>
                <figure className="flex h-full flex-col rounded-[14px] border border-[#cdeefb] border-t-2 border-t-cyan bg-white p-8 shadow-[0_24px_50px_-36px_rgba(0,120,160,0.5)]">
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
                      <img
                        src={avatar}
                        alt={t.name}
                        loading="lazy"
                        className="h-12 w-12 flex-none rounded-full object-cover"
                      />
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
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
