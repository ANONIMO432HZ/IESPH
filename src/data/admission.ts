import { AdmissionStep, AdmissionModality } from "@/types"

export const ADMISSION_PROCESS_INFO = {
  title: "Proceso de Admisión 2026",
  subtitle: "Convocatoria Oficial de Vacantes para el Año Académico 2026",
  description:
    'Proceso mediante el cual los postulantes acceden a una vacante en cualquiera de los 5 programas de estudio del IESTP Público "Huanta". Se realiza mediante convocatoria pública y procedimientos normados por el MINEDU y la Dirección Regional de Educación de Ayacucho (DREA).',
  licenseNote:
    "Instituto de Educación Superior Licenciado por MINEDU · Título a Nombre de la Nación",
  academicCycle: "2026-I / 2026-II",
}

export const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: "01",
    title: "Pre-Inscripción en Línea o Presencial",
    description:
      "Completa el formulario web con tus datos personales o acércate a la Secretaría Académica del campus en Jr. Córdova N° 650.",
    icon: "📝",
    badge: "Paso Inicial",
  },
  {
    step: "02",
    title: "Entrega de Requisitos y Carpeta",
    description:
      "Presenta copia de DNI, partida de nacimiento, certificado de estudios secundarios y recibo de derecho de examen de admisión.",
    icon: "📁",
    badge: "Validación",
  },
  {
    step: "03",
    title: "Examen de Admisión / Evaluación",
    description:
      "Rinde la prueba presencial de conocimientos, razonamiento verbal, matemático y cultura general en las instalaciones del IESPH.",
    icon: "✍️",
    badge: "Presencial",
  },
  {
    step: "04",
    title: "Resultados y Matrícula Oficial",
    description:
      "Consulta la lista oficial de ingresantes en el panel institucional y portal web, y formaliza tu matrícula para iniciar clases.",
    icon: "🎓",
    badge: "Ingreso",
  },
]

export const ADMISSION_MODALITIES: AdmissionModality[] = [
  {
    title: "Modalidad Ordinaria",
    description:
      "Dirigido a egresados de Educación Básica Regular (EBR) y Educación Básica Alternativa (EBA) que rinden el examen general de admisión.",
    targetAudience: "Egresados de secundaria",
  },
  {
    title: "Modalidad por Exoneración",
    description:
      "Primeros puestos de secundaria, deportistas calificados de alto nivel, personas con discapacidad y beneficiarios de leyes especiales.",
    targetAudience: "Primeros puestos y destacados",
  },
  {
    title: "Becas y Convenios Especiales (PRONABEC / Beca 18)",
    description:
      "Acceso mediante convenios con el Programa Nacional de Becas y Crédito Educativo (Beca 18) para jóvenes de alto rendimiento académico y vulnerabilidad económica.",
    targetAudience: "Postulantes Beca 18",
  },
]

export const GENERAL_REQUIREMENTS = [
  "Certificado original de estudios secundarios completos (1° a 5° de secundaria)",
  "Copia simple del Documento Nacional de Identidad (DNI) legible y vigente",
  "Partida de nacimiento original o copia certificada",
  "Comprobante de pago por derecho de inscripción al examen de admisión",
  "2 fotografías tamaño carnet actuales con fondo blanco",
  "Ficha de inscripción debidamente firmada por el postulante",
]
