import { Container } from "./ui/Container";

/** "How it works" collaboration workflow section with modern circular design. */
export function VideoCollage() {
  return (
    <section aria-label="How it works" className="bg-[#E8F5FB] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row items-center justify-center lg:justify-between">
          {/* Left: Phone with chat bubbles */}
          <div className="relative w-full max-w-[320px] lg:w-auto lg:max-w-none flex-shrink-0">
            <div className="relative h-[480px] w-[280px] mx-auto lg:mx-0">
              {/* Rounded background shape */}
              <div className="absolute inset-0 bg-[#0087A5] rounded-[80px] transform -skew-x-12" />
              
              {/* Phone image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/video-phone.png"
                alt="Video call interface"
                className="relative h-full w-full object-contain drop-shadow-lg"
              />

              {/* Chat bubbles */}
              <div className="absolute top-[80px] left-[-120px] rounded-[16px_16px_16px_3px] bg-[#B8E6F0] px-4 py-2.5 text-[13px] font-medium text-navy shadow-lg whitespace-nowrap">
                Hey Ahmed!
              </div>
              <div className="absolute top-[140px] left-[-100px] rounded-[16px_16px_3px_16px] bg-[#0087A5] px-4 py-2.5 text-[13px] font-semibold text-white shadow-lg whitespace-nowrap">
                Just send the Draft
              </div>
            </div>
          </div>

          {/* Center: Man waving */}
          <div className="relative w-full max-w-[340px] lg:w-auto lg:max-w-none flex-shrink-0 flex justify-center lg:justify-start">
            <div className="relative h-[380px] w-[300px]">
              {/* Rounded background shape */}
              <div className="absolute inset-0 bg-[#0087A5] rounded-[120px] -top-8 -left-8" />
              
              {/* Man image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/video-man.png"
                alt="Team member waving"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto drop-shadow-lg"
              />
              
              {/* Thanks bubble with emoji */}
              <div className="absolute top-[40px] right-[-60px] rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#0087A5] shadow-lg">
                Thanks! 👋
              </div>
            </div>
          </div>

          {/* Right: Woman with thumbs up */}
          <div className="relative w-full max-w-[340px] lg:w-auto lg:max-w-none flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative h-[380px] w-[300px]">
              {/* Rounded background shape */}
              <div className="absolute inset-0 bg-[#0087A5] rounded-[120px] -top-8 -right-8" />
              
              {/* Woman image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/video-woman.png"
                alt="Team member approving"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto drop-shadow-lg"
              />
              
              {/* Thumbs up emoji */}
              <div className="absolute top-[40px] left-[-50px] rounded-full bg-white p-2 text-[32px] shadow-lg">
                👍
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
