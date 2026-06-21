import { securityLeft, securityRight } from "@/lib/data";
import type { SecurityItem } from "@/types";
import { Container } from "./ui/Container";

function SecurityCard({ items }: { items: SecurityItem[] }) {
  return (
    <div className="flex flex-col gap-6 rounded-[16px] bg-[linear-gradient(180deg,#ffffff_0%,#CCEFFC_100%)] px-[30px] py-[38px]">
      {items.map((item) => (
        <div key={item.title} className="flex gap-3.5">
          <span
            aria-hidden="true"
            className="flex-none text-[22px] leading-[1.2] text-mint"
          >
            ✓
          </span>
          <div>
            <h3 className="mb-1.5 text-[22px] font-semibold text-navy">
              {item.title}
            </h3>
            <p className="text-base leading-[1.5] text-slate">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Security() {
  return (
    <section aria-label="Security and compliance" className="bg-white">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <h2 className="mb-2 text-[clamp(30px,4vw,56px)] font-bold tracking-[-0.04em] text-navy">
          Security &amp; Compliance
        </h2>
        <p className="mb-10 text-[18px] text-slateblue">
          Enterprise-ready protocols to keep your data and vision secure.
        </p>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SecurityCard items={securityLeft} />
          <SecurityCard items={securityRight} />
        </div>
      </Container>
    </section>
  );
}
