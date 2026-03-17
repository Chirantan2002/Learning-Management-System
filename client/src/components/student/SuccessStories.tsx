"use client";

type StoryCard = {
  name: string;
  handle: string;
  message: string;
};

const stories: StoryCard[] = [
  {
    name: "Sarah Johnson",
    handle: "@sarah_ui",
    message:
      "This platform helped me land my first UI/UX role. The projects + feedback were the game-changer.",
  },
  {
    name: "Sarah Johnson",
    handle: "@sarah_ui",
    message:
      "The learning path felt super structured. I always knew what to do next and why it mattered.",
  },
  {
    name: "Sarah Johnson",
    handle: "@sarah_ui",
    message:
      "Loved the community. Quick answers, honest reviews, and real support when I got stuck.",
  },
  {
    name: "Sarah Johnson",
    handle: "@sarah_ui",
    message:
      "I shipped a full case study from scratch. Now my portfolio finally looks professional.",
  },
  {
    name: "Sarah Johnson",
    handle: "@sarah_ui",
    message:
      "If you're serious about outcomes, this is it. The mentor notes were incredibly specific.",
  },
] as const;

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/70">
      {children}
    </span>
  );
}

function Bubble({ card }: { card: StoryCard }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
      <div className="flex items-start gap-2">
        <div className="h-7 w-7 rounded-full bg-[#a855fe]/20 border border-[#a855fe]/25 shrink-0" />
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-xs font-semibold text-white/85 truncate">
              {card.name}
            </p>
            <p className="text-[11px] text-white/45 truncate">{card.handle}</p>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-white/60">
            {card.message}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="relative p-6 sm:p-10">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#a855fe]/15 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
              </div>
              <div className="relative">
                <Pill>What Our Learners Say</Pill>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-serif tracking-tight">
                  Success Stories from Our <br className="hidden sm:block" />
                  Growing Community
                </h2>
                <p className="mt-3 text-white/55 text-sm sm:text-base max-w-md leading-relaxed">
                  Real stories, real results. See how learners are leveling up
                  with projects, mentorship, and a supportive community.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="p-6 sm:p-10 bg-black/20 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="flex items-center justify-end">
                <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/70">
                  Life changing!
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-3">
                  <Bubble card={stories[0]} />
                  <Bubble card={stories[1]} />
                  <Bubble card={stories[2]} />
                </div>
                <div className="space-y-3 sm:mt-8">
                  <Bubble card={stories[3]} />
                  <Bubble card={stories[4]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

