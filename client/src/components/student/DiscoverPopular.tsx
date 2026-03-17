"use client";

import Link from "next/link";

type PopularCourse = {
  title: string;
  category: string;
  level: "Beginner" | "Intermediate";
  price: string;
  ratingLabel: string;
  learnersLabel: string;
  dateLabel: string;
  coverUrl: string;
};

const popular: PopularCourse[] = [
  {
    title: "Tips & Tricks to Build Your First Flutter App",
    category: "Mobile Development",
    level: "Beginner",
    price: "15$",
    ratingLabel: "4.5 Satisfied",
    learnersLabel: "1.2k Joined",
    dateLabel: "Jul 26 2025",
    coverUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&auto=format&fit=crop",
  },
  {
    title: "Tips & Tricks to Build Your First Flutter App",
    category: "Mobile Development",
    level: "Beginner",
    price: "15$",
    ratingLabel: "4.5 Satisfied",
    learnersLabel: "1.2k Joined",
    dateLabel: "Jul 26 2025",
    coverUrl:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1400&auto=format&fit=crop",
  },
  {
    title: "Tips & Tricks to Build Your First Flutter App",
    category: "Mobile Development",
    level: "Beginner",
    price: "15$",
    ratingLabel: "4.5 Satisfied",
    learnersLabel: "1.2k Joined",
    dateLabel: "Jul 26 2025",
    coverUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&auto=format&fit=crop",
  },
  {
    title: "Tips & Tricks to Build Your First Flutter App",
    category: "Mobile Development",
    level: "Beginner",
    price: "15$",
    ratingLabel: "4.5 Satisfied",
    learnersLabel: "1.2k Joined",
    dateLabel: "Jul 26 2025",
    coverUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&auto=format&fit=crop",
  },
  {
    title: "Tips & Tricks to Build Your First Flutter App",
    category: "Mobile Development",
    level: "Beginner",
    price: "15$",
    ratingLabel: "4.5 Satisfied",
    learnersLabel: "1.2k Joined",
    dateLabel: "Jul 26 2025",
    coverUrl:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&auto=format&fit=crop",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-black/45 border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/75">
      {children}
    </span>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70">
      {children}
    </span>
  );
}

function PopularCard({ c }: { c: PopularCourse }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="relative h-44">
        <img src={c.coverUrl} alt={c.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge>{c.level}</Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge>{c.price}</Badge>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/25 text-[#c4b5fd]">
            {c.category}
          </span>
        </div>
        <p className="mt-3 text-white font-semibold leading-snug">{c.title}</p>

        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/55">
          <span>{c.learnersLabel}</span>
          <span aria-hidden>•</span>
          <span>{c.dateLabel}</span>
          <span aria-hidden>•</span>
          <span>{c.ratingLabel}</span>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverPopular() {
  return (
    <section className="bg-[#0f0e11]">
      {/* wave divider */}
      <div className="h-10 sm:h-12 md:h-14 bg-[#0f0e11] relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M0,40 C150,90 350,0 600,40 C850,80 1050,10 1200,40 L1200,0 L0,0 Z"
              fill="rgba(139,92,246,0.9)"
              opacity="0.55"
            />
          </svg>
        </div>
      </div>

      <div className="px-6 sm:px-12 lg:px-20 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mx-auto h-2 w-2 rounded-full bg-[#8b5cf6]/80 mb-4" />
          <p className="text-white/80 text-sm font-semibold">
            Step 1 : Discover Your Path
          </p>
          <p className="mt-3 text-white/55 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Explore courses tailored to your goals.
            <br className="hidden sm:block" />
            Explore courses tailored to your goals and find your passion in UI/UX
            Design, Mobile Development, No-Code Engineering, or Prompt
            Engineering.
          </p>

          <Link
            href="/course-list"
            className="inline-flex mt-6 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white font-semibold px-6 py-2.5 shadow shadow-[#8b5cf6]/30"
          >
            Unlock Your Learning Adventure
          </Link>

          <div className="mt-14">
            <Pill>Step 2 : Level Up</Pill>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-serif">
              Level Up with Our Most Popular Courses
            </h2>
            <p className="mt-2 text-white/55 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Explore the best courses chosen by thousands of learners.
              <br className="hidden sm:block" />
              Master the skills that are shaping the future — from UI/UX Design
              to Prompt Engineering.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 text-left">
            {popular.map((c, idx) => (
              <div
                key={idx}
                className={[
                  "lg:col-span-2",
                  idx === 3 ? "lg:col-start-2" : "",
                  idx === 4 ? "lg:col-start-4" : "",
                ].join(" ")}
              >
                <PopularCard c={c} />
              </div>
            ))}
          </div>

          <Link
            href="/course-list"
            className="inline-flex mt-10 rounded-xl bg-[#8b5cf6] hover:bg-[#7c3aed] transition-colors text-white font-semibold px-7 sm:px-8 py-3 shadow shadow-[#8b5cf6]/30"
          >
            See All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

