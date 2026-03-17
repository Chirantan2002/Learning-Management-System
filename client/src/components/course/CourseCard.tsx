"use client";

import Link from "next/link";
import { Course, formatPriceINR } from "@/lib/courses";

function clampRating(rating: number) {
  if (Number.isNaN(rating)) return 0;
  return Math.min(5, Math.max(0, rating));
}

export default function CourseCard({ course }: { course: Course }) {
  const rating = clampRating(course.rating);

  return (
    <Link
      href={`/course-list/${course.slug}`}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/7 transition-colors"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={course.coverUrl}
          alt={course.title}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/45 border border-white/10">
            {course.category} • {course.level}
          </span>
          <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-black/45 border border-white/10">
            {formatPriceINR(course.price)}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold leading-snug line-clamp-2">
          {course.title}
        </h3>
        <p className="text-white/60 text-sm mt-1 line-clamp-2">
          {course.subtitle}
        </p>

        <div className="mt-3 flex items-center justify-between text-xs text-white/60">
          <div className="flex items-center gap-2">
            <span className="text-white/80 font-semibold">{rating.toFixed(1)}</span>
            <span aria-hidden>•</span>
            <span>{course.reviews.toLocaleString("en-IN")} reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{course.lessons} lessons</span>
            <span aria-hidden>•</span>
            <span>{course.duration}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-white/60">
            By <span className="text-white/80">{course.instructor.name}</span>
          </span>
          <span className="text-xs font-semibold text-[#a855fe] group-hover:text-[#c084fc] transition-colors">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}

