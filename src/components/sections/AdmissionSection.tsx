import { useState } from "react"
import { IconCheck, IconDocument } from "@/components/icons/Icons"
import {
  ADMISSION_MODALITIES,
  ADMISSION_PROCESS_INFO,
  ADMISSION_STEPS,
  GENERAL_REQUIREMENTS,
} from "@/data/admission"

interface AdmissionSectionProps {
  onStartApply: () => void
}

export default function AdmissionSection({
  onStartApply,
}: AdmissionSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "pasos" | "requisitos" | "modalidades"
  >("pasos")

  return (
    <section
      id="admision"
      className="py-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Convocatoria e Inscripciones
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            {ADMISSION_PROCESS_INFO.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
            {ADMISSION_PROCESS_INFO.description}
          </p>

          {/* Official Results & System Links */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {ADMISSION_PROCESS_INFO.resultsPdf && (
              <a
                href={ADMISSION_PROCESS_INFO.resultsPdf}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-sky-950/40 border border-blue-200 dark:border-sky-800 text-blue-700 dark:text-sky-300 hover:bg-blue-100 dark:hover:bg-sky-900/50 text-xs font-bold transition-all shadow-xs"
              >
                <span>Descargar Resultados Oficiales Admisión 2026 (PDF)</span>
                <span>↓</span>
              </a>
            )}
            {ADMISSION_PROCESS_INFO.onlineAdmissionUrl && (
              <a
                href={ADMISSION_PROCESS_INFO.onlineAdmissionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold transition-all"
              >
                <span>Sistema de Admisión en Línea</span>
                <span>↗</span>
              </a>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 bg-slate-100 dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("pasos")}
              className={`flex-1 py-2 px-2 sm:px-3 min-h-10 sm:min-h-11 flex items-center justify-center rounded-md text-xs font-bold transition-colors ${
                activeTab === "pasos"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <span className="hidden sm:inline">4 Pasos de Inscripción</span>
              <span className="sm:hidden">4 Pasos</span>
            </button>
            <button
              onClick={() => setActiveTab("requisitos")}
              className={`flex-1 py-2 px-2 sm:px-3 min-h-10 sm:min-h-11 flex items-center justify-center rounded-md text-xs font-bold transition-colors ${
                activeTab === "requisitos"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Requisitos
            </button>
            <button
              onClick={() => setActiveTab("modalidades")}
              className={`flex-1 py-2 px-2 sm:px-3 min-h-10 sm:min-h-11 flex items-center justify-center rounded-md text-xs font-bold transition-colors ${
                activeTab === "modalidades"
                  ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Modalidades
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Pasos */}
        {activeTab === "pasos" && (
          <div className="space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {ADMISSION_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-sky-600 text-white text-sm font-extrabold flex items-center justify-center">
                        {s.step}
                      </span>
                      {s.badge && (
                        <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onStartApply}
                className="w-full sm:w-auto min-h-11 inline-flex items-center justify-center bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white font-bold px-7 py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-colors active:scale-[0.99]"
              >
                Iniciar Pre-Inscripción 2026 →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Requisitos */}
        {activeTab === "requisitos" && (
          <div className="max-w-3xl mx-auto bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <IconDocument className="w-5 h-5 text-slate-700 dark:text-slate-300 shrink-0" />
              <span>Documentos Obligatorios para la Carpeta de Postulante</span>
            </h3>
            <div className="space-y-2.5">
              {GENERAL_REQUIREMENTS.map((req) => (
                <div
                  key={req}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                >
                  <span className="w-4 h-4 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-3 h-3 text-slate-700 dark:text-slate-200" />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-snug">
                    {req}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Lugar de entrega: Secretaría Académica (Jr. Córdova N° 650)
              </span>
              <a
                href="/postular"
                onClick={(e) => {
                  e.preventDefault()
                  onStartApply?.()
                }}
                className="text-xs font-bold text-slate-900 dark:text-sky-400 hover:underline py-1 inline-flex items-center"
              >
                Completar datos previos en línea →
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Modalidades */}
        {activeTab === "modalidades" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ADMISSION_MODALITIES.map((mod) => (
              <div
                key={mod.title}
                className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <span className="text-xs font-bold uppercase text-slate-700 dark:text-slate-300">
                    {mod.targetAudience}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mt-3 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a
                    href="/postular"
                    onClick={(e) => {
                      e.preventDefault()
                      onStartApply?.()
                    }}
                    className="text-xs font-semibold text-slate-900 dark:text-sky-400 hover:underline flex items-center gap-1 min-h-9 py-1"
                  >
                    <span>Postular por esta modalidad</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
