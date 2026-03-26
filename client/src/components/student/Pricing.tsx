"use client";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

/* ─── Check icon ─── */
function Check({ dim }: { dim?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill={dim ? "rgba(255,255,255,0.08)" : "rgba(168,85,247,0.2)"}
      />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke={dim ? "rgba(255,255,255,0.25)" : "#a855f7"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot({ active }: { active: boolean }) {
  return (
    <span className="flex justify-center">
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ background: active ? "#a855f7" : "rgba(255,255,255,0.2)" }}
      />
    </span>
  );
}

/* ─── Comparison table data ─── */
const rows: {
  feature: string;
  pay: string | boolean;
  unlimited: string | boolean;
  sub: string | boolean;
}[] = [
  {
    feature: "Price",
    pay: "$149+ (per course)",
    unlimited: "$699 (one-time)",
    sub: "$29/month or $290/year",
  },
  {
    feature: "Course Access",
    pay: "1 Course",
    unlimited: "All Courses",
    sub: "All Courses",
  },
  {
    feature: "Lifetime Access",
    pay: true,
    unlimited: true,
    sub: "(access ends if canceled)",
  },
  { feature: "Future Course Updates", pay: true, unlimited: true, sub: true },
  { feature: "Mentor Feedback & Q&A", pay: true, unlimited: true, sub: true },
  {
    feature: "Live Events & Workshops",
    pay: false,
    unlimited: true,
    sub: true,
  },
  {
    feature: "Community & Collaboration",
    pay: false,
    unlimited: true,
    sub: true,
  },
  {
    feature: "Career Support & Job Matching",
    pay: false,
    unlimited: true,
    sub: true,
  },
  { feature: "Free Trial", pay: false, unlimited: false, sub: "(7 days)" },
];

function CellValue({ val }: { val: string | boolean }) {
  if (val === true) return <Dot active />;
  if (val === false) return <Dot active={false} />;
  return (
    <span className="text-[11px] text-white/60 text-center block">{val}</span>
  );
}

/* ─── Main Component ─── */
export default function Pricing() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-16">
      <div className="mx-auto max-w-5xl">
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center border border-white/10 bg-white/[0.05] rounded-full px-3 py-1 text-[11px] font-semibold text-white/60 mb-5">
            Flexible Plans for Every Learner
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3">
            Invest in Your Future <br className="hidden sm:block" />
            Choose Your <span className={`text-[#a855fe]`}>Perfect Plan</span>
          </h2>
          <p
            className={`${montserrat.className} text-sm text-white/50 max-w-md mx-auto leading-relaxed`}
          >
            Whether you want to master one skill or access everything, we've got
            you covered. Learn at your pace, build real projects, and unlock
            your career potential.
          </p>
        </div>

        {/* ── 3 Plan Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {/* Card 1 — Pay Per Course */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col">
            <p className="text-white font-bold text-lg leading-none">
              Pay Per Course
            </p>
            <p className="text-white/45 text-xs mt-1.5 mb-5">
              Lifetime access to the purchased course
            </p>
            <p className="text-3xl font-extrabold text-white mb-5">
              ₹149
              <span className="text-base font-semibold text-white/50">
                /course
              </span>
            </p>
            <button className="w-full rounded-xl bg-[#a855f7] hover:bg-[#9333ea] transition-colors py-2.5 text-sm font-bold text-white mb-6">
              Get This Course
            </button>
            <p className="text-[11px] text-white/50 mb-3">Include:</p>
            <ul className="space-y-2.5">
              {[
                "Full course content & updates",
                "Real-world projects & exercises",
                "Mentor feedback & Q&A sessions",
                "Certificate of completion",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-[12px] text-white/70"
                >
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Unlimited Access (highlighted) */}
          <div className="rounded-2xl border border-[#a855f7]/70 bg-[#1a1025] p-6 flex flex-col relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#a855f7]/10 to-transparent pointer-events-none" />
            <div className="relative">
              <p className="text-white font-bold text-lg leading-none">
                Unlimited Access
              </p>
              <p className="text-white/45 text-xs mt-1.5 mb-5">
                Lifetime access to all current & future courses
              </p>
              <p className="text-3xl font-extrabold text-white mb-5">
                ₹3999{" "}
                <span className="text-base font-semibold text-white/50">
                  one-time payment
                </span>
              </p>
              <button className="w-full rounded-xl bg-[#a855f7] hover:bg-[#9333ea] transition-colors py-2.5 text-sm font-bold text-white mb-6">
                Unlock All Courses
              </button>
              <p className="text-[11px] text-white/50 mb-3">Include:</p>
              <ul className="space-y-2.5">
                {[
                  "Everything in Pay Per Course, plus:",
                  "Access to every course on the platform",
                  "Exclusive live events & workshops",
                  "Community & peer collaboration",
                  "Career support & job matching",
                ].map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-[12px] text-white/70"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 3 — Subscription Plan */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 flex flex-col">
            <p className="text-white font-bold text-lg leading-none">
              Subscription Plan
            </p>
            <p className="text-white/45 text-xs mt-1.5 mb-5">
              Full access while subscribed
            </p>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-3xl font-extrabold text-white">
                ₹29
                <span className="text-base font-semibold text-white/50">
                  /month
                </span>
              </p>
              <span className="text-[10px] border border-white/15 bg-white/5 rounded-full px-2 py-0.5 text-white/50 flex items-center gap-1">
                Month
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] inline-block" />
              </span>
            </div>
            <button className="w-full rounded-xl bg-[#a855f7] hover:bg-[#9333ea] transition-colors py-2.5 text-sm font-bold text-white mb-6">
              Start Free for 7 Days
            </button>
            <p className="text-[11px] text-white/50 mb-3">Include:</p>
            <ul className="space-y-2.5">
              {[
                "Everything in Unlimited Access, but as long as you subscribe",
                "Cancel anytime, no strings attached",
                "Perfect for short-term or exploratory learning",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-[12px] text-white/70"
                >
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Comparison Table ── */}
        <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-4 bg-white/[0.04] border-b border-white/[0.08]">
            <div className="px-4 py-3 text-[12px] font-semibold text-white/60">
              Feature
            </div>
            <div className="px-4 py-3 text-[12px] font-semibold text-white/80 text-center">
              Pay Per Course
            </div>
            <div className="px-4 py-3 text-[12px] font-semibold text-white/80 text-center bg-[#a855f7]/10">
              Unlimited Access (One-Time)
            </div>
            <div className="px-4 py-3 text-[12px] font-semibold text-white/80 text-center">
              Subscription Plan
            </div>
          </div>
          {/* Table rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 border-b border-white/[0.06] ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
            >
              <div className="px-4 py-3 text-[12px] text-white/60 flex items-center">
                {row.feature}
              </div>
              <div className="px-4 py-3 flex items-center justify-center">
                <CellValue val={row.pay} />
              </div>
              <div className="px-4 py-3 flex items-center justify-center bg-[#a855f7]/[0.06]">
                <CellValue val={row.unlimited} />
              </div>
              <div className="px-4 py-3 flex items-center justify-center">
                <CellValue val={row.sub} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
