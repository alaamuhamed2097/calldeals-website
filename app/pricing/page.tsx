import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";
import { FAQ } from "@/components/FAQ";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for dedicated virtual assistants. No setup fees, no hidden charges — $950 per month for a fully managed, college-educated professional.",
  alternates: { canonical: "/pricing" },
};

const features = [
  "We hire the top 1%, all college-educated with verified experience",
  "Comprehensive background and identity screening",
  "Internal workforce monitoring and direct issue intervention",
  "Dedicated account management and weekly performance reporting",
];

const badges = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="8 11 11 14 16 9" />
      </svg>
    ),
    label: "72-Hour Deployment",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    label: "No setup fees\n100% hassle-free",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    label: "Backup assistant included",
  },
];

export default function PricingPage() {
  return (
    <SiteShell>
      {/* Dark teal header band */}
      <section aria-label="Pricing" className="bg-[#006E8A]">
        <div className="mx-auto max-w-site px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-12">
          <h1 className="mb-4 text-[clamp(28px,4vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-white [text-wrap:balance]">
            Simple pricing for your business
          </h1>
          <p className="mx-auto max-w-[560px] text-[16px] leading-[1.6] text-white/80">
            Simple, Transparent Pricing — No Setup Fees. No Hidden Charges.
          </p>

          {/* Pricing card */}
          <div className="mx-auto mt-10 max-w-[820px] overflow-hidden rounded-[20px] bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr]">
              {/* Left: price + CTA */}
              <div className="flex flex-col items-center justify-center gap-5 bg-[#D8F0F6] px-8 py-10 text-center">
                <h2 className="text-[20px] font-bold text-navy">Serious Talent</h2>
                <div>
                  <span className="text-[64px] font-bold leading-none tracking-[-0.03em] text-navy">$950</span>
                  <div className="mt-1 text-[14px] text-slate">billed monthly</div>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-[48px] w-full max-w-[180px] items-center justify-center rounded-full bg-[#0087A5] text-[15px] font-semibold text-white no-underline transition-colors hover:bg-[#006E8A]"
                >
                  Get Started
                </Link>
              </div>

              {/* Right: features */}
              <div className="px-8 py-10 text-left">
                <p className="mb-6 text-[14px] leading-[1.6] text-slate">
                  Every hire comes backed by recruiting, vetting, onboarding, HR, compliance, and ongoing support. All built into one monthly investment.
                </p>
                <ul className="flex list-none flex-col gap-4 p-0">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#0087A5] text-[11px] font-bold text-white" aria-hidden="true">✓</span>
                      <span className="text-[14px] leading-[1.5] text-navy">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom badges */}
          <div className="mx-auto mt-8 flex max-w-[700px] flex-wrap items-center justify-center gap-6">
            {badges.map((b) => (
              <div key={b.label} className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-white">
                <span className="flex-none">{b.icon}</span>
                <span className="whitespace-pre-line text-left text-[13px] font-semibold leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </SiteShell>
  );
}
