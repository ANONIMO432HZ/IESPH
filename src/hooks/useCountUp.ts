import { useEffect, useRef, useState } from "react"

interface UseCountUpOptions {
  end: number
  start?: number
  duration?: number
  delay?: number
}

export function useCountUp({
  end,
  start = 0,
  duration = 1800,
  delay = 0,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    let animationFrameId: number

    const timeoutId = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Ease-out cubic formula for smooth deceleration
        const easeOut = 1 - (1 - progress) ** 3
        const currentVal = Math.round(start + (end - start) * easeOut)

        setCount(currentVal)

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        }
      }

      animationFrameId = requestAnimationFrame(step)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isVisible, start, end, duration, delay])

  return { count, elementRef, isVisible }
}
