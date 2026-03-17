"use client";

import { TbTarget, TbBrandOpenai, TbUsers } from "react-icons/tb";

const cards = [
  {
    title: "Real-World Projects with Feedback",
    desc: "Learn by doing. Build real projects and get personalized feedback from industry experts.",
    icon: TbTarget,
  },
  {
    title: "AI-Powered Learning Paths",
    desc: "Get a customized learning journey based on your goals, strengths, and progress.",
    icon: TbBrandOpenai,
  },
  {
    title: "Peer & Mentor Collaboration",
    desc: "Work on team projects, get reviews, and grow with a learning community.",
    icon: TbUsers,
  },
] as const;

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70">
      {children}
    </span>
  );
}

export default function LearningJourney() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <Pill>What Makes Us Different</Pill>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
            Why Choose Us?
            <br />
            The Learning Platform Built for Your Success
          </h2>
          <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We don’t just teach — we help you thrive. Here’s what makes us
            different:
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#8b5cf6]/20 border border-[#8b5cf6]/25 flex items-center justify-center">
                    <Icon className="text-[#c4b5fd]" size={20} />
                  </div>
                  <h3 className="mt-5 text-white font-serif font-extrabold text-xl leading-snug">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-white/55 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Pill>Your Learning Journey</Pill>
          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-serif">
            From Beginner to Pro: Your Step-by-Step
            <br />
            Roadmap to Success
          </h3>
        </div>
      </div>
    </section>
  );
}

