import type { InstitutionContact, InstitutionValues } from "@/types"

export const INSTITUTION_CONTACT: InstitutionContact = {
  phone: "(066) 322296",
  phoneRaw: "066322296",
  whatsapp: "51966322296",
  whatsappDisplay: "966 322 296",
  address: "Jr. Córdova N° 650",
  city: "Huanta",
  region: "Ayacucho, Perú",
  email: "contactos@iesphuanta.edu.pe",
  schedule: "Lun – Vie: 7:30 am – 1:15 pm",
  facebookUrl: "https://www.facebook.com/profile.php?id=61557665334329",
  mineduCode: "0434779",
  licensingResolution: "R.M. N° 068-2020-MINEDU",
}

export const INSTITUTION_VALUES: InstitutionValues = {
  mission:
    "Somos un Instituto de Educación Superior Público que brinda formación integral y de calidad a estudiantes, desarrollando competencias técnicas y valóricas para responder eficazmente a las demandas del sector productivo y la sociedad.",
  vision2031:
    "Al 2031, somos un IES de excelencia, licenciada, que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, reconocidos a nivel regional y nacional por la formación de profesionales comprometidos con la calidad y cuidado del medio ambiente.",
  motto:
    "¡Transforma tu Futuro en solo 3 Años con Título a Nombre de la Nación!",
}

export interface StatItem {
  numericValue: number
  prefix?: string
  suffix?: string
  label: string
  subtext: string
  iconType: "graduates" | "teachers" | "programs" | "experience"
}

export const FOUNDATION_DATE = new Date("1986-06-05T00:00:00")
export const DEFAULT_YEARS_OF_TRAJECTORY = 40

export function getYearsOfTrajectory(currentDate = new Date()): number {
  let years = currentDate.getFullYear() - FOUNDATION_DATE.getFullYear()
  const monthDiff = currentDate.getMonth() - FOUNDATION_DATE.getMonth()
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < FOUNDATION_DATE.getDate())
  ) {
    years--
  }
  // Fallback de seguridad: si la fecha del cliente está desfasada (ej. < 2026), nunca reportar menos de 40 años
  return Math.max(years, DEFAULT_YEARS_OF_TRAJECTORY)
}

export const STATS: StatItem[] = [
  {
    numericValue: 3000,
    suffix: "+",
    label: "Estudiantes Egresados",
    subtext: "Profesionales técnicos titulados insertados en el mercado",
    iconType: "graduates",
  },
  {
    numericValue: 50,
    suffix: "+",
    label: "Docentes Especializados",
    subtext: "Plana docente con amplia experiencia técnica y pedagógica",
    iconType: "teachers",
  },
  {
    numericValue: 5,
    label: "Programas de Estudio",
    subtext: "Carreras licenciadas de 3 años con certificación modular",
    iconType: "programs",
  },
  {
    numericValue: getYearsOfTrajectory(),
    label: "Años de Trayectoria",
    subtext: "Líder en formación tecnológica y pública en Huanta y Ayacucho",
    iconType: "experience",
  },
]
