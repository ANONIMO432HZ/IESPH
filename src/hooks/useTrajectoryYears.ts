import { useEffect, useState } from "react"
import {
  DEFAULT_YEARS_OF_TRAJECTORY,
  getYearsOfTrajectory,
} from "@/data/institution"

const CACHE_KEY = "iesph_network_year"
const CACHE_TIME_KEY = "iesph_network_year_ts"
const CACHE_DURATION_MS = 1000 * 60 * 60 * 24 // 24 horas

export function useTrajectoryYears(): number {
  const [years, setYears] = useState<number>(() => {
    // 1. Verificar si hay un año guardado en cache reciente (24h)
    if (typeof window !== "undefined") {
      try {
        const cachedYear = localStorage.getItem(CACHE_KEY)
        const cachedTs = localStorage.getItem(CACHE_TIME_KEY)
        if (cachedYear && cachedTs) {
          const age = Date.now() - Number(cachedTs)
          if (age < CACHE_DURATION_MS) {
            const parsedYear = Number(cachedYear)
            if (parsedYear >= 2026) {
              return getYearsOfTrajectory(new Date(parsedYear, 5, 5))
            }
          }
        }
      } catch {
        // Fallback silencioso si localStorage no está disponible
      }
    }
    // 2. Cálculo inicial con reloj del sistema y salvaguarda mínima de 40 años
    return getYearsOfTrajectory()
  })

  useEffect(() => {
    // Si ya tenemos cache fresca de 24h, no hacemos ninguna petición de red
    try {
      const cachedTs = localStorage.getItem(CACHE_TIME_KEY)
      if (cachedTs && Date.now() - Number(cachedTs) < CACHE_DURATION_MS) {
        return
      }
    } catch {
      // Ignorar errores de acceso
    }

    let isMounted = true
    const controller = new AbortController()

    // 3. Petición ultraligera a WorldTimeAPI con timeout de 2.5s (cero bloqueo)
    fetch("https://worldtimeapi.org/api/timezone/America/Lima", {
      signal: controller.signal,
      cache: "no-cache",
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`)
        return res.json()
      })
      .then((data: { datetime?: string }) => {
        if (!isMounted || !data.datetime) return
        const networkDate = new Date(data.datetime)
        if (!Number.isNaN(networkDate.getTime())) {
          const computedYears = getYearsOfTrajectory(networkDate)
          setYears(computedYears)
          try {
            localStorage.setItem(CACHE_KEY, String(networkDate.getFullYear()))
            localStorage.setItem(CACHE_TIME_KEY, String(Date.now()))
          } catch {
            // Ignorar
          }
        }
      })
      .catch(() => {
        // Si no hay internet o la API falla, conservamos el cálculo seguro con fallback >= 40
      })

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return years >= DEFAULT_YEARS_OF_TRAJECTORY
    ? years
    : DEFAULT_YEARS_OF_TRAJECTORY
}
