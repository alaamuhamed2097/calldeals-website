"use client";

import { useState } from "react";
import type { IndustryQuestion } from "@/types";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { RichText } from "../ui/RichText";

/** Per-industry FAQ accordion. Renders nothing when there are no questions. */
export function IndustryFAQ({ questions }: { questions: IndustryQuestion[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!questions.length) return null;

  return (
    <section id="faq" aria-label="Frequently asked questions" className="scroll-mt-24">
      <Container className="pt-14 sm:pt-20 lg:pt-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="fade-up">
            <h2 className="mb-4 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.12] tracking-[-0.02em] text-navy">
              Frequently Asked Questions
            </h2>
            <p className="mb-7 max-w-[380px] text-base leading-relaxed text-slate">
              Everything you need to know before getting started. Still have a
              question? Reach out and we&apos;ll walk you through it.
            </p>
            <Button href="#contact" variant="navy" className="px-[34px] py-3.5 text-base">
              Contact for Help
            </Button>
          </Reveal>

          <Reveal variant="fade-up" delay={80} className="flex flex-col gap-3.5">
            {questions.map((faq, index) => {
              const isOpen = index === openIndex;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;
              return (
                <div
                  key={faq.id}
                  className="overflow-hidden rounded-[14px] border border-[#dcf0fb] bg-mist"
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
                        className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-cyan text-[20px] font-medium leading-none text-white transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="grid transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <RichText
                        html={faq.answer}
                        className="px-6 pb-[22px] text-base text-slateblue"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
