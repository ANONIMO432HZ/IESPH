import { useEffect, useState } from "react"
import campusFrontis from "@/assets/campus/frontis-principal.jpg"
import organigramaImg from "@/assets/campus/organigrama-institucional.png"
import studentsFormation from "@/assets/campus/students-formation.jpg"
import {
  IconBuilding,
  IconCheck,
  IconClock,
  IconMapPin,
  IconShieldCheck,
} from "@/components/icons/Icons"
import {
  AUTHORITIES,
  CAMPUS_LOCATIONS,
  FACULTY_LIST,
  getYearsOfTrajectory,
  HISTORICAL_MILESTONES,
  INSTITUTION_CONTACT,
  INSTITUTION_VALUES,
  INSTITUTIONAL_PRESENTATION,
} from "@/data/institution"

export type InstitutionalTab =
  | "presentacion"
  | "mision-vision"
  | "organizacion"
  | "plana-jerarquica"
  | "plana-docente"
  | "local"

interface InstitutionalModalProps {
  isOpen: boolean
  initialTab?: InstitutionalTab
  onClose: () => void
}

const TABS: { id: InstitutionalTab; label: string }[] = [
  { id: "presentacion", label: "Presentación" },
  { id: "mision-vision", label: "Visión, Misión y Valores" },
  { id: "organizacion", label: "Organización Institucional" },
  { id: "plana-jerarquica", label: "Plana jerárquica" },
  { id: "plana-docente", label: "Plana docente" },
  { id: "local", label: "Local" },
]

export default function InstitutionalModal({
  isOpen,
  initialTab = "presentacion",
  onClose,
}: InstitutionalModalProps) {
  const [activeTab, setActiveTab] = useState<InstitutionalTab>(initialTab)
  const [selectedFacultyProgram, setSelectedFacultyProgram] =
    useState<string>("todos")

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab])

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const filteredFaculty =
    selectedFacultyProgram === "todos"
      ? FACULTY_LIST
      : FACULTY_LIST.filter((f) => f.programId === selectedFacultyProgram)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/75 backdrop-blur-sm font-sans">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800 relative text-slate-900 dark:text-white transition-colors animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="institutional-modal-title"
      >
        {/* Top Gradient Bar */}
        <div className="h-1.5 w-full bg-linear-to-r from-[#7114EF] via-[#1475F7] to-[#08D9FF]" />

        {/* Modal Header */}
        <div className="px-5 sm:px-8 pt-5 pb-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                Instituto Licenciado MINEDU
              </span>
              <span className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                {getYearsOfTrajectory()} Años de Trayectoria
              </span>
            </div>
            <h2
              id="institutional-modal-title"
              className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight"
            >
              Nosotros — IES Público "Huanta"
            </h2>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Submenu Navigation Tabs */}
        <div className="px-4 sm:px-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 overflow-x-auto scrollbar-none shrink-0">
          <nav className="flex items-center gap-1 sm:gap-2 min-w-max py-2 text-xs font-bold">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  type="button"
                  className={`px-3 py-2 rounded-lg transition-all relative cursor-pointer ${
                    isActive
                      ? "text-white bg-linear-to-r from-[#7114EF] to-[#1475F7] shadow-sm font-black"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* 1. PRESENTACIÓN */}
          {activeTab === "presentacion" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                    Reseña Histórica Oficial
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {INSTITUTIONAL_PRESENTATION.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    {INSTITUTIONAL_PRESENTATION.trajectorySummary}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    {INSTITUTIONAL_PRESENTATION.commitmentText}
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group">
                  <img
                    src={campusFrontis}
                    alt="Frontis de la Sede Principal IESPH"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-300">
                        {INSTITUTIONAL_PRESENTATION.creationResolution}
                      </div>
                      <div className="text-sm font-black">
                        Sede Jr. Córdova N° 650, Huanta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hitos Históricos en Línea de Tiempo */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <IconClock className="w-4 h-4 text-purple-600 dark:text-sky-400" />
                  <span>Hitos de Evolución Institucional</span>
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {HISTORICAL_MILESTONES.map((m) => (
                    <div
                      key={m.year}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-purple-600 dark:text-sky-400">
                          {m.year}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          {m.resolution}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                        {m.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. VISIÓN, MISIÓN Y VALORES */}
          {activeTab === "mision-vision" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/70 dark:border-purple-800/40 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                      Nuestra Misión Institucional
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify font-medium">
                      "{INSTITUTION_VALUES.mission}"
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/70 dark:border-blue-800/40 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-sky-300">
                      Nuestra Visión al 2031
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed text-justify font-medium">
                      "{INSTITUTION_VALUES.vision2031}"
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                  <img
                    src={studentsFormation}
                    alt="Estudiantes y graduados del IESPH"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              {/* Valores Institucionales */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <IconShieldCheck className="w-4 h-4 text-purple-600 dark:text-sky-400" />
                  <span>Valores Institucionales Fundamentales</span>
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white mb-1">
                      Calidad y Excelencia
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Compromiso continuo con los más altos estándares
                      pedagógicos y técnicos.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white mb-1">
                      Ética e Integridad
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Transparencia, honestidad y vocación de servicio a la
                      sociedad.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white mb-1">
                      Innovación y Emprendimiento
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Desarrollo de proyectos productivos con impacto económico
                      regional.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                    <div className="font-bold text-slate-900 dark:text-white mb-1">
                      Cuidado del Medio Ambiente
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Sostenibilidad y preservación ecológica en la actividad
                      formativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. ORGANIZACIÓN INSTITUCIONAL */}
          {activeTab === "organizacion" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                  Estructura de Gestión y Gobierno
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Organigrama Institucional Oficial
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                  El organigrama del Instituto de Educación Superior Público
                  "Huanta" refleja el modelo de gobernanza participativa,
                  articulando la Dirección General con la Unidad Académica,
                  Secretaría, Gestión de Calidad y las 5 Coordinaciones de
                  Carrera.
                </p>
              </div>

              {/* Organigrama Image with zoom preview */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-3 sm:p-6 shadow-md overflow-hidden flex flex-col items-center">
                <img
                  src={organigramaImg}
                  alt="Organigrama Oficial del Instituto de Educación Superior Público Huanta"
                  className="max-w-full h-auto rounded-lg object-contain drop-shadow-sm"
                />
                <span className="text-[11px] text-slate-400 dark:text-slate-500 mt-3 text-center">
                  Aprobado según normativa MINEDU y Manual de Puestos y Procesos
                  (MPP).
                </span>
              </div>
            </div>
          )}

          {/* 4. PLANA JERÁRQUICA */}
          {activeTab === "plana-jerarquica" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                  Directorio Institucional
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Plana Jerárquica y Directiva
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Equipo directivo responsable de la gestión pedagógica,
                  administrativa y de calidad.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {AUTHORITIES.map((auth) => (
                  <div
                    key={auth.name}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2 hover:border-purple-300 dark:hover:border-purple-500 transition-colors"
                  >
                    <div className="text-xs font-black text-purple-700 dark:text-sky-400">
                      {auth.role}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {auth.name}
                    </div>
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px] space-y-1">
                      {auth.email && (
                        <div className="text-slate-500 dark:text-slate-400 truncate">
                          ✉ {auth.email}
                        </div>
                      )}
                      {auth.phone && (
                        <div className="text-slate-500 dark:text-slate-400">
                          📞 {auth.phone}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. PLANA DOCENTE */}
          {activeTab === "plana-docente" && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                    Cuerpo Académico
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    Plana Docente por Programa de Estudio
                  </h3>
                </div>

                {/* Filter by Career */}
                <select
                  value={selectedFacultyProgram}
                  onChange={(e) => setSelectedFacultyProgram(e.target.value)}
                  className="text-xs font-semibold px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  <option value="todos">
                    Todos los programas ({FACULTY_LIST.length})
                  </option>
                  <option value="diseno-programacion-web">
                    Diseño y Programación Web
                  </option>
                  <option value="enfermeria-tecnica">Enfermería Técnica</option>
                  <option value="mecatronica-automotriz">
                    Mecatrónica Automotriz
                  </option>
                  <option value="industrias-alimentos-bebidas">
                    Industrias de Alimentos
                  </option>
                  <option value="produccion-agropecuaria">
                    Producción Agropecuaria
                  </option>
                </select>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900">
                {filteredFaculty.map((teacher) => (
                  <div
                    key={`${teacher.programId}-${teacher.name}`}
                    className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300">
                        {teacher.programName}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {teacher.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Asignaturas:{" "}
                        <span className="text-slate-700 dark:text-slate-300 font-medium">
                          {teacher.courses.join(", ")}
                        </span>
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] text-slate-400 dark:text-slate-500 block">
                        {teacher.academicPeriod}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. LOCAL */}
          {activeTab === "local" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-sky-400">
                  Infraestructura Educativa
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Nuestros Locales y Sedes Institucionales
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Instalaciones preparadas para la formación presencial teórica
                  y práctica.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {CAMPUS_LOCATIONS.map((loc) => (
                  <div
                    key={loc.name}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold text-purple-600 dark:text-sky-400 uppercase tracking-wider">
                        {loc.tag}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {loc.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <IconMapPin className="w-3.5 h-3.5 text-purple-600 dark:text-sky-400 shrink-0" />
                        <span>{loc.address}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                      {loc.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-200/80 dark:border-slate-700/80">
                      <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 block">
                        Equipamiento y Ambientes:
                      </span>
                      {loc.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
                        >
                          <IconCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-8 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/40 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-[11px]">
            <IconBuilding className="w-3.5 h-3.5 text-purple-600 dark:text-sky-400 shrink-0" />
            <span>
              {INSTITUTION_CONTACT.address} · Atención:{" "}
              {INSTITUTION_CONTACT.schedule}
            </span>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  )
}
