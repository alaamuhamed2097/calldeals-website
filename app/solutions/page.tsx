import type { Metadata } from "next";
import Link from "next/link";
import { getSolutions, mediaUrl, slugify } from "@/lib/api";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Solutions } from "@/components/Solutions";
import { Security } from "@/components/Security";
import { QuoteCTA } from "@/components/QuoteCTA";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From general and tailored virtual assistants to dedicated customer service and administrative support — every role staffed with a briefed, managed professional.",
  alternates: { canonical: "/solutions" },
};

export default async function SolutionsPage() {
  // Soft-fails to [] when the API is unreachable, so the page still renders.
  const solutions = (await getSolutions()).filter((s) => s.name?.trim());

  return (
    <SiteShell>
      <PageHeader
        eyebrow="What we do"
        title="Staffing for every role your business runs on"
        subtitle="Every role, every function, every industry — staffed with a dedicated professional who is briefed, managed, and accountable from day one."
      />

      {solutions.length > 0 ? (
        <section aria-label="Browse solutions" className="scroll-mt-24 bg-white">
          <Container className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pb-28">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution, i) => {
                const image = mediaUrl(solution.mainImage ?? solution.subImage, "Solutions");
                return (
                  <Reveal key={solution.id} variant="fade-up" delay={(i % 3) * 80}>
                    <Link
                      href={`/solutions/${slugify(solution.name)}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e6eef4] bg-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,120,160,0.55)]"
                    >
                      {image && (
                        <div className="aspect-[16/10] overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt={solution.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-2 text-[19px] font-semibold text-navy">
                          {solution.name}
                        </h3>
                        <p className="mb-5 flex-1 text-[15px] leading-[1.6] text-slate">
                          {solution.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan">
                          Learn More
                          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </Container>
        </section>
      ) : (
        // Fallback when the CMS has no data / is offline: the curated static view.
        <Solutions />
      )}

      <Security />
      <QuoteCTA />
    </SiteShell>
  );
}
