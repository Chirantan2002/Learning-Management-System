'use client';

import EnrollmentList from "@/components/student/EnrollmentList";

export default function MyEnrollmentsPage() {
  return (
    <div className="min-h-screen bg-[#0f0e11]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              My enrollments
            </h1>
            <p className="text-white/60 mt-2 max-w-2xl">
              Continue where you left off. Your progress is saved automatically.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <EnrollmentList />
        </div>
      </div>
    </div>
  );
}
