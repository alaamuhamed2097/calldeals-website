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
    <section aria-label="Client testimonials" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <Reveal variant="fade-up">
          <h2 className="mb-10 text-[clamp(26px,3.2vw,40px)] font-bold tracking-[-0.02em] text-navy">
            What Our Clients Are Saying
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => {
            const avatar = mediaUrl(t.image, "IndustryTestimonials");
            const rating = Math.max(0, Math.min(5, t.rate));
            return (
              <Reveal key={t.id} variant="fade-up" delay={(i % 3) * 90}>
                <figure className="flex h-full flex-col rounded-[18px] border border-[#e6eef4] bg-white p-7">
                  <div aria-label={`Rated ${rating} out of 5`} className="mb-4 flex gap-1 text-cyan">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <span key={s} aria-hidden="true" className={s < rating ? "" : "text-[#d7e3ec]"}>
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="mb-6 flex-1 text-[15px] leading-[1.65] text-slateblue">
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
                      <div className="text-[16px] font-semibold text-navy">{t.name}</div>
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
