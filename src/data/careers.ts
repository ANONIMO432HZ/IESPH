import dpwImg from "@/assets/careers/diseno-programacion-web.jpg"
import dpwArt from "@/assets/careers/diseno-programacion-web-art.png"
import etImg from "@/assets/careers/enfermeria-tecnica.jpg"
import etArt from "@/assets/careers/enfermeria-tecnica-art.png"
import iabImg from "@/assets/careers/industrias-alimentos-bebidas.jpg"
import iabArt from "@/assets/careers/industrias-alimentos-bebidas-art.png"
import maImg from "@/assets/careers/mecatronica-automotriz.jpg"
import maArt from "@/assets/careers/mecatronica-automotriz-art.png"
import paImg from "@/assets/careers/produccion-agropecuaria.jpg"
import paArt from "@/assets/careers/produccion-agropecuaria-art.png"
import type { Career } from "@/types"

export const CAREERS: Career[] = [
  {
    id: "diseno-programacion-web",
    name: "Diseño y Programación Web",
    code: "DPW",
    tagline:
      "Crea el futuro digital con desarrollo full-stack, interfaces UI/UX y software escalable",
    description:
      "Formación técnica especializada en desarrollo frontend y backend, bases de datos relacionales y no relacionales, diseño de interfaces y aplicaciones móviles.",
    overview:
      'El Programa de Estudios de Diseño y Programación Web del Instituto de Educación Superior Público "Huanta" forma profesionales altamente competentes en el desarrollo, diseño, despliegue y administración de soluciones digitales. Con laboratorios informáticos equipados y formación práctica, los egresados dominan las tecnologías más demandadas del mercado tecnológico regional y nacional.',
    degreeAwarded: "Profesional Técnico en Diseño y Programación Web",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "💻",
    image: dpwImg,
    artImage: dpwArt,
    schedulePdf: "/docs/Horario-DPW-2025-I.pdf",
    color: "#1475F7",
    modules: [
      {
        number: 1,
        title: "Gestión de Soporte Técnico y Tecnologías de la Información",
        description:
          "Instalación, mantenimiento y administración de redes, conectividad e infraestructura informática para empresas y organizaciones.",
      },
      {
        number: 2,
        title: "Desarrollo de Software y Administración de Base de Datos",
        description:
          "Diseño y modelado de datos, programación estructurada y orientada a objetos, y desarrollo de aplicaciones de escritorio y corporativas.",
      },
      {
        number: 3,
        title: "Programación Web, Interfaces Digitales y Soluciones Cloud",
        description:
          "Desarrollo de aplicaciones web interactivas, integración de APIs REST, diagramación digital UI/UX y despliegue de plataformas online.",
      },
    ],
    jobOpportunities: [
      "Desarrollador Web Frontend y Backend (Full-Stack)",
      "Diseñador de Interfaces de Usuario (UI/UX) y Diagramador Digital",
      "Administrador de Bases de Datos y Servidores Cloud",
      "Consultor Tecnológico y Especialista Freelance",
      "Soporte y Gestión de Infraestructura TI en Entidades Públicas y Privadas",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
  },
  {
    id: "enfermeria-tecnica",
    name: "Enfermería Técnica",
    code: "ET",
    tagline:
      "Vocación humanista, ciencia y cuidado integral de la salud pública",
    description:
      "Capacitación asistencial de primer nivel con prácticas hospitalarias para brindar atención integral en salud comunitaria, prevención y rehabilitación.",
    overview:
      'El Programa de Estudios de Enfermería Técnica del Instituto de Educación Superior Público "Huanta" forma profesionales éticos y comprometidos con el bienestar integral de la persona, familia y comunidad. Su plan de estudios combina sólidas bases científicas con experiencias formativas directas en centros de salud, hospitales y postas de la provincia de Huanta y la región Ayacucho.',
    degreeAwarded: "Profesional Técnico en Enfermería Técnica",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🏥",
    image: etImg,
    artImage: etArt,
    schedulePdf: "/docs/Horario-Enfermeria-Tecnica.pdf",
    color: "#08D9FF",
    modules: [
      {
        number: 1,
        title: "Atención Primaria en Salud y Salud Comunitaria",
        description:
          "Promoción de la salud, educación sanitaria comunitaria, epidemiología y prevención de enfermedades en el ámbito familiar.",
      },
      {
        number: 2,
        title: "Servicios Técnicos de Enfermería Asistencial",
        description:
          "Procedimientos invasivos y no invasivos, bioseguridad, administración técnica de medicamentos y asistencia al usuario quirúrgico.",
      },
      {
        number: 3,
        title: "Servicios Técnicos de Enfermería Especializada",
        description:
          "Atención integral materno-neonatal, cuidado del niño y adolescente, atención integral al adulto mayor y soporte en urgencias.",
      },
    ],
    jobOpportunities: [
      "Hospitales y Redes de Salud del Ministerio de Salud (MINSA)",
      "Policlínicos y Hospitales de EsSalud",
      "Clínicas y Centros de Diagnóstico Privados",
      "Puestos y Centros de Salud Comunitarios Rurales y Urbanos",
      "Centros de Atención Integral para el Adulto Mayor y Programas de Nutrición",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
  },
  {
    id: "mecatronica-automotriz",
    name: "Mecatrónica Automotriz",
    code: "MA",
    tagline:
      "Diagnóstico computarizado, electrónica automotriz y potencia mecánica",
    description:
      "Especialización en diagnóstico por escáner, inyección electrónica, motores Otto y diésel, sistemas hidráulicos y vehículos de última generación.",
    overview:
      'El Programa de Mecatrónica Automotriz del Instituto de Educación Superior Público "Huanta" capacita a los estudiantes en el dominio de las tecnologías mecánicas, eléctricas y electrónicas que integran el parque automotor moderno. Con talleres equipados con bancos de prueba, elevadores y escáneres automotrices, garantiza una formación práctica aplicada a las exigencias del transporte y la minería.',
    degreeAwarded: "Profesional Técnico en Mecatrónica Automotriz",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🛠️",
    image: maImg,
    artImage: maArt,
    schedulePdf: "/docs/Horario-Mecatronica-Automotriz.pdf",
    color: "#7114EF",
    modules: [
      {
        number: 1,
        title: "Mantenimiento de Sistemas de Suspensión, Dirección y Frenos",
        description:
          "Diagnóstico, reparación y alineamiento de los sistemas mecánicos e hidráulicos de estabilidad y seguridad activa del vehículo automotor.",
      },
      {
        number: 2,
        title:
          "Mantenimiento del Sistema de Transmisión y Motores de Combustión",
        description:
          "Restablecimiento de la funcionalidad del motor Otto y Diésel, sincronización y mantenimiento integral del tren motriz.",
      },
      {
        number: 3,
        title: "Sistemas Eléctricos, Electrónica e Inyección Computarizada",
        description:
          "Diagnóstico con escáner automotriz, osciloscopios, sensores, actuadores y gestión electrónica del encendido e inyección.",
      },
    ],
    jobOpportunities: [
      "Concesionarios y Talleres Mecatrónicos Especializados",
      "Empresas de Transporte de Pasajeros y Carga Pesada",
      "Compañías Mineras y Constructoras de Mantenimiento de Maquinaria",
      "Centros de Inspección Técnica Vehicular y Rectificación",
      "Emprendimiento y Gestión de Taller de Diagnóstico Electrónico Propio",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
  },
  {
    id: "industrias-alimentos-bebidas",
    name: "Industrias de Alimentos y Bebidas",
    code: "IAB",
    tagline:
      "Transformación agroindustrial, aseguramiento de inocuidad y control bromatológico",
    description:
      "Formación técnica en procesamiento de frutas, lácteos, carnes, cereales andinos y bebidas bajo rigurosos estándares de calidad HACCP y BPM.",
    overview:
      'El Programa de Estudios de Industrias de Alimentos y Bebidas del Instituto de Educación Superior Público "Huanta" forma profesionales para la producción, procesamiento y control de calidad alimentaria. Aprovechando el potencial agrícola del valle de Huanta, los estudiantes adquieren competencias en biotecnología, pasteurización, envasado y desarrollo de productos con valor agregado.',
    degreeAwarded: "Profesional Técnico en Industrias de Alimentos y Bebidas",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🥤",
    image: iabImg,
    artImage: iabArt,
    schedulePdf: "/docs/Horario-Industrias-Alimentos.pdf",
    color: "#F59E0B",
    modules: [
      {
        number: 1,
        title: "Recepción, Acondicionamiento y Mezclado de Materia Prima",
        description:
          "Recepción y preparación de insumos alimentarios conforme a la normativa sanitaria y buenas prácticas de manufactura (BPM).",
      },
      {
        number: 2,
        title: "Tratamiento Térmico y Procesamiento de Alimentos",
        description:
          "Ejecución de procesos térmicos, deshidratación, separación y conservación en líneas de producción de bebidas y conservas.",
      },
      {
        number: 3,
        title: "Biotecnología y Envasado en el Procesamiento de Alimentos",
        description:
          "Aplicación de fermentaciones controladas, envasado hermético y etiquetado industrial bajo estándares de salubridad.",
      },
      {
        number: 4,
        title: "Aseguramiento de la Calidad e Inocuidad (HACCP)",
        description:
          "Implementación de sistemas de gestión de inocuidad, análisis bromatológico y cumplimiento de directivas sanitarias de DIGESA.",
      },
    ],
    jobOpportunities: [
      "Plantas Procesadoras de Lácteos, Néctares, Bebidas y Cárnicos",
      "Laboratorios de Control de Calidad Bromatológica y Microbiológica",
      "Empresas Agroindustriales y Exportadoras de la Región",
      "Supermercados y Almacenes de Conservación Alimentaria",
      "Emprendimientos de Elaboración de Productos Agroindustriales",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
  },
  {
    id: "produccion-agropecuaria",
    name: "Producción Agropecuaria",
    code: "PA",
    tagline:
      "Agricultura tecnificada, sanidad pecuaria y desarrollo rural sostenible",
    description:
      "Manejo agronómico de cultivos de exportación, fruticultura, riego tecnificado, crianza animal y proyectos agroecológicos sostenibles.",
    overview:
      'El Programa de Producción Agropecuaria del Instituto de Educación Superior Público "Huanta" ofrece formación integral combinando parcelas demostrativas en campo y laboratorios agronómicos. Los estudiantes dominan técnicas de cultivo de palto, lúcumo, hortalizas y cereales, así como la sanidad y nutrición en ganado vacuno, porcino y animales menores.',
    degreeAwarded: "Profesional Técnico en Producción Agropecuaria",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🌾",
    image: paImg,
    artImage: paArt,
    schedulePdf: "/docs/Horario-Produccion-Agropecuaria.pdf",
    color: "#10B981",
    modules: [
      {
        number: 1,
        title: "Preparación del Terreno e Infraestructura Agropecuaria",
        description:
          "Implementación de infraestructura agrícola y pecuaria, análisis de suelos y diseño de sistemas de riego tecnificado por goteo.",
      },
      {
        number: 2,
        title: "Supervisión y Ejecución de Procesos Productivos Agropecuarios",
        description:
          "Gestión agronómica de siembra, fertilización ecológica, nutrición balanceada y manejo técnico de crianzas.",
      },
      {
        number: 3,
        title: "Procesamiento Primario y Aprovechamiento de Productos",
        description:
          "Manejo poscosecha, acopio, selección y aprovechamiento de derivados agrícolas y pecuarios para mercados locales y de exportación.",
      },
      {
        number: 4,
        title: "Almacenamiento y Comercialización de la Producción",
        description:
          "Gestión comercial, articulación con cooperativas agrarias y planes de negocio agropecuarios sostenibles.",
      },
    ],
    jobOpportunities: [
      "Fundos Agrícolas y Empresas de Agroexportación",
      "Organizaciones y Cooperativas de Productores Agrarios",
      "Entidades Estatales: SENASA, INIA, Agencias Agrarias y Municipios",
      "Centros de Acopio y Distribución de Productos Agropecuarios",
      "Empresas Propias de Producción Agrícola y Ganadera Sostenible",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
  },
]
