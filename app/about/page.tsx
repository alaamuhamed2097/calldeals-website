import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { aboutMission, aboutStory, aboutValues } from "@/lib/pages";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CallDeals was built in the field, not in a boardroom — by operators who know firsthand what a high-caliber, accountable remote professional makes possible.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section aria-label="About CallDeals" className="bg-white px-4 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pt-7">
        <div className="relative mx-auto grid max-w-site overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#0D5F7A_0%,#0A4E66_100%)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative z-10 px-7 py-14 sm:px-12 sm:py-20">
            <p className="mb-3 text-[13px] font-semibold tracking-[0.18em] text-white/80">ABOUT US</p>
            <h1 className="mb-5 max-w-[560px] text-[clamp(30px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              We Built the Remote Workforce Model That Actually Works for Your Business
            </h1>
            <p className="mb-8 max-w-[520px] text-[17px] leading-[1.6] text-white/85">
              We have run the campaigns, managed the pipelines, and felt the cost of the
              wrong team. CallDeals is the team we wished we had — vetted, accountable,
              and built around how you actually operate.
            </p>
            <Button href="/contact" variant="white" className="px-9 py-3.5 text-[16px]">
              Let&apos;s Talk
            </Button>
          </div>
          <div className="relative hidden items-end justify-center lg:flex">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-person.png"
              alt="CallDeals team member"
              className="h-full max-h-[420px] w-auto object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* Mission band */}
      <section aria-label="What we deliver" className="bg-white px-4 pt-12 sm:px-6 lg:px-12 lg:pt-16">
        <div className="mx-auto max-w-site rounded-[22px] bg-[#CFEEFB] px-6 py-12 sm:px-12">
          <h2 className="mx-auto mb-10 max-w-[820px] text-center text-[clamp(22px,2.6vw,32px)] font-semibold leading-[1.3] tracking-[-0.01em] text-navy">
            {aboutMission.statement}
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {aboutMission.features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div
                  aria-hidden="true"
                  className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[22px] text-deep shadow-[0_8px_18px_-10px_rgba(0,110,138,0.6)]"
                >
                  {feature.icon}
                </div>
                <h3 className="mb-1 text-[15px] font-semibold text-navy">{feature.title}</h3>
                <p className="text-[13px] leading-[1.5] text-slateblue">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About us body */}
      <section aria-label="Our story" className="bg-white">
        <Container className="pt-16 pb-12 sm:pt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
            <div aria-hidden="true" className="hidden text-[64px] font-bold leading-[0.7] text-[#CFEEFB] lg:block">
              <span className="block">»</span>
              <span className="block">»</span>
              <span className="block">»</span>
            </div>
            <div>
              <p className="mb-3 text-[13px] font-semibold tracking-[0.18em] text-deep">ABOUT US</p>
              <h2 className="mb-6 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
                Built by operators, for operators
              </h2>
              <div className="space-y-5">
                {aboutStory.map((paragraph) => (
                  <p key={paragraph} className="text-[17px] leading-[1.7] text-slateblue">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-7 sm:grid-cols-3">
            {aboutValues.map((value, i) => (
              <Reveal key={value.title} variant="fade-up" delay={(i % 3) * 90}>
                <div className="h-full rounded-[18px] border border-[#dcf0fb] bg-mist p-7">
                  <h3 className="mb-2 text-[20px] font-semibold text-navy">{value.title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Let's Talk + form */}
      <section id="contact-form" aria-label="Contact us" className="scroll-mt-24 bg-white">
        <Container className="pt-12 pb-20 sm:pt-16 sm:pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] font-bold tracking-[-0.02em] text-navy">
                Let&apos;s Talk
              </h2>
              <p className="mb-8 max-w-[440px] text-[17px] leading-[1.6] text-slateblue">
                Whether you have a specific role in mind or you are still figuring out
                where your business needs support, book a free strategy call and we will
                map exactly what your agents will do — with no pitch and no pressure.
              </p>
              <div className="space-y-4 text-[15px] text-slateblue">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mist text-deep">☎</span>
                  <a href="tel:+200123456789" className="no-underline hover:text-deep">+20 0123456789</a>
                </div>
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-mist text-deep">✉</span>
                  <a href="mailto:hello@calldeals.com" className="no-underline hover:text-deep">hello@calldeals.com</a>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
