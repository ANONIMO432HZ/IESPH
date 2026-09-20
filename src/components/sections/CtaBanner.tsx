interface CtaBannerProps {
  onApplyClick: () => void
}

export default function CtaBanner({ onApplyClick }: CtaBannerProps) {
  return (
    <section className="bg-[#0F223A] py-16 text-white border-t border-slate-800 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="inline-block text-amber-400 text-xs font-semibold uppercase tracking-wider">
          Admisión 2026 · Inscripciones Abiertas
        </span>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Inicia tu formación profesional en el Instituto de Educación Superior
          Público "Huanta"
        </h2>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Accede a educación superior licenciada por el MINEDU, con talleres
          prácticos, docentes calificados y título oficial en 3 años.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onApplyClick}
            className="bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-colors"
          >
            Inscribirme en el Proceso de Admisión
          </button>
          <a
            href="#carreras"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg border border-slate-700 transition-colors"
          >
            Revisar Programas de Estudio
          </a>
        </div>
      </div>
    </section>
  )
}
