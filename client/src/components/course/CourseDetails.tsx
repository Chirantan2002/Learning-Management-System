"use client";

import Link from "next/link";
import { useMemo } from "react";
import { formatPriceINR, mockCourses } from "@/lib/courses";

export default function CourseDetails({ slug }: { slug: string }) {
  const course = useMemo(
    () => mockCourses.find((c) => c.slug === slug),
    [slug],
  );

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0f0e11]">
        <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-20 py-14">
          <p className="text-white font-semibold text-xl">Course not found</p>
          <p className="text-white/60 mt-2">
            The course you’re looking for doesn’t exist (yet).
          </p>
          <Link
            href="/course-list"
            className="inline-block mt-6 rounded-xl bg-white/5 border border-white/10 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/7 transition-colors"
          >
            ← Back to course list
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0e11]">
      <div className="mx-auto max-w-5xl px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/course-list"
            className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/7 transition-colors"
          >
            ← Courses
          </Link>

          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
            {course.category} • {course.level}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="relative h-60 sm:h-72">
              <img
                src={course.coverUrl}
                alt={course.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
            <div className="p-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {course.title}
              </h1>
              <p className="text-white/60 mt-2">{course.subtitle}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {course.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black/30 border border-white/10 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sticky top-6">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-white font-semibold text-xl">
                  {formatPriceINR(course.price)}
                </p>
                <p className="text-white/60 text-sm">
                  {course.rating.toFixed(1)} •{" "}
                  {course.reviews.toLocaleString("en-IN")} reviews
                </p>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-white/70">
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-white/80 font-semibold">{course.lessons}</p>
                  <p className="text-white/60 text-xs mt-0.5">Lessons</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p className="text-white/80 font-semibold">{course.duration}</p>
                  <p className="text-white/60 text-xs mt-0.5">Duration</p>
                </div>
              </div>

              <button className="mt-5 w-full rounded-xl bg-[#a855fe] hover:bg-[#9333ea] transition-colors text-white font-semibold px-4 py-3">
                Enroll now
              </button>

              <p className="text-xs text-white/50 mt-3">
                Instructor:{" "}
                <span className="text-white/70 font-semibold">
                  {course.instructor.name}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-white font-semibold text-lg">What you’ll learn</h2>
          <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/70">
            {[
              "Build a real-world project and ship it",
              "Learn best practices used in production",
              "Write clean, maintainable code/design",
              "Understand the why, not just the what",
            ].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#a855fe]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

