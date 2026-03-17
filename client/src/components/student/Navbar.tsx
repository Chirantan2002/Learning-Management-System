"use client";
import Link from "next/link";
import { useState } from "react";
import { Montserrat } from "next/font/google";
import { SignOutButton, useClerk, UserButton, useUser } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";

const montserrat = Montserrat({ subsets: ["latin"] });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="relative mx-4 md:mx-16 my-6 md:my-8 bg-transparent">
      <div className="flex items-center justify-between px-4 sm:px-10 md:px-12 lg:px-16 py-4  rounded-xl bg-[#221f25]">
        {/* logo */}
        <div>Logo</div>
        {/* menu */}
        <div className="hidden md:flex items-center gap-5">
          <div className={`space-x-12 ${montserrat.className} text-white`}>
            <Link
              href="/"
              className="hover:text-gray-200 transition-colors duration-200 ease-in-out"
            >
              Home
            </Link>
            <Link
              href="/course-list"
              className="hover:text-gray-200 transition-colors duration-200 ease-in-out"
            >
              Course
            </Link>
            <Link
              href="/"
              className="hover:text-gray-200 transition-colors duration-200 ease-in-out"
            >
              Blog
            </Link>
          </div>
        </div>
        {/* Desktop buttons */}
        <div className="hidden md:flex items-center gap-3 text-sm">
          {user && (
            <>
              <Link
                href="/become-educator"
                className={`${montserrat.className} text-white hover:text-gray-300 transition-colors duration-200 ease-in-out`}
              >
                Become Educator
              </Link>
              <span>|</span>
              <Link
                href="/student/my-enrollments"
                className={`${montserrat.className} text-white hover:text-gray-300 transition-colors duration-200 ease-in-out`}
              >
                My Courses
              </Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            // { forceRedirectUrl: "/student" }
            <button
              onClick={() => openSignIn()}
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
            {user && (
              <>
                <button
                  className={`bg-[#a855fe]/30 px-4 py-2 rounded-xl cursor-pointer font-semibold text-white`}
                >
                  Become Educator
                </button>
              </>
            )}
            {user ? (
              <SignOutButton redirectUrl="/">
                <button className="bg-[#a855fe] px-4 py-2 rounded-xl cursor-pointer font-semibold">
                  Sign Out
                </button>
              </SignOutButton>
            ) : (
              //{ forceRedirectUrl: "/student" }
              <button
                onClick={() => openSignIn()}
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
