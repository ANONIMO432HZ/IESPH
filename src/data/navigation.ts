import type { FooterSection, NavItem, QuickLink } from "@/types"

export const TOP_NAV_LINKS: QuickLink[] = [
  { label: "Postulante", href: "/admision", badge: "Admisión 2026" },
  {
    label: "Portal Estudiante (SIGAEST)",
    href: "https://iestphuanta.sistema.edu.pe/login/",
  },
  { label: "Bolsa Laboral (AVANZA)", href: "https://avanza.minedu.gob.pe/" },
]

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: "Nosotros",
    href: "/presentacion",
    children: [
      {
        label: "Presentación",
        href: "/presentacion",
      },
      {
        label: "Visión, Misión y Valores",
        href: "/mision-vision",
      },
      {
        label: "Organización Institucional",
        href: "/organizacion",
      },
      {
        label: "Plana jerárquica",
        href: "/plana-jerarquica",
      },
      {
        label: "Plana docente",
        href: "/plana-docente",
      },
      {
        label: "Local",
        href: "/local",
      },
    ],
  },
  {
    label: "Programas de Estudio",
    shortLabel: "Carreras",
    href: "/carreras",
    children: [
      {
        label: "Diseño y Programación Web",
        href: "/carreras/diseno-programacion-web",
        description: "Tecnologías digitales y software",
      },
      {
        label: "Enfermería Técnica",
        href: "/carreras/enfermeria-tecnica",
        description: "Ciencia del cuidado y salud asistencial",
      },
      {
        label: "Mecatrónica Automotriz",
        href: "/carreras/mecatronica-automotriz",
        description: "Diagnóstico electrónico y sistemas vehiculares",
      },
      {
        label: "Industrias de Alimentos y Bebidas",
        href: "/carreras/industrias-alimentos-bebidas",
        description: "Transformación agroindustrial y control HACCP",
      },
      {
        label: "Producción Agropecuaria",
        href: "/carreras/produccion-agropecuaria",
        description: "Agricultura tecnificada y sanidad pecuaria",
      },
    ],
  },
  {
    label: "Admisión 2026",
    shortLabel: "Admisión",
    href: "/admision",
    children: [
      {
        label: "Proceso de Admisión 2026",
        href: "/admision",
        description: "Cronograma, vacantes y pasos",
      },
      {
        label: "Modalidades de Ingreso",
        href: "/admision",
        description: "Ordinario, Exonerados y Beca 18",
      },
      {
        label: "Requisitos de Inscripción",
        href: "/admision",
        description: "Documentos para postular",
      },
      {
        label: "Matrícula Oficial",
        href: "/admision",
        description: "Guía para estudiantes ingresantes",
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        label: "Laboratorios y Talleres",
        href: "/servicios",
        description: "Equipamiento tecnológico",
      },
      {
        label: "Biblioteca Institucional",
        href: "/servicios",
        description: "Catálogo bibliográfico",
      },
      {
        label: "Bolsa Laboral y Convenios",
        href: "/servicios",
        description: "Alianzas con empresas",
      },
      {
        label: "Libro de Reclamaciones",
        href: "/libro-de-reclamaciones",
        description: "Atención de sugerencias y reclamos",
      },
    ],
  },
  {
    label: "Noticias",
    href: "/noticias",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
]

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Institución",
    links: [
      { label: "Presentación y Reseña", href: "/nosotros" },
      { label: "Misión y Visión al 2031", href: "/nosotros" },
      {
        label: "Licenciamiento (R.M. 0371-2025)",
        href: "/docs/Licenciamiento-RMN371-2025-MINEDU.pdf",
      },
      { label: "Organización Institucional", href: "/nosotros" },
      { label: "Proyecto Educativo (PEI)", href: "/docs/PEI-IESPH.pdf" },
      { label: "Manual de Puestos (MPP)", href: "/docs/MPP-IESPH.pdf" },
      { label: "TUPA Institucional (PDF)", href: "/docs/TUPA-IESPH.pdf" },
    ],
  },
  {
    title: "Académico",
    links: [
      {
        label: "Diseño y Programación Web",
        href: "/carreras/diseno-programacion-web",
      },
      {
        label: "Enfermería Técnica",
        href: "/carreras/enfermeria-tecnica",
      },
      {
        label: "Mecatrónica Automotriz",
        href: "/carreras/mecatronica-automotriz",
      },
      {
        label: "Industrias de Alimentos y Bebidas",
        href: "/carreras/industrias-alimentos-bebidas",
      },
      {
        label: "Producción Agropecuaria",
        href: "/carreras/produccion-agropecuaria",
      },
      { label: "Admisión 2026", href: "/admision" },
      {
        label: "Resultados Admisión 2026 (PDF)",
        href: "/docs/Resultado-Admision-2026.pdf",
      },
    ],
  },
  {
    title: "Portales y Enlaces",
    links: [
      {
        label: "Portal Estudiante (SIGAEST)",
        href: "https://iestphuanta.sistema.edu.pe/login/",
      },
      {
        label: "Portal Docente (SISPA)",
        href: "https://sispa.iestphuanta.edu.pe/docente/login/",
      },
      {
        label: "Bolsa de Empleo (AVANZA)",
        href: "https://avanza.minedu.gob.pe/",
      },
      {
        label: "Ministerio de Educación (MINEDU)",
        href: "https://www.gob.pe/minedu",
      },
      { label: "DRE Ayacucho (DREA)", href: "http://drea.gob.pe" },
      { label: "PRONABEC / Beca 18", href: "https://www.gob.pe/pronabec" },
      { label: "Portal de Transparencia", href: "/transparencia" },
    ],
  },
]
