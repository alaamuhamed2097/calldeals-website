import Link from "next/link";
import { footerColumns } from "@/lib/data";
import { Logo } from "./ui/Logo";
import { Container } from "./ui/Container";

const socials = [
  { label: "Facebook", icon: "f" },
  { label: "LinkedIn", icon: "in" },
  { label: "Instagram", icon: "◎" },
  { label: "X", icon: "𝕏" },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-[#0D5F7A] text-white">
      <Container className="pt-16 sm:pt-20 lg:pt-[66px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-[1.4fr_1fr_1.1fr_1.1fr_0.9fr_0.9fr]">
          {/* Brand + contact info */}
          <div>
            <Logo variant="mono" className="mb-8 h-12" />
            <div className="mb-4 flex items-start gap-3">
              <span aria-hidden="true" className="flex-none text-lg">☎</span>
              <a href="tel:+200123456789" className="text-[15px] text-white/90 no-underline hover:text-white transition-colors">
                +20 0123456789
              </a>
            </div>
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="flex-none text-lg">⊕</span>
              <div className="text-[15px] text-white/90">Apt, City, Street, Country</div>
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-5 text-[15px] font-semibold text-white">
                {column.title}
              </h3>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-[14px] text-white/80 no-underline transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20" />

        {/* Bottom section with copyright and socials */}
        <div className="flex flex-col items-center justify-between gap-6 pb-8 sm:flex-row">
          <span className="flex items-center gap-2 text-[14px] text-white/80">
            <span aria-hidden="true">©</span>
            <span>2026 Call Deals</span>
          </span>
          
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-[13px] font-bold text-white no-underline transition-all hover:bg-white hover:text-[#0F2A4A]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
