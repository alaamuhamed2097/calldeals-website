import { Container } from "./ui/Container";

/** "How it works" collaboration workflow section. */
export function VideoCollage() {
  return (
    <section aria-label="How it works" className="bg-[#E8F5FB] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/How%20it%20Works-gEVYKaIrFsmhUlP4FdTTpt7FY9C9R4.png"
            alt="How it works workflow with team collaboration"
            className="w-full h-auto"
          />
        </div>
      </Container>
    </section>
  );
}
