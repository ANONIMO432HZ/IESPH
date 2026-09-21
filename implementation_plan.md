# Especificación Técnica y Plan de Modernización UI/UX: IESPH

Consolidación arquitectónica con toda la información técnica extraída del portal en producción (`https://iesphuanta.edu.pe`), el análisis del stack tecnológico (Wappalyzer / CSV) y la inspección en vivo de animaciones, hovers y microinteracciones realizada con el navegador.

---

## 1. Matriz Comparativa: Stack Original vs. Stack Modernizado (React 19)

| Dimensión | Portal Original en Producción (WordPress / Elementor) | Arquitectura IESPH Modernizada (React 19 + Vite + Tailwind v4) | Decisión de Ingeniería |
| :--- | :--- | :--- | :--- |
| **Arquitectura Base** | WordPress 7.1.1, PHP, Apache/Cloudflare | React 19, TypeScript 5.7, Vite 8 (SPA estática optimizada) | Mayor velocidad, cero vulnerabilidades PHP, tiempo de carga <0.8s. |
| **Sistema de Estilos** | Bootstrap 4 + Elementor CSS monolítico + inline CSS (>300 KB) | Tailwind CSS v4 nativo con directivas `@theme` (<25 KB gzipped) | CSS atómico sin clases muertas ni colisiones. |
| **Paleta de Color** | `--primary-color: #7114ef`<br>`--secondary-color: #1475f7`<br>`--third-color: #08d9ff` | Variables CSS sincronizadas: `#7114EF`, `#1475F7`, `#08D9FF`, `#0F223A` | Replicación fiel de la identidad oficial con contraste WCAG 2.1 AA. |
| **Animaciones & Sliders** | Slider Revolution 6.7, OWL Carousel, Slick, GSAP, `animate.css` | Transiciones CSS nativas en GPU (`cubic-bezier`, `translate3d`, `will-change`) | Elimina dependencias pesadas de jQuery, manteniendo fluidez a 60 fps. |
| **Iconografía** | Font Awesome 4.7/5.15 + Flaticon + Caseicon (>1.2 MB fuentes) | Lucide-style SVGs en línea + SVG Loaders optimizados (<15 KB total) | Cero bloqueo de renderizado, escalado vectorial nítido en pantallas retina. |
| **Tipografía** | Nunito, Roboto, Poppins (múltiples llamadas a Google Fonts) | Plus Jakarta Sans + Inter (jerarquía de pesos 500, 600, 700, 800) | Lectura institucional clara, moderna y sin saltos de layout (CLS: 0). |

---

## 2. Parámetros Exactos de Microinteracciones y Hover Extraídos en Vivo

De la inspección directa del sitio web con el subagente de navegador, se extrajeron las siguientes especificaciones de comportamiento:

### A. Tarjetas de Programas de Estudio (`ct-fancy-box`)
- **Elevación en hover**: `transform: translateY(-8px)` con curva `transition: transform 0.4s ease, box-shadow 0.3s ease`.
- **Sombra volumétrica de marca**: `box-shadow: 0 15px 35px rgba(113, 20, 239, 0.12)`.
- **Microinteracción del ícono**: `transform: scale(1.1)` y transición de color hacia `#7114EF` gobernada por `transition: 0.2s cubic-bezier(0.24, 0.74, 0.58, 1)`.
- **Fondo / Overlay**: Revelado de gradiente institucional `linear-gradient(to left, #1475F7, #7114EF)` con opacidad suave.

### B. Botones y Llamados a la Acción (CTAs)
- **Geometría**: Botones píldora con radio completo (`border-radius: 9999px` / `rounded-full` o `23px`).
- **Gradiente dinámico**: `background-image: linear-gradient(90deg, #7114EF 0%, #1475F7 50%, #7114EF 100%)`.
- **Hover & Active feedback**: Desplazamiento sutil del gradiente (`transition: 0.18s linear`) y compresión táctil accesible (`active:scale-95`).

### C. Navegación Principal y Dropdowns
- **Comportamiento**: Header fijado (`position: sticky`, `top: 0`) con efecto de elevación y desenfoque (`backdrop-blur-md bg-white/90 dark:bg-slate-950/90`).
- **Menús multinivel**: Entrada en cascada con `opacity` y `translateY` suave (`transition: opacity 0.3s, transform 0.3s`).
- **Línea indicadora activa**: Barra inferior de acento con el gradiente institucional `#7114EF` a `#1475F7`.

### D. Enlaces Institucionales Oficiales (Métricas y Confianza)
- Enlaces de interés presentes en el portal a replicar:
  1. **MINEDU** (`https://www.gob.pe/minedu`)
  2. **TITULA** (`https://titula.minedu.gob.pe/` - Consulta oficial de títulos de institutos)
  3. **REGISTRA** (`https://registra.minedu.gob.pe/` - Registro nacional de matrículas)
  4. **AVANZA** (`https://avanza.minedu.gob.pe/` - Carrera docente y gestión)

---

## 3. Plan de Cambios Detallado por Archivo

### [MODIFY] [index.css](file:///c:/LABORATORIO/IESPH/src/index.css)
- Incorporar los tokens de color canónicos de la web oficial:
  - `--primary: #7114EF` (Púrpura IESPH)
  - `--secondary: #1475F7` (Azul IESPH)
  - `--accent: #08D9FF` (Cian luminoso)
  - `--surface-dark: #0F223A` (Superficie institucional oscura)
  - `--surface-deep: #0A1626` (Obsidiana)
- Añadir utilidades de animación y microinteracciones:
  - `.fancy-card-hover`: elevación de `-8px` y sombra púrpura translúcida.
  - `.btn-pill-gradient`: botón con gradiente institucional y hover activo.
  - `.glow-accent`: resplandor ambiental para métricas y badges.

### [MODIFY] [Icons.tsx](file:///c:/LABORATORIO/IESPH/src/components/icons/Icons.tsx)
- Reemplazar íconos toscos por trazados optimizados de estándar Lucide con viewBox unificado `0 0 24 24`.
- Incorporar `IconSpinner` (loader SVG fluido sin dependencias para feedback de formularios y botones).
- Agregar íconos requeridos para enlaces oficiales y WhatsApp (`IconWhatsApp`, `IconExternalLink`, `IconSparkles`, `IconShieldCheck`).

### [MODIFY] [HeroSection.tsx](file:///c:/LABORATORIO/IESPH/src/components/sections/HeroSection.tsx)
- Implementar la **Franja Flotante de los 5 Programas de Estudio** bajo el hero banner (tal como figura en la portada de la web oficial):
  - 5 tarjetas interactivas: *Diseño y Programación Web*, *Enfermería Técnica*, *Mecatrónica Automotriz*, *Industrias de Alimentos*, *Producción Agropecuaria*.
  - Hover con elevación de 8px, escala de ícono y revelado de degradado.
  - Clic que abre inmediatamente el modal de la carrera o desliza hacia la postulación.
- Modernizar el formulario de admisión con feedback interactivo y spinner de carga en el botón de envío.

### [MODIFY] [CareersSection.tsx](file:///c:/LABORATORIO/IESPH/src/components/sections/CareersSection.tsx)
- Reorganizar el grid de carreras con elevación suave de tarjetas.
- Agregar botón directo "Consultar por WhatsApp" con mensaje contextualizado (`"Hola IESPH, deseo información sobre la carrera de [Nombre]"`).
- Pulir el zoom de la fotografía en hover (`group-hover:scale-105 duration-500`) y badges de titulación oficial MINEDU.

### [MODIFY] [StatsStrip.tsx](file:///c:/LABORATORIO/IESPH/src/components/sections/StatsStrip.tsx)
- Replicar la franja de **Enlaces de Interés Oficiales del Estado** (MINEDU, TITULA, REGISTRA, AVANZA) con tarjetas interactivas de confianza pública y hover con gradiente.
- Mantener las métricas clave (40+ años, 5 programas, 100% presencial, 3 años de titulación).

---

## 4. Plan de Verificación y Criterios de Aceptación

1. **Pruebas Estáticas**:
   - `pnpm check`: validación estricta de linter y formateo con Biome 2.5.9.
   - `npx tsc --noEmit`: validación de tipado estricto sin `any` ni errores.
2. **Pruebas de Interacción y Renderizado**:
   - Comprobación en `http://localhost:5173` de todos los estados `:hover`, `:active` y `:focus-visible`.
   - Verificación de rendimiento a 60 fps en transiciones CSS.
   - Verificación de contraste en modo claro y modo oscuro.
