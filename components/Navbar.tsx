import { navLinks } from "@/lib/data";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eef2f5] bg-white/90 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-6 py-4"
        >
          <Logo />

          <ul className="hidden items-center gap-8 text-base font-medium text-slateblue lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 no-underline transition-colors hover:text-cyan"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span aria-hidden="true" className="text-[11px] opacity-70">
                      ▾
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="flex-none rounded-full border-[1.5px] border-cyan bg-white px-6 py-2.5 text-[15px] font-semibold text-deep no-underline transition-all hover:bg-cyan hover:text-white"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </Container>
    </header>
  );
}
