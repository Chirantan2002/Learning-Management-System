"use client";

/* ─────────────────────────── data ─────────────────────────── */
const stories = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer at CreativeHub",
    av: "SJ",
    color: "#a855f7",
    title: "From Beginner to UI/UX Designer in 6 Months",
    body: "The platform's hands-on approach and expert feedback helped me land my first job as a UI/UX designer. Life-changing!",
  },
  {
    name: "Marcus Lee",
    role: "Full-Stack Dev at TechFlow",
    av: "ML",
    color: "#ec4899",
    title: "Went from zero to deployed in 90 days",
    body: "I had no coding background. Now I've shipped two real apps. The structured path and mentor reviews made all the difference.",
  },
  {
    name: "Priya Desai",
    role: "Data Analyst at Numera",
    av: "PD",
    color: "#06b6d4",
    title: "Cracked my dream data role!",
    body: "The projects were industry-grade. I walked into interviews confident, cleared every round, and got multiple offers.",
  },
  {
    name: "James Okoro",
    role: "Product Manager at NovaBuild",
    av: "JO",
    color: "#f59e0b",
    title: "Engineering to PM in 4 months",
    body: "The community, the mentors, the curriculum — everything clicked. Best career decision I ever made.",
  },
  {
    name: "Aisha Nkrumah",
    role: "Freelance Brand Designer",
    av: "AN",
    color: "#10b981",
    title: "Tripled my freelance rates",
    body: "My portfolio went from a basic Behance page to a client magnet. The feedback loops here are unmatched.",
  },
  {
    name: "Carlos Rivera",
    role: "React Dev at Lumen Labs",
    av: "CR",
    color: "#8b5cf6",
    title: "React finally made sense — and I got hired",
    body: "Three failed courses before this one. None explained the 'why'. This one did, and it stuck.",
  },
];

/* duplicate for seamless infinite loop */
const col1 = [...stories.slice(0, 3), ...stories.slice(0, 3)];
const col2 = [...stories.slice(3), ...stories.slice(3)];

/* ─────────────────────────── sub-components ─────────────────────────── */
function Stars() {
  return (
    <div className="flex gap-0.5 mb-2">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ s }: { s: (typeof stories)[0] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 w-full transition-all duration-300 hover:bg-white/[0.09] hover:border-purple-500/40 hover:shadow-[0_4px_24px_rgba(168,85,247,0.13)] hover:-translate-y-0.5 cursor-default">
      {/* header row */}
      <div className="flex items-center gap-2 mb-2">
        <div
          className="h-7 w-7 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
          style={{
            background: `${s.color}22`,
            border: `1.5px solid ${s.color}55`,
            color: s.color,
          }}
        >
          {s.av}
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-white/90 truncate leading-none">{s.name}</p>
          <p className="text-[9.5px] text-white/40 truncate mt-0.5">{s.role}</p>
        </div>
      </div>
      <Stars />
      <p className="text-[10.5px] font-semibold text-white/80 leading-snug mb-1">{s.title}</p>
      <p className="text-[10px] leading-relaxed text-white/50">"{s.body}"</p>
    </div>
  );
}

function Sparkle({ size, style }: { size: number; style: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      className="absolute pointer-events-none opacity-60 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
      style={{ animation: "sparkle-rotate 7s linear infinite", ...style }}
    >
      <path d="M12 2L13.5 10.5L22 12L13.5 13.5L12 22L10.5 13.5L2 12L10.5 10.5Z" />
    </svg>
  );
}

/* ─────────────────────────── main section ─────────────────────────── */
export default function SuccessStories() {
  return (
    <section className="bg-[#0f0e11] px-5 sm:px-10 lg:px-16 py-12">
      {/*
        Grid: 1 col on mobile → 2 cols on lg+
        Fixed height on lg (420px) so both columns are always equal.
      */}
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden grid grid-cols-1 lg:grid-cols-[44%_56%] lg:h-[420px]">

        {/* ─── LEFT PANEL ─── */}
        <div className="relative flex flex-col justify-center gap-0 px-8 py-10 lg:py-0 overflow-hidden">

          {/* blob glow */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-purple-500/15 blur-3xl pointer-events-none"
            style={{ animation: "pill-pulse 4s ease-in-out infinite" }}
          />
          <div className="absolute bottom-0 -right-8 w-44 h-44 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

          {/* sparkles */}
          <Sparkle size={18} style={{ top: 18, left: 18 }} />
          <Sparkle size={11} style={{ bottom: 28, right: 56, animationDuration: "9s" }} />

          {/* pill badge */}
          <span className="inline-flex items-center gap-1.5 self-start border border-white/10 bg-white/[0.06] rounded-full px-3 py-1 text-[11px] font-semibold text-white/60 mb-4">
            <span
              className="w-1.5 h-1.5 rounded-full bg-purple-500"
              style={{ animation: "pill-pulse 1.8s ease-in-out infinite" }}
            />
            What Our Learners Say
          </span>

          {/* heading */}
          <h2 className="text-2xl sm:text-3xl font-extrabold leading-[1.2] tracking-tight text-white mb-3">
            Success Stories from Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Growing Community
            </span>
          </h2>

          {/* subtitle */}
          <p className="text-sm text-white/50 leading-relaxed max-w-[300px]">
            Hear from learners who transformed their careers through our platform.
            Real experiences, real impact, real growth.
          </p>
        </div>

        {/* ─── RIGHT PANEL ─── */}
        {/*
          On mobile: fixed h-[380px]
          On desktop: fills the 420px grid height (h-full)
        */}
        <div className="relative border-t border-white/[0.07] lg:border-t-0 lg:border-l lg:border-white/[0.07] bg-black/20 h-[380px] lg:h-full overflow-hidden">

          {/* fade masks top / bottom */}
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#0e0d10] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0e0d10] to-transparent z-10 pointer-events-none" />

          {/* floating badge */}
          <div className="absolute top-3 right-3 z-20 border border-white/10 bg-white/[0.07] backdrop-blur-sm rounded-lg px-2.5 py-1 text-[10px] font-bold text-white/70 tracking-wide">
            Life-changing! 🚀
          </div>

          {/* two scrolling columns */}
          <div className="flex gap-2.5 px-3 py-3 h-full">

            {/* col 1 — scroll UP */}
            <div className="flex-1 overflow-hidden min-w-0">
              <div
                style={{ animation: "scroll-up 24s linear infinite" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
                }
                className="flex flex-col gap-2.5"
              >
                {col1.map((s, i) => (
                  <Card key={i} s={s} />
                ))}
              </div>
            </div>

            {/* col 2 — scroll DOWN */}
            <div className="flex-1 overflow-hidden min-w-0">
              <div
                style={{ animation: "scroll-down 30s linear infinite" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
                }
                className="flex flex-col gap-2.5"
              >
                {col2.map((s, i) => (
                  <Card key={i} s={s} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
