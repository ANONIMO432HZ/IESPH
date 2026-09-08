import logoIES1 from "@/imports/LOGOIES-1.png"
import { INSTITUTION_CONTACT } from "@/data/institution"
import { FOOTER_SECTIONS } from "@/data/navigation"
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
} from "@/components/icons/Icons"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans">
      {/* ── Main Footer Grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Institutional Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={logoIES1}
                alt="Logo IESP Huanta"
                className="h-14 w-auto object-contain"
              />
              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Instituto de Educación Superior
                </div>
                <div className="text-xl font-bold text-white tracking-tight">
                  Público "Huanta"
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-300 max-w-sm">
              Institución pública de educación superior técnica de la provincia
              de Huanta y la región Ayacucho. Comprometidos con la formación
              integral, científica y humanista de profesionales técnicos al
              servicio del desarrollo nacional.
            </p>

            {/* Dignified Institutional Accreditation — Clean & Humanistic, NO pulsing dots or neon badges */}
            <div className="pt-2 text-xs text-slate-300 space-y-1 border-l-2 border-amber-600/60 pl-3">
              <div className="font-semibold text-slate-200">
                Institución Licenciada por el Ministerio de Educación
              </div>
              <div className="text-[11px] text-slate-400">
                {INSTITUTION_CONTACT.licensingResolution} · Código Modular:{" "}
                {INSTITUTION_CONTACT.mineduCode}
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3 flex items-center gap-3">
              <span className="text-xs text-slate-400">Canales oficiales:</span>
              <a
                href={INSTITUTION_CONTACT.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg border border-slate-700"
                aria-label="Facebook del IESP Huanta"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook Institucional</span>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-white text-xs font-bold uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-slate-100 transition-colors"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours Column */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Sede y Atención
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">
                  <IconMapPin className="w-4 h-4 text-slate-400" />
                </span>
                <span>
                  {INSTITUTION_CONTACT.address}, {INSTITUTION_CONTACT.city},{" "}
                  {INSTITUTION_CONTACT.region}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400">
                  <IconPhone className="w-4 h-4 text-slate-400" />
                </span>
                <a
                  href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
                  className="hover:text-white font-medium text-slate-200"
                >
                  {INSTITUTION_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400">
                  <IconMail className="w-4 h-4 text-slate-400" />
                </span>
                <a
                  href={`mailto:${INSTITUTION_CONTACT.email}`}
                  className="hover:text-white truncate"
                >
                  {INSTITUTION_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5">
                  <IconClock className="w-4 h-4 text-slate-400" />
                </span>
                <span>{INSTITUTION_CONTACT.schedule}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-block text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-2"
              >
                Libro de Reclamaciones Virtual
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────────────── */}
      <div className="border-t border-slate-800 bg-slate-950 py-5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Instituto de Educación Superior Público
            "Huanta". Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>R.M. N° 068-2020-MINEDU</span>
            <span>·</span>
            <a
              href="#contacto"
              className="hover:text-slate-200 transition-colors"
            >
              Transparencia
            </a>
            <span>·</span>
            <a
              href="#contacto"
              className="hover:text-slate-200 transition-colors"
            >
              TUPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
