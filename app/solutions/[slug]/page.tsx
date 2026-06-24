import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSolutions, getSolutionBySlug, slugify } from "@/lib/api";
import { SiteShell } from "@/components/SiteShell";
import { Container } from "@/components/ui/Container";
import { RichText } from "@/components/ui/RichText";
import { Reveal } from "@/components/ui/Reveal";
import { SolutionHero } from "@/components/solution/SolutionHero";
import { SupportFeatures } from "@/components/industry/SupportFeatures";
import { GetStartedSteps } from "@/components/industry/GetStartedSteps";
import { SecurityCompliance } from "@/components/industry/SecurityCompliance";
import { IndustryTestimonials } from "@/components/industry/IndustryTestimonials";
import { IndustryFAQ } from "@/components/industry/IndustryFAQ";
import { ScaleCTA } from "@/components/industry/ScaleCTA";

// Pre-render known slugs; unknown slugs render on demand.
export const revalidate = 300;

export async function generateStaticParams() {
  const solutions = await getSolutions();
  return solutions
    .filter((s) => s.name?.trim())
    .map((s) => ({ slug: slugify(s.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = await getSolutionBySlug(slug);
  if (!detail) return { title: "Solution not found" };

  const { solution } = detail;
  return {
    title: solution.name,
    description: solution.shortDescription,
    alternates: { canonical: `/solutions/${slug}` },
    openGraph: {
      title: solution.name,
      description: solution.shortDescription,
    },
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = await getSolutionBySlug(slug);
  if (!detail) notFound();

  // Coerce sub-collections to arrays — the API can return null for an empty
  // relation, and the child components call `.length` on them.
  const { solution } = detail;
  const features = detail.features ?? [];
  const testimonials = detail.testimonials ?? [];
  const questions = detail.questions ?? [];

  return (
    <SiteShell>
      <SolutionHero solution={solution} />

      {solution.description?.trim() && (
        <section aria-label={`About ${solution.name}`} className="bg-white">
          <Container className="pt-4 pb-8 sm:pt-6 lg:pb-12">
            <Reveal variant="fade-up">
              <RichText
                html={solution.description}
                className="mx-auto max-w-[820px] text-[clamp(16px,1.7vw,18px)] leading-[1.7] text-slateblue"
              />
            </Reveal>
          </Container>
        </section>
      )}

      <SupportFeatures features={features} industryName={solution.name} />
      <GetStartedSteps industryName={solution.name} />
      <SecurityCompliance />
      <IndustryTestimonials testimonials={testimonials} mediaFolder="SolutionTestimonials" />
      <IndustryFAQ questions={questions} />
      <ScaleCTA industryName={solution.name} />
    </SiteShell>
  );
}
