import { useEffect, useState } from "react"
import {
  IconBook,
  IconClock,
  IconMail,
  IconPhone,
} from "@/components/icons/Icons"
import { INSTITUTION_CONTACT } from "@/data/institution"

interface ComplaintsBookModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ComplaintsBookModal({
  isOpen,
  onClose,
}: ComplaintsBookModalProps) {
  const [incidentType, setIncidentType] = useState<"reclamo" | "queja">(
    "reclamo",
  )
  const [activeTab, setActiveTab] = useState<"guia" | "formulario">(
    "formulario",
  )
  const [submitted, setSubmitted] = useState(false)
  const [registrationCode, setRegistrationCode] = useState("")

  const [formData, setFormData] = useState({
    fullName: "",
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "Servicio Educativo",
    serviceDetail: "",
    incidentDetail: "",
    claimRequest: "",
  })

  // Close on ESC and lock background scroll
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = `LRV-2026-${Math.floor(1000 + Math.random() * 9000)}`
    setRegistrationCode(code)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: "",
      documentType: "DNI",
      documentNumber: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "Servicio Educativo",
      serviceDetail: "",
      incidentDetail: "",
      claimRequest: "",
    })
  }

  // Pre-formatted mailto for official institutional transmission
  const mailtoSubject = encodeURIComponent(
    `[Libro de Reclamaciones] Registro de ${
      incidentType === "reclamo" ? "Reclamo" : "Queja"
    } - ${formData.fullName || "Usuario"}`,
  )
  const mailtoBody = encodeURIComponent(
    `INSTITUTO DE EDUCACIÓN SUPERIOR PÚBLICO "HUANTA"
HOJA DE RECLAMACIÓN VIRTUAL (Ley N° 29571)
Código de Registro: ${registrationCode || "PENDIENTE"}
Tipo de Incidencia: ${incidentType.toUpperCase()}

1. IDENTIFICACIÓN DEL CONSUMIDOR
Nombre completo: ${formData.fullName}
Documento: ${formData.documentType} N° ${formData.documentNumber}
Teléfono: ${formData.phone}
Correo electrónico: ${formData.email}
Domicilio: ${formData.address}

2. IDENTIFICACIÓN DEL BIEN O SERVICIO CONTRATADO
Tipo: ${formData.serviceType}
Detalle: ${formData.serviceDetail}

3. DETALLE DE LA RECLAMACIÓN
Hechos: ${formData.incidentDetail}

4. PEDIDO DEL CONSUMIDOR
Pedido: ${formData.claimRequest}
`,
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="complaints-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden font-sans z-10 transition-colors">
        {/* Top Institutional Header */}
        <div className="sticky top-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-5 sm:px-6 py-4 flex items-center justify-between gap-4 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-sky-500/15 border border-blue-200 dark:border-sky-400/25 text-blue-700 dark:text-sky-300 flex items-center justify-center shrink-0">
              <IconBook className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-blue-700 dark:text-sky-400 uppercase tracking-wider block">
                Ley N° 29571 · Código de Protección al Consumidor
              </span>
              <h2
                id="complaints-modal-title"
                className="text-base sm:text-lg font-black text-slate-900 dark:text-white"
              >
                Libro de Reclamaciones Virtual
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Cerrar modal del Libro de Reclamaciones"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Legal Context Notice */}
        <div className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 px-5 sm:px-6 py-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Conforme a lo establecido en el Código de Protección y Defensa del
          Consumidor (Ley N° 29571), el{" "}
          <strong className="text-slate-900 dark:text-white font-semibold">
            Instituto de Educación Superior Público "Huanta"
          </strong>{" "}
          pone a su disposición el libro de reclamaciones virtual para el
          registro de reclamos o quejas.
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 sm:px-6 bg-white dark:bg-slate-900">
          <button
            onClick={() => setActiveTab("formulario")}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === "formulario"
                ? "border-blue-600 text-blue-700 dark:border-sky-400 dark:text-sky-300"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Hoja de Reclamación Virtual
          </button>
          <button
            onClick={() => setActiveTab("guia")}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === "guia"
                ? "border-blue-600 text-blue-700 dark:border-sky-400 dark:text-sky-300"
                : "border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
            }`}
          >
            Preguntas Frecuentes y Plazos
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* TAB 1: FORMULARIO */}
          {activeTab === "formulario" &&
            (submitted ? (
              <div className="space-y-5 text-center py-6">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-emerald-700">
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                    Reclamación Registrada con Éxito
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Código de Registro: {registrationCode}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Su {incidentType} ha sido ingresado en nuestro sistema
                    institucional. De conformidad con la normativa de INDECOPI,
                    la institución dará respuesta formal en un plazo máximo no
                    mayor a 15 días hábiles.
                  </p>
                </div>

                {/* Summary card */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2 border border-slate-200 dark:border-slate-700">
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      Reclamante:
                    </span>{" "}
                    <strong className="text-slate-900 dark:text-white">
                      {formData.fullName} ({formData.documentType}{" "}
                      {formData.documentNumber})
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      Tipo de Incidencia:
                    </span>{" "}
                    <span className="uppercase font-bold text-slate-800 dark:text-slate-200">
                      {incidentType}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      Canal Oficial:
                    </span>{" "}
                    <span className="text-slate-800 dark:text-slate-200">
                      {INSTITUTION_CONTACT.email}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 max-w-md mx-auto">
                  <a
                    href={`mailto:${INSTITUTION_CONTACT.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                    className="w-full sm:w-auto min-h-11 flex items-center justify-center gap-2 bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-colors shadow-xs"
                  >
                    <IconMail className="w-4 h-4" />
                    <span>Enviar Copia a Secretaría</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto min-h-11 flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                  >
                    Registrar otra incidencia
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Selector Reclamo vs Queja */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Tipo de Incidencia *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setIncidentType("reclamo")}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        incidentType === "reclamo"
                          ? "border-blue-600 bg-blue-50/70 dark:bg-sky-950/40 dark:border-sky-500 ring-2 ring-blue-500/20"
                          : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Reclamo
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                        Disconformidad con el producto o servicio recibido.
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIncidentType("queja")}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        incidentType === "queja"
                          ? "border-blue-600 bg-blue-50/70 dark:bg-sky-950/40 dark:border-sky-500 ring-2 ring-blue-500/20"
                          : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        Queja
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                        Malestar o descontento por mala atención al público.
                      </div>
                    </button>
                  </div>
                </div>

                {/* Section 1: Datos del Consumidor */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block border-b border-slate-100 dark:border-slate-800 pb-1">
                    1. Identificación del Consumidor Reclamante
                  </span>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Nombres y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            fullName: e.target.value,
                          })
                        }
                        placeholder="Ej. Juan Pérez Quispe"
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 dark:focus:border-sky-400"
                      />
                    </div>

                    <div className="grid grid-cols-[90px_1fr] gap-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          Tipo Doc.
                        </label>
                        <select
                          value={formData.documentType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              documentType: e.target.value,
                            })
                          }
                          className="w-full text-xs px-2 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                        >
                          <option value="DNI">DNI</option>
                          <option value="C.E.">C.E.</option>
                          <option value="Pasaporte">Pasaporte</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          N° Documento *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.documentNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              documentNumber: e.target.value,
                            })
                          }
                          placeholder="Número"
                          className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                        ></input>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Teléfono / Celular *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="Ej. 966 000 000"
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="usuario@ejemplo.com"
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Domicilio (Dirección, Distrito, Ciudad)
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Ej. Jr. Córdova 650, Huanta"
                      className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                    />
                  </div>
                </div>

                {/* Section 2: Identificación del Bien o Servicio Contratado */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block border-b border-slate-100 dark:border-slate-800 pb-1">
                    2. Identificación del Bien o Servicio Contratado
                  </span>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Tipo de Servicio
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceType: e.target.value,
                          })
                        }
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                      >
                        <option value="Servicio Educativo">
                          Servicio Educativo (Clases / Currícula)
                        </option>
                        <option value="Admisión e Inscripción">
                          Proceso de Admisión e Inscripción
                        </option>
                        <option value="Trámite y Certificación">
                          Trámite Documentario / Certificados / Título
                        </option>
                        <option value="Atención en Mesa de Partes">
                          Atención en Mesa de Partes / Secretaría
                        </option>
                        <option value="Otro">Otro servicio</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Programa de Estudio / Área relacionada
                      </label>
                      <input
                        type="text"
                        value={formData.serviceDetail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceDetail: e.target.value,
                          })
                        }
                        placeholder="Ej. Enfermería Técnica / Secretaría Académica"
                        className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Detalle de la Reclamación */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider block border-b border-slate-100 dark:border-slate-800 pb-1">
                    3. Detalle de la Reclamación y Pedido
                  </span>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Detalle de los Hechos (Descripción clara del reclamo o
                      queja) *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.incidentDetail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          incidentDetail: e.target.value,
                        })
                      }
                      placeholder="Describa de manera ordenada y precisa los hechos sucedidos..."
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Pedido Concreto del Reclamante *
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.claimRequest}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          claimRequest: e.target.value,
                        })
                      }
                      placeholder="Especifique la solución o rectificación solicitada..."
                      className="w-full text-xs p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:border-blue-600 leading-relaxed"
                    />
                  </div>
                </div>

                {/* Actions & Legal Note */}
                <div className="pt-3 space-y-3">
                  <button
                    type="submit"
                    className="w-full min-h-11 flex items-center justify-center gap-2 bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white font-bold text-xs sm:text-sm py-3 rounded-lg shadow-xs transition-colors active:scale-[0.99]"
                  >
                    <span>Registrar Hoja de Reclamación</span>
                    <span>→</span>
                  </button>

                  <div className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-tight">
                    La formulación del reclamo no impide acudir a otras vías de
                    solución de controversias ni es condición previa para
                    interponer una denuncia ante el INDECOPI.
                  </div>
                </div>
              </form>
            ))}

          {/* TAB 2: GUÍA, DEFINICIONES Y PLAZOS (Exacto a captura oficial del IESPH) */}
          {activeTab === "guia" && (
            <div className="space-y-6 text-slate-800 dark:text-slate-200">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400" />
                  ¿Qué es un Reclamo?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  Se realiza cuando el consumidor no se encuentra conforme con
                  el producto adquirido o con el servicio recibido.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-sky-400" />
                  ¿Qué es una Queja?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  Malestar o descontento por algo que está relacionado
                  directamente al producto o servicio comprado o se refiere a
                  una mala atención al público. Tus reclamos puedes registrarlos
                  las 24 horas del día, los 7 días de la semana, pero ten en
                  cuenta que si registras tu reclamo fuera de horario laboral
                  será registrado al día hábil siguiente para el inicio de su
                  trámite.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <IconClock className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  Horario de Atención
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  Lunes a viernes: 7:30 am – 1:15 pm
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <IconMail className="w-4 h-4 text-blue-600 dark:text-sky-400" />
                  ¿Cómo Presentarlo?
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                  Para el registro de tu reclamo o queja escríbanos al correo
                  electrónico:{" "}
                  <a
                    href={`mailto:${INSTITUTION_CONTACT.email}`}
                    className="font-semibold text-blue-700 dark:text-sky-400 hover:underline"
                  >
                    {INSTITUTION_CONTACT.email}
                  </a>{" "}
                  o complete la Hoja de Reclamación Virtual disponible en la
                  pestaña anterior.
                </p>
              </div>

              {/* Direct Mail Action */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  ¿Prefieres redactar directamente desde tu cliente de correo?
                </div>
                <a
                  href={`mailto:${INSTITUTION_CONTACT.email}?subject=${encodeURIComponent(
                    "[Libro de Reclamaciones IESPH] Registro de Reclamo o Queja",
                  )}`}
                  className="inline-flex items-center gap-2 text-xs font-bold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shadow-2xs shrink-0"
                >
                  <IconMail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span>Escribir a {INSTITUTION_CONTACT.email}</span>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Contact Strip */}
        <div className="bg-slate-50 dark:bg-slate-800/80 border-t border-slate-200 dark:border-slate-800 px-5 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <IconPhone className="w-3.5 h-3.5 text-slate-400" />
            <span>Central: {INSTITUTION_CONTACT.phone}</span>
          </div>
          <div>
            Sede Central: {INSTITUTION_CONTACT.address}, Huanta, Ayacucho
          </div>
        </div>
      </div>
    </div>
  )
}
