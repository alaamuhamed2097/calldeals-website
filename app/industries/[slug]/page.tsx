import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustries, getIndustryBySlug } from "@/lib/api";
import { SiteShell } from "@/components/SiteShell";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { RevenueIntro } from "@/components/industry/RevenueIntro";
import { SupportFeatures } from "@/components/industry/SupportFeatures";
import { RelatedServices } from "@/components/industry/RelatedServices";
import { GetStartedSteps } from "@/components/industry/GetStartedSteps";
import { SecurityCompliance } from "@/components/industry/SecurityCompliance";
import { IndustryTestimonials } from "@/components/industry/IndustryTestimonials";
import { PartnerLogos } from "@/components/industry/PartnerLogos";
import { IndustryFAQ } from "@/components/industry/IndustryFAQ";
import { ScaleCTA } from "@/components/industry/ScaleCTA";

// Pre-render known slugs; unknown slugs render on demand (dynamicParams default true).
export const revalidate = 300;

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries
    .filter((i) => i.hashTag && i.hashTag.trim().length > 0)
    .map((i) => ({ slug: i.hashTag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // A real API outage throws here → Next renders the error boundary, not a 404.
  const detail = await getIndustryBySlug(slug);
  if (!detail) return { title: "Industry not found" };

  const { industry } = detail;
  return {
    title: industry.name,
    description: industry.shortDescription,
    keywords: industry.tags ?? undefined,
    alternates: { canonical: `/industries/${industry.hashTag}` },
    openGraph: {
      title: industry.name,
      description: industry.shortDescription,
      images: industry.image ? [{ url: industry.image }] : undefined,
    },
  };
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = await getIndustryBySlug(slug);
  if (!detail) notFound(); // genuine 404 only — outages have already thrown above

  // Coerce sub-collections to arrays — the API can return null for an empty
  // relation, and the child components call `.length` on them.
  const { industry } = detail;
  const features = detail.features ?? [];
  const solutions = detail.solutions ?? [];
  const testimonials = detail.testimonials ?? [];
  const partners = detail.partners ?? [];
  const questions = detail.questions ?? [];

  return (
    <SiteShell>
      <IndustryHero industry={industry} />
      <RevenueIntro industry={industry} />
      <SupportFeatures features={features} industryName={industry.name} />
      <RelatedServices solutions={solutions} />
      <GetStartedSteps industryName={industry.name} />
      <SecurityCompliance />
      <IndustryTestimonials testimonials={testimonials} />
      <PartnerLogos partners={partners} />
      <IndustryFAQ questions={questions} />
      <ScaleCTA industryName={industry.name} />
    </SiteShell>
  );
}
