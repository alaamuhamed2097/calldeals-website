import { Container } from "./ui/Container";

/** Decorative "live collaboration" collage matching the Figma home section. */
export function VideoCollage() {
  return (
    <section aria-label="How it works" className="bg-[#E8F5FB] py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="relative mx-auto hidden h-[420px] max-w-[1200px] lg:flex items-center justify-center">
          {/* Hand holding phone (call screen) - Left */}
          <div className="absolute left-0 h-[320px] w-[280px]">
            <div
              className="absolute inset-0 bg-[#0087A5] rounded-[40px]"
              style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/video-phone.png"
              alt=""
              className="absolute bottom-0 left-0 h-[360px] w-auto drop-shadow-[0_24px_40px_rgba(0,60,90,0.25)]"
            />

            {/* Chat bubbles */}
            <div className="absolute left-[32%] top-[52px] rounded-[16px_16px_16px_3px] bg-white px-4 py-2.5 text-[14px] font-medium text-navy shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
              Hey Ahmed!
            </div>
            <div className="absolute left-[35%] top-[112px] rounded-[16px_16px_3px_16px] bg-[#0087A5] px-4 py-2.5 text-[14px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(0,120,160,0.45)]">
              Just send the Draft
            </div>
          </div>

          {/* Man waving - Center */}
          <div className="absolute left-1/2 -translate-x-1/2 h-[340px] w-[280px] flex flex-col items-center justify-center">
            <div className="relative h-[300px] w-[280px]">
              <div className="absolute inset-0 bg-[#0087A5] rounded-[60px]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/video-man.png"
                alt=""
                className="absolute bottom-0 left-1/2 h-[320px] w-auto -translate-x-1/2 drop-shadow-[0_16px_32px_rgba(0,60,90,0.2)]"
              />
            </div>
            <div className="absolute top-[32px] right-[-40px] rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#0087A5] shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
              Thanks! ✋
            </div>
          </div>

          {/* Woman - Right */}
          <div className="absolute right-0 h-[340px] w-[280px] flex flex-col items-center justify-center">
            <div className="relative h-[300px] w-[280px]">
              <div className="absolute inset-0 bg-[#0087A5] rounded-[60px]" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/video-woman.png"
                alt=""
                className="absolute bottom-0 left-1/2 h-[310px] w-auto -translate-x-1/2 drop-shadow-[0_16px_32px_rgba(0,60,90,0.2)]"
              />
            </div>
            <div className="absolute top-[32px] left-[-50px] rounded-full bg-white px-3 py-2 text-[20px] shadow-[0_10px_24px_-12px_rgba(0,60,90,0.3)]">
              👍
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
