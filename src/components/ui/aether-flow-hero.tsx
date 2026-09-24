import { motion, type Variants } from "framer-motion"
import { ArrowRight, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ")

export interface AetherFlowCanvasProps {
  className?: string
  transparent?: boolean
  forceDark?: boolean
  particleCount?: number
}

export function AetherFlowCanvas({
  className = "",
  transparent = false,
  forceDark,
  particleCount,
}: AetherFlowCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [, setRerenderTheme] = useState<number>(0)

  // Strictly track html class changes to stay 100% in sync with the active UI theme
  useEffect(() => {
    const handleThemeChange = () => {
      setRerenderTheme((c) => c + 1)
    }

    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: transparent })
    if (!ctx) return

    let animationFrameId: number
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 190,
    }

    const getThemeConfig = () => {
      // Determine theme strictly by the active HTML class, completely avoiding OS-level dark mode overrides
      const isDark =
        forceDark !== undefined
          ? forceDark
          : typeof document !== "undefined"
            ? document.documentElement.classList.contains("dark")
            : false

      if (isDark) {
        return {
          isDark: true,
          particleColor: "rgba(191, 128, 255, 0.95)", // Glowing lilac in dark mode
          particleBorder: "rgba(255, 255, 255, 0.3)",
          defaultLineRgb: "170, 125, 255", // Lilac violet
          defaultLineAlphaMult: 0.85,
          activeLineRgb: "255, 255, 255", // Pure white glow on dark mode
          activeLineAlphaMult: 1.4,
          defaultLineWidth: 0.95,
          activeLineWidth: 1.4,
          bgFill: "#050811",
        }
      }

      // High-contrast Light Mode palette (institutional purple & vibrant electric blue — ZERO WHITE)
      return {
        isDark: false,
        particleColor: "rgba(91, 6, 190, 0.98)", // Deep sharp institutional purple #5B06BE
        particleBorder: "rgba(20, 117, 247, 0.5)", // Crisp border ring
        defaultLineRgb: "100, 25, 215", // Deep violet with solid contrast against white
        defaultLineAlphaMult: 1.25,
        activeLineRgb: "14, 85, 230", // High-contrast Electric Blue #0E55E6 on hover (NEVER WHITE)
        activeLineAlphaMult: 1.8,
        defaultLineWidth: 1.2,
        activeLineWidth: 2.2, // Bold and prominent when hovered
        bgFill: "#ffffff",
      }
    }

    class Particle {
      x: number
      y: number
      directionX: number
      directionY: number
      size: number

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
      ) {
        this.x = x
        this.y = y
        this.directionX = directionX
        this.directionY = directionY
        this.size = size
      }

      draw(theme: ReturnType<typeof getThemeConfig>) {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
        ctx.fillStyle = theme.particleColor
        ctx.fill()

        // Ring for high contrast in light mode
        if (!theme.isDark) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size + 0.8, 0, Math.PI * 2, false)
          ctx.strokeStyle = theme.particleBorder
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      update(theme: ReturnType<typeof getThemeConfig>) {
        if (!canvas) return
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY
        }

        // Mouse collision repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < mouse.radius + this.size && distance > 0) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            this.x -= forceDirectionX * force * 4.2
            this.y -= forceDirectionY * force * 4.2
          }
        }

        this.x += this.directionX
        this.y += this.directionY
        this.draw(theme)
      }
    }

    let particles: Particle[] = []

    const init = () => {
      particles = []
      const calculatedCount = Math.floor((canvas.height * canvas.width) / 4500)
      const count =
        particleCount !== undefined
          ? particleCount
          : Math.max(55, Math.min(calculatedCount, 220))

      for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 1.4
        const x = Math.random() * (canvas.width - size * 4) + size * 2
        const y = Math.random() * (canvas.height - size * 4) + size * 2
        const directionX = Math.random() * 0.4 - 0.2
        const directionY = Math.random() * 0.4 - 0.2
        particles.push(new Particle(x, y, directionX, directionY, size))
      }
    }

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width || window.innerWidth
      canvas.height = rect.height || window.innerHeight
      init()
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()

    const connect = (theme: ReturnType<typeof getThemeConfig>) => {
      const maxDistance = ((canvas.width / 7) * (canvas.height / 7)) / 4.2
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = dx * dx + dy * dy

          if (distance < maxDistance) {
            const baseOpacity = Math.max(0, 1 - distance / maxDistance)
            if (baseOpacity <= 0.02) continue

            let isNearMouse = false
            if (mouse.x !== null && mouse.y !== null) {
              const dxMouse = particles[a].x - mouse.x
              const dyMouse = particles[a].y - mouse.y
              const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
              if (distMouse < mouse.radius) {
                isNearMouse = true
              }
            }

            const alpha = Math.min(
              1,
              baseOpacity *
                (isNearMouse
                  ? theme.activeLineAlphaMult
                  : theme.defaultLineAlphaMult),
            )
            const strokeColor = isNearMouse
              ? `rgba(${theme.activeLineRgb}, ${alpha})`
              : `rgba(${theme.defaultLineRgb}, ${alpha})`

            ctx.strokeStyle = strokeColor
            ctx.lineWidth = isNearMouse
              ? theme.activeLineWidth
              : theme.defaultLineWidth
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const theme = getThemeConfig()

      if (transparent) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      } else {
        ctx.fillStyle = theme.bgFill
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(theme)
      }
      connect(theme)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      if (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      ) {
        mouse.x = event.clientX - rect.left
        mouse.y = event.clientY - rect.top
      } else {
        mouse.x = null
        mouse.y = null
      }
    }

    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseout", handleMouseOut)

    init()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseout", handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [transparent, forceDark, particleCount])

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full", className)}
      style={{ display: "block" }}
    />
  )
}

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
}

const AetherFlowHero = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-radial-[at_50%_40%] from-purple-100/70 via-slate-50 to-slate-100 dark:from-[#111c38] dark:via-[#070b16] dark:to-[#03050b] text-slate-900 dark:text-white transition-colors duration-300",
        className,
      )}
    >
      <div className="absolute inset-0 z-0">
        <AetherFlowCanvas transparent />
      </div>

      {/* Overlay HTML Content */}
      <div className="relative z-10 text-center p-6">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/90 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 mb-6 backdrop-blur-sm shadow-xs"
        >
          <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <span className="text-sm font-medium text-purple-950 dark:text-gray-200">
            Dynamic Rendering Engine
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-linear-to-b from-slate-950 via-slate-800 to-slate-600 dark:from-white dark:to-gray-400"
        >
          Aether Flow
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-gray-400 mb-10 leading-relaxed"
        >
          An intelligent, adaptive framework for creating fluid digital
          experiences that feel alive and respond to user interaction in
          real-time.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          <button
            type="button"
            className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 font-semibold rounded-lg shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer active:scale-95"
          >
            Explore the Engine
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default AetherFlowHero
