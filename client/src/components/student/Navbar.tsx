"use client";
import Link from "next/link";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { SignOutButton, useClerk, UserButton, useUser } from "@clerk/nextjs";
import { TbSparkles } from "react-icons/tb";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="relative mx-4 md:mx-16 my-6 md:my-8 bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-12 lg:px-16 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(168,85,254,0.08)]">
        {/* brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative h-10 w-10 rounded-2xl bg-gradient-to-br from-[#a855fe]/35 to-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,254,0.55),transparent_60%)] opacity-70" />
            <TbSparkles className="relative text-[#e9d5ff]" size={18} />
          </span>
          <span
            className={`${montserrat.className} text-white font-semibold tracking-wide group-hover:text-white transition-colors`}
          >
            LMS
          </span>
        </Link>
        {/* menu */}
        <div className="hidden md:flex items-center gap-5">
          <div className={`space-x-12 ${montserrat.className} text-white/80`}>
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 ease-in-out"
            >
              Explore
            </Link>
            <Link
              href="/course-list"
              className="hover:text-white transition-colors duration-200 ease-in-out"
            >
              Course
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 ease-in-out"
            >
              Job
            </Link>
            <Link
              href="/"
              className="hover:text-white transition-colors duration-200 ease-in-out"
            >
              Blog
            </Link>
          </div>
        </div>
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/student/my-enrollments"
                className={`${montserrat.className} text-white/80 hover:text-white transition-colors duration-200 ease-in-out`}
              >
                My Courses
              </Link>
              <UserButton />
            </div>
          ) : (
            <button
              onClick={() => openSignIn({ forceRedirectUrl: "/student" })}
              className={`bg-[#a855fe] shadow hover:shadow-none transition-all duration-200 ease-in-out shadow-[#a855fe] px-4 py-2 rounded-xl cursor-pointer ${montserrat.className} font-semibold`}
            >
              Get Started
            </button>
          )}
        </div>

        {/* For mobile view */}
        {/* Hamburger Button (Mobile) */}
        <div className="flex md:hidden gap-6">
          {user && <UserButton />}
          <button
            className="flex md:hidden flex-col justify-center items-center gap-[5px] w-9 h-9 cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className={`flex flex-col gap-4 px-6 py-5 mt-2 rounded-xl bg-[#221f25] ${montserrat.className} text-white`}
        >
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#a855fe] transition-colors duration-200 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/course-list"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#a855fe] transition-colors duration-200 ease-in-out"
          >
            Course
          </Link>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#a855fe] transition-colors duration-200 ease-in-out"
          >
            Blog
          </Link>

          <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
            {user ? (
              <div className="flex flex-col gap-3">
                <Link
                  href="/student/my-enrollments"
                  onClick={() => setMenuOpen(false)}
                  className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl cursor-pointer font-semibold text-white/90"
                >
                  My Courses
                </Link>
                <SignOutButton redirectUrl="/">
                  <button className="bg-[#a855fe] px-4 py-2 rounded-xl cursor-pointer font-semibold">
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            ) : (
              <button
                onClick={() => openSignIn({ forceRedirectUrl: "/student" })}
                className={`bg-[#a855fe] shadow hover:shadow-none transition-all duration-200 ease-in-out shadow-[#a855fe] px-4 py-2 rounded-xl cursor-pointer ${montserrat.className} font-semibold`}
              >
                Get Started
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
