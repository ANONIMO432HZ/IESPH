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
      "El Profesional Técnico de Diseño y Programación Web, cuenta con habilidades para diseñar y desarrollar proyectos Web en medios digitales y multimedia. Propone soluciones creativas e innovadoras que responden a las necesidades y requerimientos del cliente ya las exigencias del mercado laboral, así como coordinar la implementación de proyectos web y posicionamiento SEO, aplicando estándares de seguridad. También, se desempeña con responsabilidad, eficiencia y valores orientados hacia la mejora continua.",
    introduction:
      "Destaca por contar con habilidades para la innovación y generar buenas prácticas en la empresa orientadas al trabajo colaborativo, efectivo y ético. Se comunica de manera efectiva en español y en inglés en contextos sociales y empresariales. Además, utiliza herramientas informáticas que le permiten optimizar procesos de trabajo en forma individual y colaborativa, y la toma de decisiones; poniendo en evidencia actitudes para la resolución de problemas.",
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
        title: "Análisis y Diseño de Sistemas Web",
        description:
          "Desarrollar la construcción de programas de los sistemas de información, de acuerdo al diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización.",
      },
      {
        number: 2,
        title: "Desarrollo de Aplicaciones Web",
        description:
          "Desarrollar las pruebas integrales de los sistemas de información y servicios de TI en la fase de implantación, de acuerdo al diseño funcional, buenas prácticas de TI y políticas de seguridad de la organización.",
      },
      {
        number: 3,
        title: "Diseño de Servicios Web",
        description:
          "Diseñar la presentación, animación, organización y navegación de los contenidos y servicios web, de acuerdo a las demandas del negocio, buenas prácticas de diseño, técnicas de diseño web, usabilidad y experiencia del usuario objetivo.",
      },
    ],
    jobOpportunities: [
      "Análisis funcional",
      "Diseño de plataformas web",
      "Implementación y mantenimiento de plataformas web",
      "Programación de aplicaciones web",
      "Programación de base de datos",
      "Programación de servicios",
      "Programación de aplicaciones móviles",
      "Diseño gráfico publicitario",
      "Producción audiovisual y multimedia",
      "Marketing digital",
      "Seguridad web",
      "Ilustración digital",
    ],
    competencies: [
      "Desarrollar la construcción de programas de los sistemas de información, de acuerdo al diseño funcional, estándares internacionales de TI, buenas prácticas de programación y políticas de seguridad de la organización.",
      "Desarrollar las pruebas integrales de los sistemas de información y servicios de TI en la fase de implantación, de acuerdo al diseño funcional, buenas prácticas de TI y políticas de seguridad de la organización.",
      "Diseñar la presentación, animación, organización y navegación de los contenidos y servicios web, de acuerdo a las demandas del negocio, buenas prácticas de diseño, técnicas de diseño web, usabilidad y experiencia del usuario objetivo.",
    ],
    employabilityCompetencies: [
      {
        title: "Comunicación efectiva (UD/T)",
        description:
          "Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      },
      {
        title: "Inglés (UD/T)",
        description:
          "Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      },
      {
        title: "Tecnologías de la Información (UD/T)",
        description:
          "Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicar y realizar procedimientos o tareas vinculadas al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      },
      {
        title: "Ética (UD/T)",
        description:
          "Establecer relaciones con respeto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      },
      {
        title: "Solución de Problemas (UD/T)",
        description:
          "Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
      },
      {
        title: "Emprendimiento (UD/T)",
        description:
          "Identificar nuevas oportunidades de proyectos o negocios que generen valor y sean sostenibles, gestionando recursos para su funcionamiento con creatividad y ética, articulando acciones que permitan desarrollar innovaciones en la creación de bienes y/o servicios, así como en procesos o productos ya existentes.",
      },
      {
        title: "Trabajo colaborativo (UD/T)",
        description:
          "Participar de forma activa en el logro de objetivos y metas comunes, integrándose con otras personas con criterio de respeto y justicia, sin estereotipos de género u otros, en un contexto determinado.",
      },
      {
        title: "Liderazgo personal y profesional (UD/T)",
        description:
          "Articular recursos y potencialidades de cada integrante de su equipo logrando un trabajo comprometido, colaborativo, creativo, ético, sensible a su contexto social y ambiente, en pro del bien común.",
      },
    ],
    performanceEntities: [
      {
        name: "Municipalidades",
        areas:
          "Área de estadística e informática, Área de imagen institucional",
      },
      {
        name: "UGEL (Unidades de Gestión Educativa)",
        areas: "Área de informática, Área de imagen institucional",
      },
      {
        name: "Red de Salud",
        areas:
          "Área de estadística e informática, Área de imagen institucional",
      },
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
    curriculum: [
      {
        semester: "Semestre Académico I",
        courses: [
          {
            name: "Fundamentos de programación",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          { name: "Redes e internet", credits: 3, hours: 5, semesterHours: 80 },
          {
            name: "Análisis y diseño de sistemas",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Introducción de base de datos",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Arquitectura de computadoras",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Aplicaciones en internet",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico II",
        courses: [
          { name: "Ofimática", credits: 2, hours: 3, semesterHours: 48 },
          {
            name: "Interpretación y producción textos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Metodología de desarrollo de software",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Programación orientada a objetos",
            credits: 3,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Arquitectura de servidores web",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Aplicaciones sistematizadas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Taller de base de datos",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
        ],
      },
      {
        semester: "Semestre Académico III",
        courses: [
          {
            name: "Administración de base de datos",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Programación de aplicaciones web",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Diseño de interfaces web",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Pruebas de software",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Inglés para la comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico IV",
        courses: [
          {
            name: "Desarrollo de entornos web",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Programación de soluciones web",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Proyectos de software",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Seguridad en aplicaciones web",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comprensión y redacción en inglés",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comportamiento ético",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
        ],
      },
      {
        semester: "Semestre Académico V",
        courses: [
          {
            name: "Programación de aplicaciones móviles",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Marketing digital",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Diseño de soluciones web",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Gestión y administración de sitios web",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Diagramación digital",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Solución de problemas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Oportunidades de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico VI",
        courses: [
          {
            name: "Plataforma de servicios web",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Ilustración y gráfica digital",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Administración de servidores web",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Comercio electrónico",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          { name: "Plan de negocios", credits: 2, hours: 3, semesterHours: 48 },
        ],
      },
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
      "El Programa de Estudios de Enfermería Técnica en el Instituto de Educación Superior Huanta está diseñado para formar profesionales altamente capacitados en el cuidado de la salud. Nuestro programa ofrece una combinación equilibrada de teoría y práctica, permitiendo a los estudiantes adquirir las habilidades necesarias para desempeñarse con excelencia en diversos entornos de atención médica.",
    introduction:
      "En el Instituto de Educación Superior Huanta, el Programa de Estudios de Enfermería Técnica se enfoca en preparar a los estudiantes para enfrentar los desafíos del sector salud con competencia y empatía. A lo largo de los 3 años de formación, los estudiantes desarrollan conocimientos sólidos en anatomía, fisiología, farmacología y técnicas de enfermería. Además, adquieren habilidades prácticas esenciales a través de prácticas clínicas supervisadas en instituciones de salud de prestigio. Nuestra misión es formar técnicos en enfermería que no solo dominen los aspectos técnicos de su profesión, sino que también sean capaces de ofrecer un trato humano y respetuoso a los pacientes. Los egresados de este programa estarán listos para integrarse al equipo de salud en hospitales, clínicas y centros comunitarios, contribuyendo al bienestar de la comunidad.",
    degreeAwarded: "Profesional Técnico en Enfermería Técnica",
    duration: "6 semestres (3 años)",
    semesters: 6,
    modality: "Presencial",
    schedule: "Turno Mañana (7:30 am – 1:15 pm)",
    icon: "🏥",
    image: etImg,
    artImage: etArt,
    schedulePdf: "/docs/HORARIO-DE-ENFERMERIA-TECNICA-1.pdf",
    color: "#08D9FF",
    modules: [
      {
        number: 1,
        title: "Asistencia en Promoción y Prevención de la Salud",
        description:
          "Realizar actividades de promoción de la salud con enfoque intercultural, de acuerdo con la situación local de salud, política sectorial, nacional, regional y la normativa vigente.",
      },
      {
        number: 2,
        title: "Asistencia en la Atención Básica de la Salud",
        description:
          "Asistir en la atención de las necesidades básicas de la salud de la persona por etapas de vida, aplicando el enfoque intercultural y según indicaciones del jefe inmediato, el nivel de atención y la normativa vigente.",
      },
      {
        number: 3,
        title: "Asistencia en la Atención Integral en Salud",
        description:
          "Asistir en los cuidados integrales de salud a la persona en las diferentes etapas de vida aplicando el enfoque intercultural y de derechos, de género y familiar en concordancia con la normativa vigente.",
      },
    ],
    jobOpportunities: [
      "Área de ejecución de procedimientos básicos de enfermería",
      "Área de promoción y prevención de la salud",
      "Área de protección, recuperación y rehabilitación del individuo, familia y comunidad",
      "Área administrativa en el centro de operaciones de emergencias, farmacia y hospitalización",
      "Área de tópico, triaje, admisión, centros farmacéuticos y boticas",
      "Área de promoción de la salud y prevención de la enfermedad",
      "Área de promoción de la salud, prevención en accidentes de trabajo y traslado de pacientes accidentados",
      "Área de fisioterapia, rehabilitación y medicina alternativa",
      "Área de masajes y rehabilitación, manejo de equipos y preparación de material independiente y centros de cosmiatria",
      "Atención de cuidados del adulto mayor, personas con discapacidad en las diferentes etapas de vida y manejo de tratamiento según prescripción médica",
    ],
    competencies: [
      "Realizar actividades de promoción de la salud con enfoque intercultural, de acuerdo con la situación local de salud, política sectorial, nacional, regional y la normativa vigente.",
      "Realizar actividades de prevención en salud individual y colectiva aplicando el enfoque intercultural, de acuerdo con guías, procedimientos establecidos y normativa vigente.",
      "Asistir en la atención de las necesidades básicas de la salud de la persona por etapas de vida, aplicando el enfoque intercultural y según indicaciones del jefe inmediato, el nivel de atención y la normativa vigente.",
      "Asistir en los cuidados integrales de salud a la persona en las diferentes etapas de vida aplicando el enfoque intercultural y de derechos, de género y familiar en concordancia con la normativa vigente.",
    ],
    employabilityCompetencies: [
      {
        title: "Comunicación efectiva",
        description:
          "Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      },
      {
        title: "Inglés",
        description:
          "Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      },
      {
        title: "Tecnologías de la Información",
        description:
          "Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicarse y realizar procedimientos o tareas vinculados al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      },
      {
        title: "Ética",
        description:
          "Establecer relaciones con respecto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      },
      {
        title: "Solución de Problemas",
        description:
          "Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
      },
      {
        title: "Cultura ambiental",
        description:
          "Convivir de manera ética, autónoma, responsable y sostenible, previniendo, reduciendo y controlando permanente y progresivamente los impactos ambientales.",
      },
      {
        title: "Quechua",
        description:
          "Comprender y comunicar ideas a nivel oral y escrito interactuando en diversas situaciones, como contextos sociales y laborales.",
      },
      {
        title: "Trabajo colaborativo",
        description:
          "Participar de forma activa en el logro de objetivos y metas comunes, integrándose con otras personas con criterio de respeto y justicia, sin estereotipos de género u otros, en un contexto determinado.",
      },
    ],
    performanceEntities: [
      {
        name: "Hospitales y Redes de Salud (MINSA / EsSalud)",
        areas:
          "Área de emergencias, hospitalización, tópico, triaje, farmacia y atención integral.",
      },
      {
        name: "Centros de Salud Comunitarios y Puestos de Salud",
        areas:
          "Promoción de la salud, inmunizaciones, prevención comunitaria y visitas domiciliarias.",
      },
      {
        name: "Clínicas, Policlínicos y Centros Especializados",
        areas:
          "Fisioterapia, rehabilitación, medicina alternativa, atención geriátrica y cosmiatría.",
      },
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
    curriculum: [
      {
        semester: "Semestre Académico I",
        courses: [
          {
            name: "Salud comunitaria",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Promoción de la salud",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Educación para la salud",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Asistencia en inmunizaciones",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Seguridad y salud en el trabajo",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Aplicaciones en internet",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico II",
        courses: [
          { name: "Epidemiología", credits: 2, hours: 3, semesterHours: 48 },
          {
            name: "Salud en desastres naturales",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Prevención en salud pública",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Anatomía y fisiología humana",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Fundamentos de bioseguridad",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Interpretación y producción de textos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          { name: "Ofimática", credits: 2, hours: 3, semesterHours: 48 },
        ],
      },
      {
        semester: "Semestre Académico III",
        courses: [
          {
            name: "Asistencia básica hospitalaria",
            credits: 5,
            hours: 9,
            semesterHours: 144,
          },
          {
            name: "Administración de medicamentos",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Documentación en salud",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Microbiología y muestras biológicas",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Inglés para la comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comunicación efectiva en Quechua",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico IV",
        courses: [
          {
            name: "Atención en urgencias y emergencias",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Procedimientos invasivos y no invasivos",
            credits: 5,
            hours: 9,
            semesterHours: 144,
          },
          {
            name: "Bioestadística en salud",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Dietas y nutrición",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Comprensión y redacción en inglés",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Medio ambiente y desarrollo sostenible",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico V",
        courses: [
          {
            name: "Salud materno neonatal",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Atención del niño y adolescente",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Atención al usuario quirúrgico",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Atención del adulto y adulto mayor",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Técnicas de resolución de conflictos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comportamiento ético",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico VI",
        courses: [
          {
            name: "Medicina alternativa",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Fisioterapia y rehabilitación",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          { name: "Salud mental", credits: 4, hours: 6, semesterHours: 96 },
          {
            name: "Atención del paciente en estado crítico",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Innovación tecnológica",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Plan de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
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
      "El Programa de Estudios de Mecatrónica Automotriz en el Instituto de Educación Superior Huanta está diseñado para formar profesionales altamente capacitados en la integración de mecánica, electrónica y sistemas de control en el sector automotriz. Nuestro programa combina teoría y práctica, permitiendo a los estudiantes adquirir conocimientos avanzados en diseño, mantenimiento y diagnóstico de sistemas automotrices modernos. A lo largo de la formación, los estudiantes se familiarizan con tecnologías de última generación, incluyendo vehículos eléctricos y sistemas de automatización.",
    introduction:
      "En el Instituto de Educación Superior Huanta, el Programa de Estudios de Mecatrónica Automotriz se enfoca en capacitar a los estudiantes para convertirse en expertos en la intersección de la mecánica y la electrónica aplicada a vehículos. Durante los 3 años de formación, los estudiantes desarrollan habilidades en el diseño y reparación de sistemas mecatrónicos, diagnóstico de fallos y mantenimiento de vehículos de última tecnología. El plan de estudios incluye módulos sobre sistemas eléctricos y electrónicos, control automático y robótica aplicada a la automoción. Además, se enfatiza el aprendizaje práctico mediante proyectos reales y prácticas en empresas del sector. Los egresados estarán listos para trabajar en talleres automotrices, concesionarios, empresas de manufactura de vehículos y centros de investigación, contribuyendo al avance tecnológico en la industria automotriz.",
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
        title:
          "Mantenimiento de Vehículos Convencionales y con Asistencia Electrónica",
        description:
          "Ejecutar el mantenimiento preventivo de los vehículos automotores, de acuerdo con el kilometraje del vehículo, horas de funcionamiento del motor, plan de mantenimiento, procedimientos de la organización, especificaciones del fabricante y medidas de seguridad.",
      },
      {
        number: 2,
        title:
          "Mantenimiento de Sistemas Eléctricos y Electrónicos Automotrices",
        description:
          "Restablecer el sistema eléctrico y electrónico de los vehículos automotores, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
      },
      {
        number: 3,
        title:
          "Mantenimiento del Sistema de Transmisión de Vehículos con Asistencia Electrónica",
        description:
          "Restablecer la transmisión de potencia en el tren motriz de los vehículos, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
      },
      {
        number: 4,
        title:
          "Mantenimiento de Motores de Combustión Interna con Asistencia Electrónica",
        description:
          "Restablecer la funcionalidad del motor de combustión interna de los vehículos automotores, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
      },
    ],
    jobOpportunities: [
      "Área de mantenimiento de vehículos livianos y pesados",
      "Área de mantenimiento y reparación de sistemas eléctricos y electrónicos automotrices",
      "Área de diagnóstico, mantenimiento y reparación del sistema de suspensión, dirección y frenos",
      "Área de mantenimiento y reparación de motores Otto y Diesel",
      "Área de mantenimiento y conversión de motores a gas (GNV y GLP) vehiculares",
      "Área de mantenimiento y reparación del sistema de transmisión con asistencia electrónica",
      "Área de investigación y desarrollo en proyectos de innovación del sector automotriz",
      "Área de asesoría técnica de pre y post venta de productos para el mercado automotriz",
    ],
    competencies: [
      "Ejecutar el mantenimiento preventivo de los vehículos automotores, de acuerdo con el kilometraje del vehículo, horas de funcionamiento del motor, plan de mantenimiento, procedimientos de la organización, especificaciones del fabricante y medidas de seguridad.",
      "Restablecer la funcionalidad del motor de combustión interna de los vehículos automotores, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
      "Restablecer la estabilidad, maniobrabilidad y mecanismo de frenado de los vehículos, de acuerdo con la categoría del vehículo, políticas y procedimientos de la organización, manual del fabricante, y normativa respectiva.",
      "Restablecer la transmisión de potencia en el tren motriz de los vehículos, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
      "Restablecer el sistema eléctrico y electrónico de los vehículos automotores, considerando políticas y procedimientos de la organización, manual del fabricante, y normativa correspondiente.",
    ],
    employabilityCompetencies: [
      {
        title: "Comunicación efectiva",
        description:
          "Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      },
      {
        title: "Inglés",
        description:
          "Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      },
      {
        title: "Tecnologías de la Información",
        description:
          "Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicarse y realizar procedimientos o tareas vinculados al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      },
      {
        title: "Ética",
        description:
          "Establecer relaciones con respeto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      },
      {
        title: "Solución de problemas",
        description:
          "Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
      },
      {
        title: "Emprendimiento",
        description:
          "Identificar nuevas oportunidades de proyectos o negocios que generen valor y sean sostenibles, gestionando recursos para su funcionamiento con creatividad y ética, articulando acciones que permitan desarrollar innovaciones en la creación de bienes y/o servicios, así como en procesos o productos ya existentes.",
      },
      {
        title: "Innovación",
        description:
          "Desarrollar procedimientos sistemáticos enfocados en la mejora significativa u original de un proceso, producto o servicio respondiendo a un problema, una necesidad o una oportunidad del sector productivo y educativo, el IES y la sociedad.",
      },
    ],
    performanceEntities: [
      {
        name: "Concesionarios y Talleres Mecatrónicos",
        areas:
          "Área de mantenimiento preventivo y correctivo de vehículos livianos y pesados",
      },
      {
        name: "Empresas de Transporte y Minería",
        areas:
          "Mantenimiento y diagnóstico de sistemas de inyección, motores y flotas vehiculares",
      },
      {
        name: "Centros de Diagnóstico y Conversión",
        areas:
          "Sistemas eléctricos, electrónicos, escaneo computarizado y conversión a GNV/GLP",
      },
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
    curriculum: [
      {
        semester: "Semestre Académico I",
        courses: [
          {
            name: "Mantenimiento automotriz",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Mecánica de taller y metrología automotriz",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Mantenimiento preventivo de la suspensión, dirección y frenos",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Mantenimiento preventivo del sistema eléctrico",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Seguridad laboral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Aplicaciones en internet",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico II",
        courses: [
          {
            name: "Dibujo mecánico CAD automotriz",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Hidráulica y neumática",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Cálculos aplicados a los sistemas de suspensión, dirección y frenos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Mantenimiento y reparación del sistema de suspensión y dirección con asistencia electrónica",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Mantenimiento del sistema de frenos con asistencia electrónica",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Interpretación y producción de textos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Ofimática",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico III",
        courses: [
          {
            name: "Sistemas de Luces",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Sistema de carga y arranque",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Sistema de encendido automotriz con asistencia electrónica",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Sistema de implementos, seguridad y confort",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Dibujo eléctrico y electrónico automotriz",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comportamiento ético",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Inglés para la comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico IV",
        courses: [
          {
            name: "Sistema de transmisión automática y transferencia",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Mecanismo diferencial",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Mecanismo de embrague y caja de velocidades manual",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Comprensión y redacción en inglés",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Estrategias para la solución de problemas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico V",
        courses: [
          {
            name: "Motores de combustión interna Otto",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Inyección electrónica Otto",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Sistema CAN BUS y unidades de control electrónico",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Cálculos aplicados al motor de combustión interno",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Oportunidades de negocio",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Fundamentos de innovación tecnológica",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico VI",
        courses: [
          {
            name: "Motores de combustión interna Diesel con asistencia electrónica",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Sistema de inyección Diesel con gestión electrónica",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Afinamiento electrónico de MCI",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Conversión a combustibles alternos a gas GLP y GNV",
            credits: 4,
            hours: 7,
            semesterHours: 112,
          },
          {
            name: "Plan de negocios",
            credits: 1,
            hours: 2,
            semesterHours: 32,
          },
          {
            name: "Proyecto de innovación tecnológica",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
        ],
      },
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
      "El profesional técnico del programa de estudios de Industrias de Alimentos y Bebidas, es competente en el manejo de la materia prima e insumos como en la recepción y acondicionamiento, realiza el proceso de mezclado, tratamiento térmico, operaciones de eliminación de agua, separación y hace el uso de la biotecnología para los procesos de producción de alimentos y bebidas, garantizando la inocuidad a través de la implementación de sistemas de gestión de calidad en un marco ético. Así mismo, ejecuta el envasado y la protección de los alimentos y bebidas. Interactúa de manera colaborativa en su entorno laboral con una comunicación efectiva y manejo del idioma inglés para interpretar y comunicar instrucciones vinculados a su formación, utiliza las tecnologías de la información y comunicación, con capacidad de solucionar problemas de su campo laboral a través de la innovación y emprendimiento que conlleven a la mejora continua, promoviendo el cuidado del medio ambiente.",
    introduction:
      "El Programa de Estudios de Industrias de Alimentos y Bebidas del Instituto de Educación Superior Público Huanta forma profesionales altamente capacitados para desempeñarse en la producción, procesamiento y control de calidad de alimentos y bebidas. Durante los tres años de formación, los estudiantes adquieren conocimientos en tecnología de alimentos, gestión de procesos industriales, seguridad alimentaria y desarrollo de nuevos productos, garantizando una preparación integral en el sector. El plan de estudios incluye prácticas en laboratorios especializados, proyectos de innovación y pasantías en empresas del rubro, permitiendo aplicar los conocimientos en entornos reales. Los egresados podrán desempeñarse en industrias alimentarias, plantas procesadoras, laboratorios de análisis de calidad, áreas de investigación y desarrollo, así como en emprendimientos gastronómicos y de producción de bebidas. Con una formación basada en la sostenibilidad y la innovación, los futuros técnicos en Industrias de Alimentos y Bebidas contribuirán a la mejora de la calidad y seguridad de los productos alimentarios, impulsando el desarrollo del sector en la región y el país.",
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
        title:
          "Recepción, Acondicionamiento y Mezclado de la Materia Prima e Insumos",
        description:
          "Recepcionar la materia prima e insumos, según procedimientos establecidos y normativa correspondiente.",
      },
      {
        number: 2,
        title:
          "Tratamiento Térmico, Operaciones de Eliminación de Agua y Separación en el Procesamiento de Alimentos",
        description:
          "Realizar tratamientos térmicos, de acuerdo con el tipo de producto alimentario y procedimientos establecidos.",
      },
      {
        number: 3,
        title: "Biotecnología y Envasado en el Procesamiento de Alimentos",
        description:
          "Realizar procedimientos de biotecnología, de acuerdo al tipo de producto alimentario y procedimientos establecidos.",
      },
      {
        number: 4,
        title: "Aseguramiento de la Calidad",
        description:
          "Mantener las condiciones de calidad en la elaboración de los alimentarios, según procedimientos de la organización y normativa correspondiente.",
      },
    ],
    jobOpportunities: [
      "Áreas de recepción de materia prima e insumos",
      "Áreas de producción de alimentos y bebidas",
      "Áreas de conservación y envasado de alimentos y bebidas",
      "Almacenamiento y distribución de productos alimenticios",
      "Áreas de control de calidad e inocuidad alimentaria (HACCP / BPM)",
      "Áreas de innovación y desarrollo de nuevos alimentos y bebidas",
      "Gestión y emprendimiento de empresas agroindustriales y procesadoras",
    ],
    competencies: [
      "Mantener las condiciones de calidad en la elaboración de los alimentarios, según procedimientos de la organización y normativa correspondiente.",
      "Recepcionar la materia prima e insumos, según procedimientos establecidos y normativa correspondiente.",
      "Acondicionar la materia prima e insumos, de acuerdo con el plan de producción, especificaciones técnicas, procedimientos de la organización y normativa correspondiente.",
      "Realizar el mezclado de la materia prima e insumos, según procedimientos establecidos y normativa correspondiente.",
      "Realizar tratamientos térmicos, de acuerdo con el tipo de producto alimentario y procedimientos establecidos.",
      "Realizar operaciones de eliminación de agua, de acuerdo con el tipo de producto alimentario y procedimientos establecidos.",
      "Realizar operaciones de separación de acuerdo al tipo de producto alimentario y procedimientos establecidos.",
      "Realizar procedimientos de biotecnología, de acuerdo al tipo de producto alimentario y procedimientos establecidos.",
      "Ejecutar las operaciones de envasado de los productos alimentarios, considerando su trazabilidad, requerimientos tecnológicos del cliente y normativa correspondiente.",
      "Proteger los productos alimentarios envasados, según el plan de producción, requerimientos de traslado y normativa correspondiente.",
    ],
    employabilityCompetencies: [
      {
        title: "Comunicación efectiva",
        description:
          "Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      },
      {
        title: "Inglés",
        description:
          "Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      },
      {
        title: "Tecnologías de la Información",
        description:
          "Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicarse y realizar procedimientos o tareas vinculados al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      },
      {
        title: "Ética",
        description:
          "Establecer relaciones con respeto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      },
      {
        title: "Solución de Problemas",
        description:
          "Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
      },
      {
        title: "Innovación",
        description:
          "Desarrollar procedimientos sistemáticos enfocados en la mejora significativa u original de un proceso, producto o servicio respondiendo a un problema, una necesidad o una oportunidad del sector productivo y educativo, el IES y la sociedad.",
      },
      {
        title: "Emprendimiento",
        description:
          "Identificar nuevas oportunidades de proyectos o negocios que generen valor y sean sostenibles, gestionando recursos para su funcionamiento con creatividad y ética, articulando acciones que permitan desarrollar innovaciones en la creación de bienes y/o servicios, así como en procesos o productos ya existentes.",
      },
    ],
    performanceEntities: [
      {
        name: "Sector Público",
        areas:
          "Hospitales, Municipalidades, Programas Sociales y Comedores Institucionales",
      },
      {
        name: "Sector Privado",
        areas:
          "Fábricas de alimentos y bebidas, plantas lácteas y de conservas",
      },
      {
        name: "Comercialización y Retail",
        areas:
          "Supermercados, almacenes de conservación y centros de acopio agroindustrial",
      },
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
    curriculum: [
      {
        semester: "Semestre Académico I",
        courses: [
          {
            name: "Recepción de materias primas e insumos",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Buenas Prácticas de Manufactura",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Química aplicada",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Maquinaria y equipos en la recepción y clasificación de la materia prima",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Almacenamiento de materias primas e insumos",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Comunicación Oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Aplicaciones en Internet",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico II",
        courses: [
          {
            name: "Selección y clasificación de las materias primas",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Acondicionamiento de las materias primas para el proceso",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Higiene en la Industria Alimentaria",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Proceso para Mezclado y Homogenizado",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Bioquímica de los alimentos",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Interpretación y producción textos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Ofimática",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico III",
        courses: [
          {
            name: "Procesamiento De Frutas y Hortalizas",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Procesos térmicos en productos cárnicos e hidrobiológicos",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Planificación y organización de la producción de alimentos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Maquinarias y equipos para la separación y eliminación de agua",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Microbiología de alimentos",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Inglés para la comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Estrategias para la Resolución de Problemas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico IV",
        courses: [
          {
            name: "Procesamiento de productos de panadería y pastelería",
            credits: 5,
            hours: 9,
            semesterHours: 144,
          },
          {
            name: "Operaciones de eliminación de agua en productos vegetales y azucares",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Operaciones de Separación de los Alimentos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Análisis de alimentos",
            credits: 5,
            hours: 8,
            semesterHours: 128,
          },
          {
            name: "Comprensión y redacción en inglés",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comportamiento Ético",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico V",
        courses: [
          {
            name: "Procesamiento de productos Lácteos",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Procesamiento de productos Fermentados",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Envasado de productos alimenticios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Etiquetado, Rotulado y Despacho de los productos Alimentarios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Almacenamiento de alimentos",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Empacado y embalado de alimentos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Fundamentos de innovación tecnológica",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Oportunidades de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico VI",
        courses: [
          {
            name: "Sistemas HACCP",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Sistemas de gestión de la calidad",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Evaluación sensorial de alimentos",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Control estadístico de procesos",
            credits: 2,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Nutrición Humana",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Innovación tecnológica",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Plan de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
    ],
  },
  {
    id: "produccion-agropecuaria",
    name: "Producción Agropecuaria",
    code: "PA",
    tagline:
      "Agricultura tecnificada, sanidad pecuaria y desarrollo rural sostenible",
    description:
      "Formación integral en gestión de sistemas agrícolas y ganaderos, técnicas agroecológicas, sanidad animal y producción sostenible.",
    overview:
      "El profesional técnico del Programa de Estudios de Producción Agropecuaria es competente en gestionar procesos de producción agrícola y pecuaria, aplicando técnicas agroecológicas y buenas prácticas agropecuarias, para obtener productos de calidad destinados a la comercialización y/o transformación. Supervisa la ejecución del plan operativo agrícola y/o pecuario de acuerdo con la unidad productiva, implementando la infraestructura productiva agrícola y pecuaria de acuerdo con el plan de producción, realizando la instalación y preparación del terreno de acuerdo al tipo de cultivo, requerimientos del mercado, supervisando el cumplimiento de los procesos de prevención y control de plagas y enfermedades agrícolas y pecuarias.",
    introduction:
      "En el Instituto de Educación Superior Huanta, el Programa de Estudios de Producción Agropecuaria ofrece una formación integral y especializada en la gestión de sistemas agrícolas y ganaderos. Este programa se enfoca en enseñar a los estudiantes las mejores prácticas para la producción sostenible de alimentos, combinando teoría y práctica para asegurar una educación completa y aplicable. A lo largo de los 3 años de formación, los estudiantes adquieren conocimientos profundos en diversas áreas clave como la agricultura sostenible, el manejo de suelos y aguas, la sanidad y nutrición animal, y la gestión de cultivos. El plan de estudios también incluye módulos sobre tecnología agrícola, economía rural y administración de empresas agropecuarias, preparando a los estudiantes para enfrentar los desafíos del sector agropecuario con una visión innovadora y empresarial.",
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
        title:
          "Preparación del Terreno e Implementación de Infraestructura Agropecuaria",
        description:
          "Supervisar la implementación de la infraestructura productiva agrícola y/o pecuaria de acuerdo con el plan de producción, buenas prácticas, procedimientos establecidos y normativa correspondiente.",
      },
      {
        number: 2,
        title:
          "Supervisión y Ejecución del Plan Operativo de los Procesos Productivos Agropecuarios",
        description:
          "Supervisar los procesos productivos agrícolas y/o pecuarios de acuerdo con el plan de producción, requerimientos del mercado, buenas prácticas, procedimientos establecidos y normativa correspondiente.",
      },
      {
        number: 3,
        title:
          "Procesamiento Primario y Aprovechamiento de Productos Agropecuarios",
        description:
          "Supervisar el procesamiento primario de productos agrícolas y/o pecuarios de acuerdo con requerimientos del mercado, buenas prácticas, plan establecido, y normativa correspondiente.",
      },
      {
        number: 4,
        title:
          "Almacenamiento y Comercialización de la Producción Agropecuaria",
        description:
          "Supervisar la comercialización de la producción primaria agrícola y/o pecuaria de acuerdo con los mercados de destino, procedimientos establecidos y normativa correspondiente.",
      },
    ],
    jobOpportunities: [
      "Área de producción de cultivos y crianza de animales en empresas públicas, privadas y ONG",
      "Ejecución y mantenimiento de proyectos ornamentales y viveros municipales",
      "Asistencia técnica en producción de cultivos y crianza en fundos agropecuarios",
      "Cooperativas y asociaciones de productores agropecuarios locales y regionales",
      "Entidades estatales del sector agrario: SENASA, INIA, agencias agrarias y municipios",
      "Gestión y dirección de empresas y emprendimientos agrícolas y ganaderos sostenibles",
    ],
    competencies: [
      "Gestionar procesos de producción agrícola, de acuerdo con los requerimientos del mercado.",
      "Gestionar procesos de producción pecuaria, de acuerdo con las buenas prácticas pecuarias, ambientales y las exigencias del mercado.",
      "Supervisar los procesos de prevención y control de plagas y enfermedades agrícolas y pecuarias, según calendario sanitario establecido, buenas prácticas agropecuarias y normas sanitarias vigentes.",
      "Supervisar el aprovechamiento primario de productos y subproductos agropecuarios, aplicando normas técnicas vigentes y procedimientos de la organización.",
      "Gestionar los procedimientos administrativos y comerciales de la producción agropecuaria de acuerdo con los objetivos y procedimientos de la empresa o unidad productiva.",
    ],
    employabilityCompetencies: [
      {
        title: "Comunicación efectiva",
        description:
          "Expresar de manera clara conceptos, ideas, sentimientos, hechos y opiniones en forma oral y escrita para comunicarse e interactuar con otras personas en contextos sociales y laborales diversos.",
      },
      {
        title: "Inglés",
        description:
          "Comprender y comunicar ideas, cotidianamente, a nivel oral y escrito, así como interactuar en diversas situaciones en idioma inglés, en contextos sociales y laborales.",
      },
      {
        title: "Tecnologías de la Información",
        description:
          "Manejar herramientas informáticas de las TIC para buscar y analizar información, comunicarse y realizar procedimientos o tareas vinculados al área profesional, de acuerdo con los requerimientos de su entorno laboral.",
      },
      {
        title: "Ética",
        description:
          "Establecer relaciones con respeto y justicia en los ámbitos personal, colectivo e institucional, contribuyendo a una convivencia democrática, orientada al bien común que considere la diversidad y dignidad de las personas, teniendo en cuenta las consideraciones aplicadas en su contexto laboral.",
      },
      {
        title: "Solución de Problemas",
        description:
          "Identificar situaciones complejas para evaluar posibles soluciones, aplicando un conjunto de herramientas flexibles que conlleven a la atención de una necesidad.",
      },
      {
        title: "Innovación",
        description:
          "Desarrollar procedimientos sistemáticos enfocados en la mejora significativa u original de un proceso, producto o servicio respondiendo a un problema, una necesidad o una oportunidad del sector productivo y educativo, el IES y la sociedad.",
      },
      {
        title: "Emprendimiento",
        description:
          "Identificar nuevas oportunidades de proyectos o negocios que generen valor y sean sostenibles, gestionando recursos para su funcionamiento con creatividad y ética, articulando acciones que permitan desarrollar innovaciones en la creación de bienes y/o servicios, así como en procesos o productos ya existentes.",
      },
      {
        title: "Trabajo colaborativo",
        description:
          "Participar de forma activa en el logro de objetivos y metas comunes, integrándose con otras personas con criterio de respeto y justicia, sin estereotipos de género u otros, en un contexto determinado.",
      },
    ],
    performanceEntities: [
      {
        name: "Producción Agrícola y Pecuaria",
        areas:
          "Empresas públicas, privadas y ONG dedicadas a la producción de cultivos y crianza de animales",
      },
      {
        name: "Proyectos Ornamentales y Viveros",
        areas:
          "Ejecución y mantenimiento de proyectos ornamentales, forestales y viveros municipales",
      },
      {
        name: "Asistencia Técnica y Extensión",
        areas:
          "Fundos agropecuarios, productores locales, asociaciones de productores y empresas comunales",
      },
    ],
    requirements: [
      "Certificado original de estudios secundarios completos",
      "Copia simple de DNI vigente",
      "Partida de nacimiento original",
      "Pago por derecho de admisión",
    ],
    curriculum: [
      {
        semester: "Semestre Académico I",
        courses: [
          {
            name: "Instalaciones Agropecuarias",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Operación de Sistemas de Riego",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Topografía Agrícola",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Manejo y Conservación de Suelos",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Mecanización Agrícola",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Comunicación Oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Aplicaciones en Internet",
            credits: 1,
            hours: 2,
            semesterHours: 32,
          },
        ],
      },
      {
        semester: "Semestre Académico II",
        courses: [
          {
            name: "Producción de pastos y forrajes",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Producción de cuyes y conejos",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Horticultura",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Raíces y Tuberosas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Formulación de raciones",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Inglés para la comunicación oral",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Ofimática",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico III",
        courses: [
          {
            name: "Producción de aves",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Producción apícola",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Control de Enfermedades Parasitarias",
            credits: 2,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Propagación de plantas en viveros",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Cultivo de Cereales y Leguminosas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Técnicas de mejoramiento animal",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Resolución de Problemas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico IV",
        courses: [
          {
            name: "Producción de vacunos",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Producción de porcinos",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Producción de ovinos, caprinos y camélidos sudamericanos",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Control de enfermedades infecciosas y metabólicas",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Manejo integrado de plagas y enfermedades agrícolas",
            credits: 4,
            hours: 6,
            semesterHours: 96,
          },
          {
            name: "Fruticultura",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comprensión y redacción en inglés",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Comportamiento Ético",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico V",
        courses: [
          {
            name: "Procesamiento primario de productos agrícolas",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Procesos primarios de productos pecuarios",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Manejo de poscosecha",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Control de calidad de productos agropecuarios",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Aprovechamiento de productos pecuarios",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Fundamentos de innovación tecnológica",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Oportunidades de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
      {
        semester: "Semestre Académico VI",
        courses: [
          {
            name: "Comercialización de la producción agropecuaria",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Marketing Agropecuario",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Técnicas de almacenamiento",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Logística en almacenes agropecuarios",
            credits: 3,
            hours: 5,
            semesterHours: 80,
          },
          {
            name: "Cadenas productivas",
            credits: 3,
            hours: 4,
            semesterHours: 64,
          },
          {
            name: "Innovación tecnológica",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
          {
            name: "Plan de negocios",
            credits: 2,
            hours: 3,
            semesterHours: 48,
          },
        ],
      },
    ],
    experimentalCenter: {
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
  },
]
