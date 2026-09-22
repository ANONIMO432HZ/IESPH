import type { AdmissionModality, AdmissionStep } from "@/types"

export const ADMISSION_PROCESS_INFO = {
  title: "Proceso de Admisión 2026",
  subtitle: "Convocatoria Oficial de Vacantes para el Año Académico 2026",
  description:
    'Proceso mediante el cual los estudiantes acceden a una vacante en cualquiera de los 5 programas de estudio ofertados por el Instituto de Educación Superior Público "Huanta". Se realiza mediante convocatoria pública y procedimientos normados por el MINEDU y la Dirección Regional de Educación de Ayacucho (DREA).',
  licenseNote:
    "Instituto de Educación Superior Licenciado por MINEDU · Título a Nombre de la Nación",
  academicCycle: "2026-I / 2026-II",
  resultsPdf: "/docs/Resultado-Admision-2026.pdf",
  onlineAdmissionUrl: "https://w4peru.net/isthta/admision/",
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: "01",
    title: "Pre-Inscripción en Línea o Presencial",
    description:
      "Completa el formulario en el portal web o acércate a la Secretaría Académica de la sede central en Jr. Córdova N° 650.",
    icon: "📝",
    badge: "Paso Inicial",
  },
  {
    step: "02",
    title: "Entrega de Requisitos y Carpeta",
    description:
      "Presenta tu certificado de estudios secundarios, copia de DNI, partida de nacimiento y comprobante de pago por derecho de admisión.",
    icon: "📁",
    badge: "Validación",
  },
  {
    step: "03",
    title: "Examen de Admisión / Evaluación",
    description:
      "Rinde la prueba presencial de conocimientos, razonamiento matemático, aptitud verbal y cultura general en las instalaciones del IESPH.",
    icon: "✍️",
    badge: "Presencial",
  },
  {
    step: "04",
    title: "Resultados Oficiales y Matrícula",
    description:
      "Verifica la lista oficial de ingresantes en el portal institucional y descarga tu constancia para formalizar la matrícula académica.",
    icon: "🎓",
    badge: "Ingreso",
  },
]

export const ADMISSION_MODALITIES: AdmissionModality[] = [
  {
    title: "Modalidad Ordinaria",
    description:
      "Dirigido a egresados de Educación Básica Regular (EBR) y Educación Básica Alternativa (EBA) que rinden la prueba general de admisión.",
    targetAudience: "Egresados de educación secundaria",
  },
  {
    title: "Modalidad por Exoneración",
    description:
      "Primeros puestos de secundaria (con acta refrendada por UGEL), deportistas calificados acreditados por el IPD, servicio militar voluntario activo y personas con discapacidad (CONADIS).",
    targetAudience: "Primeros puestos, IPD y servicio militar",
  },
  {
    title: "Becas y Convenios Especiales (PRONABEC / Beca 18)",
    description:
      "Acceso preferente para postulantes preseleccionados de Beca 18 y programas de financiamiento integral del Estado peruano.",
    targetAudience: "Postulantes preseleccionados PRONABEC",
  },
]

export const EXONERATION_DETAILS = [
  {
    category: "Primeros puestos de secundaria",
    requirements: [
      "Acta de adjudicación del 1° o 2° puesto refrendada por la UGEL correspondiente.",
      "Certificado original de estudios secundarios completos.",
      "Copia de DNI legible.",
      "Pago por derecho de admisión exonerado.",
    ],
  },
  {
    category: "Deportistas calificados",
    requirements: [
      "Constancia emitida por el Instituto Peruano del Deporte (IPD) acreditando condición destacada.",
      "Certificado original de estudios secundarios completos.",
      "Copia de DNI legible.",
      "Pago por derecho de admisión exonerado.",
    ],
  },
  {
    category: "Servicio militar voluntario en actividad",
    requirements: [
      "Constancia oficial de Servicio Militar en actividad emitida por la institución armada.",
      "Certificado original de estudios secundarios completos.",
      "Copia de DNI legible.",
      "Pago por derecho de admisión exonerado.",
    ],
  },
]

export const GENERAL_REQUIREMENTS = [
  "Certificado original de estudios secundarios completos (1° a 5° de secundaria)",
  "Copia simple del Documento Nacional de Identidad (DNI) legible y vigente",
  "Partida de nacimiento original o copia certificada",
  "Comprobante de pago por derecho de inscripción al examen de admisión",
  "2 fotografías tamaño carnet actuales a color con fondo blanco",
  "Ficha de inscripción debidamente suscrita por el postulante",
]
