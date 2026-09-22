import {
  IconAcademicCap,
  IconBeaker,
  IconCheck,
  IconComputer,
  IconHeartPulse,
  IconLeaf,
  IconWrench,
} from "@/components/icons/Icons"
import type { Career } from "@/types"

interface CareerModalProps {
  career: Career | null
  onClose: () => void
  onSelectForApply: (careerName: string) => void
}

function getCareerIcon(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return (
        <IconComputer className="w-6 h-6 text-blue-600 dark:text-sky-300" />
      )
    case "enfermeria-tecnica":
      return (
        <IconHeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-300" />
      )
    case "mecatronica-automotriz":
      return (
        <IconWrench className="w-6 h-6 text-amber-600 dark:text-amber-300" />
      )
    case "industrias-alimentos-bebidas":
      return (
        <IconBeaker className="w-6 h-6 text-purple-600 dark:text-purple-300" />
      )
    case "produccion-agropecuaria":
      return (
        <IconLeaf className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />
      )
    default:
      return (
        <IconAcademicCap className="w-6 h-6 text-indigo-600 dark:text-indigo-300" />
      )
  }
}

export default function CareerModal({
  career,
  onClose,
  onSelectForApply,
}: CareerModalProps) {
  if (!career) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 dark:bg-black/75 backdrop-blur-xs font-sans">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain border border-slate-200 dark:border-slate-800 relative text-slate-900 dark:text-white transition-colors"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 z-10">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <span className="p-2 sm:p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0">
              {getCareerIcon(career.id)}
            </span>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 uppercase">
                  Código: {career.code}
                </span>
                <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded">
                  {career.modality}
                </span>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                {career.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors text-base font-bold shrink-0"
            aria-label="Cerrar ventana"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 sm:space-y-6">
          {/* Key metadata cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-lg p-2.5 sm:p-3 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Duración
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {career.duration}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-lg p-2.5 sm:p-3 border border-slate-200 dark:border-slate-700">
              <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Turno de Clases
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {career.schedule}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-lg p-2.5 sm:p-3 border border-slate-200 dark:border-slate-700 col-span-2 sm:col-span-1">
              <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400">
                Grado Obtenido
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5 truncate">
                Profesional Técnico
              </div>
            </div>
          </div>

          {career.schedulePdf && (
            <div className="flex items-center justify-between p-3 rounded-xl bg-blue-50/70 dark:bg-sky-950/30 border border-blue-200/80 dark:border-sky-800/50 text-xs">
              <span className="text-slate-700 dark:text-slate-300 font-medium">
                Horario lectivo oficial del periodo académico vigente:
              </span>
              <a
                href={career.schedulePdf}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-semibold text-xs shadow-xs transition-colors shrink-0"
              >
                <span>Descargar Horario PDF</span>
                <span>↓</span>
              </a>
            </div>
          )}

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Perfil Profesional y Descripción
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {career.overview}
            </p>
          </div>

          {/* Modules Curriculum */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Módulos Profesionales del Plan de Estudios
            </h4>
            <div className="space-y-2.5 sm:space-y-3">
              {career.modules.map((m) => (
                <div
                  key={m.number}
                  className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3.5 sm:p-4 flex gap-3 sm:gap-3.5 items-start"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-slate-900 dark:bg-sky-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    M{m.number}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {m.title}
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campo Laboral */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Campo Ocupacional y Ámbito Laboral
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
              {career.jobOpportunities.map((job) => (
                <li key={job} className="flex items-center gap-2">
                  <span className="text-slate-600 dark:text-slate-400 shrink-0">
                    <IconCheck className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                  </span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-600 dark:text-slate-400 text-center sm:text-left">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Titulación:
            </span>{" "}
            {career.degreeAwarded}
          </div>

          <button
            onClick={() => {
              onSelectForApply(career.name)
              onClose()
            }}
            className="w-full sm:w-auto min-h-11 flex items-center justify-center bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Inscribirme en este programa →
          </button>
        </div>
      </div>
    </div>
  )
}
