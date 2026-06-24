import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCollage } from "@/components/VideoCollage";
import { Security } from "@/components/Security";
import { QuoteCTA } from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From your first strategy call to a vetted, briefed agent live on your account in 72 hours — here is exactly how CallDeals works.",
  alternates: { canonical: "/how-it-works" },
};

const steps = [
  {
    bg: "#5BC7D9",
    title: "Book a strategy call",
    description:
      "Tell us where your business needs support. We map the roles, scope the work, and give you an exact quote within 24 hours — no pitch, no pressure.",
  },
  {
    bg: "#2AA5BE",
    title: "We match a vetted specialist",
    description:
      "We hand-pick a background-verified, college-educated professional who already knows your industry and the tools your team runs on.",
  },
  {
    bg: "#0087A5",
    title: "Onboarding & briefing",
    description:
      "Your agent is trained on your specific platforms and processes, briefed on your goals, and set up with role-based access before day one.",
  },
  {
    bg: "#006E8A",
    title: "They go live in 72 hours",
    description:
      "Your dedicated agent starts delivering — managed and measured, with weekly performance reporting and a free replacement guarantee.",
  },
];

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="How it works"
        title="From first call to live in 72 hours"
        subtitle="A simple, transparent process that puts a vetted, accountable professional on your team — fast, with no guesswork."
      />

      <section aria-label="The process" className="bg-white">
        <Container className="pt-16 pb-12 sm:pt-20 lg:pt-24">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={step.title} variant="fade-up" delay={i * 90}>
                <div className="flex h-full flex-col rounded-[20px] p-7" style={{ backgroundColor: step.bg }}>
                  <span className="mb-4 text-[clamp(44px,5vw,64px)] font-black leading-none text-white/90">
                    {i + 1}
                  </span>
                  <h3 className="mb-2 text-[20px] font-semibold text-navy">{step.title}</h3>
                  <p className="text-[15px] leading-[1.55] text-navy/80">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <VideoCollage />
      <Security />
      <QuoteCTA />
    </SiteShell>
  );
}
