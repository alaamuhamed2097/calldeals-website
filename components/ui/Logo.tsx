import Link from "next/link";

export function Logo({
  variant = "color",
  className = "",
}: {
  variant?: "color" | "mono";
  className?: string;
}) {
  const isDark = variant === "mono";
  return (
    <Link
      href="/"
      aria-label="CallDeals home"
      className={`flex flex-shrink-0 items-center gap-2.5 no-underline ${className}`}
    >
      <span className="relative block h-[30px] w-[33px] flex-none overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/logo-c-blue.svg"
          alt=""
          aria-hidden="true"
          className="absolute left-[-1px] top-0 h-[30px] w-auto max-w-none"
        />
        {!isDark && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/assets/logo-c-navy.svg"
            alt=""
            aria-hidden="true"
            className="absolute left-[-1px] top-0 h-[30px] w-auto max-w-none"
          />
        )}
      </span>
      <span
        className={`text-[22px] font-bold tracking-[-0.02em] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        CallDeals
      </span>
    </Link>
  );
}
