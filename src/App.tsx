import { useState } from "react";
import logoIES from "@/imports/LOGOIES.png";
import logoIES1 from "@/imports/LOGOIES-1.png";

/* ─── Images ────────────────────────────────────────────────────────────── */
const HERO_BG =
  "https://images.unsplash.com/photo-1762512346988-045f4d5ad2b3?w=1600&h=900&fit=crop&auto=format";
const NEWS_1 =
  "https://images.unsplash.com/photo-1758270704763-22072a90d3b6?w=600&h=400&fit=crop&auto=format";
const NEWS_2 =
  "https://images.unsplash.com/photo-1549861833-7a62a4a84484?w=600&h=400&fit=crop&auto=format";
const NEWS_3 =
  "https://images.unsplash.com/photo-1758270704524-596810e891b5?w=600&h=400&fit=crop&auto=format";

/* ─── Data ───────────────────────────────────────────────────────────────── */
const CAREERS = [
  { icon: "💻", name: "Diseño y Programación Web", mod: "Presencial" },
  { icon: "🥤", name: "Industrias de Alimentos y Bebidas", mod: "Presencial" },
  { icon: "🛠️", name: "Mecatrónica Automotriz", mod: "Presencial" },
  { icon: "🌾", name: "Producción Agropecuaria", mod: "Presencial" },
  { icon: "🏥", name: "Enfermería Técnica", mod: "Presencial" },
];

const NAV_LINKS = [
  "Admisión",
  "Carreras",
  "Vida Institucional",
  "Campus",
  "Investigación",
  "Sobre el IESPH",
];

const QUICK_LINKS = ["Postulante", "Estudiante", "Docente", "Egresado"];

const REASONS = [
  {
    icon: "🏛️",
    label: "Instituto Licenciado",
    sub: "Reconocido por MINEDU",
  },
  {
    icon: "🎓",
    label: "Docentes Calificados",
    sub: "Con experiencia en la industria",
  },
  {
    icon: "👜",
    label: "Bolsa de Trabajo",
    sub: "Alianzas con empresas regionales",
  },
  {
    icon: "💻",
    label: "Aulas Tecnológicas",
    sub: "Laboratorios modernos equipados",
  },
];

const NEWS = [
  {
    img: NEWS_1,
    cat: "Admisión",
    date: "28 Ago 2026",
    title: "Proceso de admisión 2026-II: inscripciones abiertas para todas las carreras",
    excerpt:
      "El IESPH convoca al proceso de admisión para el ciclo 2026-II. Las inscripciones están abiertas del 1 al 30 de setiembre en secretaría académica.",
  },
  {
    img: NEWS_2,
    cat: "Institucional",
    date: "15 Ago 2026",
    title: "IESPH firma convenio con empresas del sector agroindustrial de Ayacucho",
    excerpt:
      "Nuestros estudiantes de Agropecuaria tendrán acceso a prácticas profesionales pagadas en las principales empresas de la región.",
  },
  {
    img: NEWS_3,
    cat: "Evento",
    date: "05 Ago 2026",
    title: "Semana Cultural 2026: celebrando la identidad huantina con arte y deporte",
    excerpt:
      "Del 18 al 22 de agosto se realizará la Semana Cultural con exposiciones, concursos y presentaciones de danzas típicas de nuestra región.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState<"Presencial" | "Semipresencial" | "Todos">(
    "Presencial"
  );
  const [form, setForm] = useState({ name: "", phone: "", career: "", campus: "" });

  const visible =
    tab === "Todos" ? CAREERS : CAREERS.filter((c) => c.mod === tab);

  const RED = "#1C16C0";
  const RED_DARK = "#1510A0";
  const BLUE = "#38BDF8";
  const LILAC = "#A78BFA";

  return (
    <div className="min-h-full bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>

      {/* ── Utility bar ─────────────────────────────────────────────────── */}
      <div className="bg-gray-100 border-b border-gray-200 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 h-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span>📞</span>(066) 322296
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span>📍</span>Jr. Córdova N° 650, Huanta, Ayacucho
            </span>
            <span className="hidden md:flex items-center gap-1.5">
              <span>✉️</span>contactos@iestphuanta.edu.pe
            </span>
          </div>
          <div className="flex items-center gap-4">
            {QUICK_LINKS.map((l) => (
              <a key={l} href="#" className="hover:text-gray-800 transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main navbar ─────────────────────────────────────────────────── */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 shrink-0">
            <img
              src={logoIES}
              alt="Logo IES Público Huanta"
              className="h-12 w-auto object-contain"
              style={{ backgroundColor: "rgb(255, 255, 255)" }}
            />
            <div className="leading-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                Instituto de Educación Superior
              </div>
              <div className="text-[15px] font-black leading-tight" style={{ color: RED }}>
                Público Huanta
              </div>
            </div>
          </a>

          {/* Nav links — desktop */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href="#"
                className="px-3 py-2 rounded text-sm font-semibold text-gray-700 hover:text-red-700 hover:bg-red-50 transition-all whitespace-nowrap"
              >
                {l}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#postular"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:brightness-90"
            style={{ backgroundColor: RED }}
          >
            Postula en línea
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden ml-auto p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t px-4 py-3 space-y-1">
            {NAV_LINKS.map((l) => (
              <a key={l} href="#"
                className="block py-2 px-3 rounded text-sm font-semibold text-gray-700 hover:bg-red-50 hover:text-red-700"
                onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            ))}
            <a href="#postular"
              className="block text-center mt-2 py-2 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: RED }}
              onClick={() => setMenuOpen(false)}>
              Postula en línea
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: 560 }}>
        {/* background */}
        <div className="absolute inset-0 bg-gray-900">
          <img src={HERO_BG} alt="Estudiantes del ISPH Huanta"
            className="w-full h-full object-cover opacity-45" />
        </div>
        {/* gradient overlay — left darker, right lighter so form card reads */}
        <div className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(26,10,10,0.82) 0%, rgba(26,10,10,0.60) 55%, rgba(26,10,10,0.30) 100%)",
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-[1fr_380px] gap-10 items-center">

          {/* Left: headline */}
          <div className="text-white">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ backgroundColor: "#1C16C0", color: "white" }}
            >
              Instituto Licenciado por el MINEDU
            </div>
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.05] mb-5"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Miles de estudiantes<br />
              ya construyen sus<br />
              <span style={{ color: "#A78BFA" }}>sueños con nosotros</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg max-w-lg leading-relaxed">
              Somos el Instituto de Educación Superior Público referente de la
              región Ayacucho. Carreras técnicas con salida laboral real y título
              oficial del MINEDU.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#carreras"
                className="font-bold px-6 py-3 rounded-full text-sm transition-all hover:brightness-90 text-white"
                style={{ backgroundColor: BLUE }}>
                Ver todas las carreras
              </a>
              <a href="#nosotros"
                className="font-bold px-6 py-3 rounded-full text-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all">
                Conoce el IESPH
              </a>
            </div>
          </div>

          {/* Right: enrollment form card */}
          <div id="postular" className="bg-white rounded-2xl shadow-2xl p-6 sm:p-7">
            <h2
              className="text-lg font-black mb-0.5"
              style={{ color: RED, fontFamily: "'Nunito', sans-serif" }}
            >
              ¡Inscríbete ahora!
            </h2>
            <p className="text-xs text-gray-400 mb-5">
              Un asesor académico te contactará en menos de 24 h.
            </p>

            <div className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Nombre completo
                </label>
                <input type="text" placeholder="Tu nombre completo"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
                  style={{ focusRingColor: RED } as React.CSSProperties} />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Celular
                </label>
                <input type="tel" placeholder="9XX XXX XXX"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 transition" />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Carrera de interés
                </label>
                <select value={form.career}
                  onChange={(e) => setForm({ ...form, career: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition">
                  <option value="">Selecciona una carrera</option>
                  {CAREERS.filter((c) => c.mod === "Presencial").map((c) => (
                    <option key={c.name} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1">
                  Modalidad
                </label>
                <select value={form.campus}
                  onChange={(e) => setForm({ ...form, campus: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 transition">
                  <option value="">Selecciona la modalidad</option>
                  <option>Presencial — Sede Huanta</option>
                </select>
              </div>

              <button
                className="w-full text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wide transition-all hover:brightness-90"
                style={{ backgroundColor: RED }}>
                Más información
              </button>
            </div>

            <p className="text-[10px] text-gray-400 text-center mt-3 leading-relaxed">
              Al enviar aceptas nuestra{" "}
              <a href="#" className="underline">Política de Privacidad</a>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust strip ─────────────────────────────────────────────────── */}
      <div className="border-y border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
          {[
            { n: "40+", t: "Años formando líderes" },
            { n: "4,500+", t: "Egresados en la región" },
            { n: "5", t: "Carreras técnicas" },
            { n: "98%", t: "Tasa de empleabilidad" },
          ].map(({ n, t }) => (
            <div key={t} className="text-center px-4 py-1">
              <div
                className="text-3xl font-black"
                style={{ color: RED, fontFamily: "'Nunito', sans-serif" }}
              >
                {n}
              </div>
              <div className="text-xs text-gray-500 mt-0.5">{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CARRERAS ────────────────────────────────────────────────────── */}
      <section id="carreras" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>
              Oferta educativa
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              Nuestras carreras técnicas
            </h2>
          </div>

          {/* Tabs — exact UTP pattern */}
          <div className="flex gap-0 mb-8 border-b border-gray-200">
            {(["Presencial"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-5 py-2.5 text-sm font-bold border-b-2 -mb-px transition-all"
                style={
                  tab === t
                    ? { borderColor: RED, color: RED }
                    : { borderColor: "transparent", color: "#6B7280" }
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Career cards grid — large icon cards like UTP */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {visible.map((c) => (
              <a
                key={c.name}
                href="#"
                className="group flex flex-col items-center text-center bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-red-100 transition-all"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "#EEF0FF" }}
                >
                  {c.icon}
                </div>
                <span className="text-sm font-bold text-gray-800 leading-snug group-hover:text-red-700 transition-colors">
                  {c.name}
                </span>
                <span
                  className="text-[11px] mt-1.5 px-2 py-0.5 rounded-full font-semibold"
                  style={
                    c.mod === "Presencial"
                      ? { backgroundColor: "#F0FFF4", color: "#15803D" }
                      : { backgroundColor: "#EFF6FF", color: "#1D4ED8" }
                  }
                >
                  {c.mod}
                </span>
              </a>
            ))}

            {/* CTA card */}
            <a
              href="#postular"
              className="flex flex-col items-center justify-center text-center rounded-xl p-5 min-h-[140px] transition-all hover:brightness-90"
              style={{ backgroundColor: RED }}
            >
              <span className="text-3xl mb-2">🎓</span>
              <span className="text-white font-bold text-sm leading-snug">
                ¿No sabes qué estudiar?
              </span>
              <span className="text-white/70 text-xs mt-1">Toma el test vocacional</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ IESPH ────────────────────────────────────────────────── */}
      <section id="nosotros" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>
              Nuestra propuesta
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              ¿Por qué estudiar en el IESPH?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r) => (
              <div key={r.label} className="bg-white rounded-xl p-6 shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4"
                  style={{ backgroundColor: "#EEF0FF" }}
                >
                  {r.icon}
                </div>
                <h3
                  className="font-extrabold text-gray-900 text-base mb-1"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {r.label}
                </h3>
                <p className="text-sm text-gray-500">{r.sub}</p>
              </div>
            ))}
          </div>

          {/* Feature strip */}
          <div
            className="mt-10 rounded-2xl p-8 grid sm:grid-cols-3 gap-6 text-white"
            style={{ background: "linear-gradient(135deg, #38BDF8 0%, #A78BFA 100%)" }}
          >
            {[
              { icon: "📅", t: "Clases presenciales", s: "Turno mañana de lunes a viernes." },
              { icon: "💳", t: "Educación licenciada", s: "Formación técnica de alta calidad con laboratorios equipados." },
              { icon: "🏅", t: "Título oficial MINEDU", s: "Validez nacional a nombre de la nación para impulsar tu futuro profesional en 3 años." },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-4">
                <div className="text-3xl shrink-0" style={{ paddingLeft: "1px" }}>{f.icon}</div>
                <div>
                  <div className="font-bold text-sm">{f.t}</div>
                  <div className="text-white/70 text-xs mt-0.5">{f.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADMISIÓN STEPS ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>
              Proceso de admisión
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-gray-900"
              style={{ fontFamily: "'Nunito', sans-serif" }}
            >
              4 pasos para inscribirte
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gray-100 z-0" />

            {[
              { n: "01", t: "Pre-inscripción", d: "Completa el formulario en línea con tus datos y documentos básicos." },
              { n: "02", t: "Examen de admisión", d: "Rinde la prueba de conocimientos generales en nuestra sede en Huanta." },
              { n: "03", t: "Resultados", d: "Consulta los resultados en nuestra web o en el panel del instituto." },
              { n: "04", t: "Matrícula", d: "Presenta tus documentos originales y formaliza tu inscripción en secretaría." },
            ].map((s) => (
              <div key={s.n} className="relative z-10 flex flex-col items-start">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-black mb-4 shadow-md"
                  style={{ backgroundColor: RED, fontFamily: "'Nunito', sans-serif" }}
                >
                  {s.n}
                </div>
                <h3
                  className="font-extrabold text-gray-900 text-base mb-2"
                  style={{ fontFamily: "'Nunito', sans-serif" }}
                >
                  {s.t}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="#postular"
              className="inline-flex items-center gap-2 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-all hover:brightness-90"
              style={{ backgroundColor: RED }}
            >
              Iniciar mi postulación →
            </a>
          </div>
        </div>
      </section>

      {/* ── NOTICIAS ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: RED }}>
                Actualidad
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-gray-900"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                Noticias y eventos
              </h2>
            </div>
            <a href="#" className="text-sm font-bold hidden sm:block hover:underline" style={{ color: RED }}>
              Ver todas →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEWS.map((n) => (
              <article key={n.title}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100">
                <div className="relative h-44 overflow-hidden bg-gray-200">
                  <img src={n.img} alt={n.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span
                    className="absolute top-3 left-3 text-white text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: RED }}
                  >
                    {n.cat}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-gray-400 font-mono mb-2">{n.date}</p>
                  <h3
                    className="font-extrabold text-gray-900 text-sm leading-snug mb-2 group-hover:text-red-700 transition-colors"
                    style={{ fontFamily: "'Nunito', sans-serif" }}
                  >
                    {n.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {n.excerpt}
                  </p>
                  <a href="#" className="inline-block mt-4 text-xs font-bold hover:underline" style={{ color: RED }}>
                    Leer más →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: RED }} className="py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-3"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Tu carrera técnica comienza hoy
          </h2>
          <p className="text-white/75 text-base mb-7 max-w-xl mx-auto">
            Únete a los miles de profesionales técnicos que construyeron su
            futuro con el Instituto de Educación Superior Público Huanta.
          </p>
          <a
            href="#postular"
            className="inline-block font-black text-white px-10 py-4 rounded-full text-base hover:brightness-90 transition-all"
            style={{ backgroundColor: "#A78BFA" }}
          >
            Quiero postular ahora
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: "#111827" }} className="text-gray-400">
        <div className="max-w-7xl mx-auto px-4 pt-12 pb-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src={logoIES1}
                alt="Logo IES Público Huanta"
                className="h-12 w-auto object-contain"
              />
              <div style={{ fontFamily: "'Nunito', sans-serif" }}>
                <div className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider">Instituto de Educación Superior</div>
                <div className="text-[14px] font-black text-white leading-tight">Público Huanta</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-gray-500">
              Instituto de Educación Superior Público Huanta al servicio de la región Ayacucho desde 1986.
            </p>
            <div className="flex gap-2.5 mt-5">
              {["f", "in", "yt", "ig"].map((s) => (
                <a key={s} href="#"
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold hover:brightness-110 transition"
                  style={{ backgroundColor: RED }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Institución */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Institución</h4>
            <ul className="space-y-2 text-xs">
              {["Historia", "Misión y Visión", "Autoridades", "Reglamento Institucional", "Transparencia"].map((l) => (
                <li key={l}><a href="#" className="hover:text-yellow-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Académico */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Académico</h4>
            <ul className="space-y-2 text-xs">
              {["Carreras Técnicas", "Proceso de Admisión", "Calendario Académico", "Biblioteca Virtual", "Portal del Estudiante"].map((l) => (
                <li key={l}><a href="#" className="hover:text-yellow-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex gap-2"><span>📍</span><span>Jr. Córdova N° 650, Huanta, Ayacucho</span></li>
              <li className="flex gap-2"><span>📞</span><span>(066) 322296</span></li>
              <li className="flex gap-2"><span>✉️</span><span>contactos@iestphuanta.edu.pe</span></li>
              <li className="flex gap-2"><span>🕐</span><span>Lun–Vie: 8:00 AM – 6:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mx-4 py-5 max-w-7xl mx-auto flex flex-wrap justify-between gap-2 text-xs text-gray-600">
          <span>© 2026 Instituto de Educación Superior Público Huanta · Todos los derechos reservados</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Términos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Mapa del Sitio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
