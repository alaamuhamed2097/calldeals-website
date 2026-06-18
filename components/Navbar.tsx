"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eef2f5] bg-white/90 backdrop-blur-md">
      <Container>
        <nav
          aria-label="Primary"
          className="flex items-center justify-between gap-6 py-4"
        >
          <Logo />

          {/* Desktop links */}
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

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden flex-none rounded-full border-[1.5px] border-cyan bg-white px-6 py-2.5 text-[15px] font-semibold text-deep no-underline transition-all hover:bg-cyan hover:text-white lg:inline-flex"
          >
            Let&apos;s Talk
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-[#e6eef4] text-navy lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded bg-current transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Mobile menu panel */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 border-t border-[#eef2f5] py-3 text-base font-medium text-slateblue">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 no-underline transition-colors hover:bg-mist hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-cyan px-6 py-3 text-center text-[15px] font-semibold text-white no-underline transition-all hover:bg-cyan-dark"
              >
                Let&apos;s Talk
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
