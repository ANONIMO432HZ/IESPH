import { IconExternalLink, IconShieldCheck } from "@/components/icons/Icons"
import { STATS } from "@/data/institution"

const OFFICIAL_LINKS = [
  {
    name: "MINEDU",
    fullName: "Ministerio de Educación",
    description: "Normativa nacional y licenciamiento institucional",
    url: "https://www.gob.pe/minedu",
    tag: "Portal del Estado",
  },
  {
    name: "TITULA",
    fullName: "Consulta de Títulos",
    description: "Verificación de títulos oficiales de institutos",
    url: "https://titula.minedu.gob.pe/",
    tag: "Validez Nacional",
  },
  {
    name: "REGISTRA",
    fullName: "Registro de Matrículas",
    description: "Expediente del estudiante y constancias oficiales",
    url: "https://registra.minedu.gob.pe/",
    tag: "Sistema MINEDU",
  },
  {
    name: "AVANZA",
    fullName: "Carrera Pública Docente",
    description: "Gestión institucional y plana docente calificada",
    url: "https://avanza.minedu.gob.pe/",
    tag: "Gestión Pública",
  },
]

export default function StatsStrip() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 py-10 sm:py-14 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {/* Métricas Institucionales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-[#7114EF]/30 hover:shadow-md transition-all flex flex-col justify-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#7114EF] to-[#1475F7] group-hover:scale-105 transition-transform duration-300">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 mt-2">
                {s.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-xs mx-auto leading-relaxed">
                {s.subtext}
              </div>
            </div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {OFFICIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700/80 shadow-xs hover:border-[#1475F7]/40 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#7114EF] dark:group-hover:text-[#08D9FF] transition-colors">
                      {link.name}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {link.tag}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                    {link.fullName}
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    {link.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[11px] font-semibold text-[#1475F7] dark:text-[#08D9FF]">
                  <span>Acceder al portal</span>
                  <IconExternalLink className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
