import {
  Award,
  Calendar,
  CheckCircle2,
  Download,
  FileCheck2,
  ShieldCheck,
} from "lucide-react"
import { useState } from "react"
import campusFrontis from "@/assets/campus/frontis-principal.jpg"
import studentsFormation from "@/assets/campus/students-formation.jpg"
import { IconAward, IconPhone, IconShieldCheck } from "@/components/icons/Icons"
import { AetherFlowCanvas } from "@/components/ui/aether-flow-hero"
import {
  getYearsOfTrajectory,
  HISTORICAL_MILESTONES,
  INSTITUTION_CONTACT,
  INSTITUTION_HISTORY,
  INSTITUTION_VALUES,
  LICENSING_INFO,
} from "@/data/institution"

interface WhyChooseUsSectionProps {
  onOpenVideoModal?: () => void
}

export default function WhyChooseUsSection({
  onOpenVideoModal: _onOpenVideoModal,
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
                  href="#mision-vision"
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
                  href="organizacion"
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
                  href="#mision-vision"
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

          {/* ── Reseña Histórica Oficial (de INFO.html) ────────────────────── */}
          <div className="mt-14 pt-12 border-t border-slate-200/80 dark:border-slate-800">
            <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/60 text-[#7114EF] dark:text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5" />
                {INSTITUTION_HISTORY.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {INSTITUTION_HISTORY.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed text-justify sm:text-center">
                {INSTITUTION_HISTORY.narrative}
              </p>
            </div>

            {/* Timeline de Hitos y Resoluciones Ministeriales */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {HISTORICAL_MILESTONES.map((milestone) => (
                <div
                  key={milestone.year}
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between group hover:-translate-y-0.5 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="text-xs font-black text-[#7114EF] dark:text-[#08D9FF] bg-purple-100 dark:bg-purple-950/80 px-2 py-0.5 rounded-md">
                        {milestone.year}
                      </span>
                      <FileCheck2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#7114EF] transition-colors" />
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      {milestone.resolution}
                    </div>
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white mt-1 leading-snug line-clamp-2">
                      {milestone.title}
                    </div>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 line-clamp-3">
                    {milestone.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bloque Oficial de Licenciamiento Institucional (de INFO.html) ── */}
          <div className="mt-14 rounded-3xl p-6 sm:p-10 bg-linear-to-br from-purple-50/70 via-slate-50 to-blue-50/70 dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 border-2 border-purple-200/70 dark:border-purple-900/50 shadow-xl relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-linear-to-bl from-[#7114EF]/15 to-[#1475F7]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7114EF] text-white text-xs font-black tracking-wider uppercase shadow-md shadow-purple-600/30">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{LICENSING_INFO.badge}</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                    {LICENSING_INFO.slogan}
                  </h3>
                  <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-sky-300 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 text-[#1475F7]" />
                    <span>
                      Resolución Ministerial N°{" "}
                      {LICENSING_INFO.resolution.replace(
                        /^R\.M\.\s*N°\s*/i,
                        "",
                      )}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                  {LICENSING_INFO.paragraphs.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>

                {/* 4 Pilares de Garantía de Calidad */}
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  {LICENSING_INFO.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1475F7] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">
                          {pillar.title}
                        </div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                          {pillar.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna Lateral: Tarjeta Visual y Certificación */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg aspect-16/10 relative group">
                  <img
                    src={studentsFormation}
                    alt="Estudiantes en formación en el campus del IESPH"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="text-xs font-bold text-[#08D9FF]">
                        Comunidad Académica IESPH
                      </div>
                      <div className="text-sm font-black">
                        Excelencia y Vocación al Servicio del Perú
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Resolución de Licenciamiento
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {LICENSING_INFO.resolution}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <a
                      href={LICENSING_INFO.pdfUrl}
                      download="Licenciamiento-RMN371-2025-MINEDU.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-gradient text-white text-xs font-bold px-4 py-2 shadow-sm inline-flex items-center justify-center gap-1.5 cursor-pointer flex-1 sm:flex-initial"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar PDF</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Banner: Preparándote para tu Éxito ─────────────────────── */}
      <section className="relative py-20 sm:py-28 bg-white dark:bg-[#0b1730] text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 border-y border-slate-100 dark:border-slate-800/80">
        {/* Aether Flow Interactive Particle Mesh Canvas */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AetherFlowCanvas transparent />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#7114EF] dark:text-[#08D9FF] block">
            Formación con Liderazgo
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
            Preparándote para tu Éxito — Ofrecemos las Mejores Soluciones
            Educativas
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
              className="px-6 py-3.5 rounded-full bg-slate-900/5 hover:bg-slate-900/10 text-slate-800 border border-slate-300/80 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:border-white/20 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all cursor-pointer"
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
                      href="organizacion"
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
