import { Career } from "@/types"
import {
  IconComputer,
  IconHeartPulse,
  IconWrench,
  IconBeaker,
  IconLeaf,
  IconAcademicCap,
  IconCheck,
} from "@/components/icons/Icons"

interface CareerModalProps {
  career: Career | null
  onClose: () => void
  onSelectForApply: (careerName: string) => void
}

function getCareerIcon(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return <IconComputer className="w-6 h-6 text-slate-700" />
    case "enfermeria-tecnica":
      return <IconHeartPulse className="w-6 h-6 text-slate-700" />
    case "mecatronica-automotriz":
      return <IconWrench className="w-6 h-6 text-slate-700" />
    case "industrias-alimentos-bebidas":
      return <IconBeaker className="w-6 h-6 text-slate-700" />
    case "produccion-agropecuaria":
      return <IconLeaf className="w-6 h-6 text-slate-700" />
    default:
      return <IconAcademicCap className="w-6 h-6 text-slate-700" />
  }
}

export default function CareerModal({
  career,
  onClose,
  onSelectForApply,
}: CareerModalProps) {
  if (!career) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs font-sans">
      <div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-xs px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-lg bg-slate-100 border border-slate-200">
              {getCareerIcon(career.id)}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase">
                  Código: {career.code}
                </span>
                <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded">
                  {career.modality}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                {career.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors text-sm font-bold"
            aria-label="Cerrar ventana"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Key metadata cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Duración
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                {career.duration}
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Turno de Clases
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                {career.schedule}
              </div>
            </div>
            <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 col-span-2 sm:col-span-1">
              <div className="text-[10px] uppercase font-bold text-slate-500">
                Grado Obtenido
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5 truncate">
                Profesional Técnico
              </div>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
              Perfil Profesional y Descripción
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {career.overview}
            </p>
          </div>

          {/* Modules Curriculum */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-3">
              Módulos Profesionales del Plan de Estudios
            </h4>
            <div className="space-y-3">
              {career.modules.map((m) => (
                <div
                  key={m.number}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex gap-3.5 items-start"
                >
                  <div className="w-8 h-8 rounded-md bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                    M{m.number}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">
                      {m.title}
                    </h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campo Laboral */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 mb-2">
              Campo Ocupacional y Ámbito Laboral
            </h4>
            <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {career.jobOpportunities.map((job) => (
                <li key={job} className="flex items-center gap-2">
                  <span className="text-slate-600 shrink-0">
                    <IconCheck className="w-3.5 h-3.5 text-slate-600" />
                  </span>
                  <span>{job}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            <span className="font-semibold text-slate-800">Titulación:</span>{" "}
            {career.degreeAwarded}
          </div>

          <button
            onClick={() => {
              onSelectForApply(career.name)
              onClose()
            }}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors"
          >
            Inscribirme en este programa →
          </button>
        </div>
      </div>
    </div>
  )
}
