import {
  IconAcademicCap,
  IconAward,
  IconClock,
  IconExternalLink,
  IconShieldCheck,
  IconUsers,
} from "@/components/icons/Icons"
import {
  COMPLEMENTARY_STATE_LINKS,
  OFFICIAL_STATE_LINKS,
  STATS,
  type StatItem,
} from "@/data/institution"
import { useCountUp } from "@/hooks/useCountUp"
import { useTrajectoryYears } from "@/hooks/useTrajectoryYears"

function getStatIcon(type: StatItem["iconType"]) {
  switch (type) {
    case "graduates":
      return (
        <IconUsers className="w-5 h-5 sm:w-6 sm:h-6 text-[#7114EF] dark:text-[#08D9FF]" />
      )
    case "teachers":
      return (
        <IconAward className="w-5 h-5 sm:w-6 sm:h-6 text-[#1475F7] dark:text-[#08D9FF]" />
      )
    case "programs":
      return (
        <IconAcademicCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#7114EF] dark:text-[#a855f7]" />
      )
    case "experience":
      return (
        <IconClock className="w-5 h-5 sm:w-6 sm:h-6 text-[#1475F7] dark:text-sky-400" />
      )
  }
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const { count, elementRef } = useCountUp({
    end: stat.numericValue,
    duration: 1600,
    delay: index * 120,
  })

  return (
    <div
      ref={elementRef}
      className="relative flex items-center gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-[#7114EF]/30 dark:hover:border-[#08D9FF]/30 transition-all duration-300 group overflow-hidden"
    >
      {/* Contenedor con forma de hexágono y halo suave */}
      <div className="relative shrink-0 flex items-center justify-center">
        {/* Halo exterior hexagonal animado */}
        <div
          className="w-13 h-13 sm:w-15 sm:h-15 bg-linear-to-br from-[#7114EF]/15 via-[#1475F7]/15 to-[#08D9FF]/20 dark:from-[#7114EF]/25 dark:to-[#08D9FF]/25 flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-300"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          {/* Borde interior y contenedor del ícono */}
          <div
            className="w-full h-full bg-white dark:bg-slate-900 flex items-center justify-center"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            {getStatIcon(stat.iconType)}
          </div>
        </div>
      </div>

      {/* Contenido Numérico y Texto */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-0.5 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-[#7114EF] group-hover:to-[#1475F7] transition-all">
          <span>{stat.prefix}</span>
          <span className="tabular-nums font-extrabold">
            {count.toLocaleString()}
          </span>
          <span>{stat.suffix}</span>
        </div>

        <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-0.5 truncate">
          {stat.label}
        </div>

        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug line-clamp-2">
          {stat.subtext}
        </div>
      </div>

      {/* Línea de acento inferior en hover */}
      <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-[#7114EF] to-[#1475F7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}

export default function StatsStrip() {
  const trajectoryYears = useTrajectoryYears()

  const dynamicStats = STATS.map((s) =>
    s.iconType === "experience"
      ? {
          ...s,
          numericValue: trajectoryYears,
        }
      : s,
  )

  return (
    <section className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 py-10 sm:py-14 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Métricas Institucionales con conteo animado y hexágono */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {dynamicStats.map((s, idx) => (
            <StatCard key={s.label} stat={s} index={idx} />
          ))}
        </div>

        {/* Enlaces de Interés y Transparencia del Estado */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7114EF] dark:text-[#08D9FF] mb-1">
                <IconShieldCheck className="w-4 h-4 text-[#1475F7] dark:text-[#08D9FF]" />
                Validación y Transparencia
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Enlaces Oficiales del Estado Peruano
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md">
              Herramientas de consulta pública del MINEDU para constatar la
              autenticidad académica, matrícula y titulación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {OFFICIAL_STATE_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-slate-900/80 hover:bg-slate-50/80 dark:hover:bg-slate-900 rounded-xl p-3.5 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-[#1475F7]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Contenedor blanco para el logo institucional oficial que garantiza contraste óptimo en ambos temas */}
                  <div className="w-full h-14 bg-white rounded-lg p-2 flex items-center justify-center border border-slate-200/60 dark:border-slate-200/20 shadow-2xs mb-3 group-hover:scale-[1.02] transition-transform">
                    <img
                      src={link.logo}
                      alt={link.name}
                      className="max-h-full max-w-full w-auto object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-1.5 mb-1.5">
                    <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#7114EF] dark:group-hover:text-[#08D9FF] transition-colors tracking-tight">
                      {link.name}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                      {link.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 line-clamp-1">
                    {link.fullName}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
                    {link.description}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-[#1475F7] dark:text-[#08D9FF]">
                  <span>Acceder al portal</span>
                  <IconExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          {/* Enlaces Complementarios del Estado Peruano */}
          <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              Otros portales y entidades públicas vinculadas:
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
              {COMPLEMENTARY_STATE_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#1475F7] dark:hover:text-[#08D9FF] transition-colors font-medium text-slate-600 dark:text-slate-300 py-0.5"
                >
                  <span>{item.label}</span>
                  <IconExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
