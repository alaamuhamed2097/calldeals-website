/**
 * Renders trusted rich-text HTML authored in the CMS (TinyMCE) — used for
 * fields like industry/solution descriptions, FAQ answers, and feature lists.
 * Content originates from the authenticated Admin app, so it is trusted; the
 * `.rich-text` styles in globals.css give the raw HTML sane typography.
 */
export function RichText({
  html,
  className = "",
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={`rich-text ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
