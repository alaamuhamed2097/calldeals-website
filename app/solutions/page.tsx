import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { Solutions } from "@/components/Solutions";
import { Security } from "@/components/Security";
import { QuoteCTA } from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "From general and tailored virtual assistants to dedicated customer service and administrative support — every role staffed with a briefed, managed professional.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="What we do"
        title="Staffing for every role your business runs on"
        subtitle="Every role, every function, every industry — staffed with a dedicated professional who is briefed, managed, and accountable from day one."
      />
      <Solutions />
      <Security />
      <QuoteCTA />
    </SiteShell>
  );
}
