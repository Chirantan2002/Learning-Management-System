"use client";

import Link from "next/link";
import CourseCard from "@/components/course/CourseCard";
import { mockCourses } from "@/lib/courses";

export default function FeaturedCourses() {
  const featured = mockCourses.slice(0, 6);

  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-wider text-white/60">
              FEATURED COURSES
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Learn by doing,{" "}
              <span className="text-[#a855fe]">ship real projects</span>
            </h2>
            <p className="mt-2 text-white/60 max-w-2xl">
              Handpicked courses from mentors. Search, filter, and start
              learning today.
            </p>
          </div>

          <Link
            href="/course-list"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/7 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
