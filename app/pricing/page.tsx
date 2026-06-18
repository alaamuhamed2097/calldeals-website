import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { pricingTiers } from "@/lib/pages";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for dedicated virtual assistants. No surprises, no hidden costs — an exact quote within 24 hours and your agent active within 72.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Pricing"
        title="No surprises. No hidden costs. Just results."
        subtitle="We will give you an exact quote for your specific requirements within 24 hours, and have your agent active within 72 hours of signing."
      />

      <section aria-label="Pricing plans">
        <Container className="pt-14 sm:pt-20">
          <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-[20px] border p-8 ${
                  tier.featured
                    ? "border-cyan bg-navy text-white shadow-[0_30px_60px_-34px_rgba(0,150,210,0.7)]"
                    : "border-[#e3edf3] bg-white text-navy"
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-cyan px-3 py-1 text-[12px] font-semibold uppercase tracking-wide text-white">
                    Most popular
                  </span>
                )}
                <h2 className="text-[22px] font-semibold">{tier.name}</h2>
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-[44px] font-bold tracking-[-0.02em]">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span
                      className={`pb-2 text-sm ${
                        tier.featured ? "text-white/70" : "text-slate"
                      }`}
                    >
                      {tier.cadence}
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 text-[15px] leading-relaxed ${
                    tier.featured ? "text-white/80" : "text-slate"
                  }`}
                >
                  {tier.tagline}
                </p>
                <ul className="my-7 flex flex-1 list-none flex-col gap-3 p-0 text-[15px]">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2.5">
                      <span
                        aria-hidden="true"
                        className={tier.featured ? "text-[#5fd0f5]" : "text-mint"}
                      >
                        ✓
                      </span>
                      <span className={tier.featured ? "text-white/90" : "text-slateblue"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  href="/contact"
                  variant={tier.featured ? "white" : "primary"}
                  className="w-full px-6 py-3.5 text-base"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ />
    </SiteShell>
  );
}
