import { useState } from "react"
import {
  IconAcademicCap,
  IconBeaker,
  IconComputer,
  IconHeartPulse,
  IconLeaf,
  IconWrench,
} from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"
import type { Career } from "@/types"

interface CareersSectionProps {
  onOpenCareerModal: (career: Career) => void
  onApplyForCareer: (careerName: string) => void
}

function getCareerIcon(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return <IconComputer className="w-5 h-5 text-slate-700" />
    case "enfermeria-tecnica":
      return <IconHeartPulse className="w-5 h-5 text-slate-700" />
    case "mecatronica-automotriz":
      return <IconWrench className="w-5 h-5 text-slate-700" />
    case "industrias-alimentos-bebidas":
      return <IconBeaker className="w-5 h-5 text-slate-700" />
    case "produccion-agropecuaria":
      return <IconLeaf className="w-5 h-5 text-slate-700" />
    default:
      return <IconAcademicCap className="w-5 h-5 text-slate-700" />
  }
}

export default function CareersSection({
  onOpenCareerModal,
  onApplyForCareer,
}: CareersSectionProps) {
  const [filterModality, setFilterModality] = useState<"Todos" | "Presencial">(
    "Todos",
  )

  const filteredCareers =
    filterModality === "Todos"
      ? CAREERS
      : CAREERS.filter((c) => c.modality === filterModality)

  return (
    <section
      id="carreras"
      className="py-14 sm:py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Oferta Educativa Superior
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Programas de Estudio Profesionales
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-2xl mt-2 leading-relaxed">
              Formación técnica de 3 años estructurada en 3 módulos
              profesionales con certificación anual y titulación oficial a
              nombre de la nación.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilterModality("Todos")}
              className={`px-3 py-1.5 min-h-9 rounded-md text-xs font-semibold transition-colors ${
                filterModality === "Todos"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Todos ({CAREERS.length})
            </button>
            <button
              onClick={() => setFilterModality("Presencial")}
              className={`px-3 py-1.5 min-h-9 rounded-md text-xs font-semibold transition-colors ${
                filterModality === "Presencial"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Presencial (5)
            </button>
          </div>
        </div>

        {/* Careers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-44 sm:h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={career.image}
                    alt={career.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {career.code}
                  </span>
                  <span className="absolute top-3 right-3 bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-200 text-[10px] font-semibold px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
                    {career.modality}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-md">
                      {getCareerIcon(career.id)}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {career.duration}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {career.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {career.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">
                        Módulos:
                      </strong>{" "}
                      3 módulos formativos
                    </div>
                    <div>
                      <strong className="text-slate-700 dark:text-slate-300">
                        Turno:
                      </strong>{" "}
                      Mañana (7:30 am – 1:15 pm)
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions with accessible touch targets */}
              <div className="p-5 sm:p-6 pt-0 flex items-center gap-2 sm:gap-2.5">
                <button
                  onClick={() => onOpenCareerModal(career)}
                  className="flex-1 min-h-11 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs py-2 px-3 rounded-lg transition-colors text-center"
                >
                  Plan de Estudios
                </button>
                <button
                  onClick={() => onApplyForCareer(career.name)}
                  className="min-h-11 flex items-center justify-center bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white font-semibold text-xs px-3.5 sm:px-4 py-2 rounded-lg transition-colors shrink-0 active:scale-[0.98]"
                >
                  Inscribirse →
                </button>
              </div>
            </div>
          ))}

          {/* Academic Guidance Card */}
          <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs transition-colors">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-slate-800 flex items-center justify-center">
                <IconAcademicCap className="w-5 h-5 text-amber-500 dark:text-amber-400" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Orientación Vocacional y Académica
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Si aún no decides qué programa de estudio elegir, nuestros
                coordinadores pedagógicos te brindan asesoría personalizada
                según tu perfil de egreso escolar y vocación.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
              <a
                href="/postular"
                className="flex items-center justify-center min-h-11 text-center bg-slate-900 dark:bg-sky-600 text-white font-bold text-xs py-2.5 px-4 rounded-lg hover:bg-slate-800 dark:hover:bg-sky-500 transition-colors"
              >
                Solicitar Orientación Gratuita
              </a>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center">
                Atención presencial: Jr. Córdova N° 650
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
