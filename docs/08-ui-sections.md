# 08. Componentes y Secciones UI (UI Sections & Components)

## 1. Organización de Secciones en `App.tsx`

La página de aterrizaje (Landing Page) se orquesta de forma modular a través de las siguientes secciones en `src/components/sections/`:

| Componente | Archivo | Responsabilidad Visual y de Negocio |
| :--- | :--- | :--- |
| **Header** | `layout/Header.tsx` | Barra superior con datos de contacto, logo oficial y navegación multinivel accesible |
| **HeroSection** | `sections/HeroSection.tsx` | Banner principal de impacto con llamado a la acción y formulario rápido de pre-inscripción |
| **StatsStrip** | `sections/StatsStrip.tsx` | Franja métrica institucional (40+ años, 5 carreras licenciadas, 100% presencial, 3 años) |
| **CareersSection** | `sections/CareersSection.tsx` | Cuadrícula responsiva de los 5 programas de estudio con modales de detalle interactivos |
| **WhyChooseUsSection** | `sections/WhyChooseUsSection.tsx` | Propuesta formativa de 4 pilares y visión institucional 2031 |
| **AdmissionSection** | `sections/AdmissionSection.tsx` | Los 4 pasos del proceso de postulación, cronograma y lista de requisitos |
| **ServicesSection** | `sections/ServicesSection.tsx` | Muestra gráfica de laboratorios, biblioteca, talleres y canales de atención |
| **NewsSection** | `sections/NewsSection.tsx` | Comunicados oficiales y notas de prensa institucionales |
| **TestimonialsSection** | `sections/TestimonialsSection.tsx` | Testimonios reales de estudiantes y egresados de las distintas carreras |
| **CtaBanner** | `sections/CtaBanner.tsx` | Banner final de alta conversión hacia el formulario de postulación |
| **CareerModal** | `modals/CareerModal.tsx` | Modal con descripción completa, perfil del egresado, malla curricular y campo laboral |
| **Footer** | `layout/Footer.tsx` | Pie de página con acreditación MINEDU, enlaces rápidos, redes sociales y copyright |

---

## 2. Flujo de Interacción: Pre-Inscripción Asistida

1. El usuario hace clic en el botón **"Postula en Línea"** (en Header, Banner o tarjetas de carrera).
2. El método `handleScrollToApply(careerName)` en `App.tsx` realiza un desplazamiento suave (`scrollIntoView`) hacia el formulario `#postular`.
3. Si el usuario seleccionó una carrera específica (ej. desde el modal de Mecatrónica), el selector del formulario se pre-selecciona automáticamente mediante el evento sintético correspondiente.
