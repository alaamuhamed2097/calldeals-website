import { solutions } from "@/lib/data";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Solutions() {
  return (
    <section id="solutions" aria-label="Our solutions" className="scroll-mt-24">
      <Container className="pt-14 text-center sm:pt-20 lg:pt-[90px]">
        <p className="text-[15px] font-medium tracking-[0.16em] text-slateblue">
          WHAT WE DO
        </p>
        <h2 className="mb-4 mt-[18px] text-[clamp(30px,3.6vw,44px)] font-semibold tracking-[-0.02em] text-navy">
          Our Solutions
        </h2>
        <p className="mx-auto mb-14 max-w-[740px] text-[18px] leading-[1.55] text-slate">
          Every role, every function, every industry — staffed with a dedicated
          professional who is briefed, managed, and accountable from day one.
        </p>

        <div className="grid grid-cols-1 gap-7 text-left sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <article key={solution.title} className="flex flex-col gap-3.5">
              <div
                aria-hidden="true"
                className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[linear-gradient(150deg,#E6F8FE,#CCEFFC)] text-2xl text-deep"
              >
                {solution.icon}
              </div>
              <h3 className="text-[20px] font-semibold text-navy">
                {solution.title}
              </h3>
              <p className="flex-1 text-[15px] leading-relaxed text-slate">
                {solution.description}
              </p>
              <a
                href={solution.href}
                className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-deep no-underline transition-all hover:gap-2.5"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Button href="#industries" variant="navy" className="px-[38px] py-[15px] text-base">
            View all Solutions
          </Button>
        </div>
      </Container>
    </section>
  );
}
