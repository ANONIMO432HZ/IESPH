import { useState } from "react"
import campusFrontis from "@/assets/campus/frontis-principal.jpg"
import graduatesCelebration from "@/assets/campus/graduates-celebration.jpg"
import studentsFormation from "@/assets/campus/students-formation.jpg"
import { IconAward, IconPhone, IconShieldCheck } from "@/components/icons/Icons"
import {
  getYearsOfTrajectory,
  INSTITUTION_CONTACT,
  INSTITUTION_VALUES,
} from "@/data/institution"

interface WhyChooseUsSectionProps {
  onOpenVideoModal?: () => void
}

export default function WhyChooseUsSection({
  onOpenVideoModal,
}: WhyChooseUsSectionProps) {
  const [activeTab, setActiveTab] = useState<"mision" | "vision" | "valores">(
    "mision",
  )

  const years = getYearsOfTrajectory()

  return (
    <div id="nosotros" className="font-sans">
      {/* ── 1. Comprometidos con la excelencia en educación (presentacion) ── */}
      <section
        id="presentacion"
        className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column: Text & Features */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-0.5 w-8 bg-[#7114EF]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#7114EF] dark:text-[#08D9FF]">
                    Presentación Institucional
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Comprometidos con la{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7114EF] to-[#1475F7]">
                    excelencia
                  </span>{" "}
                  en educación
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed text-justify">
                  En el Instituto de Educación Superior Público "Huanta" nos
                  dedicamos a formar profesionales técnicos con valores,
                  habilidades y conocimientos para liderar en sus respectivas
                  áreas formativas. Con {years} años de trayectoria oficial
                  (creado por R.M. N° 265-86-ED), somos el referente de
                  educación superior pública y gratuita en la provincia de
                  Huanta y la región Ayacucho.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="space-y-3">
                <a
                  href="mision-vision"
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-600 transition-colors block group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/50 text-[#7114EF] dark:text-purple-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconAward className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7114EF] dark:group-hover:text-purple-300 transition-colors">
                        Nuestra Misión y Visión al 2031
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        Formación integral de profesionales competitivos,
                        innovadores y con responsabilidad ambiental.
                      </p>
                    </div>
                  </div>
                </a>

                <a
                  href="#organizacion"
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-colors block group"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-[#1475F7] dark:text-sky-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#1475F7] dark:group-hover:text-sky-300 transition-colors">
                        Educación Superior Licenciada por MINEDU
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                        R.M. N° 068-2020-MINEDU acreditando las Condiciones
                        Básicas de Calidad exigidas por la Ley N° 30512.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              {/* Call to action bar with Phone & Button */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm transition-colors"
                >
                  <IconPhone className="w-4 h-4 text-[#7114EF] dark:text-sky-400" />
                  <span>{INSTITUTION_CONTACT.phone}</span>
                </a>

                <a
                  href="mision-vision"
                  className="btn-pill-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Misión y Visión</span>
                  <span>↓</span>
                </a>
              </div>
            </div>

            {/* Right Column: Entrance Arch Photo with 40 Años circular badge (Inspired by Image 1) */}
            <div className="relative flex justify-center">
              {/* Arched purple background accent (from Image 1) */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-linear-to-tr from-[#7114EF]/30 to-[#1475F7]/30 blur-2xl pointer-events-none" />

              <div className="relative z-10 w-full max-w-md">
                {/* Circular Badge: AÑOS 40 (Inspired by Image 1) */}
                <div className="absolute -top-6 -left-4 sm:-left-6 z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-linear-to-br from-[#7114EF] to-[#1475F7] text-white p-1 shadow-2xl flex flex-col items-center justify-center border-4 border-white dark:border-slate-900 animate-in zoom-in duration-300">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    AÑOS
                  </span>
                  <span className="text-2xl sm:text-3xl font-black leading-none">
                    {years}
                  </span>
                </div>

                {/* Arched Photo Frame */}
                <div className="rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-4/3 sm:aspect-square group relative">
                  <img
                    src={campusFrontis}
                    alt="Ingreso a la Sede Central del IESPH"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Decorative side label */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-black uppercase tracking-wider border border-white/20">
                    Instituto Licenciado
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                    <div className="text-white">
                      <div className="text-xs font-bold text-[#08D9FF]">
                        Sede Jr. Córdova N° 650
                      </div>
                      <div className="text-sm font-black">
                        Huanta, Ayacucho — Perú
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Banner: Preparándote para tu Éxito ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-[#0b1730] text-white overflow-hidden">
        {/* Background Image: Graduates Celebration (from Image 1) */}
        <div className="absolute inset-0 z-0">
          <img
            src={graduatesCelebration}
            alt="Graduados del IESPH celebrando con togas y birretes"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b1730]/95 via-[#0b1730]/85 to-[#0b1730]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          {/* Central Play Button */}
          <button
            type="button"
            onClick={() => onOpenVideoModal?.()}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-[#7114EF] to-[#1475F7] text-white flex items-center justify-center mx-auto shadow-2xl shadow-purple-600/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group border-4 border-white/20"
            aria-label="Reproducir video institucional"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1 group-hover:scale-110 transition-transform"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>

          <span className="text-xs font-black uppercase tracking-widest text-[#08D9FF] block">
            Formación con Liderazgo
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Preparándote para tu Éxito — Ofrecemos las Mejores Soluciones
            Educativas
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Más de 4 décadas formando a los técnicos y profesionales que lideran
            los sectores de salud, tecnología digital, agroindustria,
            mecatrónica y agropecuaria en el país.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="presentacion"
              className="btn-pill-gradient text-white text-xs sm:text-sm font-bold px-7 py-3.5 shadow-xl transition-all cursor-pointer"
            >
              Sobre Nosotros
            </a>
            <a
              href="#plana-docente"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer"
            >
              Ver Plana Docente
            </a>
          </div>
        </div>
      </section>

      {/* ── 3. Tabs: Ofrecemos Educación Técnico De Alta Calidad (mision-vision) ──── */}
      <section
        id="mision-vision"
        className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 transition-colors scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7114EF] dark:text-[#08D9FF]">
              Compromiso Académico
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-1">
              Ofrecemos Educación Profesional Técnica De Alta Calidad
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-2">
              Pilares formativos orientados a la inserción laboral y el
              desarrollo socioeconómico.
            </p>
          </div>

          {/* Tab Switcher Buttons (Inspired by Image 1) */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300/80 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setActiveTab("mision")}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "mision"
                    ? "bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                Nuestra Misión
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("vision")}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "vision"
                    ? "bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                Nuestra Visión
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("valores")}
                className={`px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "valores"
                    ? "bg-linear-to-r from-[#7114EF] to-[#1475F7] text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                Valores Institucionales
              </button>
            </div>
          </div>

          {/* Tab Content Display (Left Photo of Students + Right Dynamic Content from Image 1) */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Photo of Students (from Image 1) */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 aspect-4/3 sm:aspect-16/10">
              <img
                src={studentsFormation}
                alt="Estudiantes en ceremonia oficial del IESPH"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Dynamic Tab Content */}
            <div className="space-y-5">
              {activeTab === "mision" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <span className="text-xs font-black text-[#7114EF] dark:text-[#08D9FF] uppercase tracking-wider">
                    Rumbo Formativo
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                    Misión de Formación Integral y Compromiso con la Calidad
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    "{INSTITUTION_VALUES.mission}"
                  </p>
                  <div className="pt-2">
                    <a
                      href="#organizacion"
                      className="btn-pill-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Ver Organización Institucional</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <span className="text-xs font-black text-[#1475F7] dark:text-[#08D9FF] uppercase tracking-wider">
                    Objetivo Estratégico al 2031
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                    Visión de Liderazgo Regional y Emprendimiento Sostenible
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify">
                    "{INSTITUTION_VALUES.vision2031}"
                  </p>
                  <div className="pt-2">
                    <a
                      href="#plana-jerarquica"
                      className="btn-pill-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Ver Plana Jerárquica</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              )}

              {activeTab === "valores" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Principios Éticos
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-snug">
                    Valores que Guían Nuestra Práctica Educativa
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Calidad y Rigor
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Estándares técnicos y pedagógicos validados.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Ética y Transparencia
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Gestión pública abierta al servicio de la comunidad.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Innovación Práctica
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Soluciones aplicadas en situaciones reales de trabajo.
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      <div className="font-bold text-slate-900 dark:text-white">
                        Responsabilidad Ambiental
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                        Cuidado del entorno en los valles de Huanta.
                      </p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#local"
                      className="btn-pill-gradient text-white text-xs sm:text-sm font-bold px-6 py-3 transition-all cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Conocer Nuestras Sedes</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
