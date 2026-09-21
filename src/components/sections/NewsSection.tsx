import { useState } from "react"
import { NEWS_ITEMS } from "@/data/news"

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas")

  const categories = [
    "Todas",
    "Admisión",
    "Institucional",
    "Académico",
    "Evento",
  ]

  const filteredNews =
    selectedCategory === "Todas"
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="noticias"
      className="py-14 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Comunicados y Eventos
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Noticias Institucionales
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
              Información oficial sobre convocatorias, convenios de prácticas y
              actividades formativas en Huanta.
            </p>
          </div>

          {/* Filter Pills with horizontal scroll on mobile */}
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-hide max-w-full self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 min-h-9 rounded-md text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((n) => (
            <article
              key={n.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={n.image}
                    alt={n.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-xs">
                    {n.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{n.date}</span>
                    <span>{n.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                    {n.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {n.excerpt}
                  </p>
                </div>
              </div>

              {/* Read link with accessible target */}
              <div className="p-5 pt-0">
                <a
                  href="/noticias"
                  className="text-xs font-semibold text-slate-900 dark:text-sky-400 hover:text-slate-700 dark:hover:text-sky-300 flex items-center gap-1 min-h-9 py-1"
                >
                  <span>Leer comunicado</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
