"use client";

/**
 * Route transition. Next.js re-mounts `template.tsx` on every navigation, so the
 * entry animation replays on each page change — a subtle fade that makes
 * client-side navigation feel intentional rather than instant/janky. Opacity
 * only, so the sticky navbar doesn't shift. Respects `prefers-reduced-motion`.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-fade-in motion-reduce:animate-none">
      {children}
    </div>
  );
}
