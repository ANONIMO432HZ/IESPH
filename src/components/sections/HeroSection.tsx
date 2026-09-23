import heroGraduate from "@/assets/campus/hero-graduate.jpg"
import {
  IconAcademicCap,
  IconBeaker,
  IconComputer,
  IconHeartPulse,
  IconLeaf,
  IconWrench,
} from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"
import { STATE_PLATFORMS } from "@/data/institution"
import type { Career } from "@/types"

interface HeroSectionProps {
  onCareerSelect?: (careerName: string) => void
  onOpenCareerModal?: (career: Career) => void
  onOpenApplyModal?: () => void
}

function getCareerIcon(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return (
        <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[#7114EF] dark:text-purple-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconComputer className="w-6 h-6" />
        </div>
      )
    case "enfermeria-tecnica":
      return (
        <div className="w-12 h-12 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-[#1475F7] dark:text-sky-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconHeartPulse className="w-6 h-6" />
        </div>
      )
    case "mecatronica-automotriz":
      return (
        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconWrench className="w-6 h-6" />
        </div>
      )
    case "industrias-alimentos-bebidas":
      return (
        <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconBeaker className="w-6 h-6" />
        </div>
      )
    case "produccion-agropecuaria":
      return (
        <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconLeaf className="w-6 h-6" />
        </div>
      )
    default:
      return (
        <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xs">
          <IconAcademicCap className="w-6 h-6" />
        </div>
      )
  }
}

export default function HeroSection({
  onCareerSelect,
  onOpenCareerModal,
  onOpenApplyModal,
}: HeroSectionProps) {
  return (
    <section className="relative font-sans bg-[#0c1836] text-white overflow-hidden">
      {/* ── Main Hero Stage ────────────────────────────────────────────── */}
      <div className="relative pt-12 pb-24 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36 bg-linear-to-br from-[#0c1938] via-[#102d6b] to-[#45187e]">
        {/* Dynamic atmospheric lighting */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#1475F7]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-[#7114EF]/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
            {/* Left Content (Text inspired by Image 1) */}
            <div className="space-y-5 text-left z-10">
              {/* Institutional Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#08D9FF] animate-pulse" />
                <span>INSTITUTO DE EDUCACIÓN SUPERIOR PÚBLICO "HUANTA"</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black text-white leading-[1.12] tracking-tight">
                Construye tu futuro con{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-cyan-200 to-indigo-200">
                  formación de calidad
                </span>
              </h1>

              {/* Subtitle / Description */}
              <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-xl leading-relaxed font-normal">
                El Instituto de Educación Superior Público Huanta te ofrece una
                formación técnica de excelencia, diseñada para responder a las
                demandas del sector productivo y ayudarte a alcanzar tus metas
                profesionales.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenApplyModal?.()}
                  className="btn-pill-gradient text-white font-bold text-xs sm:text-sm px-6 py-3.5 shadow-xl shadow-purple-950/40 hover:shadow-purple-600/30 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Postula en Línea</span>
                  <span>→</span>
                </button>

                <a
                  href="#carreras"
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 hover:border-white/40 transition-all cursor-pointer"
                >
                  Conocer las 5 Carreras
                </a>
              </div>

              {/* Micro Indicators */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#08D9FF]">✔</span> Título Oficial a
                  Nombre de la Nación
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#08D9FF]">✔</span> 100% Gratuito y
                  Licenciado
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#08D9FF]">✔</span> 3 Años de Duración
                </span>
              </div>
            </div>

            {/* Right: Smiling Graduate Student Photo (from Image 1 / OKOK.jpg) */}
            <div className="relative flex justify-center lg:justify-end z-10">
              <div className="relative w-72 sm:w-88 lg:w-[420px] aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/15 bg-linear-to-b from-blue-900/40 to-purple-950/60 group">
                <img
                  src={heroGraduate}
                  alt="Estudiante graduado con toga y título oficial del IESPH"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0c1836]/90 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#08D9FF]">
                      Orgullo IESPH
                    </span>
                    <div className="text-sm font-black">
                      Titulados Insertados en el Mercado Laboral
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 5 Floating Program Cards (Overlapping the Hero as in Image 1) ── */}
      <div className="relative -mt-16 sm:-mt-20 z-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CAREERS.map((career) => (
            <div
              key={career.id}
              onClick={() => {
                if (onOpenCareerModal) onOpenCareerModal(career)
                if (onCareerSelect) onCareerSelect(career.name)
              }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:-translate-y-2.5 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center justify-between min-h-[160px]"
            >
              {/* Icon Container */}
              <div className="mb-3">{getCareerIcon(career.id)}</div>

              {/* Career Title */}
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7114EF] dark:group-hover:text-[#08D9FF] transition-colors leading-snug line-clamp-2">
                {career.name}
              </h3>

              {/* Action Hint */}
              <span className="text-[11px] text-slate-400 dark:text-slate-500 font-semibold mt-2 group-hover:text-purple-600 dark:group-hover:text-sky-400 transition-colors">
                Ver Carrera →
              </span>
            </div>
          ))}
        </div>

        {/* ── Official Institutional Platforms Strip (Underneath Cards as in Image 1) ── */}
        <div className="mt-8 pt-6 pb-4 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-between gap-6 text-slate-300">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Enlaces Oficiales del Estado:
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {STATE_PLATFORMS.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                title={platform.description}
                className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:scale-105 transition-all"
              >
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="h-7 sm:h-8 w-auto object-contain brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
