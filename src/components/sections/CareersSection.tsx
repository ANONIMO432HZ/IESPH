import { CarFront, FlaskConical, Stethoscope, TreePine } from "lucide-react"
import { useState } from "react"
import {
  IconAcademicCap,
  IconArrowRight,
  IconCheck,
  IconComputer,
  IconWhatsApp,
} from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"
import { INSTITUTION_CONTACT } from "@/data/institution"
import { navigateTo } from "@/utils/navigation"

interface CareersSectionProps {
  onApplyForCareer?: (careerName: string) => void
}

function getCareerIcon(id: string, isSelected = false) {
  const iconBase = "w-5 h-5 shrink-0"

  if (isSelected) {
    switch (id) {
      case "diseno-programacion-web":
        return (
          <IconComputer className={`${iconBase} text-white drop-shadow-xs`} />
        )
      case "enfermeria-tecnica":
        return (
          <Stethoscope className={`${iconBase} text-white drop-shadow-xs`} />
        )
      case "mecatronica-automotriz":
        return <CarFront className={`${iconBase} text-white drop-shadow-xs`} />
      case "industrias-alimentos-bebidas":
        return (
          <FlaskConical className={`${iconBase} text-white drop-shadow-xs`} />
        )
      case "produccion-agropecuaria":
        return <TreePine className={`${iconBase} text-white drop-shadow-xs`} />
      default:
        return (
          <IconAcademicCap
            className={`${iconBase} text-white drop-shadow-xs`}
          />
        )
    }
  }

  switch (id) {
    case "diseno-programacion-web":
      return (
        <IconComputer
          className={`${iconBase} text-[#7114EF] dark:text-sky-300`}
        />
      )
    case "enfermeria-tecnica":
      return (
        <Stethoscope
          className={`${iconBase} text-rose-600 dark:text-rose-300`}
        />
      )
    case "mecatronica-automotriz":
      return (
        <CarFront
          className={`${iconBase} text-amber-600 dark:text-amber-300`}
        />
      )
    case "industrias-alimentos-bebidas":
      return (
        <FlaskConical
          className={`${iconBase} text-purple-600 dark:text-purple-300`}
        />
      )
    case "produccion-agropecuaria":
      return (
        <TreePine
          className={`${iconBase} text-emerald-600 dark:text-emerald-300`}
        />
      )
    default:
      return (
        <IconAcademicCap
          className={`${iconBase} text-indigo-600 dark:text-indigo-300`}
        />
      )
  }
}

export default function CareersSection({
  onApplyForCareer,
}: CareersSectionProps) {
  const [selectedCareerId, setSelectedCareerId] = useState<string>(
    CAREERS[0].id,
  )

  const activeCareer =
    CAREERS.find((c) => c.id === selectedCareerId) ?? CAREERS[0]

  return (
    <section
      id="carreras"
      className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header matching reference capture */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ofrecemos <span className="text-[#1475F7]">Educación Técnica</span>{" "}
            de Alta Calidad
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Formación práctica de 3 años, estructurada en 3 módulos formativos
            con certificación progresiva anual y titulación oficial a nombre de
            la Nación.
          </p>
        </div>

        {/* ── Career Selector Tabs ──────────────────────────────────── */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-14">
          {CAREERS.map((c) => {
            const isSelected = c.id === selectedCareerId
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCareerId(c.id)}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                <span>{getCareerIcon(c.id, isSelected)}</span>
                <span className="truncate max-w-45 sm:max-w-none">
                  {c.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Active Career Feature Card (Matching Reference Layout) ─── */}
        <div className="bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-sm mb-16 sm:mb-20">
          <div className="grid lg:grid-cols-[1.1fr_1.2fr] gap-8 lg:gap-12 items-center">
            {/* Left: Image with Decorative Grid */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 sm:aspect-16/10 border border-slate-200 dark:border-slate-700 bg-slate-900">
                <img
                  src={activeCareer.image}
                  alt={activeCareer.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                    {activeCareer.code} • Licenciado por MINEDU
                  </span>
                  <div className="text-white text-sm font-semibold mt-0.5">
                    {activeCareer.degreeAwarded}
                  </div>
                </div>
              </div>

              {/* Decorative accent dots */}
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-radial from-[#7114EF]/30 to-transparent pointer-events-none -z-10"
                aria-hidden="true"
              />
            </div>

            {/* Right: Career Details & Action Buttons */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  Código: {activeCareer.code}
                </span>
                <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {activeCareer.duration}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {activeCareer.name}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeCareer.overview}
              </p>

              {/* Modular Certification Bullets */}
              <div className="mt-5 space-y-2.5">
                {activeCareer.modules.map((m) => (
                  <div
                    key={m.number}
                    className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <IconCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Módulo {m.number}:
                      </strong>{" "}
                      {m.title}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons: Navigate to Full Page or Apply */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigateTo(`/carreras/${activeCareer.id}`)}
                  className="bg-linear-to-r from-[#7114EF] to-[#1475F7] hover:brightness-110 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] flex items-center gap-2 cursor-pointer"
                >
                  <span>Ver Carrera Completa</span>
                  <IconArrowRight className="w-4 h-4" />
                </button>

                {onApplyForCareer && (
                  <button
                    onClick={() => onApplyForCareer(activeCareer.name)}
                    className="bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl transition-colors cursor-pointer"
                  >
                    Inscribirse
                  </button>
                )}

                <a
                  href={`https://wa.me/${INSTITUTION_CONTACT.whatsapp || "51966322296"}?text=${encodeURIComponent(
                    `Hola IESPH, deseo información oficial sobre la carrera de ${activeCareer.name}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-semibold"
                  title="Consultar por WhatsApp"
                >
                  <IconWhatsApp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Académicos / Entorno Institucional (3 Cards from Screenshot) ── */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#7114EF] uppercase tracking-wider">
              Campus y Servicios
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
              Académicos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: 5+ Laboratorios */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Educación Práctica
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Talleres y laboratorios equipados con tecnología moderna para
                  garantizar el aprendizaje vivencial.
                </p>
              </div>
              <div className="bg-[#7114EF] text-white p-3 text-center font-extrabold text-sm sm:text-base">
                5+ Laboratorios Especializados
              </div>
              <div className="p-5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7114EF]" />
                  <span>Laboratorio de Cómputo e Informática</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7114EF]" />
                  <span>Centro de Simulación Clínica de Enfermería</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7114EF]" />
                  <span>Taller Automotriz y Banco de Pruebas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7114EF]" />
                  <span>Planta Piloto de Industrias de Alimentos</span>
                </div>
              </div>
            </div>

            {/* Card 2: Biblioteca */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Biblioteca
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Amplia colección bibliográfica física y digital orientada a la
                  investigación tecnológica formativa.
                </p>
              </div>
              <div className="bg-[#1475F7] text-white p-3 text-center font-extrabold text-sm sm:text-base">
                500+ Libros y Recursos Digitales
              </div>
              <div className="p-5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1475F7]" />
                  <span>Libros técnicos de especialidad actualizados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1475F7]" />
                  <span>Sala de lectura y estudio silencioso</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1475F7]" />
                  <span>Acceso a repositorios académicos online</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1475F7]" />
                  <span>Préstamo de textos para estudiantes</span>
                </div>
              </div>
            </div>

            {/* Card 3: Docentes */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <div className="p-6">
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Red Educativa
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Docentes profesionales calificados con amplia experiencia
                  laboral en el sector productivo regional.
                </p>
              </div>
              <div className="bg-[#0b1e42] text-white p-3 text-center font-extrabold text-sm sm:text-base">
                100% Docentes Titulados
              </div>
              <div className="p-5 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08D9FF]" />
                  <span>Docentes especialistas colegiados</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08D9FF]" />
                  <span>Capacitación pedagógica y tecnológica continua</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08D9FF]" />
                  <span>Convenios de prácticas con empresas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#08D9FF]" />
                  <span>Asesoría y tutoría personalizada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
