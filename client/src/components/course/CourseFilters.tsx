"use client";

import { courseCategories } from "@/lib/courses";

export default function CourseFilters({
  query,
  setQuery,
  category,
  setCategory,
}: {
  query: string;
  setQuery: (v: string) => void;
  category: (typeof courseCategories)[number];
  setCategory: (v: (typeof courseCategories)[number]) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex-1">
          <label className="sr-only" htmlFor="courseSearch">
            Search courses
          </label>
          <input
            id="courseSearch"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, tags, instructors..."
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#a855fe]/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/7 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {courseCategories.map((c) => {
          const active = c === category;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={[
                "rounded-full px-3 py-1.5 text-xs font-semibold border transition-colors",
                active
                  ? "bg-[#a855fe]/20 border-[#a855fe]/40 text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/7",
              ].join(" ")}
            >
              {c}
            </button>
          );
        })}
      </div>
    </div>
  );
}

