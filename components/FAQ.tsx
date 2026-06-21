"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const DEFAULT_OPEN = 3;

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(DEFAULT_OPEN);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="mb-4 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
              Frequently Asked Questions
            </h2>
            <p className="mb-7 max-w-[380px] text-base leading-relaxed text-slate">
              If this is your first time exploring virtual assistant services, you
              likely have some questions. Discover our most commonly asked
              questions here, or feel free to contact us using any method below.
            </p>
            <Button href="#contact" variant="navy" className="px-[34px] py-3.5 text-base">
              Contact for Help
            </Button>
          </div>

          <div className="flex flex-col gap-3.5">
            {faqs.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[14px] transition-colors ${
                    isOpen ? "bg-[#e8f6fe]" : "bg-[#cdeafb]"
                  }`}
                >
                  <h3 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-[17px] font-semibold text-navy">
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 flex-none items-center justify-center text-[22px] font-medium leading-none text-navy"
                      >
                        {isOpen ? "×" : "+"}
                      </span>
                    </button>
                  </h3>
                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-[22px] text-base leading-[1.55] text-slateblue"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
