import avanzaLogo from "@/assets/partners/avanza.png"
import conectaLogo from "@/assets/partners/conecta.png"
import mineduLogo from "@/assets/partners/minedu.png"
import registraLogo from "@/assets/partners/registra.png"
import titulaLogo from "@/assets/partners/titula.png"
import type {
  AuthorityItem,
  InstitutionContact,
  InstitutionValues,
  OfficialStateLink,
  PartnerPlatform,
} from "@/types"

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
    "Al 2031, somos un IES de excelencia, licenciada, que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, reconocidos a nivel regional y nacional por la formación de profesionales comprometidos con la calidad y cuidado del medio ambiente.",
  vision2031:
    "Al 2030, somos un IES que lidera en la formación integral de profesionales competitivos, innovadores, fomentamos el emprendimiento, la calidad en nuestros productos y servicios, con sentido de cuidado del medio ambiente y que aportan al desarrollo económico de la región.",
  motto:
    "¡Transforma tu Futuro en solo 3 Años con Título a Nombre de la Nación!",
}

export const HISTORICAL_MILESTONES = [
  {
    year: "1986",
    date: "05 de junio de 1986",
    resolution: "R.M. N° 265-86-ED",
    title: "Creación Institucional",
    description:
      'Creación oficial del Instituto de Educación Superior Público "Huanta", iniciando sus actividades con los programas de Agropecuaria y Electricidad.',
  },
  {
    year: "1987",
    date: "1987",
    resolution: "R.D. N° 3983-87-ED",
    title: "Apertura de Enfermería Técnica",
    description:
      "Ampliación del servicio formativo con la creación del programa de Enfermería Técnica al servicio de la salud en la provincia.",
  },
  {
    year: "1996",
    date: "1996",
    resolution: "R.D. N° 109-96-ED",
    title: "Computación e Informática (Hoy DPW)",
    description:
      "Creación de la especialidad de Computación e Informática para responder a la revolución tecnológica de la región.",
  },
  {
    year: "1997",
    date: "19 de abril de 1997",
    resolution: "R.D. N° 0257-97-ED",
    title: "Industrias Alimentarias",
    description:
      "Incorporación del programa de Industrias Alimentarias para dar valor agregado a la rica producción agrícola del valle de Huanta.",
  },
  {
    year: "2009",
    date: "24 de agosto de 2009",
    resolution: "R.D. N° 2001-2009-ED",
    title: "Mecatrónica Automotriz",
    description:
      "Creación del programa de Mecánica/Mecatrónica Automotriz para responder a la tecnificación vehicular y del transporte.",
  },
  {
    year: "2020",
    date: "2020",
    resolution: "R.M. N° 068-2020-MINEDU",
    title: "Licenciamiento Institucional",
    description:
      "Acreditación de las Condiciones Básicas de Calidad (CBC) por el Ministerio de Educación como Instituto Licenciado.",
  },
]

export const AUTHORITIES: AuthorityItem[] = [
  {
    name: "Ing. Esaú Villantoy Palomino",
    role: "Director General",
    email: "contactos@iesphuanta.edu.pe",
  },
  {
    name: "Lic. Ismael Lira Huamán",
    role: "Jefe de Unidad Académica",
    email: "lirahuamismael@gmail.com",
    phone: "986 162 715",
  },
  {
    name: "Tec. Kevin Vlaes Bando Gómez",
    role: "Secretario Académico",
    email: "Kev_vls@hotmail.com",
    phone: "995 497 720",
  },
  {
    name: "Ing. Gerson Uriel Taype Mucha",
    role: "Coordinador de Área de Calidad",
    email: "gersontaypemucha@gmail.com",
    phone: "999 171 627",
  },
  {
    name: "Juan Carlos Torres Lozano",
    role: "Coordinador: Diseño y Programación Web",
    email: "jctorreslozano@gmail.com",
    phone: "935 627 200",
  },
  {
    name: "Lic. Jimmy Aranda Escalante",
    role: "Coordinador: Enfermería Técnica",
    phone: "979 106 040",
  },
  {
    name: "Lic. Renan Ludeña Aranda",
    role: "Coordinador: Mecatrónica Automotriz",
  },
  {
    name: "Ing. Ernesto Andía Ovalle",
    role: "Coordinador: Industrias de Alimentos y Bebidas",
    email: "andiaernesto@gmail.com",
    phone: "955 956 533",
  },
  {
    name: "Ing. René Ángel Alejandro Salazar",
    role: "Coordinador: Producción Agropecuaria",
    phone: "966 127 390",
  },
  {
    name: "CPC Maricela Silvia Guerra López",
    role: "Jefe de Unidad Administrativa",
    email: "maricelaguerra@iestphuanta.edu.pe",
    phone: "980 099 744",
  },
  {
    name: "Lic. Alfonso Alvaro Moreno Marquez",
    role: "Jefe de Unidad de Bienestar y Empleabilidad",
    email: "alfonsoamoreno@hotmail.com",
    phone: "966 903 518",
  },
  {
    name: "Ing. Abraham David Cruz Capcha",
    role: "Jefe de Investigación e Innovación",
    email: "david.cruz@iestphuanta.edu.pe",
    phone: "990 909 525",
  },
  {
    name: "Ing. Nancy Beatriz Rodriguez Laos",
    role: "Jefe de Unidad de Formación Continua",
    email: "nayito.rodriguez@gmail.com",
    phone: "955 956 599",
  },
]

export const STATE_PLATFORMS: PartnerPlatform[] = [
  {
    name: "TITULA",
    url: "https://titula.minedu.gob.pe/",
    logo: titulaLogo,
    description:
      "Registro Nacional de Certificados y Grados de Educación Superior",
  },
  {
    name: "REGISTRA",
    url: "https://registra.minedu.gob.pe/#!/",
    logo: registraLogo,
    description: "Sistema de Registro de Matrícula y Notas MINEDU",
  },
  {
    name: "CONECTA",
    url: "https://conecta.minedu.gob.pe/",
    logo: conectaLogo,
    description:
      "Plataforma de Orientación y Recursos Digitales de Educación Superior",
  },
  {
    name: "AVANZA",
    url: "https://avanza.minedu.gob.pe/",
    logo: avanzaLogo,
    description: "Bolsa de Trabajo y Empleabilidad Técnica Juvenil MINEDU",
  },
]

export const OFFICIAL_STATE_LINKS: OfficialStateLink[] = [
  {
    name: "MINEDU",
    fullName: "Ministerio de Educación",
    description:
      "Normativa nacional, licenciamiento institucional y políticas educativas del Perú.",
    url: "https://www.gob.pe/minedu",
    tag: "Portal del Estado",
    logo: mineduLogo,
  },
  {
    name: "TITULA",
    fullName: "Consulta de Títulos y Grados",
    description:
      "Verificación de autenticidad de títulos oficiales emitidos por institutos públicos.",
    url: "https://titula.minedu.gob.pe/",
    tag: "Validez Nacional",
    logo: titulaLogo,
  },
  {
    name: "REGISTRA",
    fullName: "Registro de Matrículas y Notas",
    description:
      "Sistema de gestión académica, constancias y expedientes oficiales del estudiante.",
    url: "https://registra.minedu.gob.pe/#!/",
    tag: "Sistema MINEDU",
    logo: registraLogo,
  },
  {
    name: "CONECTA",
    fullName: "Seguimiento de Egresados",
    description:
      "Plataforma de orientación profesional y recursos digitales de educación superior.",
    url: "https://conecta.minedu.gob.pe/",
    tag: "Egresados",
    logo: conectaLogo,
  },
  {
    name: "AVANZA",
    fullName: "Carrera Pública y Empleo",
    description:
      "Bolsa de trabajo técnico, intermediación laboral y gestión de plana docente.",
    url: "https://avanza.minedu.gob.pe/",
    tag: "Gestión Pública",
    logo: avanzaLogo,
  },
]

export const COMPLEMENTARY_STATE_LINKS = [
  {
    label: "Dirección Regional de Educación (DREA)",
    url: "http://drea.gob.pe",
  },
  {
    label: "PRONABEC / Beca 18",
    url: "https://www.gob.pe/pronabec",
  },
  {
    label: "Portal de Transparencia Estándar",
    url: "https://www.transparencia.gob.pe/",
  },
]

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
