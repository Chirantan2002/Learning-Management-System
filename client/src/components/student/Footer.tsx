"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 pt-10 pb-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-white font-semibold text-lg">EduNova</p>
            <p className="text-white/60 text-sm mt-2 max-w-sm">
              Learn faster with project-first courses and a modern learning
              experience.
            </p>
          </div>

          <div>
            <p className="text-white/80 font-semibold">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              <Link
                className="hover:text-white transition-colors"
                href="/course-list"
              >
                Courses
              </Link>
              <Link
                className="hover:text-white transition-colors"
                href="/student"
              >
                Student
              </Link>
              <Link
                className="hover:text-white transition-colors"
                href="/educator"
              >
                Educator
              </Link>
            </div>
          </div>

          <div>
            <p className="text-white/80 font-semibold">Company</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              <a className="hover:text-white transition-colors" href="#">
                About
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Blog
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Contact
              </a>
            </div>
          </div>

          <div>
            <p className="text-white/80 font-semibold">Legal</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/60">
              <a className="hover:text-white transition-colors" href="#">
                Terms
              </a>
              <a className="hover:text-white transition-colors" href="#">
                Privacy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            Copyright © {new Date().getFullYear()} EduNova. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">Built with Next.js, Tailwind, and lots of ❤️</p>
        </div>
      </div>
    </footer>
  );
}
