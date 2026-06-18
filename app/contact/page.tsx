import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build your perfect remote team"
        subtitle="No pitch, no pressure. Tell us what you need and we'll map the roles, the scope, and the cost."
      />

      <section aria-label="Contact">
        <Container className="pt-14 sm:pt-20">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="flex flex-col gap-6">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-[12px] bg-mist text-[18px] text-deep"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-slate">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[17px] font-semibold text-navy no-underline hover:text-cyan"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-[17px] font-semibold text-navy">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
