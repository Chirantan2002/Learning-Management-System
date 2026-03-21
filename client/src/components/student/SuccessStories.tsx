"use client";

import { useRef } from "react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer at CreativeHub",
    avatar: "SJ",
    color: "#a855f7",
    title: "From Beginner to UI/UX Designer in 6 Months",
    message:
      "The platform's hands-on approach and expert feedback helped me land my first job as a UI/UX designer. Life-changing!",
    stars: 5,
  },
  {
    name: "Marcus Lee",
    role: "Full-Stack Dev at TechFlow",
    avatar: "ML",
    color: "#ec4899",
    title: "Went from zero to deployed in 90 days",
    message:
      "I had no coding background. Now I've shipped two real apps. The structured path and mentor reviews made all the difference.",
    stars: 5,
  },
  {
    name: "Priya Desai",
    role: "Data Analyst at Numera",
    avatar: "PD",
    color: "#06b6d4",
    title: "Cracked my dream data role!",
    message:
      "The projects were industry-grade. I walked into interviews confident, cleared every round, and got multiple offers.",
    stars: 5,
  },
  {
    name: "James Okoro",
    role: "Product Manager at NovaBuild",
    avatar: "JO",
    color: "#f59e0b",
    title: "Finally understood how to build products people love",
    message:
      "The community, the mentors, the curriculum — everything clicked. I transitioned from engineering to PM in 4 months.",
    stars: 5,
  },
  {
    name: "Aisha Nkrumah",
    role: "Freelance Brand Designer",
    avatar: "AN",
    color: "#10b981",
    title: "Tripled my freelance rates after this course",
    message:
      "My portfolio went from a basic Behance page to a client-magnet. The feedback loops here are unmatched.",
    stars: 5,
  },
  {
    name: "Carlos Rivera",
    role: "React Dev at Lumen Labs",
    avatar: "CR",
    color: "#8b5cf6",
    title: "React finally made sense — and I got hired",
    message:
      "I tried 3 other courses before this one. None of them explained the 'why'. This one did, and it stuck.",
    stars: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Motion Designer at Orbit",
    avatar: "YT",
    color: "#f43f5e",
    title: "Motion design skills that impressed on day one",
    message:
      "The live critiques pushed me harder than any bootcamp. I joined mid-year and got placed before the cohort even ended.",
    stars: 5,
  },
  {
    name: "Noah Williams",
    role: "Cloud Eng. at SkyArch",
    avatar: "NW",
    color: "#0ea5e9",
    title: "AWS certified in 60 days with this platform",
    message:
      "Real hands-on labs, not just theory. Every module felt like actual work experience. I passed my cert on the first try.",
    stars: 5,
  },
];

/* Split into two columns */
const col1 = stories.slice(0, 4);
const col2 = stories.slice(4, 8);

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="success-star"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="#f59e0b"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function StoryCard({ card }: { card: (typeof stories)[0] }) {
  return (
    <div className="success-card">
      <div className="success-card-inner">
        <div className="success-card-header">
          <div
            className="success-avatar"
            style={{ background: `${card.color}22`, border: `1.5px solid ${card.color}55` }}
          >
            <span style={{ color: card.color }}>{card.avatar}</span>
          </div>
          <div className="success-card-meta">
            <p className="success-card-name">{card.name}</p>
            <p className="success-card-role">{card.role}</p>
          </div>
        </div>
        <StarRow count={card.stars} />
        <p className="success-card-title">&ldquo;{card.title}&rdquo;</p>
        <p className="success-card-message">{card.message}</p>
      </div>
    </div>
  );
}

function ScrollColumn({
  cards,
  direction,
}: {
  cards: (typeof stories)[0][];
  direction: "up" | "down";
}) {
  const duplicated = [...cards, ...cards];
  return (
    <div className="success-col-mask">
      <div className={`success-col success-col--${direction}`}>
        {duplicated.map((card, i) => (
          <StoryCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
}

/* Sparkle SVG */
function Sparkle({ size = 28, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className="success-sparkle"
    >
      <path
        d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
        fill="white"
        fillOpacity="0.7"
      />
    </svg>
  );
}

export default function SuccessStories() {
  return (
    <section className="success-section">
      <style>{`
        /* ─── Section ─── */
        .success-section {
          background: #0f0e11;
          padding: 80px 24px;
          overflow: hidden;
        }
        .success-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 28px;
          background: rgba(255,255,255,0.03);
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 560px;
          overflow: hidden;
          position: relative;
        }
        @media (max-width: 900px) {
          .success-wrapper { grid-template-columns: 1fr; }
        }

        /* ─── Left Panel ─── */
        .success-left {
          position: relative;
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 1;
        }
        .success-glow-1 {
          position: absolute;
          top: -80px;
          left: -80px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(168,85,247,0.18);
          filter: blur(60px);
          pointer-events: none;
          animation: pulse-glow 4s ease-in-out infinite alternate;
        }
        .success-glow-2 {
          position: absolute;
          bottom: -80px;
          right: 40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          filter: blur(50px);
          pointer-events: none;
        }
        @keyframes pulse-glow {
          from { opacity: 0.7; transform: scale(1); }
          to   { opacity: 1;   transform: scale(1.08); }
        }

        /* Pill */
        .success-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          width: fit-content;
          margin-bottom: 20px;
        }
        .success-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #a855f7;
          animation: dot-blink 1.6s ease-in-out infinite;
        }
        @keyframes dot-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* Heading */
        .success-heading {
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin: 0 0 16px;
        }
        .success-heading span {
          background: linear-gradient(90deg, #a855f7, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .success-subtext {
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          line-height: 1.7;
          max-width: 360px;
          margin: 0 0 32px;
        }

        /* Stats row */
        .success-stats {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .success-stat {
          display: flex;
          flex-direction: column;
        }
        .success-stat-num {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .success-stat-label {
          font-size: 11px;
          color: rgba(255,255,255,0.45);
          margin-top: 3px;
        }

        /* Sparkle */
        .success-sparkle {
          position: absolute;
          pointer-events: none;
          filter: drop-shadow(0 0 6px rgba(255,255,255,0.5));
          animation: sparkle-spin 6s linear infinite;
        }
        .success-sparkle-1 { top: 24px; left: 24px; }
        .success-sparkle-2 { bottom: 40px; left: 60%; }
        @keyframes sparkle-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ─── Right Panel ─── */
        .success-right {
          position: relative;
          overflow: hidden;
          background: rgba(0,0,0,0.2);
          border-left: 1px solid rgba(255,255,255,0.07);
          padding: 0;
        }
        .success-right-inner {
          display: flex;
          gap: 12px;
          padding: 20px 16px;
          height: 100%;
          min-height: 560px;
        }

        /* Fade masks top/bottom */
        .success-right::before,
        .success-right::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 80px;
          z-index: 10;
          pointer-events: none;
        }
        .success-right::before {
          top: 0;
          background: linear-gradient(to bottom, #0f0e11 0%, transparent 100%);
        }
        .success-right::after {
          bottom: 0;
          background: linear-gradient(to top, #0f0e11 0%, transparent 100%);
        }

        /* ─── Scroll Columns ─── */
        .success-col-mask {
          flex: 1;
          overflow: hidden;
          position: relative;
        }
        .success-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          will-change: transform;
        }
        .success-col--up {
          animation: scroll-up 28s linear infinite;
        }
        .success-col--down {
          animation: scroll-down 32s linear infinite;
        }
        .success-col--up:hover,
        .success-col--down:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }

        /* ─── Story Card ─── */
        .success-card {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          padding: 14px;
          cursor: default;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .success-card:hover {
          transform: translateY(-2px) scale(1.015);
          background: rgba(255,255,255,0.07);
          border-color: rgba(168,85,247,0.3);
          box-shadow: 0 8px 32px rgba(168,85,247,0.12), 0 0 0 1px rgba(168,85,247,0.08);
        }
        .success-card-inner { display: flex; flex-direction: column; gap: 8px; }
        .success-card-header { display: flex; align-items: center; gap: 10px; }

        .success-avatar {
          width: 34px; height: 34px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 700;
          flex-shrink: 0;
        }
        .success-card-meta { min-width: 0; }
        .success-card-name {
          font-size: 12px; font-weight: 700;
          color: rgba(255,255,255,0.9);
          margin: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .success-card-role {
          font-size: 10.5px;
          color: rgba(255,255,255,0.4);
          margin: 0;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .success-star { filter: drop-shadow(0 0 3px #f59e0b88); }
        .success-card-title {
          font-size: 11.5px; font-weight: 700;
          color: rgba(255,255,255,0.85);
          margin: 0;
          line-height: 1.4;
        }
        .success-card-message {
          font-size: 11px;
          color: rgba(255,255,255,0.52);
          margin: 0;
          line-height: 1.6;
        }

        /* ─── Life-changing badge ─── */
        .success-badge {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 12;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.06);
          border-radius: 8px;
          padding: 5px 10px;
          font-size: 10.5px;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          letter-spacing: 0.02em;
          animation: badge-float 3s ease-in-out infinite;
        }
        @keyframes badge-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>

      <div className="success-wrapper">
        {/* ── Left ── */}
        <div className="success-left">
          <div className="success-glow-1" />
          <div className="success-glow-2" />
          <Sparkle size={20} style={{ top: 24, left: 24 } as React.CSSProperties} />
          <Sparkle size={14} style={{ bottom: 52, right: 80, animationDuration: "9s" } as React.CSSProperties} />

          <div className="success-pill">
            <span className="success-pill-dot" />
            What Our Learners Say
          </div>

          <h2 className="success-heading">
            Success Stories from Our{" "}
            <span>Growing Community</span>
          </h2>

          <p className="success-subtext">
            Hear from learners who transformed their careers through our platform.
            Real experiences, real impact, real growth.
          </p>

          <div className="success-stats">
            <div className="success-stat">
              <span className="success-stat-num">12k+</span>
              <span className="success-stat-label">Learners placed</span>
            </div>
            <div className="success-stat">
              <span className="success-stat-num">94%</span>
              <span className="success-stat-label">Job success rate</span>
            </div>
            <div className="success-stat">
              <span className="success-stat-num">4.9★</span>
              <span className="success-stat-label">Avg. rating</span>
            </div>
          </div>
        </div>

        {/* ── Right ── */}
        <div className="success-right">
          <div className="success-badge">Life-changing! 🚀</div>
          <div className="success-right-inner">
            <ScrollColumn cards={col1} direction="up" />
            <ScrollColumn cards={col2} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}
