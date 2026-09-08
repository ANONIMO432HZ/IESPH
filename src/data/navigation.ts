import { NavItem, QuickLink } from "@/types"

export const TOP_NAV_LINKS: QuickLink[] = [
  { label: "Postulante", href: "#admision", badge: "Admisión 2026" },
  { label: "Estudiante", href: "#servicios" },
  { label: "Docente", href: "#institucion" },
  { label: "Egresado", href: "#testimonios" },
  { label: "Transparencia", href: "#transparencia" },
]

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Nosotros",
    href: "#nosotros",
    children: [
      {
        label: "Presentación Institucional",
        href: "#nosotros",
        description: "Historia y trayectoria del IESPH",
      },
      {
        label: "Visión, Misión y Valores",
        href: "#nosotros",
        description: "Rumbo estratégico al 2031",
      },
      {
        label: "Organización y Plana Docente",
        href: "#nosotros",
        description: "Autoridades y equipo académico",
      },
      {
        label: "Local e Infraestructura",
        href: "#servicios",
        description: "Sede Jr. Córdova N° 650",
      },
    ],
  },
  {
    label: "Programas de Estudio",
    href: "#carreras",
    children: [
      {
        label: "Diseño y Programación Web",
        href: "#carreras",
        description: "Tecnologías digitales y software",
      },
      {
        label: "Enfermería Técnica",
        href: "#carreras",
        description: "Ciencia del cuidado y salud asistencial",
      },
      {
        label: "Mecatrónica Automotriz",
        href: "#carreras",
        description: "Diagnóstico electrónico y sistemas vehiculares",
      },
      {
        label: "Industrias de Alimentos y Bebidas",
        href: "#carreras",
        description: "Transformación agroindustrial y control HACCP",
      },
      {
        label: "Producción Agropecuaria",
        href: "#carreras",
        description: "Agricultura tecnificada y sanidad pecuaria",
      },
    ],
  },
  {
    label: "Admisión 2026",
    href: "#admision",
    children: [
      {
        label: "Proceso de Admisión 2026",
        href: "#admision",
        description: "Cronograma, vacantes y pasos",
      },
      {
        label: "Modalidades de Ingreso",
        href: "#admision",
        description: "Ordinario, Exonerados y Beca 18",
      },
      {
        label: "Requisitos de Inscripción",
        href: "#admision",
        description: "Documentos para postular",
      },
      {
        label: "Matrícula Oficial",
        href: "#admision",
        description: "Guía para estudiantes ingresantes",
      },
    ],
  },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      {
        label: "Laboratorios y Talleres",
        href: "#servicios",
        description: "Equipamiento tecnológico",
      },
      {
        label: "Biblioteca Institucional",
        href: "#servicios",
        description: "Catálogo bibliográfico",
      },
      {
        label: "Bolsa Laboral y Convenios",
        href: "#servicios",
        description: "Alianzas con empresas",
      },
      {
        label: "Libro de Reclamaciones",
        href: "#contacto",
        description: "Atención de sugerencias y reclamos",
      },
    ],
  },
  {
    label: "Noticias",
    href: "#noticias",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
]

export const FOOTER_SECTIONS = [
  {
    title: "Institución",
    links: [
      { label: "Presentación y Reseña", href: "#nosotros" },
      { label: "Misión y Visión al 2031", href: "#nosotros" },
      { label: "Licenciamiento MINEDU", href: "#nosotros" },
      { label: "Organización Institucional", href: "#nosotros" },
      { label: "Documentos de Gestión (PEI / PAT / RI)", href: "#servicios" },
    ],
  },
  {
    title: "Académico",
    links: [
      { label: "Diseño y Programación Web", href: "#carreras" },
      { label: "Enfermería Técnica", href: "#carreras" },
      { label: "Mecatrónica Automotriz", href: "#carreras" },
      { label: "Industrias de Alimentos y Bebidas", href: "#carreras" },
      { label: "Producción Agropecuaria", href: "#carreras" },
      { label: "Admisión 2026", href: "#admision" },
    ],
  },
  {
    title: "Enlaces Oficiales",
    links: [
      {
        label: "Ministerio de Educación (MINEDU)",
        href: "https://www.gob.pe/minedu",
      },
      { label: "DRE Ayacucho (DREA)", href: "http://drea.gob.pe" },
      { label: "PRONABEC / Beca 18", href: "https://www.gob.pe/pronabec" },
      { label: "TUPA Institucional", href: "#contacto" },
      { label: "Libro de Reclamaciones", href: "#contacto" },
    ],
  },
]
