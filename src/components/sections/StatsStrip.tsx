import { STATS } from "@/data/institution"

export default function StatsStrip() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-8 sm:py-10 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center p-3.5 sm:p-5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors flex flex-col justify-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 max-w-xs mx-auto leading-relaxed">
                {s.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
