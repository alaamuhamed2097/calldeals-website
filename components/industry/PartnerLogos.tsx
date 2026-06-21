import { mediaUrl } from "@/lib/api";
import type { IndustryPartner } from "@/types";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

/** Trusted-by partner logo strip — hidden entirely when there are no partners. */
export function PartnerLogos({ partners }: { partners: IndustryPartner[] }) {
  if (!partners.length) return null;

  return (
    <section aria-label="Trusted by" className="scroll-mt-24 bg-white">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <Reveal variant="fade-in">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-80">
            {partners.map((partner) => {
              const logo = mediaUrl(partner.logo, "IndustryPartners");
              return logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={partner.id}
                  src={logo}
                  alt={partner.name}
                  loading="lazy"
                  className="h-7 w-auto object-contain grayscale transition hover:grayscale-0 sm:h-8"
                />
              ) : (
                <span key={partner.id} className="text-[18px] font-semibold text-slate">
                  {partner.name}
                </span>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
