import {
  IconBriefcase,
  IconBuilding,
  IconDocument,
  IconFlask,
} from "@/components/icons/Icons"
import { INSTITUTION_VALUES } from "@/data/institution"

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: (
        <IconBuilding className="w-6 h-6 text-blue-600 dark:text-sky-400" />
      ),
      title: "Instituto Licenciado por MINEDU",
      description:
        "Acreditación oficial que garantiza el cumplimiento estricto de las Condiciones Básicas de Calidad exigidas por la Ley de Educación Superior.",
    },
    {
      icon: (
        <IconBriefcase className="w-6 h-6 text-amber-600 dark:text-amber-400" />
      ),
      title: "Prácticas en Situaciones Reales de Trabajo",
      description:
        "Convenios de formación práctica con empresas privadas, hospitales y dependencias públicas de la provincia y la región.",
    },
    {
      icon: (
        <IconFlask className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      ),
      title: "Talleres y Laboratorios Equipados",
      description:
        "Espacios formativos para computación, mecatrónica automotriz, enfermería clínica y plantas de transformación de alimentos.",
    },
    {
      icon: (
        <IconDocument className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Título Oficial a Nombre de la Nación",
      description:
        "Graduación oficial en 3 años con certificación modular progresiva y reconocimiento nacional para el ejercicio profesional.",
    },
  ]

  return (
    <section
      id="nosotros"
      className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Nuestra Propuesta Formativa
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
            ¿Por qué estudiar en el Instituto de Educación Superior Público
            "Huanta"?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2 leading-relaxed">
            Formación técnica superior con sólida base científica, práctica y
            valores éticos para responder a las necesidades de la comunidad.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                {r.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {r.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision 2031 Strategic Callout — Dignified Institutional Panel */}
        <div className="mt-10 sm:mt-12 rounded-2xl bg-linear-to-br from-blue-50/80 via-white to-indigo-50/80 dark:from-[#0F223A] dark:via-[#0c1b2f] dark:to-[#09182a] text-slate-900 dark:text-white p-6 sm:p-8 lg:p-10 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl transition-colors">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-amber-700 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Visión Institucional al 2031
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug text-slate-900 dark:text-white">
                Liderazgo en la formación integral de profesionales técnicos e
                innovadores
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                "{INSTITUTION_VALUES.vision2031}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="/admision"
                className="w-full sm:w-auto lg:w-full min-h-11 flex items-center justify-center bg-amber-600 hover:bg-amber-500 text-white text-center text-xs sm:text-sm font-bold py-2.5 px-6 rounded-lg transition-colors shadow-xs"
              >
                Admisión 2026 →
              </a>
              <a
                href="/contacto"
                className="w-full sm:w-auto lg:w-full min-h-11 flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-center text-xs sm:text-sm font-medium py-2.5 px-6 rounded-lg border border-slate-300 dark:border-slate-700 transition-colors"
              >
                Visitar la Sede Central
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
