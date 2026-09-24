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
  glow: number
}

interface SynapticPulse {
  fromIdx: number
  toIdx: number
  progress: number
  speed: number
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
        setIsDarkMode(document.documentElement.classList.contains("dark"))
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
      radius: 170,
    }

    let nodes: Node[] = []
    const pulses: SynapticPulse[] = []
    const MAX_CONN_DIST = 75
    const MAX_CONN_DIST_SQ = MAX_CONN_DIST * MAX_CONN_DIST

    const initNodes = () => {
      nodes = []
      pulses.length = 0
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
            radius: Math.random() * 1.2 + 1.1,
            label: `${(i * 7).toString(16).toUpperCase()}:${(j * 11).toString(16).toUpperCase()}`,
            pulse: Math.random() * Math.PI * 2,
            glow: 0,
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

      if (
        x >= -60 &&
        x <= rect.width + 60 &&
        y >= -60 &&
        y <= rect.height + 60
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

      const dt = Math.min((now - lastTime) / 1000, 0.04)
      lastTime = now

      // Mouse velocity calculation with damping
      mouse.vx = (mouse.x - mouse.prevX) / (dt * 1000 || 1)
      mouse.vy = (mouse.y - mouse.prevY) / (dt * 1000 || 1)
      mouse.prevX = mouse.x
      mouse.prevY = mouse.y

      const speed = Math.sqrt(mouse.vx * mouse.vx + mouse.vy * mouse.vy)

      const nodeColor =
        isDarkMode || transparent ? "255, 255, 255" : "15, 23, 42"
      const accentColor = "8, 217, 255" // Sky Cyan Accent (#08D9FF)

      if (transparent) {
        ctx.clearRect(0, 0, width, height)
      } else {
        const bgColor = isDarkMode ? "#020617" : "#f8fafc"
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, width, height)
      }

      // Physics Step (Gentle Spring-Mass with clamped displacement)
      const SPRING_K = 22
      const DAMPING = 0.84

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.pulse += dt * 2.8
        n.glow = Math.max(0, n.glow - dt * 1.6)

        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Gentle, soft repulsion: never clusters nodes or creates violent knots
        if (dist < mouse.radius && dist > 0) {
          const power = 1 - dist / mouse.radius
          const force = power * (320 + Math.min(speed, 50) * 12)
          const angle = Math.atan2(dy, dx)

          n.vx -= Math.cos(angle) * force * dt
          n.vy -= Math.sin(angle) * force * dt
        }

        const homeDx = n.baseX - n.x
        const homeDy = n.baseY - n.y

        n.vx += homeDx * SPRING_K * dt
        n.vy += homeDy * SPRING_K * dt

        n.vx *= DAMPING
        n.vy *= DAMPING

        // Clamp velocity to avoid sudden flings
        const maxV = 10
        const curV = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
        if (curV > maxV) {
          n.vx = (n.vx / curV) * maxV
          n.vy = (n.vy / curV) * maxV
        }

        n.x += n.vx * dt * 60
        n.y += n.vy * dt * 60
      }

      // Spawn Subtle Synaptic Data Pulses (traveling glowing packets)
      if (Math.random() < 0.22 && nodes.length > 0 && pulses.length < 28) {
        const fromIdx = Math.floor(Math.random() * nodes.length)
        const fromNode = nodes[fromIdx]

        // Find connected neighbors within MAX_CONN_DIST
        const neighbors: number[] = []
        for (let j = 0; j < nodes.length; j++) {
          if (j === fromIdx) continue
          const dx = fromNode.x - nodes[j].x
          const dy = fromNode.y - nodes[j].y
          if (dx * dx + dy * dy < MAX_CONN_DIST_SQ) {
            neighbors.push(j)
          }
        }

        if (neighbors.length > 0) {
          const toIdx = neighbors[Math.floor(Math.random() * neighbors.length)]
          pulses.push({
            fromIdx,
            toIdx,
            progress: 0,
            speed: 1.1 + Math.random() * 1.5,
          })
        }
      }

      // Draw Base Network Connections
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

      // Draw Synaptic Data Pulses & Shimmering Traveling Lines
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p]
        pulse.progress += dt * pulse.speed

        const n1 = nodes[pulse.fromIdx]
        const n2 = nodes[pulse.toIdx]

        if (!n1 || !n2 || pulse.progress >= 1) {
          if (n2) n2.glow = 1.0 // pulse arrived at destination node
          pulses.splice(p, 1)
          continue
        }

        // Shimmering accent line segment while packet travels
        const lineAlpha =
          (1 - Math.abs(pulse.progress - 0.5) * 2) * (isDarkMode ? 0.6 : 0.4)
        ctx.strokeStyle = `rgba(${accentColor}, ${lineAlpha})`
        ctx.lineWidth = 1.15
        ctx.beginPath()
        ctx.moveTo(n1.x, n1.y)
        ctx.lineTo(n2.x, n2.y)
        ctx.stroke()

        // Traveling glowing photon packet
        const px = n1.x + (n2.x - n1.x) * pulse.progress
        const py = n1.y + (n2.y - n1.y) * pulse.progress

        ctx.fillStyle = `rgb(${accentColor})`
        ctx.beginPath()
        ctx.arc(px, py, 2.0, 0, Math.PI * 2)
        ctx.fill()
      }

      // Render Nodes & Subtle Radar Highlights
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const dx = mouse.x - n.x
        const dy = mouse.y - n.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const isNear = dist < mouse.radius

        // Extra glowing halo when stimulated by traveling pulse
        if (n.glow > 0.05) {
          ctx.fillStyle = `rgba(${accentColor}, ${n.glow * 0.35})`
          ctx.beginPath()
          ctx.arc(n.x, n.y, (n.radius + 3) * (1 + n.glow * 0.4), 0, Math.PI * 2)
          ctx.fill()
        }

        const baseAlpha = isNear
          ? 1
          : 0.35 + Math.sin(n.pulse) * 0.15 + n.glow * 0.5

        ctx.fillStyle =
          isNear || n.glow > 0.3
            ? `rgba(${accentColor}, ${baseAlpha})`
            : `rgba(${nodeColor}, ${baseAlpha})`

        const currentRadius = isNear
          ? n.radius * 1.8
          : n.radius + Math.sin(n.pulse) * 0.25

        ctx.beginPath()
        ctx.arc(n.x, n.y, Math.max(0.6, currentRadius), 0, Math.PI * 2)
        ctx.fill()

        // Elegant minimal radar ring near cursor (only very close, non-intrusive)
        if (dist < 70) {
          const pulseRing = ((n.pulse * 18) % 24) + 3
          const ringAlpha = (1 - pulseRing / 28) * 0.35

          ctx.strokeStyle = `rgba(${accentColor}, ${ringAlpha})`
          ctx.lineWidth = 0.9
          ctx.beginPath()
          ctx.arc(n.x, n.y, pulseRing, 0, Math.PI * 2)
          ctx.stroke()

          ctx.font = "8px ui-monospace, SFMono-Regular, Consolas, monospace"
          ctx.fillStyle = `rgba(${accentColor}, 0.75)`
          ctx.fillText(n.label, n.x + 8, n.y - 8)
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
  }, [transparent, isDarkMode])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 block w-full h-full pointer-events-none select-none transition-opacity duration-700 ${className}`}
    />
  )
}
