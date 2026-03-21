"use client";

const logos = [
  "Google",
  "Amazon",
  "Microsoft",
  "Netflix",
  "Meta",
  "Adobe",
  "Spotify",
  "Shopify",
  "Atlassian",
  "Slack",
];

const duplicatedLogos = [...logos, ...logos];

const LogoPill = ({ label }: { label: string }) => {
  return (
    <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
      {label}
    </div>
  );
};

export default function TapeIcons() {
  return (
    <section className="bg-[#0f0e11] px-6 sm:px-12 lg:px-20 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <p className="text-white/70 text-sm font-semibold">
            Trusted by <span className="text-white">20+</span> companies
          </p>
          <div className="hidden sm:block h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#0f0e11] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#0f0e11] to-transparent z-10" />

            <div className="flex gap-3 py-4 px-4 animate-[marquee_22s_linear_infinite] w-max">
              {duplicatedLogos.map((l, idx) => (
                <LogoPill key={`${l}-${idx}`} label={l} />
              ))}
            </div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
