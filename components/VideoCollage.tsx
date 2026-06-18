export function VideoCollage() {
  return (
    <section
      aria-hidden="true"
      className="mx-auto hidden max-w-site px-4 pt-10 sm:px-6 lg:block lg:px-12 lg:pt-16"
    >
      <div className="relative h-[340px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#F4FBFE,#ffffff)]">
        <div className="absolute bottom-[-30px] left-[8%] h-0 w-0 border-l-[120px] border-r-[120px] border-b-[200px] border-l-transparent border-r-transparent border-b-ice opacity-70" />
        <div className="absolute bottom-[-50px] left-[34%] h-0 w-0 border-l-[150px] border-r-[150px] border-b-[240px] border-l-transparent border-r-transparent border-b-cyan opacity-[0.18]" />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/video-phone.png"
          alt=""
          className="absolute bottom-0 left-[6%] h-[330px] w-auto animate-float"
        />

        <div className="absolute left-[30%] top-[42px] rounded-[14px_14px_14px_2px] bg-white px-[15px] py-[9px] text-sm font-medium text-navy shadow-[0_8px_20px_-10px_rgba(0,60,90,0.3)]">
          Hey Ahmed! 👋
        </div>
        <div className="absolute left-[33%] top-[92px] rounded-[14px_14px_2px_14px] bg-cyan px-[15px] py-[9px] text-sm font-medium text-white shadow-[0_8px_20px_-10px_rgba(0,120,160,0.4)]">
          Just send the Draft
        </div>

        <div className="absolute bottom-[18px] left-[48%] h-[230px] w-[230px] overflow-hidden rounded-full bg-ice shadow-[0_18px_40px_-18px_rgba(0,90,130,0.45)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/video-man.png"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute left-[46%] top-[60px] rounded-[14px_14px_2px_14px] bg-white px-[15px] py-[9px] text-sm font-medium text-navy shadow-[0_8px_20px_-10px_rgba(0,60,90,0.3)]">
          Thanks! 🙌
        </div>

        <div className="absolute bottom-[16px] right-[8%] h-[240px] w-[240px] overflow-hidden rounded-full bg-[#E6F8FE] shadow-[0_18px_40px_-18px_rgba(0,90,130,0.45)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/video-woman.png"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="absolute right-[30%] top-[54px] flex items-center gap-[7px] rounded-[20px] bg-white px-3.5 py-[7px] text-[13px] font-semibold text-[#2D8CFF] shadow-[0_8px_20px_-10px_rgba(0,60,90,0.3)]">
          <span className="h-[9px] w-[9px] rounded-full bg-[#2D8CFF]" /> Live call
        </div>
      </div>
    </section>
  );
}
