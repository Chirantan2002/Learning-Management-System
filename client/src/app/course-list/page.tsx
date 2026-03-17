import CourseGrid from "@/components/course/CourseGrid";

export default function CourseListPage() {
  return (
    <div className="min-h-screen bg-[#0f0e11]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Explore courses
          </h1>
          <p className="text-white/60 max-w-2xl">
            Curated learning paths across design, development, product, and
            writing. Pick a course, then start learning.
          </p>
        </div>

        <div className="mt-8">
          <CourseGrid />
        </div>
      </div>
    </div>
  );
}

