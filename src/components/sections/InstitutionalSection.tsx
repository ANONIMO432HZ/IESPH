import { useState } from "react"
import campusFrontis from "@/assets/campus/frontis-principal.jpg"
import organigramaImg from "@/assets/campus/organigrama-institucional.png"
import {
  IconAcademicCap,
  IconBuilding,
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShieldCheck,
  IconUsers,
} from "@/components/icons/Icons"
import { AUTHORITIES, FACULTY_LIST } from "@/data/institution"

const PROGRAM_FILTERS = [
  { id: "all", label: "Todos los Docentes" },
  { id: "diseno-programacion-web", label: "Diseño y Programación Web" },
  { id: "enfermeria-tecnica", label: "Enfermería Técnica" },
  { id: "mecatronica-automotriz", label: "Mecatrónica Automotriz" },
  { id: "industrias-alimentos-bebidas", label: "Industrias Alimentarias" },
  { id: "produccion-agropecuaria", label: "Producción Agropecuaria" },
]

export default function InstitutionalSection() {
  const [selectedProgram, setSelectedProgram] = useState("all")
  const [zoomOrganigram, setZoomOrganigram] = useState(false)

  const filteredFaculty =
    selectedProgram === "all"
      ? FACULTY_LIST
      : FACULTY_LIST.filter((teacher) => teacher.programId === selectedProgram)

  return (
    <div className="font-sans">
      {/* ══════════════════════════════════════════════════════════════════
          1. ORGANIZACIÓN INSTITUCIONAL (#organizacion)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="organizacion"
        className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-[#7114EF] dark:text-purple-300 text-xs font-bold uppercase tracking-wider mb-2">
              <IconBuilding className="w-3.5 h-3.5" />
              <span>Gobernanza y Estructura Orgánica</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Organización Institucional
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Estructura formal aprobada según la Ley N° 30512 que articula la
              dirección, gestión pedagógica, investigación e inserción laboral.
            </p>
          </div>

          {/* Organigrama Interactivo con Zoom */}
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-4 sm:p-8 shadow-xl mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Organigrama Estructural Oficial del IESPH
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Resolución Directoral de Aprobación de Instrumentos de Gestión
                  Interna
                </p>
              </div>
              <button
                type="button"
                onClick={() => setZoomOrganigram(!zoomOrganigram)}
                className="px-4 py-2 rounded-xl bg-purple-100 hover:bg-purple-200 dark:bg-purple-950 dark:hover:bg-purple-900 text-[#7114EF] dark:text-purple-300 text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 shrink-0"
              >
                <span>
                  {zoomOrganigram ? "Reducir Vista" : "Ampliar Organigrama"}
                </span>
                <span>🔍</span>
              </button>
            </div>

            <div
              className={`rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white transition-all duration-300 flex justify-center ${
                zoomOrganigram
                  ? "max-h-212.5 overflow-auto cursor-zoom-out p-4"
                  : "max-h-120 p-2 cursor-zoom-in"
              }`}
              onClick={() => setZoomOrganigram(!zoomOrganigram)}
            >
              <img
                src={organigramaImg}
                alt="Organigrama Estructural del Instituto de Educación Superior Público Huanta"
                className={`w-auto object-contain transition-transform duration-300 ${
                  zoomOrganigram ? "scale-100 min-w-187.5" : "h-full max-h-110"
                }`}
              />
            </div>
          </div>

          {/* Unidades Orgánicas Clave */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#7114EF] dark:text-purple-300 flex items-center justify-center font-bold mb-3">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Dirección General
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Máxima autoridad ejecutiva y pedagógica responsable de la
                conducción estratégica, licenciamiento y representación
                institucional.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-[#1475F7] dark:text-sky-300 flex items-center justify-center font-bold mb-3">
                <IconAcademicCap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Unidad Académica
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Supervisa y planifica la ejecución curricular de los 5 programas
                de estudio, cumplimiento de sílabos y evaluación docente.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 flex items-center justify-center font-bold mb-3">
                <IconShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Área de Calidad
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Garantiza el sostenimiento de las Condiciones Básicas de Calidad
                (CBC) y lidera los planes de mejora continua ante el MINEDU.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-bold mb-3">
                <IconBuilding className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Investigación e Innovación
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Fomenta proyectos de investigación aplicada y desarrollo
                tecnológico vinculados a las cadenas productivas de la región.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold mb-3">
                <IconUsers className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Bienestar y Empleabilidad
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Brinda servicios de orientación psicopedagógica, tópico de
                salud, tutoría y articulación con empresas vía bolsa AVANZA.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-bold mb-3">
                <IconClock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Formación Continua
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                Cursos de extensión, actualización profesional y certificaciones
                modulares para estudiantes, egresados y el público general.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. PLANA JERÁRQUICA Y AUTORIDADES (#plana-jerarquica)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="plana-jerarquica"
        className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-[#1475F7] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
              <IconUsers className="w-3.5 h-3.5" />
              <span>Cuerpo Directivo Institucional</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Plana Jerárquica
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Autoridades, coordinadores de programas y jefes de unidad que
              lideran la gestión institucional y pedagógica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {AUTHORITIES.map((authority) => (
              <div
                key={authority.role + authority.name}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/60 text-[#7114EF] dark:text-purple-300 mb-3 border border-purple-200/50 dark:border-purple-800/50">
                    {authority.role}
                  </span>
                  <h3 className="text-sm font-black text-slate-900 dark:text-white group-hover:text-[#7114EF] dark:group-hover:text-sky-400 transition-colors">
                    {authority.name}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                  {authority.email && (
                    <a
                      href={`mailto:${authority.email}`}
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-sky-300 transition-colors truncate"
                      title={authority.email}
                    >
                      <IconMail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{authority.email}</span>
                    </a>
                  )}

                  {authority.phone && (
                    <a
                      href={`tel:${authority.phone.replace(/\s+/g, "")}`}
                      className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                    >
                      <IconPhone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{authority.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. PLANA DOCENTE (#plana-docente)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="plana-docente"
        className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
              <IconAcademicCap className="w-3.5 h-3.5" />
              <span>Docentes Calificados Periodo 2026-I</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Plana Docente Especializada
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Profesionales e ingenieros titulados con amplia experiencia
              técnica en el sector productivo y vocación pedagógica.
            </p>
          </div>

          {/* Filtros de Carrera */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {PROGRAM_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedProgram(filter.id)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedProgram === filter.id
                    ? "bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white shadow-md"
                    : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid de Docentes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredFaculty.map((teacher) => (
              <div
                key={teacher.name + teacher.programId}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-950/70 text-[#7114EF] dark:text-purple-300">
                      {teacher.programName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {teacher.academicPeriod}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {teacher.name}
                  </h3>

                  <div className="mt-3">
                    <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1.5">
                      Unidades Didácticas / Cursos:
                    </span>
                    <ul className="space-y-1">
                      {teacher.courses.map((course) => (
                        <li
                          key={course}
                          className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-300 leading-snug"
                        >
                          <span className="text-emerald-500 font-bold shrink-0">
                            •
                          </span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. LOCAL E INFRAESTRUCTURA (#local)
          ══════════════════════════════════════════════════════════════════ */}
      <section
        id="local"
        className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-950/50 text-[#1475F7] dark:text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
              <IconMapPin className="w-3.5 h-3.5" />
              <span>Infraestructura y Ambientes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Sede Central Institucional
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Espacio educativo principal con laboratorios de cómputo, talleres
              mecatrónicos, clínica simulada y aulas pedagógicas modernizadas.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-xl">
            {/* Visual Header */}
            <div className="relative h-64 sm:h-80 bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <img
                src={campusFrontis}
                alt="Sede Central del Instituto de Educación Superior Público Huanta"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-6 sm:p-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white text-[11px] font-black uppercase tracking-wider mb-2 shadow-sm">
                    Sede Principal Licenciada
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-white">
                    Sede Central Jr. Córdova N° 650
                  </h3>
                </div>
              </div>
            </div>

            {/* Body Details */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 dark:text-slate-200 font-semibold">
                <IconMapPin className="w-5 h-5 text-[#7114EF] dark:text-[#08D9FF] shrink-0 mt-0.5" />
                <span>Jr. Córdova N° 650, Huanta, Ayacucho — Perú</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                Complejo educativo central que alberga la Dirección General,
                aulas pedagógicas modernizadas, laboratorios de cómputo para
                Desarrollo de Software, taller mecatrónico de diagnóstico
                automotriz, clínica simulada de enfermería técnica, planta
                piloto y biblioteca central.
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                  Instalaciones y Ambientes Clave:
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "Dirección General y Secretaría Académica",
                    "Laboratorios de Cómputo e Informática",
                    "Taller Mecatrónico de Diagnóstico Automotriz",
                    "Laboratorio de Simulación Asistencial en Salud",
                    "Planta Piloto de Procesamiento de Alimentos",
                    "Auditorio Institucional y Biblioteca Central",
                  ].map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      <span className="w-5 h-5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <IconCheck className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Jr.+C%C3%B3rdova+650,+Huanta,+Ayacucho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1475F7] dark:text-sky-400 hover:underline"
                >
                  <span>Ver Ubicación en Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
