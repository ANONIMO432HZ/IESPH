import { useState } from "react"
import {
  ADMISSION_STEPS,
  ADMISSION_MODALITIES,
  GENERAL_REQUIREMENTS,
  ADMISSION_PROCESS_INFO,
} from "@/data/admission"
import { IconCheck, IconDocument } from "@/components/icons/Icons"

interface AdmissionSectionProps {
  onStartApply: () => void
}

export default function AdmissionSection({
  onStartApply,
}: AdmissionSectionProps) {
  const [activeTab, setActiveTab] =
    useState<"pasos" | "requisitos" | "modalidades">("pasos")

  return (
    <section
      id="admision"
      className="py-20 bg-white border-b border-slate-200 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Convocatoria e Inscripciones
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
            {ADMISSION_PROCESS_INFO.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            {ADMISSION_PROCESS_INFO.description}
          </p>

          {/* Navigation Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 bg-slate-100 p-1 rounded-lg border border-slate-200 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("pasos")}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-bold transition-colors ${
                activeTab === "pasos"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              4 Pasos de Inscripción
            </button>
            <button
              onClick={() => setActiveTab("requisitos")}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-bold transition-colors ${
                activeTab === "requisitos"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Requisitos
            </button>
            <button
              onClick={() => setActiveTab("modalidades")}
              className={`flex-1 py-2 px-3 rounded-md text-xs font-bold transition-colors ${
                activeTab === "modalidades"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Modalidades
            </button>
          </div>
        </div>

        {/* Tab 1: 4 Pasos */}
        {activeTab === "pasos" && (
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ADMISSION_STEPS.map((s) => (
                <div
                  key={s.step}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-lg bg-slate-900 text-white text-sm font-extrabold flex items-center justify-center">
                        {s.step}
                      </span>
                      {s.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                onClick={onStartApply}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3 rounded-lg text-xs sm:text-sm shadow-xs transition-colors"
              >
                Iniciar Pre-Inscripción 2026 →
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Requisitos */}
        {activeTab === "requisitos" && (
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <IconDocument className="w-5 h-5 text-slate-700" />
              <span>Documentos Obligatorios para la Carpeta de Postulante</span>
            </h3>
            <div className="space-y-2.5">
              {GENERAL_REQUIREMENTS.map((req, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200"
                >
                  <span className="w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-3 h-3 text-slate-700" />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                    {req}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Lugar de entrega: Secretaría Académica (Jr. Córdova N° 650)
              </span>
              <a
                href="#postular"
                onClick={onStartApply}
                className="text-xs font-bold text-slate-900 hover:underline"
              >
                Completar datos previos en línea →
              </a>
            </div>
          </div>
        )}

        {/* Tab 3: Modalidades */}
        {activeTab === "modalidades" && (
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ADMISSION_MODALITIES.map((mod) => (
              <div
                key={mod.title}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="bg-slate-200 text-slate-800 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                    {mod.targetAudience}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-3 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <a
                    href="#postular"
                    onClick={onStartApply}
                    className="text-xs font-semibold text-slate-900 hover:underline flex items-center gap-1"
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
