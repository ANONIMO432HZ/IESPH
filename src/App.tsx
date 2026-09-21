import { lazy, Suspense, useEffect, useState } from "react"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import AdmissionSection from "@/components/sections/AdmissionSection"
import CareersSection from "@/components/sections/CareersSection"
import CtaBanner from "@/components/sections/CtaBanner"
import HeroSection from "@/components/sections/HeroSection"
import NewsSection from "@/components/sections/NewsSection"
import ServicesSection from "@/components/sections/ServicesSection"
import StatsStrip from "@/components/sections/StatsStrip"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection"
import type { Career } from "@/types"
import { navigateTo } from "@/utils/navigation"

// Lazy loading diferido bajo demanda para optimización en redes lentas
const CareerModal = lazy(() => import("@/components/modals/CareerModal"))
const ComplaintsBookModal = lazy(
  () => import("@/components/modals/ComplaintsBookModal"),
)

export default function App() {
  const [activeCareerModal, setActiveCareerModal] = useState<Career | null>(
    null,
  )
  const [complaintsModalOpen, setComplaintsModalOpen] = useState(false)

  // Listen for clean path navigation and browser back/forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname
      const hash = window.location.hash

      if (
        path === "/libro-de-reclamaciones" ||
        hash === "#libro-de-reclamaciones"
      ) {
        setComplaintsModalOpen(true)
      } else {
        setComplaintsModalOpen(false)
        if (path !== "/" && path !== "") {
          const sectionId = path.replace(/^\//, "")
          const el = document.getElementById(sectionId)
          if (el) el.scrollIntoView({ behavior: "smooth" })
        } else if (hash) {
          const el = document.getElementById(hash.replace(/^#/, ""))
          if (el) el.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const handleOpenModal = () => {
      setComplaintsModalOpen(true)
    }

    // Handle initial route on mount
    handlePopState()

    window.addEventListener("popstate", handlePopState)
    window.addEventListener("open-complaints-modal", handleOpenModal)

    // Global click interceptor for clean internal paths (/carreras, /nosotros, etc.)
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a")
      if (!target) return
      const href = target.getAttribute("href")
      if (
        href?.startsWith("/") &&
        !href.startsWith("//") &&
        !target.hasAttribute("download") &&
        target.target !== "_blank"
      ) {
        e.preventDefault()
        navigateTo(href)
      }
    }

    document.addEventListener("click", handleDocumentClick)

    return () => {
      window.removeEventListener("popstate", handlePopState)
      window.removeEventListener("open-complaints-modal", handleOpenModal)
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [])

  const handleScrollToApply = (careerName?: string) => {
    const el = document.getElementById("postular")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      // If a career name was selected, pre-fill the career select in the form
      if (careerName) {
        const select = el.querySelector("select")
        if (select) {
          select.value = careerName
          select.dispatchEvent(new Event("change", { bubbles: true }))
        }
      }
    }
  }

  return (
    <div className="min-h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-indigo-600 selection:text-white flex flex-col transition-colors">
      {/* ── Main Site Header ────────────────────────────────────────── */}
      <Header
        onOpenApplyModal={() => handleScrollToApply()}
        onOpenComplaintsModal={() => setComplaintsModalOpen(true)}
      />

      {/* ── Main Content Landmark ──────────────────────────────────── */}
      <main className="flex-1">
        {/* Hero Section with Lead Capture Form */}
        <HeroSection />

        {/* Institutional Statistics Strip */}
        <StatsStrip />

        {/* 5 Licensed Study Programs */}
        <CareersSection
          onOpenCareerModal={(career) => setActiveCareerModal(career)}
          onApplyForCareer={(careerName) => handleScrollToApply(careerName)}
        />

        {/* Institutional Value Proposition & Vision 2031 */}
        <WhyChooseUsSection />

        {/* 4-Step Admission Process & Requirements */}
        <AdmissionSection onStartApply={() => handleScrollToApply()} />

        {/* Campus Facilities & Specialized Services */}
        <ServicesSection />

        {/* Institutional News & Highlights */}
        <NewsSection />

        {/* Real Student and Alumni Testimonials */}
        <TestimonialsSection />

        {/* High-Conversion Admission CTA */}
        <CtaBanner onApplyClick={() => handleScrollToApply()} />
      </main>

      {/* ── Site Footer ─────────────────────────────────────────────── */}
      <Footer onOpenComplaintsModal={() => setComplaintsModalOpen(true)} />

      {/* ── Modales cargados bajo demanda con Suspense ───────────── */}
      <Suspense fallback={null}>
        {activeCareerModal && (
          <CareerModal
            career={activeCareerModal}
            onClose={() => setActiveCareerModal(null)}
            onSelectForApply={(careerName) => handleScrollToApply(careerName)}
          />
        )}

        {complaintsModalOpen && (
          <ComplaintsBookModal
            isOpen={complaintsModalOpen}
            onClose={() => {
              setComplaintsModalOpen(false)
              if (
                window.location.pathname === "/libro-de-reclamaciones" ||
                window.location.hash === "#libro-de-reclamaciones"
              ) {
                window.history.pushState(null, "", "/")
              }
            }}
          />
        )}
      </Suspense>
    </div>
  )
}
