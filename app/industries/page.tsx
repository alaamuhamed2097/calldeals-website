import type { Metadata } from "next";
import Link from "next/link";
import { getIndustries, mediaUrl } from "@/lib/api";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { IndustryExpertise } from "@/components/IndustryExpertise";
import { ClientResults } from "@/components/ClientResults";
import { QuoteCTA } from "@/components/QuoteCTA";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep industry expertise across Real Estate, Healthcare, Finance, Technology, Insurance, and more — matched with professionals who already know your sector.",
  alternates: { canonical: "/industries" },
};

export default async function IndustriesPage() {
  // Soft-fails to [] when the API is unreachable, so the page still renders.
  const industries = (await getIndustries()).filter((i) => i.hashTag?.trim());

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Industries"
        title="Deep industry expertise. Elite global talent."
        subtitle="Every industry has its own rules. We match you with professionals who are already experts in your sector — no learning curves."
      />

      {industries.length > 0 ? (
        <section aria-label="Browse industries" className="scroll-mt-24 bg-white">
          <Container className="pt-4 pb-16 sm:pt-6 sm:pb-20 lg:pb-28">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, i) => {
                const image = mediaUrl(industry.image ?? industry.subImage, "Industries");
                return (
                  <Reveal key={industry.id} variant="fade-up" delay={(i % 3) * 80}>
                    <Link
                      href={`/industries/${industry.hashTag}`}
                      className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e6eef4] bg-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(0,120,160,0.55)]"
                    >
                      {image && (
                        <div className="aspect-[16/10] overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt={industry.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="mb-2 text-[19px] font-semibold text-navy">
                          {industry.name}
                        </h3>
                        <p className="mb-5 flex-1 text-[15px] leading-[1.6] text-slate">
                          {industry.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-cyan">
                          Explore
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
        <IndustryExpertise />
      )}

      <ClientResults />
      <QuoteCTA />
    </SiteShell>
  );
}
