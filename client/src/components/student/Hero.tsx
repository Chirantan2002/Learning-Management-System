"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { TbNorthStar } from "react-icons/tb";
import { PiStarFill } from "react-icons/pi";
import { Arvo } from "next/font/google";

const arvo = Arvo({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ subsets: ["latin"] });

const roles = [
  "UI UX Designing",
  "Frontend Dev",
  "Product Manager",
  "illustrator",
  "Content Writer",
  "Motion Designer",
  "Backend Dev",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${montserrat.className} bg-[#0f0e11] min-h-[90vh] flex items-center px-6 sm:px-12 lg:px-20 py-16 overflow-hidden relative -mt-6`}
    >
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#a855fe]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#a855fe]/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT: Text */}
        <div className="flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex w-fit items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-xs font-medium px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#a855fe] animate-pulse" />
            Increase Your Skill
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-serif">
            Step Into the <br />
            Future of <br />
            <span className="text-white">Learning </span>
            <span
              style={{
                transition: "opacity 0.4s ease, transform 0.4s ease",
                opacity: visible ? 1 : 0,
                display: "inline-block",
                transform: visible ? "translateY(0)" : "translateY(8px)",
                color: "#a855fe",
              }}
              className={`${montserrat.className} font-black`}
            >
              {roles[roleIndex]}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Gain industry-leading knowledge, build impactful products, and
            launch your career — all in one platform.
          </p>

          {/* CTA */}
          <div>
            <Link
              href="/course-list"
              className="inline-block bg-[#a855fe] hover:bg-[#9333ea] transition-colors duration-200 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-[#a855fe]/30"
            >
              All Course
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 pt-6 border-t border-white/10">
            {[
              { value: "26+", label: "Experts Mentors" },
              { value: "100+", label: "Curated Courses" },
              { value: "2000+", label: "Members" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className={`${arvo.className} text-white text-2xl md:text-5xl font-serif font-extrabold`}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Image Collage */}
        <div className="relative w-full h-[480px] hidden lg:block">
          {/* Decorative stars */}
          <TbNorthStar
            size={100}
            className="absolute opacity-70 right-80 rotate-15 text-gray-400"
          />
          <StarIcon
            className="absolute -rotate-15 opacity-30 top-4 right-24 text-pink-300"
            size={200}
          />
          <StarIcon
            className="absolute bottom-16 right-4 text-white/40"
            size={20}
          />
          <PiStarFill
            size={40}
            className="absolute bottom-0 right-24 rotate-45 text-gray-400 opacity-25"
          />
          <StarIcon
            className="absolute top-1/2 left-4 text-white/20"
            size={16}
          />

          <TbNorthStar
            size={100}
            className="absolute opacity-40 bottom-0 left-30 -rotate-65 text-gray-600"
          />

          {/* Image 1 — top right, orange shape */}
          <BlobFrame
            color="#f97316"
            shape="hourglass"
            style={{ top: 0, right: 40, width: 160, height: 160 }}
            imgSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face"
          />

          {/* Image 2 — middle left, yellow blob */}
          <BlobFrame
            color="#facc15"
            shape="flower"
            style={{ top: 100, right: 220, width: 180, height: 180 }}
            imgSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
          />

          {/* Image 3 — bottom center, cyan hourglass */}
          <BlobFrame
            color="#22d3ee"
            shape="hourglass"
            style={{ bottom: 0, right: 160, width: 165, height: 165 }}
            imgSrc="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face"
          />

          {/* Image 4 — middle right, purple blob */}
          <BlobFrame
            color="#a855f7"
            shape="flower"
            style={{ top: 180, right: 10, width: 160, height: 160 }}
            imgSrc="https://images.unsplash.com/photo-1554151228-14d9def656e4?w=300&h=300&fit=crop&crop=face"
          />
        </div>
      </div>
    </section>
  );
};

/* ── Blob Frame ─────────────────────────────────────── */
const CLIPS: any = {
  flower:
    "polygon(50% 0%, 61% 15%, 79% 9%, 79% 28%, 96% 35%, 88% 52%, 98% 67%, 82% 70%, 79% 89%, 62% 84%, 50% 98%, 38% 84%, 21% 89%, 18% 70%, 2% 67%, 12% 52%, 4% 35%, 21% 28%, 21% 9%, 39% 15%)",
  hourglass:
    "polygon(15% 0%, 85% 0%, 100% 20%, 80% 50%, 100% 80%, 85% 100%, 15% 100%, 0% 80%, 20% 50%, 0% 20%)",
};

function BlobFrame({ color, shape, style, imgSrc }: any) {
  return (
    <div
      style={{
        position: "absolute",
        ...style,
        padding: 6,
        background: color,
        clipPath: CLIPS[shape],
        borderRadius: 4,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          clipPath: CLIPS[shape],
          overflow: "hidden",
        }}
      >
        <img
          src={imgSrc}
          alt="instructor"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

/* ── Star SVG ───────────────────────────────────────── */
function StarIcon({ size = 24, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  );
}

export default Hero;
