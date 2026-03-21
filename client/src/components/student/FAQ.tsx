"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need to pay to start learning?",
    a: "No. The Starter plan includes free courses and basic tracking so you can explore first.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription anytime. Your progress remains saved.",
  },
  {
    q: "Do courses include projects?",
    a: "Yes. Most courses are project-first with clear milestones and portfolio-ready outcomes.",
  },
  {
    q: "Is there mentor support?",
    a: "Pro plan includes mentor Q&A and priority support to help you move faster.",
  },
] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-14">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-white/60">
            FAQ
          </p>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Questions? <span className="text-[#a855fe]">We’ve got answers</span>
          </h2>
          <p className="mt-2 text-white/60">
            Everything you need to know to get started.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={f.q}
                type="button"
                onClick={() => setOpen((v) => (v === idx ? null : idx))}
                className="w-full text-left rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-colors px-5 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-white font-semibold">{f.q}</p>
                  <span className="text-white/60 font-semibold">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">
                    {f.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
