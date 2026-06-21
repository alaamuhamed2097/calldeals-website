import { Container } from "./ui/Container";

/** Decorative "live collaboration" collage matching the Figma home section. */
export function VideoCollage() {
  return (
    <section aria-hidden="true" className="pt-10 sm:pt-16 lg:pt-20">
      <Container>
        <div className="relative mx-auto hidden h-[420px] max-w-[1120px] lg:block">
          {/* Light-blue background triangle behind the circles */}
          <div
            className="absolute bottom-0 left-[40%] h-[300px] w-[360px] bg-[#d4eefb]"
            style={{ clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
          />

          {/* Hand holding phone (call screen) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/video/phone.png"
            alt=""
            className="absolute bottom-0 left-0 h-[400px] w-auto animate-float drop-shadow-[0_24px_40px_rgba(0,60,90,0.18)]"
          />

          {/* Chat bubbles */}
          <div className="absolute left-[31%] top-[44px] rounded-[16px_16px_16px_3px] bg-white px-4 py-2.5 text-[15px] font-medium text-navy shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
            Hey Ahmed! 👍
          </div>
          <div className="absolute left-[34%] top-[104px] rounded-[16px_16px_3px_16px] bg-cyan px-4 py-2.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,120,160,0.45)]">
            Just send the Draft
          </div>
          <div className="absolute left-[48%] top-[74px] rounded-[16px_16px_16px_3px] bg-white px-4 py-2.5 text-[15px] font-medium text-navy shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
            Thanks! 🙌
          </div>
          <div className="absolute left-[64%] top-[60px] flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#2D8CFF] shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#2D8CFF]" /> Live call
          </div>

          {/* Man waving */}
          <div className="absolute bottom-0 left-[49%] h-[210px] w-[210px]">
            <div className="absolute bottom-0 h-[200px] w-[210px] rounded-full bg-[#cfeefc]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/video/man-waving.png"
              alt=""
              className="absolute bottom-0 left-1/2 h-[250px] w-auto -translate-x-1/2"
            />
          </div>

          {/* Woman */}
          <div className="absolute bottom-0 right-[2%] h-[210px] w-[210px]">
            <div className="absolute bottom-0 h-[200px] w-[210px] rounded-full bg-[#e6f6fd]" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/video/woman.png"
              alt=""
              className="absolute bottom-0 left-1/2 h-[240px] w-auto -translate-x-1/2"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
