interface CtaBannerProps {
  onApplyClick: () => void
}

export default function CtaBanner({ onApplyClick }: CtaBannerProps) {
  return (
    <section className="bg-linear-to-r from-blue-50/90 via-sky-50 to-indigo-50/90 dark:from-[#0F223A] dark:via-[#0c1b2f] dark:to-[#0A1626] py-12 sm:py-16 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 font-sans transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
        <span className="inline-block text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
          Admisión 2026 · Inscripciones Abiertas
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Inicia tu formación profesional en el Instituto de Educación Superior
          Público "Huanta"
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Accede a educación superior licenciada por el MINEDU, con talleres
          prácticos, docentes calificados y título oficial en 3 años.
        </p>

        <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onApplyClick}
            className="w-full sm:w-auto min-h-11 flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-xs active:scale-[0.99] transition-all"
          >
            Inscribirme en el Proceso de Admisión
          </button>
          <a
            href="/carreras"
            className="w-full sm:w-auto min-h-11 flex items-center justify-center bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 shadow-xs dark:shadow-none transition-colors"
          >
            Revisar Programas de Estudio
          </a>
        </div>
      </div>
    </section>
  )
}
