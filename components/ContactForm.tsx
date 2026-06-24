"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-[12px] border border-[#dce6ee] bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-slate/70 focus:border-cyan focus:ring-2 focus:ring-cyan/30";

/**
 * ContactRequestSourceType (backend enum): Home=0, IndustriesListing=1,
 * SolutionsListing=2, IndustryDetail=3, SolutionDetail=4, Other=5.
 */
export function ContactForm({ sourceType = 5 }: { sourceType?: number }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const fd = new FormData(event.currentTarget);
    const payload = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      jobTitle: fd.get("jobTitle"),
      message: fd.get("message"),
      sourceType,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => null);
      if (res.ok && data?.success !== false) {
        setSubmitted(true);
      } else {
        setError(
          data?.errors?.[0] || data?.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setError("We couldn't reach the server. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
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
      <div>
        <h3 className="mb-1 text-[20px] font-semibold text-navy">Book a Strategy Call</h3>
        <p className="mb-2 text-[13px] text-slate">
          We&apos;ll get back to you within one business day. <span className="text-red-500">*</span> indicates a required field.
        </p>
      </div>

      {/* First Name / Last Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-navy">
            First name <span className="text-red-500">*</span>
          </label>
          <input id="firstName" name="firstName" required minLength={2} className={inputClass} placeholder="First Name" />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-navy">
            Last name <span className="text-red-500">*</span>
          </label>
          <input id="lastName" name="lastName" required minLength={2} className={inputClass} placeholder="Last Name" />
        </div>
      </div>

      {/* Email / Phone */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="youremail@gmail.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            Phone <span className="text-red-500">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required minLength={7} maxLength={20} className={inputClass} placeholder="+1 (000) 000-0000" />
        </div>
      </div>

      {/* Company / Job Title */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-navy">
            Company <span className="text-red-500">*</span>
          </label>
          <input id="company" name="company" required minLength={2} className={inputClass} placeholder="Company Name" />
        </div>
        <div>
          <label htmlFor="jobTitle" className="mb-1.5 block text-sm font-medium text-navy">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input id="jobTitle" name="jobTitle" required minLength={2} className={inputClass} placeholder="Job Title" />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          className={`${inputClass} resize-y`}
          placeholder="Your message"
        />
      </div>

      {error && (
        <p role="alert" className="rounded-[10px] bg-red-50 px-4 py-3 text-[14px] text-red-600">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-[#0087A5] px-9 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#006E8A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0087A5] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Sending…" : "Get Started"}
      </button>
    </form>
  );
}
