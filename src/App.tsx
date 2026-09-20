import { useState } from "react"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import CareerModal from "@/components/modals/CareerModal"
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

export default function App() {
  const [activeCareerModal, setActiveCareerModal] = useState<Career | null>(
    null,
  )

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
    <div className="min-h-full bg-white text-slate-900 selection:bg-indigo-600 selection:text-white flex flex-col">
      {/* ── Main Site Header ────────────────────────────────────────── */}
      <Header onOpenApplyModal={() => handleScrollToApply()} />

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
      <Footer />

      {/* ── Career Detail Modal ─────────────────────────────────────── */}
      <CareerModal
        career={activeCareerModal}
        onClose={() => setActiveCareerModal(null)}
        onSelectForApply={(careerName) => handleScrollToApply(careerName)}
      />
    </div>
  )
}
