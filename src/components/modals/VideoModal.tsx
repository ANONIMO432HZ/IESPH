import { useEffect, useRef } from "react"
import videoInstitucional from "@/assets/video-institucional.mp4"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
      // Autoplay video
      if (videoRef.current) {
        videoRef.current.currentTime = 0
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        })
      }
    } else {
      document.body.style.overflow = "unset"
      if (videoRef.current) {
        videoRef.current.pause()
      }
    }

    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video Institucional del IESPH"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Video Container */}
      <div className="relative z-10 w-full max-w-4xl rounded-3xl bg-[#09152b] border border-slate-700/60 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Top Gradient Highlight */}
        <div className="h-0.75 w-full bg-linear-to-r from-[#7114EF] via-[#1475F7] to-[#08D9FF]" />

        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 text-white">
          <div className="flex items-center gap-2">
            <h3 className="text-xs sm:text-sm font-bold truncate">
              Video Institucional — IESP "Huanta"
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer text-sm font-bold"
            aria-label="Cerrar video"
          >
            ✕
          </button>
        </div>

        {/* Video Player */}
        <div className="relative bg-black aspect-video flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoInstitucional}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            <track kind="captions" />
            Tu navegador no soporta la reproducción de video HTML5.
          </video>
        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-slate-900/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Instituto Licenciado por MINEDU • R.M. N° 068-2020-MINEDU</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
          >
            Cerrar ventana
          </button>
        </div>
      </div>
    </div>
  )
}
