import { useEffect, useState } from "react"
import {
  IconAcademicCap,
  IconApple,
  IconArrowLeft,
  IconAward,
  IconBeaker,
  IconBook,
  IconBuilding,
  IconCar,
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconClock,
  IconCode,
  IconComputer,
  IconFileCheck,
  IconGauge,
  IconGlobe,
  IconHeartPulse,
  IconLeaf,
  IconMapPin,
  IconShieldCheck,
  IconStethoscope,
  IconUser,
  IconWhatsApp,
  IconWheat,
  IconWrench,
  IconZap,
} from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"
import { FACULTY_LIST, INSTITUTION_CONTACT } from "@/data/institution"
import { TESTIMONIALS } from "@/data/testimonials"
import { navigateTo, scrollToTop } from "@/utils/navigation"

interface CareerDetailPageProps {
  careerId: string
}

function getCareerIcon(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return (
        <IconComputer className="w-8 h-8 text-blue-600 dark:text-sky-300" />
      )
    case "enfermeria-tecnica":
      return (
        <IconHeartPulse className="w-8 h-8 text-rose-600 dark:text-rose-300" />
      )
    case "mecatronica-automotriz":
      return (
        <IconWrench className="w-8 h-8 text-amber-600 dark:text-amber-300" />
      )
    case "industrias-alimentos-bebidas":
      return (
        <IconBeaker className="w-8 h-8 text-purple-600 dark:text-purple-300" />
      )
    case "produccion-agropecuaria":
      return (
        <IconLeaf className="w-8 h-8 text-emerald-600 dark:text-emerald-300" />
      )
    default:
      return (
        <IconAcademicCap className="w-8 h-8 text-indigo-600 dark:text-indigo-300" />
      )
  }
}

function getModuleIcon(careerId: string, moduleNumber: number) {
  switch (careerId) {
    case "diseno-programacion-web":
      if (moduleNumber === 1) return <IconComputer className="w-7 h-7" />
      if (moduleNumber === 2) return <IconCode className="w-7 h-7" />
      return <IconGlobe className="w-7 h-7" />

    case "enfermeria-tecnica":
      if (moduleNumber === 1) return <IconHeartPulse className="w-7 h-7" />
      if (moduleNumber === 2) return <IconStethoscope className="w-7 h-7" />
      return <IconShieldCheck className="w-7 h-7" />

    case "mecatronica-automotriz":
      if (moduleNumber === 1) return <IconCar className="w-7 h-7" />
      if (moduleNumber === 2) return <IconZap className="w-7 h-7" />
      if (moduleNumber === 3) return <IconWrench className="w-7 h-7" />
      return <IconGauge className="w-7 h-7" />

    case "industrias-alimentos-bebidas":
      if (moduleNumber === 1) return <IconApple className="w-7 h-7" />
      if (moduleNumber === 2) return <IconBeaker className="w-7 h-7" />
      if (moduleNumber === 3) return <IconAward className="w-7 h-7" />
      return <IconShieldCheck className="w-7 h-7" />

    case "produccion-agropecuaria":
      if (moduleNumber === 1) return <IconLeaf className="w-7 h-7" />
      if (moduleNumber === 2) return <IconWheat className="w-7 h-7" />
      if (moduleNumber === 3) return <IconApple className="w-7 h-7" />
      return <IconBuilding className="w-7 h-7" />

    default:
      return <IconAcademicCap className="w-7 h-7" />
  }
}

function getModuleTheme(careerId: string) {
  switch (careerId) {
    case "diseno-programacion-web":
      return {
        badgeBg:
          "bg-blue-50 dark:bg-blue-950/60 text-[#1475F7] dark:text-[#08D9FF]",
        hoverBorder: "hover:border-blue-500 dark:hover:border-blue-500",
      }
    case "enfermeria-tecnica":
      return {
        badgeBg:
          "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400",
        hoverBorder: "hover:border-rose-500 dark:hover:border-rose-500",
      }
    case "mecatronica-automotriz":
      return {
        badgeBg:
          "bg-purple-50 dark:bg-purple-950/60 text-[#7114EF] dark:text-purple-400",
        hoverBorder: "hover:border-purple-500 dark:hover:border-purple-500",
      }
    case "industrias-alimentos-bebidas":
      return {
        badgeBg:
          "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400",
        hoverBorder: "hover:border-amber-500 dark:hover:border-amber-500",
      }
    case "produccion-agropecuaria":
      return {
        badgeBg:
          "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400",
        hoverBorder: "hover:border-emerald-500 dark:hover:border-emerald-500",
      }
    default:
      return {
        badgeBg:
          "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400",
        hoverBorder: "hover:border-blue-500 dark:hover:border-blue-500",
      }
  }
}

function getWorkshopInfo(id: string) {
  switch (id) {
    case "diseno-programacion-web":
      return {
        title: "Centro de Cómputo y Desarrollo Web",
        description:
          "Equipos de cómputo para el desarrollo de aplicaciones web, administración de bases de datos y prácticas de programación con conexión a internet.",
        equipment: [
          "Computadoras para desarrollo web frontend y backend",
          "Conexión a internet para prácticas y trabajo académico",
          "Entornos de programación y servidores locales para proyectos",
          "Herramientas de diseño y diagramación de interfaces de usuario",
        ],
      }
    case "enfermeria-tecnica":
      return {
        title: "Laboratorio de Enfermería y Simulación Clínica",
        description:
          "Ambiente equipado con camillas clínicas, maniquíes de simulación médica y equipos para la práctica asistencial y primeros auxilios.",
        equipment: [
          "Camillas clínicas y material de atención básica hospitalaria",
          "Maniquíes anatómicos para prácticas asistenciales y primeros auxilios",
          "Equipos de monitoreo de signos vitales (tensiómetros, oxímetros)",
          "Material de bioseguridad, esterilización y curaciones",
        ],
      }
    case "mecatronica-automotriz":
      return {
        title: "Taller de Mecatrónica Automotriz",
        description:
          "Instalaciones para el mantenimiento, reparación y diagnóstico de sistemas mecánicos y electrónicos vehiculares.",
        equipment: [
          "Bancos de prueba de inyección electrónica gasolina y diésel",
          "Elevadores hidráulicos para servicio automotriz",
          "Escáneres multimarca para diagnóstico computarizado",
          "Herramientas y analizadores para mantenimiento vehicular",
        ],
      }
    case "industrias-alimentos-bebidas":
      return {
        title: "Taller de Industrias de Alimentos y Bebidas",
        description:
          "Planta piloto para la transformación y procesamiento de productos agroindustriales y control de inocuidad.",
        equipment: [
          "Módulos de procesamiento para néctares, conservas y lácteos",
          "Despulpadoras, autoclaves y envasadoras al vacío",
          "Equipos para análisis básico y control de calidad",
          "Área de inocuidad y buenas prácticas de manufactura (BPM)",
        ],
      }
    case "produccion-agropecuaria":
      return {
        title: "Centro de Producción y Fundo (Luricocha)",
        description:
          "Sede de prácticas agropecuarias en Luricocha con parcelas agrícolas de cultivo, sistemas de riego tecnificado y módulos de crianza pecuaria.",
        equipment: [
          "Parcelas agrícolas demostrativas para frutales y cultivos de la zona",
          "Sistemas de riego presurizado por goteo y microaspersión",
          "Módulos pecuarios para crianza de animales menores y mayores",
          "Área de abonos orgánicos, compostaje y manejo agronómico",
        ],
      }
    default:
      return null
  }
}

type TabType = "perfil" | "especificas" | "empleabilidad" | "desempeno"

export default function CareerDetailPage({ careerId }: CareerDetailPageProps) {
  const career = CAREERS.find((c) => c.id === careerId) ?? CAREERS[0]
  const faculty = FACULTY_LIST.filter((f) => f.programId === career.id)
  const workshop = getWorkshopInfo(career.id)
  const otherCareers = CAREERS.filter((c) => c.id !== career.id)

  const [activeTab, setActiveTab] = useState<TabType>("perfil")

  // State for collapsible semester curriculum tables
  const [openSemesters, setOpenSemesters] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {}
      if (career.curriculum) {
        career.curriculum.forEach((sem) => {
          initial[sem.semester] = true
        })
      }
      return initial
    },
  )

  useEffect(() => {
    if (career.curriculum) {
      const initial: Record<string, boolean> = {}
      career.curriculum.forEach((sem) => {
        initial[sem.semester] = true
      })
      setOpenSemesters(initial)
    }
  }, [career.curriculum])

  const toggleSemester = (semester: string) => {
    setOpenSemesters((prev) => ({
      ...prev,
      [semester]: !prev[semester],
    }))
  }

  const allOpen =
    career.curriculum && career.curriculum.length > 0
      ? career.curriculum.every((sem) => openSemesters[sem.semester])
      : false

  const toggleAllSemesters = () => {
    const nextState = !allOpen
    const updated: Record<string, boolean> = {}
    career.curriculum?.forEach((sem) => {
      updated[sem.semester] = nextState
    })
    setOpenSemesters(updated)
  }

  // Filter career-specific testimonials, fallback to first 3
  const careerTestimonials = (() => {
    const matched = TESTIMONIALS.filter(
      (t) =>
        t.program.toLowerCase().includes(career.name.toLowerCase()) ||
        t.program === career.name,
    )
    return matched.length > 0 ? matched : TESTIMONIALS.slice(0, 3)
  })()

  // Scroll to top whenever career page opens or changes
  useEffect(() => {
    if (careerId) {
      scrollToTop()
    }
  }, [careerId])

  const [formState, setFormState] = useState({
    fullName: "",
    dni: "",
    phone: "",
    email: "",
    schoolYear: "Egresado de Secundaria",
  })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const defaultWhatsappMsg = encodeURIComponent(
    `Hola IESPH, deseo información oficial y postular a la carrera de ${career.name}.`,
  )

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 transition-colors">
      {/* ── Breadcrumb & Top Bar ───────────────────────────────────── */}
      <div className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400"
          >
            <button
              onClick={() => navigateTo("/")}
              className="hover:text-blue-600 dark:hover:text-sky-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <IconArrowLeft className="w-3.5 h-3.5" />
              <span>Inicio</span>
            </button>
            <span>/</span>
            <button
              onClick={() => navigateTo("/")}
              className="hover:text-blue-600 dark:hover:text-sky-300 cursor-pointer transition-colors"
            >
              Carreras
            </button>
            <span>/</span>
            <span className="font-semibold text-slate-900 dark:text-white truncate">
              {career.name}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <span className="bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-bold px-2 py-0.5 rounded text-[11px]">
              Código: {career.code}
            </span>
            <span className="bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded text-[11px]">
              R.M. N° 068-2020-MINEDU
            </span>
          </div>
        </div>
      </div>

      {/* ── Career Hero Banner ─────────────────────────────────────── */}
      <section className="relative bg-linear-to-r from-[#0F223A] via-[#1a3875] to-[#7114EF] text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Decorative lighting */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#08D9FF]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 bg-[#1475F7]/25 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Visual Media with Inset (Matching screenshot) */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900/60 aspect-4/3 sm:aspect-16/10">
                <img
                  src={career.image}
                  alt={career.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>

              {/* Overlapping Inset Badge/Image */}
              {career.artImage && (
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 lg:w-44 lg:h-44 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl bg-slate-800">
                  <img
                    src={career.artImage}
                    alt={`${career.name} ilustración`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#08D9FF] mb-2">
                <span className="w-6 h-6 flex items-center justify-center">
                  {getCareerIcon(career.id)}
                </span>
                <span>Programa de estudios</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {career.name}
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
                {career.overview}
              </p>

              {/* Fast Facts Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">
                    Titulación
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">
                    Profesional Técnico a Nombre de la Nación
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">
                    Duración
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">
                    {career.duration}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-xs border border-white/10 p-3 rounded-xl">
                  <div className="text-[11px] text-sky-200 uppercase font-semibold">
                    Modalidad
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1">
                    {career.modality}
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#postulacion"
                  className="bg-linear-to-r from-[#08D9FF] to-[#1475F7] hover:brightness-110 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-transform active:scale-[0.98] cursor-pointer"
                >
                  Postula a esta Carrera →
                </a>

                <a
                  href={`https://wa.me/${INSTITUTION_CONTACT.whatsapp || "51966322296"}?text=${defaultWhatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm px-5 py-3.5 rounded-xl shadow-sm transition-transform active:scale-[0.98]"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Consultar por WhatsApp</span>
                </a>

                {career.schedulePdf && (
                  <a
                    href={career.schedulePdf}
                    download
                    className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium text-xs px-4 py-3.5 rounded-xl border border-white/20 transition-colors"
                  >
                    <span>Descargar Horario (PDF)</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Full-Width Introductory Profile Paragraph ──────────────── */}
      {career.introduction && (
        <section className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {career.introduction}
            </p>
          </div>
        </section>
      )}

      {/* ── Módulos Profesionales (Centered 3-Column Grid) ─────────── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Módulos Profesionales
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Certificación progresiva oficial al culminar cada año académico,
              facilitando tu inserción laboral en el sector productivo y
              tecnológico.
            </p>
          </div>

          <div
            className={`grid gap-8 ${
              career.modules.length === 4
                ? "sm:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
            }`}
          >
            {career.modules.map((mod) => {
              const cleanTitle = mod.title.replace(
                /^M[oó]dulo\s*(?:N[°o]\s*)?\d+:\s*/i,
                "",
              )
              const moduleTheme = getModuleTheme(career.id)

              return (
                <div
                  key={mod.number}
                  className={`bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center transition-all hover:-translate-y-1 ${moduleTheme.hoverBorder}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-xs ${moduleTheme.badgeBg}`}
                  >
                    {getModuleIcon(career.id, mod.number)}
                  </div>

                  <h3 className="text-sm sm:text-base font-extrabold uppercase text-slate-900 dark:text-white tracking-wide">
                    Módulo {mod.number}: {cleanTitle}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 w-full flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <IconCheck className="w-4 h-4" />
                    <span>Certificación Anual MINEDU</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Interactive Tabs (Perfil, Campo, Competencias, Requisitos) */}
      <section className="py-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Tab Navigation - Exactly 4 official tabs from DPW.html, full-width, no scrollbar */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 w-full">
            <button
              type="button"
              onClick={() => setActiveTab("perfil")}
              className={`flex-1 py-3.5 px-1 sm:px-3 text-center text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                activeTab === "perfil"
                  ? "border-blue-600 text-blue-600 dark:text-sky-300 dark:border-sky-300"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Perfil Profesional
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("especificas")}
              className={`flex-1 py-3.5 px-1 sm:px-3 text-center text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                activeTab === "especificas"
                  ? "border-blue-600 text-blue-600 dark:text-sky-300 dark:border-sky-300"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Competencias Específicas
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("empleabilidad")}
              className={`flex-1 py-3.5 px-1 sm:px-3 text-center text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                activeTab === "empleabilidad"
                  ? "border-blue-600 text-blue-600 dark:text-sky-300 dark:border-sky-300"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Competencias para la Empleabilidad
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("desempeno")}
              className={`flex-1 py-3.5 px-1 sm:px-3 text-center text-xs md:text-sm font-bold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${
                activeTab === "desempeno"
                  ? "border-blue-600 text-blue-600 dark:text-sky-300 dark:border-sky-300"
                  : "border-transparent text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              Ámbitos de Desempeño
            </button>
          </div>

          {/* Tab Content */}
          <div className="pt-8">
            {activeTab === "perfil" && (
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {career.overview}
                </p>
                {career.introduction && (
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                    {career.introduction}
                  </p>
                )}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Título Otorgado
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {career.degreeAwarded}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Duración y Créditos
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {career.curriculum
                        ? `6 Semestres (${career.curriculum.reduce(
                            (acc, sem) =>
                              acc +
                              sem.courses.reduce(
                                (cAcc, c) => cAcc + c.credits,
                                0,
                              ),
                            0,
                          )} Créditos)`
                        : "6 Semestres (120 Créditos)"}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase">
                      Turno y Horario
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      {career.schedule}
                    </div>
                  </div>
                </div>

                {career.requirements && career.requirements.length > 0 && (
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                        Requisitos para la Inscripción y Admisión
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {career.requirements.map((req) => (
                          <div
                            key={req}
                            className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >
                            <IconFileCheck className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                        Proceso de Titulación Oficial
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Al culminar satisfactoriamente los 6 semestres
                        académicos, aprobar las Experiencias Formativas en
                        Situaciones Reales de Trabajo (EFSRT) y acreditar el
                        nivel de idioma extranjero requerido, el estudiante
                        obtiene el título oficial de{" "}
                        <strong>{career.degreeAwarded}</strong> a Nombre de la
                        Nación, registrado en el MINEDU.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "especificas" && (
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Competencias técnicas y específicas desarrolladas a lo largo
                  del plan de estudios bajo lineamientos del Catálogo Nacional
                  de la Oferta Formativa (CNOF) del Ministerio de Educación:
                </p>
                <div className="space-y-4">
                  {(career.competencies || []).map((comp, idx) => (
                    <div
                      key={comp}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                    >
                      <div className="w-7 h-7 rounded-lg bg-blue-100/70 dark:bg-blue-950/60 text-blue-700 dark:text-sky-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {comp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "empleabilidad" && (
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                  Competencias para la empleabilidad que fortalecen la formación
                  integral del estudiante para su inserción y desempeño en el
                  mercado laboral moderno:
                </p>
                {career.employabilityCompetencies &&
                career.employabilityCompetencies.length > 0 ? (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {career.employabilityCompetencies.map((emp) => (
                      <div
                        key={emp.title}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <IconCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                            {emp.title}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                          {emp.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-slate-500">
                    Información de competencias transversales en actualización.
                  </p>
                )}
              </div>
            )}

            {activeTab === "desempeno" && (
              <div className="space-y-8">
                {career.performanceEntities &&
                  career.performanceEntities.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                        Entidades y Sectores de Inserción Laboral
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Instituciones públicas y privadas con convenio y demanda
                        activa de nuestros técnicos profesionales:
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {career.performanceEntities.map((ent) => (
                          <div
                            key={ent.name}
                            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-1.5"
                          >
                            <div className="flex items-center gap-2">
                              <IconBuilding className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0" />
                              <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                                {ent.name}
                              </h5>
                            </div>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                              {ent.areas}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                    Campos de Acción y Oportunidades Laborales
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-4">
                    Nuestros egresados se desempeñan en una amplia gama de
                    sectores productivos, instituciones gubernamentales y
                    emprendimientos tecnológicos:
                  </p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {career.jobOpportunities.map((job) => (
                      <div
                        key={job}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60"
                      >
                        <IconCheck className="w-4 h-4 text-blue-600 dark:text-sky-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                          {job}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Plan de Estudios (Detailed 6-Semester Tables) ───────────── */}
      <section
        id="plan-estudios"
        className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Plan de estudios
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Malla curricular oficial organizada por semestres lectivos con
              créditos y horas académicas presenciales.
            </p>
          </div>

          {career.curriculum && career.curriculum.length > 0 ? (
            <div className="space-y-4">
              {/* Expand / Collapse All Controls */}
              <div className="flex items-center justify-between px-1 mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {career.curriculum.length} Periodos Académicos
                </span>
                <button
                  type="button"
                  onClick={toggleAllSemesters}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300 transition-colors cursor-pointer py-1 px-2.5 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40"
                >
                  {allOpen ? (
                    <>
                      <IconChevronUp className="w-4 h-4" />
                      <span>Reducir todos</span>
                    </>
                  ) : (
                    <>
                      <IconChevronDown className="w-4 h-4" />
                      <span>Desplegar todos</span>
                    </>
                  )}
                </button>
              </div>

              {career.curriculum.map((sem) => {
                const isOpen = openSemesters[sem.semester] ?? false
                const totalCredits = sem.courses.reduce(
                  (acc, c) => acc + c.credits,
                  0,
                )
                const totalWeeklyHours = sem.courses.reduce(
                  (acc, c) => acc + c.hours,
                  0,
                )
                const totalSemesterHours = sem.courses.reduce(
                  (acc, c) => acc + (c.semesterHours ?? c.hours * 16),
                  0,
                )

                return (
                  <div
                    key={sem.semester}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs transition-shadow"
                  >
                    {/* Collapsible Semester Header */}
                    <button
                      type="button"
                      onClick={() => toggleSemester(sem.semester)}
                      className="w-full bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/70 dark:hover:bg-slate-700/60 px-5 py-4 flex items-center justify-between gap-3 text-left transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`p-1 rounded-md transition-colors ${
                            isOpen
                              ? "text-blue-600 dark:text-sky-400 bg-blue-100/60 dark:bg-blue-950"
                              : "text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800"
                          }`}
                        >
                          {isOpen ? (
                            <IconChevronUp className="w-4 h-4" />
                          ) : (
                            <IconChevronDown className="w-4 h-4" />
                          )}
                        </div>
                        <h3 className="text-sm font-extrabold uppercase text-slate-900 dark:text-white tracking-wide truncate">
                          {sem.semester}
                        </h3>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        <span className="hidden sm:inline">
                          {totalCredits} Créditos • {totalSemesterHours} Horas
                          Semestrales ({totalWeeklyHours} h/sem.)
                        </span>
                        <span className="sm:hidden font-bold">
                          {totalCredits} cr. • {totalSemesterHours} h
                        </span>
                        <span className="text-xs font-bold text-blue-600 dark:text-sky-400 ml-1">
                          {isOpen ? "Reducir" : "Ampliar"}
                        </span>
                      </div>
                    </button>

                    {/* Semester Table */}
                    {isOpen && (
                      <div className="overflow-x-auto border-t border-slate-200 dark:border-slate-800">
                        <table className="w-full text-left text-xs sm:text-sm">
                          <thead className="bg-slate-50 dark:bg-slate-800/40 text-slate-500 dark:text-slate-400 font-bold uppercase text-[11px] border-b border-slate-100 dark:border-slate-800">
                            <tr>
                              <th className="py-3 px-5">UNIDADES DIDÁCTICAS</th>
                              <th className="py-3 px-4 text-center w-24">
                                CRÉDITOS
                              </th>
                              <th className="py-3 px-4 text-center w-36">
                                HORAS SEMESTRALES
                              </th>
                              <th className="py-3 px-4 text-center w-32">
                                HORAS SEMANALES
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            {sem.courses.map((course) => (
                              <tr
                                key={course.name}
                                className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors"
                              >
                                <td className="py-3 px-5 font-medium text-slate-800 dark:text-slate-200">
                                  {course.name}
                                </td>
                                <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400 font-semibold">
                                  {course.credits}
                                </td>
                                <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400 font-semibold">
                                  {course.semesterHours ?? course.hours * 16} h
                                </td>
                                <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400 font-semibold">
                                  {course.hours} h
                                </td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot className="bg-slate-50 dark:bg-slate-800/60 font-bold text-xs text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-700">
                            <tr>
                              <td className="py-2.5 px-5">
                                TOTAL {sem.semester.toUpperCase()}
                              </td>
                              <td className="py-2.5 px-4 text-center">
                                {totalCredits}
                              </td>
                              <td className="py-2.5 px-4 text-center">
                                {totalSemesterHours} h
                              </td>
                              <td className="py-2.5 px-4 text-center">
                                {totalWeeklyHours} h
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                La malla curricular detallada de este programa se encuentra
                estructurada en 3 módulos formativos y 6 semestres académicos.
              </p>
            </div>
          )}

          {/* Action Button Below Plan de Estudios */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#postulacion"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Postula Aquí
            </a>

            {career.schedulePdf && (
              <a
                href={career.schedulePdf}
                download
                className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-xs px-5 py-3.5 rounded-xl transition-colors"
              >
                <IconBook className="w-4 h-4" />
                <span>Descargar Plan de Estudios (PDF)</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Talleres e Infraestructura Especializada ───────────────── */}
      {workshop && (
        <section className="py-14 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300">
                <IconWrench className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Talleres e Infraestructura Especializada
              </h2>
            </div>
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mt-2">
              {workshop.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {workshop.description}
            </p>

            {career.experimentalCenter && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300/80 dark:border-emerald-800/60">
                <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-200 font-bold text-sm">
                  <IconMapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{career.experimentalCenter.name}</span>
                </div>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 mt-1">
                  {career.experimentalCenter.address} —{" "}
                  {career.experimentalCenter.purpose}
                </p>
              </div>
            )}

            <div className="mt-5 grid sm:grid-cols-2 gap-3">
              {workshop.equipment.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                  <IconCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Plana Docente Asignada ─────────────────────────────────── */}
      {faculty.length > 0 && (
        <section className="py-14 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300">
                <IconUser className="w-5 h-5" />
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Plana Docente del Programa (
                {faculty[0]?.academicPeriod ?? "2026-I"})
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Docentes profesionales titulados y colegiados, con amplia
              experiencia práctica en el sector:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {faculty.map((teacher) => (
                <div
                  key={teacher.name}
                  className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs"
                >
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {teacher.name}
                  </div>
                  <div className="text-[11px] text-blue-600 dark:text-sky-300 font-semibold mt-0.5">
                    {teacher.programName}
                  </div>
                  <div className="mt-3 text-xs text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">
                      Unidades Didácticas:
                    </span>{" "}
                    {teacher.courses.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Formulario Oficial de Postulación / Admisión Integrada ─── */}
      <section
        id="postulacion"
        className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-slate-50 dark:bg-slate-950 rounded-3xl p-6 sm:p-10 border-2 border-blue-500/30 dark:border-blue-500/20 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block text-xs font-bold text-blue-600 dark:text-sky-300 uppercase tracking-wider mb-1">
                Admisión Convocatoria 2026
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Inscríbete en {career.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
                Completa tus datos para iniciar tu proceso de inscripción y
                reservar tu vacante oficial en el IESPH.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <IconCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                  ¡Registro recibido con éxito!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-1">
                  Nos comunicaremos a la brevedad al {formState.phone} para
                  confirmar tus requisitos.
                </p>
                <a
                  href={`https://wa.me/${INSTITUTION_CONTACT.whatsapp || "51966322296"}?text=${encodeURIComponent(
                    `Hola IESPH, acabo de registrarme para ${career.name}. Mi nombre es ${formState.fullName} (DNI ${formState.dni}).`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 rounded-xl shadow-xs transition-transform active:scale-[0.98]"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  <span>Confirmar por WhatsApp</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label
                    htmlFor="career-page-fullname"
                    className="block font-semibold text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Nombres y Apellidos *
                  </label>
                  <input
                    id="career-page-fullname"
                    type="text"
                    required
                    placeholder="Ej. Juan Quispe Huamán"
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState({ ...formState, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="career-page-dni"
                      className="block font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      DNI *
                    </label>
                    <input
                      id="career-page-dni"
                      type="text"
                      required
                      maxLength={8}
                      pattern="[0-9]{8}"
                      placeholder="8 dígitos"
                      value={formState.dni}
                      onChange={(e) =>
                        setFormState({ ...formState, dni: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-page-phone"
                      className="block font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Celular / WhatsApp *
                    </label>
                    <input
                      id="career-page-phone"
                      type="tel"
                      required
                      placeholder="9XXXXXXXX"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="career-page-email"
                      className="block font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      id="career-page-email"
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-page-school-year"
                      className="block font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Condición Académica
                    </label>
                    <select
                      id="career-page-school-year"
                      value={formState.schoolYear}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          schoolYear: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Egresado de Secundaria">
                        Egresado de Secundaria (Completa)
                      </option>
                      <option value="Cursando 5to de Secundaria">
                        Cursando 5to de Secundaria
                      </option>
                      <option value="Traslado Externo">Traslado Externo</option>
                      <option value="Titulado / Segunda Carrera">
                        Titulado / Segunda Carrera
                      </option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-3.5 bg-linear-to-r from-[#7114EF] to-[#1475F7] hover:brightness-110 text-white font-bold rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer text-sm"
                >
                  Enviar Solicitud de Inscripción
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <IconClock className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Atención: Lunes a Viernes 8:00 am - 1:00 pm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconMapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Sede Central: {INSTITUTION_CONTACT.address}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonios de Estudiantes y Egresados (DPW & Program) ─── */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-600 dark:text-sky-300 uppercase tracking-widest">
              TESTIMONIOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Lo que Dicen Nuestros Estudiantes y Egresados
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {careerTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-500 text-3xl font-serif leading-none mb-3">
                    “
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    {t.quote}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="font-bold text-sm text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-blue-600 dark:text-sky-300 font-semibold mt-0.5">
                    {t.role}
                  </div>
                  {t.year && (
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {t.year}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Otros Programas de Estudios (Navigation Strip) ─────────── */}
      <section className="py-14 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Explora Otros Programas de Estudios Licenciados
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCareers.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  navigateTo(`/carreras/${c.id}`)
                  scrollToTop()
                }}
                className="text-left p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all group cursor-pointer shadow-xs"
              >
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors line-clamp-1">
                  {c.name}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  {c.duration} • Código: {c.code}
                </div>
                <div className="mt-3 text-xs font-semibold text-blue-600 dark:text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Ver carrera</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
