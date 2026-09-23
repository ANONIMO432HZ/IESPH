import avanzaLogo from "@/assets/partners/avanza.png"
import conectaLogo from "@/assets/partners/conecta.png"
import mineduLogo from "@/assets/partners/minedu.png"
import registraLogo from "@/assets/partners/registra.png"
import titulaLogo from "@/assets/partners/titula.png"
import type {
  AuthorityItem,
  CampusLocation,
  InstitutionContact,
  InstitutionValues,
  OfficialStateLink,
  PartnerPlatform,
  TeacherItem,
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

export const INSTITUTIONAL_PRESENTATION = {
  title: "Breve Presentación de la Institución",
  creationResolution: "R.M. N° 265-86-ED (05 de junio de 1986)",
  licensingResolution: "R.M. N° 068-2020-MINEDU",
  trajectorySummary:
    'El Instituto de Educación Superior Público "Huanta" fue creado por R.M. N° 265-86-ED, del 05 de junio de 1986. Nació con las especialidades de Agropecuaria y Electricidad, incorporando al año siguiente Enfermería Técnica (R.D. N° 3983-87-ED). Con el crecimiento tecnológico y productivo de la provincia, se crearon Computación e Informática (hoy Diseño y Programación Web), Industrias de Alimentos y Bebidas y Mecatrónica Automotriz.',
  commitmentText:
    "Como institución pública licenciada por el Ministerio de Educación (MINEDU), garantizamos que nuestros 5 programas de estudios cumplen rigurosamente con las Condiciones Básicas de Calidad (CBC), brindando formación técnica de vanguardia, infraestructura moderna y titulación oficial a nombre de la Nación.",
  videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Video Institucional oficial
}

export const FACULTY_LIST: TeacherItem[] = [
  // Diseño y Programación Web
  {
    name: "Lic. Alfonso Álvaro Moreno Márquez",
    programId: "diseno-programacion-web",
    programName: "Diseño y Programación Web",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: ["Comunicación Oral", "Solución de Problemas"],
  },
  {
    name: "Ing. Juan Carlos Torres Lozano",
    programId: "diseno-programacion-web",
    programName: "Diseño y Programación Web",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Fundamentos de Programación",
      "Programación Orientada a Objetos",
    ],
  },
  {
    name: "Tec. Kevin Vlaes Bando Gómez",
    programId: "diseno-programacion-web",
    programName: "Diseño y Programación Web",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Gestión y Administración de Sitios Web",
      "Diagramación Digital",
      "Redes e Internet",
      "Marketing Digital",
    ],
  },
  {
    name: "Ing. Aníbal Yucra Curo",
    programId: "diseno-programacion-web",
    programName: "Diseño y Programación Web",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Administración de Base de Datos",
      "Programación de Aplicaciones Web",
      "Diseño de Soluciones Web",
    ],
  },
  {
    name: "Ing. Cristhian Alegría Ñaccha",
    programId: "diseno-programacion-web",
    programName: "Diseño y Programación Web",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Introducción a Base de Datos",
      "Diseño de Interfaces Web",
      "Programación de Aplicaciones Móviles",
    ],
  },

  // Enfermería Técnica
  {
    name: "Lic. Ismael Lira Huamán",
    programId: "enfermeria-tecnica",
    programName: "Enfermería Técnica",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: ["Educación para la Salud", "Atención del Adulto y Adulto Mayor"],
  },
  {
    name: "Lic. Constancia Quiquin Conga",
    programId: "enfermeria-tecnica",
    programName: "Enfermería Técnica",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Administración de Medicamentos",
      "Asistencia Básica Hospitalaria",
      "Salud Materno Neonatal",
    ],
  },
  {
    name: "Lic. Ketty Shirly Cárdenas Pérez",
    programId: "enfermeria-tecnica",
    programName: "Enfermería Técnica",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Seguridad y Salud en el Trabajo",
      "Documentación en Salud",
      "Atención del Niño y Adolescente",
      "Atención al Usuario Quirúrgico",
    ],
  },
  {
    name: "Lic. Ida René Huamán Barzola",
    programId: "enfermeria-tecnica",
    programName: "Enfermería Técnica",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Salud Comunitaria",
      "Promoción de la Salud",
      "Asistencia en Inmunizaciones",
    ],
  },

  // Mecatrónica Automotriz
  {
    name: "Lic. Juan Renán Ludeña Aranda",
    programId: "mecatronica-automotriz",
    programName: "Mecatrónica Automotriz",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Motores Otto y Diésel",
      "Sistemas de Implementos y Confort Automotriz",
      "Inyección Electrónica Vehicular",
    ],
  },
  {
    name: "Ing. Mecatrónico Docente Especialista",
    programId: "mecatronica-automotriz",
    programName: "Mecatrónica Automotriz",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Sistemas de Transmisión y Frenos ABS",
      "Autotrónica y Redes CAN Bus",
    ],
  },

  // Industrias de Alimentos y Bebidas
  {
    name: "Ing. Ernesto Andía Ovalle",
    programId: "industrias-alimentos-bebidas",
    programName: "Industrias de Alimentos y Bebidas",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Procesamiento de Frutas y Hortalizas",
      "Control de Calidad y Normativa HACCP",
      "Tecnología de Alimentos Agroindustriales",
    ],
  },
  {
    name: "Especialista en Agroindustria",
    programId: "industrias-alimentos-bebidas",
    programName: "Industrias de Alimentos y Bebidas",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Procesamiento de Lácteos y Derivados",
      "Microbiología Industrial y Bioseguridad",
    ],
  },

  // Producción Agropecuaria
  {
    name: "Ing. René Ángel Alejandro Salazar",
    programId: "produccion-agropecuaria",
    programName: "Producción Agropecuaria",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Manejo y Producción Agrícola Sostenible",
      "Riego Tecnificado y Fertirrigación",
      "Sanidad Vegetal y Agroecología",
    ],
  },
  {
    name: "Médico Veterinario / Zootecnista",
    programId: "produccion-agropecuaria",
    programName: "Producción Agropecuaria",
    academicPeriod: "Periodo Lectivo 2026-I",
    courses: [
      "Manejo de Animales Menores y Ganado Vacuno",
      "Nutrición y Reproducción Pecuaria",
    ],
  },
]

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    name: "Sede Central Institucional",
    tag: "Sede Principal",
    address: "Jr. Córdova N° 650, Huanta, Ayacucho",
    description:
      "Complejo educativo central que alberga la Dirección General, aulas pedagógicas modernizadas, laboratorios de cómputo para Desarrollo Web, talleres de mecatrónica automotriz, clínica simulada de enfermería técnica y biblioteca central.",
    features: [
      "Dirección General y Secretaría Académica",
      "Laboratorios de Cómputo y Conectividad Fibra Óptica",
      "Taller Mecatrónico de Diagnóstico Automotriz",
      "Laboratorio de Simulación Asistencial en Salud",
      "Planta Piloto de Procesamiento de Alimentos",
      "Auditorio Institucional y Biblioteca",
    ],
  },
  {
    name: "Centro de Producción y Fundo Experimental",
    tag: "Centro Experimental",
    address: "Valle de Huanta / Luricocha, Ayacucho",
    description:
      "Área agronómica y pecuaria especializada para las prácticas en situaciones reales de trabajo de los programas de Producción Agropecuaria e Industrias de Alimentos y Bebidas.",
    features: [
      "Campos de Cultivo e Invernaderos Tecnificados",
      "Sistemas de Riego por Goteo y Aspersión",
      "Módulos de Crianza y Sanidad Pecuaria",
      "Parcelas Demostrativas de Palto y Frutales",
    ],
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
