# 09. Hoja de Ruta de Desarrollo (Development Roadmap)

El plan de evolución del portal institucional se organiza en fases incrementales:

---

### Fase 1: Maquetación Base y Migración Estructural (Completada)
- [x] Configuración de React 19, Vite 8 y Tailwind CSS v4.
- [x] Modelado de entidades TypeScript y Single Source of Truth (`src/data/`).
- [x] Implementación de todas las secciones principales (Hero, Carreras, Admisión, Servicios, Noticias, Testimonios).
- [x] Modal interactivo para los 5 programas formativos licenciados.
- [x] Integración de linter y formateador Biome 2.5.9 con reglas LF estrictas.
- [x] Normalización de identidad institucional: denominación canónica **IESPH / Instituto de Educación Superior Público "Huanta"**.

---

### Fase 2: Enrutamiento y Páginas Detalladas (Próximo Hito)
- [ ] Incorporación de `react-router` para URLs estáticas e independientes:
  - `/carreras/:slug` (Página dedicada para cada programa de estudios).
  - `/admision` (Página completa de cronograma, prospecto y pago).
  - `/transparencia` (Descarga directa de documentos de gestión y TUPA).
  - `/noticias` (Catálogo histórico de comunicados institucionales).
- [ ] Optimización de metadatos SEO dinámicos (OpenGraph, Twitter Cards, JSON-LD para instituciones educativas).

---

### Fase 3: Integración de Backend y Captación de Postulantes
- [ ] Endpoint seguro para captación de leads y pre-inscripciones.
- [ ] Integración de webhook para notificaciones instantáneas a la Secretaría Académica (Telegram / WhatsApp Business / Correo).
- [ ] Validación estricta con esquemas Zod en formularios de contacto.

---

### Fase 4: Rendimiento y PWA
- [ ] Optimización y compresión automatizada de imágenes en formato WebP/AVIF.
- [ ] Service Worker para soporte offline de información crítica de contacto y carreras.
- [ ] Auditoría Lighthouse para alcanzar 95+ en Performance, Accesibilidad y SEO.
