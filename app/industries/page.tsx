import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { PageHeader } from "@/components/PageHeader";
import { IndustryExpertise } from "@/components/IndustryExpertise";
import { ClientResults } from "@/components/ClientResults";
import { QuoteCTA } from "@/components/QuoteCTA";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Deep industry expertise across Real Estate, Healthcare, E-commerce, Technology, Finance, and Insurance — matched with professionals who already know your sector.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Industries"
        title="Deep industry expertise. Elite global talent."
        subtitle="Every industry has its own rules. We match you with professionals who are already experts in your sector — no learning curves."
      />
      <IndustryExpertise />
      <ClientResults />
      <QuoteCTA />
    </SiteShell>
  );
}
