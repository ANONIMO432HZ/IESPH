import admisionResImg from "@/assets/news/admision-resultados-2026.jpg"
import comPedagogicaImg from "@/assets/news/comunicado-gestion-pedagogica.jpg"
import convConcursoImg from "@/assets/news/convocatoria-concurso-2026.jpg"
import convDocenteImg from "@/assets/news/convocatoria-docente-2026.png"
import type { NewsItem } from "@/types"

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "resultado-admision-2026",
    title:
      "Resultados Oficiales del Proceso de Admisión 2026 — Modalidad Ordinaria",
    excerpt:
      "Publicación de la nómina general de ingresantes a los 5 programas de estudio del IESP Huanta. Descarga el padrón oficial con los puntajes y vacantes adjudicadas.",
    date: "05 Abr 2026",
    category: "Admisión",
    image: admisionResImg,
    readTime: "2 min de lectura",
    pdfUrl: "/docs/Resultado-Admision-2026.pdf",
  },
  {
    id: "convocatoria-docente-2026",
    title:
      "Convocatoria para el Concurso Público de Méritos de Docentes Regulares 2026",
    excerpt:
      "Concurso público abierto para docentes en los programas de Diseño y Programación Web, Enfermería Técnica, Mecatrónica, Agropecuaria e Industrias de Alimentos.",
    date: "18 Feb 2026",
    category: "Institucional",
    image: convDocenteImg,
    readTime: "4 min de lectura",
  },
  {
    id: "convocatoria-concurso-publico-2026",
    title:
      "Convocatoria Pública Institucional para Fortalecimiento Académico y Administrativo",
    excerpt:
      "Proceso de selección para plazas técnicas y de soporte en talleres, laboratorios y áreas estratégicas del campus institucional.",
    date: "25 Mar 2026",
    category: "Institucional",
    image: convConcursoImg,
    readTime: "3 min de lectura",
  },
  {
    id: "convocatoria-gestion-pedagogica",
    title:
      "Convocatoria para Encargatura de Puesto o Funciones de Gestión Pedagógica",
    excerpt:
      "El Comité Institucional publica las bases para la encargatura de puestos pedagógicos y coordinaciones académicas bajo directivas de la DREA y MINEDU.",
    date: "08 Sep 2025",
    category: "Académico",
    image: comPedagogicaImg,
    readTime: "3 min de lectura",
  },
]
