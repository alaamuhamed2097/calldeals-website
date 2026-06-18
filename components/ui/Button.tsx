import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "white" | "navy" | "outline" | "outlineLight";

const base =
  "inline-flex items-center justify-center rounded-full font-semibold text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-white hover:bg-cyan-dark shadow-[0_16px_32px_-16px_rgba(0,150,210,0.6)]",
  white:
    "bg-white text-deep hover:-translate-y-0.5 shadow-[0_14px_30px_-14px_rgba(0,40,70,0.45)]",
  navy: "bg-navy text-white hover:bg-ink",
  outline:
    "border-[1.5px] border-cyan text-deep bg-white hover:bg-cyan hover:text-white",
  outlineLight:
    "border-[1.5px] border-white/80 text-white hover:bg-white hover:text-deep",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "px-9 py-4 text-[17px]",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
