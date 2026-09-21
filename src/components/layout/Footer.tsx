import logoIES1 from "@/assets/logo.webp"
import {
  IconBook,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
} from "@/components/icons/Icons"
import { INSTITUTION_CONTACT } from "@/data/institution"
import { FOOTER_SECTIONS } from "@/data/navigation"

interface FooterProps {
  onOpenComplaintsModal?: () => void
}

export default function Footer({ onOpenComplaintsModal }: FooterProps) {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 font-sans transition-colors">
      {/* ── Main Footer Grid ─────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
          {/* Institutional Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 sm:gap-3.5">
              <img
                src={logoIES1}
                alt="Logo IESP Huanta"
                className="h-12 sm:h-14 w-auto object-contain"
              />
              <div>
                <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Instituto de Educación Superior
                </div>
                <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Público "Huanta"
                </div>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 max-w-sm">
              Institución pública de educación superior técnica de la provincia
              de Huanta y la región Ayacucho. Comprometidos con la formación
              integral, científica y humanista de profesionales técnicos al
              servicio del desarrollo nacional.
            </p>

            {/* Dignified Institutional Accreditation — Clean & Humanistic */}
            <div className="pt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1 border-l-2 border-amber-600 pl-3">
              <div className="font-semibold text-slate-900 dark:text-slate-200">
                Institución Licenciada por el Ministerio de Educación
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {INSTITUTION_CONTACT.licensingResolution} · Código Modular:{" "}
                {INSTITUTION_CONTACT.mineduCode}
              </div>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#libro-de-reclamaciones" ? (
                      <button
                        type="button"
                        onClick={onOpenComplaintsModal}
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-0.5 inline-block text-left cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors py-0.5 inline-block"
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Hours Column */}
          <div className="space-y-3">
            <h4 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider">
              Sede y Atención
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5 shrink-0">
                  <IconMapPin className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </span>
                <span>
                  {INSTITUTION_CONTACT.address}, {INSTITUTION_CONTACT.city},{" "}
                  {INSTITUTION_CONTACT.region}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 shrink-0">
                  <IconPhone className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </span>
                <a
                  href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
                  className="hover:text-slate-900 dark:hover:text-white font-medium text-slate-700 dark:text-slate-200 py-1"
                >
                  {INSTITUTION_CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 shrink-0">
                  <IconMail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </span>
                <a
                  href={`mailto:${INSTITUTION_CONTACT.email}`}
                  className="hover:text-slate-900 dark:hover:text-white truncate py-1 text-slate-700 dark:text-slate-200"
                >
                  {INSTITUTION_CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-slate-400 mt-0.5 shrink-0">
                  <IconClock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </span>
                <span>{INSTITUTION_CONTACT.schedule}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 shrink-0">
                  <svg
                    className="w-4 h-4 fill-current text-slate-500 dark:text-slate-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </span>
                <a
                  href={INSTITUTION_CONTACT.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 dark:hover:text-white transition-colors py-0.5 text-slate-700 dark:text-slate-300"
                >
                  Facebook Institucional
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-slate-400 shrink-0">
                  <IconBook className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                </span>
                <button
                  type="button"
                  onClick={onOpenComplaintsModal}
                  className="hover:text-slate-900 dark:hover:text-white transition-colors py-0.5 text-slate-700 dark:text-slate-300 cursor-pointer text-left"
                >
                  Libro de Reclamaciones
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Strip */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 mt-10 pt-6 flex items-center justify-center text-center">
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Instituto de Educación Superior Público
            "Huanta". Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
