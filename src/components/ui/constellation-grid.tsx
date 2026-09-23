import { useEffect, useRef, useState } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  radius: number
  label: string
  pulse: number
}

export interface ConstellationGridProps {
  className?: string
  transparent?: boolean
}

export default function ConstellationGrid({
  className = "",
  transparent = false,
}: ConstellationGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  // Sync theme with system and html class
  useEffect(() => {
    const updateTheme = () => {
      if (typeof document !== "undefined") {
        setIsDarkMode(
          document.documentElement.classList.contains("dark") ||
            window.matchMedia("(prefers-color-scheme: dark)").matches,
        )
      }
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => updateTheme()
    mediaQuery.addEventListener("change", handler)

    return () => {
      observer.disconnect()
      mediaQuery.removeEventListener("change", handler)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: transparent })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0

    // Mouse velocity & inertial tracking
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      radius: 200,
    }

    let nodes: Node[] = []

    const initNodes = () => {
      nodes = []
      if (width <= 0 || height <= 0) return

      const spacing = 52 // Grid spacing for crisp constellation density
      const cols = Math.ceil(width / spacing) + 1
      const rows = Math.ceil(height / spacing) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          nodes.push({
            x,
            y,
            vx: 0,
            vy: 0,
            baseX: x,
            baseY: y,
            radius: Math.random() * 1.3 + 1.2,
            label: `${(i * 7).toString(16).toUpperCase()}:${(j * 11).toString(16).toUpperCase()}`,
            pulse: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    const updateSize = () => {
      const parent = canvas.parentElement
      const targetWidth =
        transparent && parent ? parent.clientWidth : window.innerWidth
      const targetHeight =
        transparent && parent ? parent.clientHeight : window.innerHeight

      if (targetWidth <= 0 || targetHeight <= 0) return

      width = targetWidth
      height = targetHeight

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      initNodes()
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Track cursor accurately when within canvas boundaries + padding
      if (
        x >= -50 &&
        x <= rect.width + 50 &&
        y >= -50 &&
        y <= rect.height + 50
      ) {
        mouse.x = x
        mouse.y = y
      } else {
        mouse.x = -1000
        mouse.y = -1000
      }
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    // Set initial size
    updateSize()

    // Observe size changes dynamically via ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      updateSize()
    })

    if (transparent && canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement)
    } else {
      resizeObserver.observe(canvas)
    }

    window.addEventListener("resize", updateSize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    let lastTime = performance.now()
    let isVisible = true

    const render = (now: number) => {
      if (!isVisible) {
        return
      }

      // Normalize dt across high-refresh displays
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      // Mouse velocity calculation
      mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1)
      mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1)
      mouse.prevX = mouse.x
      mouse.prevY = mouse.y

      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy)

      // Color paletting for dark/light seamlessness
      const nodeColor =
        isDarkMode || transparent ? "255, 255, 255" : "15, 23, 42"
      const accentColor = "8, 217, 255" // Sky Cyan Accent (#08D9FF)

      if (transparent) {
        ctx.clearRect(0, 0, width, height)
      } else {
        const bgColor = isDarkMode ? "#030407" : "#f8fafc"
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, width, height)
      }

      // Node Physics Engine (Hooke's Law Spring-Mass-Damping system)
      const SPRING_K = 18 // Spring stiffness
      const DAMPING = 0.82 // Velocity resistance

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.pulse += dt * 3

        // Mouse distance vectors
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Dynamic shockwave repulsion based on cursor speed
        if (dist < mouse.radius && dist > 0) {
          const power = 1 - dist / mouse.radius
          const force = power * (1500 + speed * 150)
          const angle = Math.atan2(dy, dx)

          // Impulse force pushing node away from cursor
          n.vx -= Math.cos(angle) * force * dt
          n.vy -= Math.sin(angle) * force * dt
        }

        // Calculate restoring force back to home anchor point (baseX, baseY)
        const homeDx = n.baseX - n.x
        const homeDy = n.baseY - n.y

        n.vx += homeDx * SPRING_K * dt
        n.vy += homeDy * SPRING_K * dt

        // Apply Damping
        n.vx *= DAMPING
        n.vy *= DAMPING

        // Integrate position
        n.x += n.vx * dt * 60
        n.y += n.vy * dt * 60
      }

      // Draw Connections (Optimized Distance Culling)
      const MAX_CONN_DIST = 75
      const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]

        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const ndx = n.x - n2.x
          const ndy = n.y - n2.y
          const distSq = ndx * ndx + ndy * ndy

          if (distSq < MAX_CONN_DIST_SQ) {
            const nDist = Math.sqrt(distSq)
            const alpha =
              (1 - nDist / MAX_CONN_DIST) *
              (isDarkMode || transparent ? 0.32 : 0.12)

            ctx.strokeStyle = `rgba(${nodeColor}, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(n.x, n.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.stroke()
          }
        }
      }

      // Render Node Points & Interactive Highlights
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const isNear = dist < mouse.radius

        // Visible pulsing alpha for stars
        const baseAlpha = isNear ? 1 : 0.4 + Math.sin(n.pulse) * 0.18

        ctx.fillStyle = isNear
          ? `rgba(${accentColor}, ${baseAlpha})`
          : `rgba(${nodeColor}, ${baseAlpha})`

        const currentRadius = isNear
          ? n.radius * 2.2
          : n.radius + Math.sin(n.pulse) * 0.3

        ctx.beginPath()
        ctx.arc(n.x, n.y, Math.max(0.5, currentRadius), 0, Math.PI * 2)
        ctx.fill()

        // High-tech Spatial Radar Rings on active proximity
        if (dist < 90) {
          const pulseRing = ((n.pulse * 20) % 30) + 4
          const ringAlpha = (1 - pulseRing / 34) * 0.6

          ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`
          ctx.lineWidth = 1.2
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2)
          ctx.stroke()

          // Hex Coordinate Readout
          ctx.font = "9px ui-monospace, SFMono-Regular, Consolas, monospace"
          ctx.fillStyle = `rgba(${accentColor}, 0.95)`
          ctx.fillText(n.label, n.x + 10, n.y - 10)
        }
      }

      if (isVisible) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    // IntersectionObserver to pause loop when scrolled out of view
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        const wasVisible = isVisible
        isVisible = entry.isIntersecting
        if (!wasVisible && isVisible) {
          lastTime = performance.now()
          animationFrameId = requestAnimationFrame(render)
        }
      },
      { threshold: 0 },
    )
    intersectionObserver.observe(canvas)

    animationFrameId = requestAnimationFrame(render)

    return () => {
      intersectionObserver.disconnect()
      resizeObserver.disconnect()
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", updateSize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDarkMode, transparent])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 block w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
