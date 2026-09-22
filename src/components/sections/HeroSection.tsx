import { type FormEvent, useState } from "react"
import campusFrontis from "@/assets/campus/frontis-principal.jpg"
import {
  IconAcademicCap,
  IconBriefcase,
  IconBuilding,
  IconCheck,
  IconClock,
  IconSpinner,
} from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"
import type { Career } from "@/types"

interface HeroSectionProps {
  onCareerSelect?: (careerName: string) => void
  onOpenCareerModal?: (career: Career) => void
}

export default function HeroSection({
  onCareerSelect,
  onOpenCareerModal: _onOpenCareerModal,
}: HeroSectionProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedCareer, setSelectedCareer] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !selectedCareer) {
      alert("Por favor completa todos los campos requeridos.")
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 450)
  }

  return (
    <section className="relative bg-linear-to-b from-slate-50 via-white to-blue-50/20 dark:from-[#071322] dark:via-[#09182a] dark:to-[#071322] text-slate-900 dark:text-white py-16 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 overflow-hidden font-sans transition-colors">
      {/* Dynamic ambient lighting accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-400/10 dark:bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Campus photography with atmospheric gradient blend */}
      <div className="absolute inset-0 z-0">
        <img
          src={campusFrontis}
          alt="Sede Central del IESP Huanta - Jr. Córdova 650"
          className="w-full h-full object-cover opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/90 to-blue-50/80 dark:from-[#071322] dark:via-[#09182a]/95 dark:to-[#0b1e35]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.1fr_420px] gap-10 lg:gap-12 items-center">
        {/* Left: Value Proposition & Institutional Mission */}
        <div className="space-y-6">
          {/* Institutional Accreditation */}
          <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 dark:text-sky-400">
            Resolución Ministerial N° 068-2020
          </div>

          {/* Main Title — Prestigious & Punchy */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
            Educación superior pública para{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 via-indigo-600 to-sky-600 dark:from-sky-300 dark:via-blue-200 dark:to-indigo-200">
              transformar tu futuro
            </span>{" "}
            en 3 años
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            Formamos profesionales técnicos líderes con sólida formación
            práctica y ética en Huanta y la región Ayacucho. Clases 100%
            presenciales, laboratorios equipados y{" "}
            <strong className="text-slate-900 dark:text-white font-semibold underline decoration-blue-600/50 dark:decoration-sky-400/50 underline-offset-4">
              Título Oficial a Nombre de la Nación
            </strong>
            .
          </p>

          {/* Academic Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-2 text-xs">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/4 border border-slate-200 dark:border-white/8 shadow-xs dark:shadow-none hover:bg-white dark:hover:bg-white/[0.07] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-500/15 border border-sky-200 dark:border-sky-400/25 text-sky-700 dark:text-sky-300 flex items-center justify-center shrink-0">
                <IconAcademicCap className="w-4 h-4" />
              </span>
              <div className="leading-snug">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  5 Carreras Licenciadas
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Certificación modular anual
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/4 border border-slate-200 dark:border-white/8 shadow-xs dark:shadow-none hover:bg-white dark:hover:bg-white/[0.07] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/25 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0">
                <IconClock className="w-4 h-4" />
              </span>
              <div className="leading-snug">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Turno Mañana Exclusivo
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Horario: 7:30 am – 1:15 pm
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/4 border border-slate-200 dark:border-white/8 shadow-xs dark:shadow-none hover:bg-white dark:hover:bg-white/[0.07] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/15 border border-purple-200 dark:border-purple-400/25 text-purple-700 dark:text-purple-300 flex items-center justify-center shrink-0">
                <IconBuilding className="w-4 h-4" />
              </span>
              <div className="leading-snug">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Talleres y Laboratorios
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Prácticas especializadas
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/4 border border-slate-200 dark:border-white/8 shadow-xs dark:shadow-none hover:bg-white dark:hover:bg-white/[0.07] transition-colors">
              <span className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/15 border border-amber-200 dark:border-amber-400/25 text-amber-700 dark:text-amber-300 flex items-center justify-center shrink-0">
                <IconBriefcase className="w-4 h-4" />
              </span>
              <div className="leading-snug">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  Convenios y Beca 18
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Prácticas pre-profesionales
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
            <a
              href="/carreras"
              className="w-full sm:w-auto text-center min-h-12 flex items-center justify-center bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 hover:from-amber-400 hover:to-amber-600 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm shadow-lg shadow-amber-950/20 dark:shadow-amber-950/40 hover:shadow-amber-500/25 active:scale-[0.99] transition-all"
            >
              Conocer Carreras 2026
            </a>
            <a
              href="/admision"
              className="w-full sm:w-auto text-center min-h-12 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-white/8 dark:hover:bg-white/[0.14] text-slate-800 dark:text-white font-semibold px-6 py-3.5 rounded-xl text-xs sm:text-sm border border-slate-300 dark:border-white/15 shadow-xs dark:shadow-none active:scale-[0.99] transition-all"
            >
              Requisitos de Admisión →
            </a>
          </div>
        </div>

        {/* Right: Lead Capture Form Card */}
        <div
          id="postular"
          className="w-full max-w-xl mx-auto lg:max-w-none bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 relative pt-7 transition-colors"
        >
          {/* Accent top gradient strip */}
          <div className="h-1.5 w-full bg-linear-to-r from-[#7114EF] via-[#1475F7] to-[#08D9FF] rounded-t-2xl absolute top-0 left-0 right-0" />

          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
            <span className="text-xs font-bold text-indigo-600 dark:text-sky-400 uppercase tracking-wider block">
              Convocatoria 2026
            </span>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
              Inscripción e Informes de Admisión
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
              Déjanos tus datos y un asesor de secretaría académica te
              contactará con los requisitos oficiales.
            </p>
          </div>

          {submitted ? (
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-lg flex items-center justify-center mx-auto">
                <IconCheck className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Pre-inscripción Registrada
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Estimado(a) <strong>{name}</strong>, nos comunicaremos al
                teléfono <strong>{phone}</strong> con la carpeta de admisión
                para <strong>{selectedCareer}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setName("")
                  setPhone("")
                  setSelectedCareer("")
                }}
                className="mt-2 text-xs font-semibold text-slate-700 dark:text-sky-400 hover:text-slate-900 dark:hover:text-sky-300 underline"
              >
                Registrar otra postulación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Nombres y Apellidos
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez Quispe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-sky-500 focus:border-slate-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="9XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-sky-500 focus:border-slate-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Carrera Técnica de Interés
                </label>
                <select
                  required
                  value={selectedCareer}
                  onChange={(e) => {
                    setSelectedCareer(e.target.value)
                    if (onCareerSelect) onCareerSelect(e.target.value)
                  }}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-sky-500 focus:border-slate-900 transition"
                >
                  <option value="">Selecciona una carrera técnica</option>
                  {CAREERS.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Modalidad y Turno
                </label>
                <div className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 flex justify-between">
                  <span>Presencial · Sede Huanta</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    7:30 am – 1:15 pm
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full min-h-11 flex items-center justify-center gap-2 btn-pill-gradient text-white font-bold text-xs sm:text-sm py-3 px-4 shadow-lg active:scale-[0.98] transition-all disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <IconSpinner className="w-4 h-4 text-white" />
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <span>Solicitar Información de Admisión</span>
                )}
              </button>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-tight">
                Atención presencial en Secretaría Académica: Jr. Córdova N° 650,
                Huanta.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
