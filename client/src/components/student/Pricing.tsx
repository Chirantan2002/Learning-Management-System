"use client";
import { Montserrat } from "next/font/google";
import { FaFireFlameCurved } from "react-icons/fa6";

const montserrat = Montserrat({ subsets: ["latin"] });

type Plans = {
  name: string;
  price: string;
  note: string;
  features: string[];
  cta: string;
  highlighted: boolean;
};

const plans: Plans[] = [
  {
    name: "Starter",
    price: "Free",
    note: "For exploring the platform",
    features: [
      "Access to free courses",
      "Basic progress tracking",
      "Community access",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹799",
    note: "Best for serious learners",
    features: [
      "All courses + projects",
      "Certificates",
      "Mentor Q&A",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    name: "Team",
    price: "₹2,999",
    note: "For small teams and cohorts",
    features: [
      "Team dashboard",
      "Assignments + analytics",
      "Dedicated onboarding",
      "Admin controls",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-white/60">
            PRICING
          </p>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            <span className="font-serif">Choose a plan that fits your </span>
            <span className={`${montserrat.className} text-[#a855fe]`}>
              learning
            </span>
          </h2>
          <p className="mt-2 text-white/60 max-w-2xl mx-auto">
            Simple pricing. Cancel anytime. Upgrade when you’re ready.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={[
                "rounded-3xl border p-6 sm:p-7 bg-white/5",
                p.highlighted
                  ? "border-[#a855fe]/45 bg-linear-to-b from-[#a855fe]/15 to-white/5"
                  : "border-white/10",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-lg">{p.name}</p>
                  <p className="text-white/60 text-sm mt-1">{p.note}</p>
                </div>
                {p.highlighted && (
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#a855fe]/20 border border-[#a855fe]/30 text-white flex items-center gap-2">
                    Popular{" "}
                    <FaFireFlameCurved size={14} className="animate-pulse" />
                  </span>
                )}
              </div>

              <p className="mt-6 text-4xl font-extrabold text-white">
                {p.price}
                {p.price !== "Free" && (
                  <span className="text-sm font-semibold text-white/60">
                    /mo
                  </span>
                )}
              </p>

              <button
                className={[
                  "mt-6 w-full rounded-xl px-4 py-3 font-semibold transition-colors",
                  p.highlighted
                    ? "bg-[#a855fe] hover:bg-[#9333ea] text-white"
                    : "bg-white/5 hover:bg-white/7 border border-white/10 text-white/90",
                ].join(" ")}
              >
                {p.cta}
              </button>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#a855fe]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
