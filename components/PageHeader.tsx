import { Container } from "./ui/Container";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section
      aria-label={title}
      className="bg-white px-4 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pt-7"
    >
      <div className="relative mx-auto max-w-site overflow-hidden rounded-[26px] bg-[linear-gradient(118deg,#0087A5_0%,#007A96_52%,#006E8A_100%)] shadow-[0_30px_70px_-38px_rgba(0,110,138,0.6)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.18),transparent_42%)]"
        />
        <Container className="relative py-14 text-center sm:py-20">
          {eyebrow && (
            <p className="mb-3 text-[13px] font-semibold tracking-[0.18em] text-white/85">
              {eyebrow.toUpperCase()}
            </p>
          )}
          <h1 className="mx-auto max-w-[820px] text-[clamp(32px,4.4vw,56px)] font-bold leading-[1.06] tracking-[-0.03em] text-ink">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-[1.55] text-[#06354F]">
              {subtitle}
            </p>
          )}
        </Container>
      </div>
    </section>
  );
}
