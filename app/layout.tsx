import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic", "normal"],
  variable: "--font-playfair",
  display: "swap",
});

const siteUrl = "https://calldeals.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CallDeals — More Than Calls, Power Business Growth",
    template: "%s | CallDeals",
  },
  description:
    "CallDeals deploys elite, college-educated virtual assistants into your business in 72 hours — driving revenue and cutting costs by up to 70% across 11 industries.",
  keywords: [
    "virtual assistant",
    "remote staffing",
    "customer service outsourcing",
    "call center",
    "business process outsourcing",
    "dedicated virtual assistant",
  ],
  authors: [{ name: "CallDeals" }],
  creator: "CallDeals",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CallDeals",
    title: "CallDeals — More Than Calls, Power Business Growth",
    description:
      "Elite, college-educated virtual assistants deployed in 72 hours. Smart agents, seamless support, for every industry.",
    images: [{ url: "/assets/hero-person.png", width: 1200, height: 630, alt: "CallDeals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CallDeals — More Than Calls, Power Business Growth",
    description:
      "Elite, college-educated virtual assistants deployed in 72 hours. Smart agents, seamless support, for every industry.",
    images: ["/assets/hero-person.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0087A5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Enable the scroll-reveal hidden state only when JS is available.
          Runs before first paint; if JS is disabled the `.js` class is never
          added and all content stays visible.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="bg-white font-sans text-navy antialiased">{children}</body>
    </html>
  );
}
