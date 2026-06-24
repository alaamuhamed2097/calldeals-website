import { getSolutions, mediaUrl, slugify } from "@/lib/api";
import { solutions as staticSolutions } from "@/lib/data";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

/**
 * "Our Solutions" — home/solutions-hub showcase. Pulls live solutions from the
 * CMS (filtered to `showInHomePage`, ordered by `displayOrder`) and links each
 * card to its dynamic `/solutions/[slug]` page. Falls back to the curated static
 * set from `lib/data` when the API is empty/unreachable.
 */
export async function Solutions() {
  const apiSolutions = (await getSolutions())
    .filter((s) => s.showInHomePage && s.name?.trim())
    .sort((a, b) => a.displayOrder - b.displayOrder);

  const items = apiSolutions.length
    ? apiSolutions.map((s) => ({
        key: s.id,
        title: s.name,
        description: s.shortDescription,
        href: `/solutions/${slugify(s.name)}`,
        image: mediaUrl(s.mainImage ?? s.subImage, "Solutions"),
        icon: "◆",
      }))
    : staticSolutions.map((s) => ({
        key: s.title,
        title: s.title,
        description: s.description,
        href: s.href,
        image: s.image ?? null,
        icon: s.icon,
      }));

  return (
    <section id="solutions" aria-label="Our solutions" className="scroll-mt-24 bg-white">
      <Container className="pt-16 pb-16 text-center sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-28">
        <Reveal variant="fade-up">
          <p className="text-[15px] font-medium tracking-[0.16em] text-slateblue">WHAT WE DO</p>
          <h2 className="mb-4 mt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold tracking-[-0.02em] text-navy">
            Our Solutions
          </h2>
          <p className="mx-auto mb-14 max-w-[740px] text-[18px] leading-[1.55] text-slate">
            Every role, every function, every industry — staffed with a dedicated
            professional who is briefed, managed, and accountable from day one.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.key} variant="fade-up" delay={(i % 4) * 80} className="group h-full">
              <article className="flex h-full flex-col gap-4">
                <div className="aspect-[4/3] overflow-hidden rounded-[18px] bg-mist">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(150deg,#E6F8FE,#CCEFFC)] text-3xl text-deep">
                      {item.icon}
                    </div>
                  )}
                </div>
                <h3 className="text-[20px] font-semibold text-navy">{item.title}</h3>
                <p className="flex-1 text-[15px] leading-relaxed text-slate">{item.description}</p>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-deep no-underline transition-all hover:gap-2.5"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/solutions" variant="navy" className="px-[38px] py-[15px] text-base">
            View all Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
