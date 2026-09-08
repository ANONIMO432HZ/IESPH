import { useState } from "react"
import logoIES from "@/imports/LOGOIES.png"
import { INSTITUTION_CONTACT } from "@/data/institution"
import { MAIN_NAV_ITEMS, TOP_NAV_LINKS } from "@/data/navigation"
import { IconPhone, IconMapPin, IconClock } from "@/components/icons/Icons"

interface HeaderProps {
  onOpenApplyModal?: () => void
}

export default function Header({ onOpenApplyModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs border-b border-slate-200 font-sans">
      {/* ── Top Utility Bar: Clean, understated academic header ───────────────── */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Contact info with clean SVGs */}
          <div className="flex items-center gap-5 text-xs">
            <a
              href={`tel:${INSTITUTION_CONTACT.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-200">
                {INSTITUTION_CONTACT.phone}
              </span>
            </a>
            <span className="hidden md:inline-block text-slate-700">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <IconMapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>
                {INSTITUTION_CONTACT.address}, {INSTITUTION_CONTACT.city}
              </span>
            </span>
            <span className="hidden lg:inline-block text-slate-700">|</span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <IconClock className="w-3.5 h-3.5 text-slate-400" />
              <span>{INSTITUTION_CONTACT.schedule}</span>
            </span>
          </div>

          {/* Role links */}
          <div className="flex items-center gap-4 text-xs">
            {TOP_NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors font-medium flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="bg-amber-600/20 text-amber-300 text-[10px] px-2 py-0.5 rounded font-semibold border border-amber-600/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3.5 shrink-0 group">
          <img
            src={logoIES}
            alt="Logo Instituto de Educación Superior Público Huanta"
            className="h-14 w-auto object-contain"
          />
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                Instituto de Educación Superior
              </span>
              <span className="hidden sm:inline-block bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-slate-200">
                Licenciado MINEDU
              </span>
            </div>
            <div className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-sky-900 transition-colors">
              Público "Huanta"
            </div>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {MAIN_NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setActiveDropdown(item.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                      activeDropdown === item.label
                        ? "rotate-180 text-slate-700"
                        : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {/* Dropdown Menu */}
              {item.children && activeDropdown === item.label && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-900 transition-colors">
                          {child.label}
                        </div>
                        {child.description && (
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                            {child.description}
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#postular"
            onClick={onOpenApplyModal}
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow-xs transition-colors"
          >
            <span>Postula en Línea</span>
            <span>→</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Menú principal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Drawer ─────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 max-h-[85vh] overflow-y-auto space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Navegación
            </span>
            <span className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded">
              Licenciado MINEDU
            </span>
          </div>

          <div className="space-y-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-1">
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm font-bold text-slate-800 hover:text-blue-900"
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-3 space-y-1 border-l border-slate-200 ml-1 mb-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-slate-600 hover:text-blue-900"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#postular"
              onClick={() => {
                setMobileMenuOpen(false)
                if (onOpenApplyModal) onOpenApplyModal()
              }}
              className="block w-full text-center bg-slate-900 text-white text-sm font-bold py-3 rounded-lg shadow-xs hover:bg-slate-800"
            >
              Postula en Línea 2026
            </a>
          </div>

          <div className="pt-3 text-xs text-slate-500 space-y-1 border-t border-slate-100">
            <div>📞 {INSTITUTION_CONTACT.phone}</div>
            <div>
              📍 {INSTITUTION_CONTACT.address}, {INSTITUTION_CONTACT.city}
            </div>
            <div>⏰ {INSTITUTION_CONTACT.schedule}</div>
          </div>
        </div>
      )}
    </header>
  )
}
