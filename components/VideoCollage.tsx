import { getSubHomeBanner, mediaUrl } from "@/lib/api";
import { Container } from "./ui/Container";

/** Fallback collage used when no sub-home banner is configured in the CMS. */
const FALLBACK_IMG =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How%20it%20Works-gEVYKaIrFsmhUlP4FdTTpt7FY9C9R4.png";

/** "How it works" collage — image comes from the CMS sub-home banner. */
export async function VideoCollage() {
  const banner = await getSubHomeBanner();
  const src = mediaUrl(banner?.image, "Banners") ?? FALLBACK_IMG;

  return (
    <section aria-label="How it works" className="bg-[#E8F5FB] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt="How it works workflow with team collaboration"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
