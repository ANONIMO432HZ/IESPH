import { STATS } from "@/data/institution"

export default function StatsStrip() {
  return (
    <section className="bg-slate-50 border-b border-slate-200 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {STATS.map((s, idx) => (
            <div
              key={s.label}
              className={`text-center px-4 ${idx > 1 ? "pt-4 md:pt-0" : ""}`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                {s.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 max-w-xs mx-auto">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
