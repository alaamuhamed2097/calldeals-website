import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { TalentPool } from "@/components/TalentPool";
import { QuoteCTA } from "@/components/QuoteCTA";
import { aboutStory, aboutValues } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CallDeals was built in the field, not in a boardroom — by operators who know firsthand what a high-caliber, accountable remote professional makes possible.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About us"
        title="Built by operators, for operators"
        subtitle="We have run the campaigns, managed the pipelines, and felt the cost of the wrong team. CallDeals is the team we wished we had."
      />

      <section aria-label="Our story" className="bg-white">
        <Container className="pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-[760px] space-y-6">
            {aboutStory.map((paragraph) => (
              <p key={paragraph} className="text-[18px] leading-[1.7] text-slateblue">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {aboutValues.map((value) => (
              <div
                key={value.title}
                className="rounded-[18px] border border-[#dcf0fb] bg-mist p-7"
              >
                <h2 className="mb-2 text-[20px] font-semibold text-navy">
                  {value.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-slate">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TalentPool />
      <QuoteCTA />
    </SiteShell>
  );
}
