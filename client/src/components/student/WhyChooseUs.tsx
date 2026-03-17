"use client";

import { TbSparkles, TbDeviceLaptop, TbCertificate, TbUsers } from "react-icons/tb";

const items = [
  {
    icon: TbDeviceLaptop,
    title: "Project-first learning",
    desc: "Build portfolio-ready work with clear milestones and feedback loops.",
  },
  {
    icon: TbUsers,
    title: "Mentor-led guidance",
    desc: "Get help from experienced mentors and a supportive community.",
  },
  {
    icon: TbCertificate,
    title: "Career-ready outcomes",
    desc: "Learn the skills that matter and prove them with real deliverables.",
  },
  {
    icon: TbSparkles,
    title: "Curated, not cluttered",
    desc: "Only high-signal content. No noise. No unnecessary complexity.",
  },
] as const;

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#a855fe]/15 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#a855fe]/10 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold tracking-wider text-white/60">
              WHY THIS PLATFORM
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Built for learners who want{" "}
              <span className="text-[#a855fe]">results</span>
            </h2>
            <p className="mt-2 text-white/60 max-w-2xl">
              A modern LMS experience with clean UX, fast flows, and a focus on
              outcomes.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <div
                    key={it.title}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="h-10 w-10 rounded-xl bg-[#a855fe]/15 border border-[#a855fe]/25 flex items-center justify-center">
                      <Icon className="text-[#c084fc]" size={22} />
                    </div>
                    <p className="mt-4 text-white font-semibold">{it.title}</p>
                    <p className="mt-1 text-white/60 text-sm">{it.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

