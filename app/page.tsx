import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Solutions } from "@/components/Solutions";
import { StrategyCTA } from "@/components/StrategyCTA";
import { VideoCollage } from "@/components/VideoCollage";
import { IndustryExpertise } from "@/components/IndustryExpertise";
import { ClientResults } from "@/components/ClientResults";
import { TalentPool } from "@/components/TalentPool";
import { Security } from "@/components/Security";
import { QuoteCTA } from "@/components/QuoteCTA";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <TrustedBy />
      <Solutions />
      <StrategyCTA />
      <VideoCollage />
      <IndustryExpertise />
      <ClientResults />
      <TalentPool />
      <Security />
      <QuoteCTA />
      <FAQ />
    </SiteShell>
  );
}
