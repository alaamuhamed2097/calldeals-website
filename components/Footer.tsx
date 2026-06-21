import Link from "next/link";
import { footerColumns } from "@/lib/data";
import { Logo } from "./ui/Logo";

const socials = [
  { label: "Facebook", glyph: "f" },
  { label: "LinkedIn", glyph: "in" },
  { label: "Instagram", glyph: "◎" },
  { label: "X", glyph: "𝕏" },
];

export function Footer() {
  return (
    <footer id="contact" className="mt-14 scroll-mt-24 bg-[#00749f] text-white sm:mt-20 lg:mt-24">
      <div className="mx-auto max-w-site px-4 pt-12 sm:px-6 sm:pt-16 lg:px-12 lg:pt-[66px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          {/* Brand + contact */}
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="mono" className="mb-8" />
            <div className="mb-3.5 flex items-center gap-4 text-[16px] text-white/90">
              <span aria-hidden="true" className="text-[18px]">✆</span>
              <a href="tel:+200123456789" className="no-underline hover:text-white">
                +20 0123456789
              </a>
            </div>
            <div className="flex items-center gap-4 text-[16px] text-white/90">
              <span aria-hidden="true" className="text-[18px]">⌖</span>
              Apt, City, Street, Country
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-7 text-[18px] font-semibold text-white">{column.title}</h3>
              <ul className="m-0 flex list-none flex-col gap-4 p-0 text-[16px] text-white/85">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="no-underline transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 text-[15px] text-white/85 sm:flex-row">
          <span className="flex items-center gap-2">
            <span aria-hidden="true">©</span> 2026 Call Deals
          </span>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white/15 text-[13px] font-bold text-white no-underline transition-colors hover:bg-white hover:text-[#00749f]"
              >
                {social.glyph}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
