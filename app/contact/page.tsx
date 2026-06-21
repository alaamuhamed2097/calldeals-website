import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free strategy call. We map the roles you need, give you an exact quote within 24 hours, and have your dedicated agent active within 72.",
  alternates: { canonical: "/contact" },
};

const details = [
  { icon: "✆", label: "Phone", value: "+20 0123456789", href: "tel:+200123456789" },
  { icon: "✉", label: "Email", value: "hello@calldeals.com", href: "mailto:hello@calldeals.com" },
  { icon: "⌖", label: "Office", value: "Apt, City, Street, Country" },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <section aria-label="Contact" className="bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Left: Let's Talk content */}
            <div>
              <span className="mb-3 block text-[13px] font-semibold uppercase tracking-[0.14em] text-[#0087A5]">
                Get in Touch
              </span>
              <h1 className="mb-5 text-[clamp(34px,4vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] text-navy">
                Let&apos;s Talk
              </h1>
              <p className="mb-8 max-w-[420px] text-[16px] leading-[1.65] text-slate">
                Whether you have a specific role in mind or are still figuring out what your business needs — start with a conversation. A free 20-minute strategy call will give you a clear picture of what we can deliver: what it costs, and how quickly we can have someone working for you. No pitch, no pressure. Just a direct conversation about your business.
              </p>

              {/* Contact details */}
              <div className="mb-8 flex flex-col gap-4">
                {details.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-[10px] bg-[#E6F7FB] text-[16px] text-[#0087A5]"
                    >
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-[12px] font-medium uppercase tracking-wide text-slate">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-[15px] font-semibold text-navy no-underline hover:text-[#0087A5] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-[15px] font-semibold text-navy">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#form"
                className="inline-flex h-[48px] items-center justify-center rounded-full border-2 border-navy px-8 text-[15px] font-semibold text-navy no-underline transition-colors hover:bg-navy hover:text-white"
              >
                Book Meeting
              </a>
            </div>

            {/* Right: Contact form */}
            <div id="form">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
