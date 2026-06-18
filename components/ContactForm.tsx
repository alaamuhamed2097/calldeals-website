"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-[12px] border border-[#dce6ee] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-slate/70 focus:border-cyan focus:ring-2 focus:ring-cyan/30";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Wire this to your CRM / email endpoint (e.g. a Next.js route handler / server action).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="rounded-[18px] border border-[#dcf0fb] bg-mist p-8 text-center"
      >
        <div className="mb-2 text-[22px] font-semibold text-navy">
          Thanks — we&apos;ll be in touch.
        </div>
        <p className="text-[15px] text-slate">
          A specialist will reply within 24 hours with an exact quote for your
          requirements.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-[18px] border border-[#e3edf3] bg-white p-7 shadow-[0_24px_50px_-34px_rgba(20,50,90,0.3)]"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            Full name
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Jane Cooper" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClass}
            placeholder="jane@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
          Company
        </label>
        <input id="company" name="company" className={inputClass} placeholder="Company Inc." />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          What do you need help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={`${inputClass} resize-y`}
          placeholder="Tell us about the roles you're looking to fill…"
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-cyan px-9 py-4 text-[16px] font-semibold text-white shadow-[0_16px_32px_-16px_rgba(0,150,210,0.6)] transition-colors hover:bg-cyan-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2"
      >
        Send message
      </button>
    </form>
  );
}
