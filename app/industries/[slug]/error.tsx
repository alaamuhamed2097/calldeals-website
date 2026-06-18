"use client";

import { useEffect } from "react";

/**
 * Error boundary for industry pages. A thrown ApiError (API unreachable / 5xx)
 * lands here — the page is NOT shown as a 404, and the user can retry.
 */
export default function IndustryError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Industry page failed to load:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-site flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-3 text-[clamp(24px,3vw,34px)] font-bold text-navy">
        We couldn&apos;t load this page
      </h1>
      <p className="mb-8 max-w-[460px] text-base leading-relaxed text-slate">
        Something went wrong while reaching our service. This is usually
        temporary — please try again in a moment.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-cyan px-9 py-4 text-[16px] font-semibold text-white transition-all hover:bg-cyan-dark"
      >
        Try again
      </button>
    </main>
  );
}
