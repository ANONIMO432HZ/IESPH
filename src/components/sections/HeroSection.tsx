import { type FormEvent, useState } from "react"
import { IconCheck } from "@/components/icons/Icons"
import { CAREERS } from "@/data/careers"

interface HeroSectionProps {
  onCareerSelect?: (careerName: string) => void
}

export default function HeroSection({ onCareerSelect }: HeroSectionProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [selectedCareer, setSelectedCareer] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim() || !selectedCareer) {
      alert("Por favor completa todos los campos requeridos.")
      return
    }
    setSubmitted(true)
  }

  return (
    <section className="relative bg-[#0F223A] text-white py-16 lg:py-24 border-b border-slate-800">
      {/* Background with real campus photography & warm institutional lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
          alt="Estudiantes en el campus IESPH Huanta"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A2C] via-[#0F223A]/95 to-[#132A47]/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.1fr_420px] gap-12 items-center">
        {/* Left: Value Proposition & Institutional Mission */}
        <div className="space-y-6">
          {/* Institutional Badge — Understated & Academic */}
          <div className="inline-flex items-center gap-2 bg-slate-800/80 text-slate-200 text-xs font-semibold px-3.5 py-1.5 rounded-md border border-slate-700">
            <span>Institución Licenciada por el MINEDU · R.M. N° 068-2020</span>
          </div>

          {/* Main Title — Solid, confident, humanistic */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            Educación superior pública para transformar tu futuro profesional en
            3 años
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            Formamos profesionales técnicos competentes, éticos y comprometidos
            con el desarrollo de Huanta y la región Ayacucho. Clases 100%
            presenciales, laboratorios equipados y{" "}
            <strong>Título Oficial a Nombre de la Nación</strong>.
          </p>

          {/* Academic Highlights */}
          <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
            <div className="flex items-center gap-2.5">
              <span className="text-amber-400 shrink-0">
                <IconCheck className="w-4 h-4 text-amber-400" />
              </span>
              <span>5 Programas de estudio licenciados</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-amber-400 shrink-0">
                <IconCheck className="w-4 h-4 text-amber-400" />
              </span>
              <span>Turno mañana (7:30 am – 1:15 pm)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-amber-400 shrink-0">
                <IconCheck className="w-4 h-4 text-amber-400" />
              </span>
              <span>Talleres y laboratorios prácticos</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-amber-400 shrink-0">
                <IconCheck className="w-4 h-4 text-amber-400" />
              </span>
              <span>Convenios de prácticas y Beca 18</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#carreras"
              className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm shadow-sm transition-colors"
            >
              Conocer Carreras 2026
            </a>
            <a
              href="#admision"
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm border border-slate-700 transition-colors"
            >
              Requisitos de Admisión →
            </a>
          </div>
        </div>

        {/* Right: Lead Capture Form Card */}
        <div
          id="postular"
          className="bg-white text-slate-900 rounded-2xl p-7 shadow-xl border border-slate-200 relative"
        >
          <div className="border-b border-slate-100 pb-4 mb-5">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
              Convocatoria 2026
            </span>
            <h2 className="text-lg font-bold text-slate-900 mt-1">
              Inscripción e Informes de Admisión
            </h2>
            <p className="text-xs text-slate-500 mt-1 leading-normal">
              Déjanos tus datos y un asesor de secretaría académica te
              contactará con los requisitos oficiales.
            </p>
          </div>

          {submitted ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 text-lg flex items-center justify-center mx-auto">
                <IconCheck className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">
                Pre-inscripción Registrada
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
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
                className="mt-2 text-xs font-semibold text-slate-700 hover:text-slate-900 underline"
              >
                Registrar otra postulación
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nombres y Apellidos
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez Quispe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="9XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Carrera Técnica de Interés
                </label>
                <select
                  required
                  value={selectedCareer}
                  onChange={(e) => {
                    setSelectedCareer(e.target.value)
                    if (onCareerSelect) onCareerSelect(e.target.value)
                  }}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 transition"
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Modalidad y Turno
                </label>
                <div className="text-xs bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg text-slate-600 flex justify-between">
                  <span>Presencial · Sede Huanta</span>
                  <span className="font-semibold text-slate-800">
                    7:30 am – 1:15 pm
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm py-3 rounded-lg transition-colors"
              >
                Solicitar Información de Admisión
              </button>

              <p className="text-[11px] text-slate-500 text-center leading-tight">
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
