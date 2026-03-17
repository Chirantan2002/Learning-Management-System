"use client";

import { useMemo, useState } from "react";
import CourseCard from "@/components/course/CourseCard";
import CourseFilters from "@/components/course/CourseFilters";
import { courseCategories, mockCourses } from "@/lib/courses";

export default function CourseGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof courseCategories)[number]>(
    "All",
  );

  const courses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return mockCourses.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;

      const haystack = [
        c.title,
        c.subtitle,
        c.category,
        c.level,
        c.instructor.name,
        ...c.tags,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [category, query]);

  return (
    <div className="w-full">
      <CourseFilters
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
      />

      <div className="mt-7">
        <div className="flex items-center justify-between text-sm text-white/60">
          <span>
            Showing{" "}
            <span className="text-white/80 font-semibold">{courses.length}</span>{" "}
            course{courses.length === 1 ? "" : "s"}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>

        {courses.length === 0 && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-white font-semibold">No courses found</p>
            <p className="text-white/60 text-sm mt-1">
              Try a different search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

