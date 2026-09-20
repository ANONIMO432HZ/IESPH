import type { Career } from "@/types"

export const CAREERS: Career[] = [
  {
    id: "diseno-programacion-web",
    name: "Diseño y Programación Web",
    code: "DPW",
    tagline:
      "Crea el futuro digital con interfaces modernas y software escalable",
    description:
      "Formación técnica de vanguardia en desarrollo de software web, diseño de interfaces UI/UX, bases de datos y arquitecturas modernas para la industria tecnológica.",
    overview:
      "El Programa de Estudios de Diseño y Programación Web en el Instituto de Educación Superior Público Huanta está orientado a formar profesionales con competencias sólidas en el desarrollo y diseño de sitios web. Combina creatividad y tecnología, permitiendo aprender desde fundamentos de diseño gráfico hasta programación avanzada frontend y backend.",
    degreeAwarded: "Profesional Técnico en Diseño y Programación Web",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    color: "#1475F7",
    modules: [
      {
        number: 1,
        title: "Análisis y Diseño de Sistemas Web",
        description:
          "Construcción y modelado de programas y sistemas de información de acuerdo al diseño funcional, UX/UI, estándares de TI y buenas prácticas.",
      },
      {
        number: 2,
        title: "Desarrollo de Aplicaciones Web Frontend y Backend",
        description:
          "Implementación de soluciones web interactivas con HTML5, CSS3, JavaScript, frameworks modernos, APIs REST y bases de datos relacionales.",
      },
      {
        number: 3,
        title: "Gestión de Servidores, Seguridad y Servicios Cloud",
        description:
          "Despliegue, administración de servidores web, seguridad informática, optimización SEO y mantenimiento continuo de plataformas digitales.",
      },
    ],
    jobOpportunities: [
      "Desarrollador Web Frontend / Backend",
      "Diseñador de Interfaces de Usuario (UI / UX)",
      "Administrador de Portales y CMS Corporativos",
      "Consultor y Freelancer en Tecnologías Digitales",
      "Soporte y Gestión de Plataformas Informáticas",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "2 fotografías tamaño carnet a color con fondo blanco",
    ],
  },
  {
    id: "enfermeria-tecnica",
    name: "Enfermería Técnica",
    code: "ET",
    tagline: "Vocación, ciencia y cuidado integral de la salud humana",
    description:
      "Capacitación asistencial de primer nivel con prácticas hospitalarias para brindar cuidados integrales de salud a personas, familias y comunidades.",
    overview:
      "El Programa de Estudios de Enfermería Técnica forma profesionales éticos y comprometidos con el bienestar humano, preparados para participar activamente en la promoción, prevención, recuperación y rehabilitación de la salud en centros hospitalarios y de atención primaria.",
    degreeAwarded: "Profesional Técnico en Enfermería Técnica",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🏥",
    image:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
    color: "#08D9FF",
    modules: [
      {
        number: 1,
        title: "Atención Primaria y Salud Comunitaria",
        description:
          "Promoción de la salud, prevención de enfermedades infectocontagiosas y educación sanitaria en la comunidad.",
      },
      {
        number: 2,
        title: "Servicios Asistenciales de Enfermería y Cuidados Hospitalarios",
        description:
          "Procedimientos invasivos y no invasivos, administración de medicamentos, bioseguridad y atención pre-hospitalaria.",
      },
      {
        number: 3,
        title: "Atención Especializada Materno-Infantil y Adulto Mayor",
        description:
          "Cuidados integrales durante el ciclo vital, atención materno-neonatal, geriatría y apoyo en emergencias médicas.",
      },
    ],
    jobOpportunities: [
      "Hospitales y Clínicas del Sector Público (MINSA, EsSalud) y Privado",
      "Centros de Salud y Puestos Sanitarios Comunitarios",
      "Centros Geriátricos y Asilos Especializados",
      "Programas Sociales de Salud y Nutrición",
      "Atención Asistencial Domiciliaria Personalizada",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Certificado de salud física y mental",
    ],
  },
  {
    id: "mecatronica-automotriz",
    name: "Mecatrónica Automotriz",
    code: "MA",
    tagline:
      "Tecnología, electrónica y diagnóstico computarizado del parque automotor",
    description:
      "Especialización en diagnóstico electrónico, sistemas mecánicos de inyección electrónica, vehículos híbridos y mantenimiento integral de flotas automotrices.",
    overview:
      "El Programa de Mecatrónica Automotriz capacita a los estudiantes en el dominio de las tecnologías mecánicas, eléctricas y electrónicas que gobiernan los vehículos automotores modernos. Cuenta con talleres equipados con escáneres automotrices y bancos de prueba de última generación.",
    degreeAwarded: "Profesional Técnico en Mecatrónica Automotriz",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🛠️",
    image:
      "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop&q=80",
    color: "#7114EF",
    modules: [
      {
        number: 1,
        title: "Mantenimiento de Sistemas de Suspensión, Dirección y Frenos",
        description:
          "Diagnóstico, reparación y calibración de los sistemas mecánicos e hidráulicos de seguridad activa del automotor.",
      },
      {
        number: 2,
        title:
          "Mantenimiento del Sistema de Transmisión y Motores de Combustión",
        description:
          "Overhaul de motores a gasolina y diésel, transmisiones mecánicas y automáticas asistidas electrónicamente.",
      },
      {
        number: 3,
        title: "Sistemas Eléctricos, Electrónica e Inyección Computarizada",
        description:
          "Diagnóstico con escáner automotriz, osciloscopios, sensores, actuadores y gestión electrónica automotriz.",
      },
    ],
    jobOpportunities: [
      "Talleres y Concesionarios Automotrices Oficiales",
      "Empresas Mineras y de Transporte de Carga Pesada",
      "Centros de Inspección Técnica Vehicular",
      "Talleres Especializados de Inyección Electrónica",
      "Emprendimiento de Taller Mecatrónico Propio",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "2 fotografías tamaño carnet a color",
    ],
  },
  {
    id: "industrias-alimentos-bebidas",
    name: "Industrias de Alimentos y Bebidas",
    code: "IAB",
    tagline:
      "Transformación agroindustrial, calidad bromatológica y valor agregado",
    description:
      "Formación técnica en procesamiento de frutas, lácteos, cárnicos, cereales y bebidas bajo estrictos estándares de inocuidad y control de calidad HACCP.",
    overview:
      "El Programa de Estudios de Industrias de Alimentos y Bebidas impulsa el aprovechamiento de la rica biodiversidad del valle de Huanta y la región Ayacucho, formando profesionales capaces de transformar materias primas en productos inocuos, nutritivos y con alto valor comercial.",
    degreeAwarded: "Profesional Técnico en Industrias de Alimentos y Bebidas",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🥤",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    color: "#F59E0B",
    modules: [
      {
        number: 1,
        title: "Tecnología de Procesamiento de Frutas, Hortalizas y Bebidas",
        description:
          "Transformación agroindustrial de néctares, mermeladas, conservas, licores y bebidas fermentadas.",
      },
      {
        number: 2,
        title: "Tecnología de Productos Lácteos y Derivados Cárnicos",
        description:
          "Elaboración de quesos madurados, yogures, embutidos y derivados con control de fermentos y salubridad.",
      },
      {
        number: 3,
        title:
          "Control de Calidad, Inocuidad Alimentaria (HACCP/BPM) y Gestión",
        description:
          "Análisis fisicoquímico, microbiológico, aseguramiento de inocuidad alimentaria y desarrollo de nuevos productos.",
      },
    ],
    jobOpportunities: [
      "Plantas Procesadoras de Alimentos y Embotelladoras",
      "Laboratorios de Control de Calidad Bromatológica",
      "Empresas Agroexportadoras de la Región",
      "Supermercados y Cadenas de Distribución Alimentaria",
      "Empresas de Elaboración de Productos Artesanales e Industriales",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Carnet de sanidad vigente",
    ],
  },
  {
    id: "produccion-agropecuaria",
    name: "Producción Agropecuaria",
    code: "PA",
    tagline:
      "Agricultura tecnificada, sanidad pecuaria y desarrollo sostenible",
    description:
      "Manejo agronómico de cultivos de exportación, crianza técnica de animales mayores y menores, riego tecnificado y gestión ambiental de parcelas.",
    overview:
      "El Programa de Producción Agropecuaria combina el trabajo en campo y laboratorios agronómicos para tecnificar el agro huantino. Los estudiantes adquieren competencias en sanidad vegetal, fertilización ecológica, manejo de ganado vacuno, ovino, porcino y cuyes, así como gestión de cadenas productivas.",
    degreeAwarded: "Profesional Técnico en Producción Agropecuaria",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🌾",
    image:
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80",
    color: "#10B981",
    modules: [
      {
        number: 1,
        title: "Producción de Cultivos Agrícolas y Fruticultura Tecnificada",
        description:
          "Manejo agronómico de palto, lúcumo, hortalizas, cereales andinos y sistemas de riego por goteo.",
      },
      {
        number: 2,
        title: "Producción y Sanidad de Animales Menores y Mayores",
        description:
          "Alimentación balanceada, mejoramiento genético, sanidad animal y manejo técnico de vacunos y animales menores.",
      },
      {
        number: 3,
        title: "Protección Vegetal, Agroecología y Comercialización",
        description:
          "Control biológico de plagas, manejo integrado de cultivos, fertilizantes orgánicos y planes de negocios agrarios.",
      },
    ],
    jobOpportunities: [
      "Fundos Agrícolas y Empresas Agroexportadoras",
      "Organizaciones de Productores y Cooperativas Agrarias",
      "Entidades Públicas: Agencias Agrarias, SENASA, INIA",
      "Centros de Acopio y Comercialización Agropecuaria",
      "Emprendimientos de Producción Agrícola y Pecuaria Sostenible",
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "2 fotografías tamaño carnet a color",
    ],
  },
]
