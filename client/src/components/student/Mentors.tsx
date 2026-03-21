"use client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

type Mentor = {
  name: string;
  role: string;
  img: string;
  featured?: boolean;
};

const mentors: Mentor[] = [
  {
    name: "Jessica Miller",
    role: "UI/UX Design & Research",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop&crop=face",
    featured: true,
  },
  {
    name: "Riya Das",
    role: "Product Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Angela Wu",
    role: "Backend Engineer",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Nandini Roy",
    role: "Technical Writer",
    img: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Aarav Sharma",
    role: "Senior Frontend Engineer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop&crop=face",
  },
  {
    name: "Soham Paul",
    role: "Product Manager",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&h=500&fit=crop&crop=face",
  },
];

export default function Mentors() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-white/60">
            Meet Our Expert Mentors
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight">
            Learn from Industry{" "}
            <span className={`${montserrat.className} text-[#a855fe]`}>
              Leaders
            </span>{" "}
            <br className="hidden sm:block" />& Top
            <span className={`${montserrat.className} text-[#a855fe]`}>
              {" "}
              Creators
            </span>
          </h2>
          <p className="mt-3 text-white/55 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Gain expert insights and hands-on guidance from professionals
            working across design, engineering, and product.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {mentors.map((m) => (
            <div
              key={m.name}
              className={[
                "rounded-2xl border border-white/10 overflow-hidden",
                m.featured ? "bg-[#d8b4fe]/15" : "bg-white/5",
              ].join(" ")}
            >
              <div className="relative aspect-4/5">
                <img
                  src={m.img}
                  alt={m.name}
                  className={[
                    "h-full w-full object-cover",
                    m.featured ? "" : "grayscale",
                  ].join(" ")}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-white font-semibold text-sm sm:text-base">
                  {m.name}
                </p>
                <p className="text-white/55 text-xs sm:text-sm mt-1">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
