import { footerColumns } from "@/lib/data";
import { Logo } from "./ui/Logo";

const socials = [
  { label: "Facebook", glyph: "f" },
  { label: "LinkedIn", glyph: "in" },
  { label: "Instagram", glyph: "◎" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="mt-14 scroll-mt-24 bg-[linear-gradient(160deg,#0F2A4A_0%,#0B1F3C_100%)] text-white sm:mt-20 lg:mt-24"
    >
      <div className="mx-auto max-w-site px-4 pt-12 sm:px-6 sm:pt-16 lg:px-12 lg:pt-[72px]">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div className="col-span-2 lg:col-span-1">
            <Logo variant="mono" className="mb-[22px]" />
            <div className="mb-3.5 flex items-center gap-3 text-[15px] text-[#aebfd2]">
              <span
                aria-hidden="true"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white/[0.08]"
              >
                ✆
              </span>
              <a href="tel:+200123456789" className="no-underline hover:text-[#5fd0f5]">
                +20 0123456789
              </a>
            </div>
            <div className="mb-6 flex items-center gap-3 text-[15px] text-[#aebfd2]">
              <span
                aria-hidden="true"
                className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-white/[0.08]"
              >
                ⌖
              </span>
              Apt, City, Street, Country
            </div>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/[0.08] text-[13px] font-bold text-white no-underline transition-colors hover:bg-cyan"
                >
                  {social.glyph}
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-5 text-[18px] font-semibold text-white">
                {column.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-[13px] p-0 text-[15px] text-[#aebfd2]">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="no-underline transition-colors hover:text-[#5fd0f5]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-2 border-t border-[#1c3756] py-6 text-sm text-[#8aa0ba]">
          <span aria-hidden="true">©</span> 2026 Call Deals. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
