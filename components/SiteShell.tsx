import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div id="top" className="overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
