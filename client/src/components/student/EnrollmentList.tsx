"use client";

import Link from "next/link";
import { mockCourses } from "@/lib/courses";

type Enrollment = {
  slug: string;
  progressPercent: number; // 0..100
  nextLessonTitle: string;
};

const mockEnrollments: Enrollment[] = [
  {
    slug: "nextjs-for-builders",
    progressPercent: 35,
    nextLessonTitle: "Server Actions and forms",
  },
  {
    slug: "ui-ux-foundations",
    progressPercent: 70,
    nextLessonTitle: "Usability heuristics in practice",
  },
];

function clampPct(p: number) {
  if (Number.isNaN(p)) return 0;
  return Math.min(100, Math.max(0, p));
}

export default function EnrollmentList() {
  const items = mockEnrollments
    .map((e) => {
      const course = mockCourses.find((c) => c.slug === e.slug);
      if (!course) return null;
      return { enrollment: e, course };
    })
    .filter(Boolean) as Array<{ enrollment: Enrollment; course: (typeof mockCourses)[number] }>;

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <p className="text-white font-semibold">No enrollments yet</p>
        <p className="text-white/60 text-sm mt-1">
          Browse courses and enroll to start learning.
        </p>
        <Link
          href="/course-list"
          className="inline-block mt-5 rounded-xl bg-[#a855fe] hover:bg-[#9333ea] transition-colors text-white font-semibold px-5 py-2.5"
        >
          Explore courses
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {items.map(({ course, enrollment }) => {
        const pct = clampPct(enrollment.progressPercent);
        return (
          <Link
            key={course.slug}
            href={`/course-list/${course.slug}`}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-colors overflow-hidden"
          >
            <div className="flex gap-4 p-4">
              <img
                src={course.coverUrl}
                alt={course.title}
                className="h-20 w-28 rounded-xl object-cover border border-white/10"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">{course.title}</p>
                <p className="text-white/60 text-sm mt-0.5 truncate">
                  Next: {enrollment.nextLessonTitle}
                </p>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span>Progress</span>
                    <span className="text-white/80 font-semibold">{pct}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-black/30 border border-white/10 overflow-hidden">
                    <div
                      className="h-full bg-[#a855fe]"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

