# IESPH Repository & Agent Guidelines

> **IESPH (Portal Web Institucional)** es la plataforma web oficial de vanguardia para el **Instituto de Educación Superior Público "Huanta"** (Ayacucho, Perú). Construida con **React 19**, **TypeScript 5.7**, **Tailwind CSS v4**, **Vite 8** y validada con **Biome 2.5.9**. Su propósito es ofrecer una experiencia de usuario rápida, accesible, atractiva y orientada a la atracción de postulantes, la difusión de los 5 programas de estudio licenciados y la transparencia institucional.

> **CRITICAL INSTITUTIONAL NAMING RULE:**  
> La institución se denomina oficialmente **Instituto de Educación Superior Público "Huanta"** (sigla canónica: **IESPH** o **IESP "Huanta"**).  
> **QUEDA ESTRICTAMENTE PROHIBIDO** usar el término "Tecnológico" o la sigla "IESTP" en código, textos de interfaz, identificadores, metadatos o documentación. Dicha denominación está formalmente derogada por normativa MINEDU.

Este documento define las directrices arquitectónicas, estándares operativos, convenciones de ingeniería y principios de código limpio para agentes de IA y desarrolladores en este repositorio.

---

## 1. Filosofía de Ingeniería y Código Limpio (Clean Code)

El código limpio es un conjunto de prácticas y normas de ingeniería orientadas a crear software legible, testeable, mantenible y predecible, minimizando la complejidad accidental y la deuda técnica.

### Principios Fundamentales
- **KISS (Keep It Simple, Stupid)**: El código debe resolver el problema de raíz con la menor cantidad de capas posibles. Se prohíbe la sobreingeniería, las abstracciones especulativas o los patrones innecesarios que no aporten valor medible a la web institucional.
- **DRY (Don't Repeat Yourself)**: Cero duplicación de datos o lógica. La información institucional (carreras, teléfonos, resoluciones, vacantes) tiene una única representación canónica (SSOT) en `src/data/`.
- **YAGNI (You Aren't Gonna Need It)**: No programar anticipando supuestas funcionalidades complejas. Se implementa exclusivamente lo requerido, con contratos e interfaces limpias que permitan extenderlo orgánicamente.

### Nombres, Semántica y Claridad
- **Nombres significativos**: Emplear nombres descriptivos y precisos en inglés para código (`CareerCard`, `useAdmissionForm`, `filterProgramsByCampus`). El copy y textos de interfaz de usuario deben estar en español institucional neutral y profesional.
- **Cero números y cadenas mágicas**: Queda prohibido hardcodear colores, correos o números de teléfono en componentes JSX. Deben consumirse desde `src/data/institution.ts` o variables de tema CSS.
- **Componentes y funciones pequeñas de propósito único**: Cada componente debe resolver una única responsabilidad visual o funcional. Si un componente supera las 150-200 líneas, debe modularizarse en subcomponentes atómicos.

### Principios SOLID en React
- **Single Responsibility (SRP)**: Un componente presentacional solo renderiza UI; los hooks personalizados (`src/hooks/`) gestionan el estado y la lógica de negocio; los archivos de datos (`src/data/`) almacenan la información estática.
- **Open/Closed (OCP)**: Componentes UI abiertos a extensión mediante `props` (`variant`, `size`, `className`, `children`), pero cerrados a modificación directa.
- **Liskov Substitution (LSP)**: Cualquier variante o componente compuesto debe respetar el contrato base de HTML/React (`HTMLAttributes<T>`).
- **Interface Segregation (ISP)**: Interfaces tipadas precisas y segmentadas en `src/types/`, evitando pasar objetos monolíticos gigantes a componentes que solo necesitan dos propiedades.
- **Dependency Inversion (DIP)**: Los componentes de alto nivel dependen de abstracciones (interfaces y tipos) y reciben acciones mediante callbacks (`onApplyClick`, `onSelectCareer`), no de implementaciones rígidas o acopladas.

### Las 3E de la Excelencia Técnica
- **Eficacia**: Cumplir rigurosamente con los objetivos del portal: navegación intuitiva, presentación atractiva de carreras y captación efectiva de postulantes.
- **Eficiencia**: Cero desperdicio de bundle size. Tailwind CSS v4 nativo sin configuraciones pesadas de PostCSS, Vite 8 para recarga instantánea (<50ms) y carga optimizada de assets multimedia.
- **Excelencia**: Accesibilidad web (WCAG 2.1 AA), tipografía legible, contraste cromático validado y diseño 100% responsivo (mobile-first).

### Código Humanista y Reducción de Ruido
- **Empatía con el desarrollador**: El código debe ser comprensible y predecible para el próximo ingeniero.
- **Cero ruido de emojis en herramientas y terminal**: Logs, scripts operativos y salidas de consola serias y estructuradas con tags entre corchetes (`[OK]`, `[INFO]`, `[AVISO]`, `[ERROR]`).

### Criterio Técnico y Evaluación de Trade-offs
- **Cero complacencia ciega**: Nunca aceptar una solicitud o suposición sin validar técnica y documentalmente su impacto en el proyecto.
- **Causa Raíz (Root-Cause Analysis)**: Quedan prohibidos los parches cosméticos. Si un layout falla, resolver el flujo CSS / Flexbox / Grid correspondiente, jamás aplicar hacks de márgenes negativos o timeouts arbitrarios.
- **Tipado estricto**: Prohibido el uso de `any`, `@ts-ignore` o `@ts-nocheck`. El código debe compilar limpiamente con TypeScript estricto.
- **Principio del Boy Scout**: Cada archivo intervenido debe quedar más limpio y ordenado de lo que estaba antes de abrirlo.

---

## 2. Arquitectura de Software Recomendada: Container-Presentational + Domain-Driven Components

### ¿Por qué NO MVC ni MVP clásico en este proyecto?

1. **MVC clásico (Model-View-Controller)** fue diseñado para interfaces Smalltalk o aplicaciones web renderizadas en servidor (Rails, Laravel, Django). En React, el renderizado es declarativo (`UI = f(state)`). Introducir un Controller imperativo colisiona con el ciclo de vida y la reconciliación del Virtual DOM.
2. **MVP clásico (Model-View-Presenter)** utiliza una vista pasiva que delega toda manipulación a un Presenter imperativo que invoca manualmente métodos del DOM. En React, React mismo actúa como el motor de reconciliación de la vista.

### La Arquitectura Óptima: Container-Presentational + Clean Component-Driven

Para un portal institucional moderno en React 19 + Vite, la arquitectura canónica que garantiza máxima mantenibilidad, rendimiento y desacoplamiento es la **Arquitectura Modular por Capas (Clean / Screaming Architecture)**:

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. DOMAIN & DATA LAYER (src/data/ & src/types/)            │
│    - Entidades puras en TypeScript (Career, Admission, etc) │
│    - Datasets institucionales canónicos (SSOT)              │
│    - Cero dependencias de React o librerías de UI           │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 2. APPLICATION / LOGIC LAYER (src/hooks/ & src/utils/)      │
│    - Custom Hooks para estado y flujos de usuario           │
│    - Funciones puras de cálculo, ordenamiento y formateo    │
│    - Lógica testeable de forma aislada sin montar DOM       │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 3. PRESENTATION LAYER (src/components/)                     │
│    ├── ui/         -> Componentes atómicos (Button, Badge)  │
│    ├── sections/   -> Orquestadores de sección (Hero, Stats)│
│    ├── layout/     -> Header institucional, Navigation, etc │
│    └── modals/     -> Modales de detalle (CareerModal)      │
└─────────────────────────────────────────────────────────────┘
```

#### Ventajas Técnicas de este Enfoque:
- **Separación de Intereses (SoC)**: Si cambia la información de una carrera o el cronograma de admisión, solo se modifica `src/data/careers.ts` o `src/data/admission.ts`, sin tocar ni arriesgar la UI.
- **Componentes Presentacionales Puros (Dumb Components)**: Reciben datos vía `props` y emiten eventos vía callbacks. Son 100% predecibles, testeables y reutilizables.
- **Contenedores de Sección (Smart Components)**: Conectan los datos del dominio con los componentes presentacionales y coordinan la interacción del usuario.

---

## 3. Estructura Canónica del Proyecto

```text
src/
├── components/
│   ├── layout/          # Estructuras globales (Header, Footer, Navegación móvil)
│   ├── modals/          # Modales interactivos accesibles (Detalle de carreras)
│   ├── sections/        # Secciones modulares de la Landing Page
│   │   ├── HeroSection.tsx          # Banner principal y captación de leads
│   │   ├── StatsStrip.tsx           # Franja métrica institucional (40+ años, etc.)
│   │   ├── CareersSection.tsx       # Grid de los 5 programas licenciados
│   │   ├── WhyChooseUsSection.tsx   # Propuesta formativa y valores
│   │   ├── AdmissionSection.tsx     # 4 pasos del proceso y requisitos
│   │   ├── ServicesSection.tsx      # Talleres, laboratorios y campus
│   │   ├── NewsSection.tsx          # Noticias y comunicados oficiales
│   │   ├── TestimonialsSection.tsx  # Testimonios de estudiantes y egresados
│   │   └── CtaBanner.tsx            # Llamado final a la postulación
│   └── ui/              # Componentes atómicos reutilizables (Badge, Button, Card)
├── data/                # SSOT institucional (carreras, admisión, contactos, noticias)
│   ├── admission.ts     # Requisitos, modalidades y cronograma
│   ├── careers.ts       # Datos detallados de los 5 programas formativos
│   ├── institution.ts   # Teléfono, dirección, resolución MINEDU y autoridades
│   ├── navigation.ts    # Estructura del menú institucional multinivel
│   ├── news.ts          # Comunicados y notas de prensa institucionales
│   └── testimonials.ts  # Testimonios reales con contexto profesional
├── types/               # Contratos e interfaces del dominio en TypeScript
├── App.tsx              # Componente raíz orquestador
├── index.css            # Tailwind CSS v4 entrypoint y tokens de diseño
└── main.tsx             # Bootstrap de la aplicación en #root
```

---

## 4. Stack Tecnológico y Tooling Oficial

- **Runtime**: React 19 & React DOM 19
- **Lenguaje**: TypeScript 5.7 (`strict: true`)
- **Estilos**: Tailwind CSS v4 mediante `@tailwindcss/vite`
- **Bundler & Dev Server**: Vite 8
- **Linter & Formateador**: [Biome JS 2.5.9](https://biomejs.dev/) (`biome.json`)
- **Gestor de Paquetes Preferido**: `pnpm` (definido en `package.json` `"packageManager": "pnpm@10.34.3"` y `.mise.toml`)

---

## 5. Sistema de Diseño e Identidad Institucional

- **Paleta Cromática Oficial**:
  - **Púrpura Primario**: `#7114EF`
  - **Azul Secundario**: `#1475F7`
  - **Cian de Acento**: `#08D9FF`
  - **Gradiente Institucional**: `from-[#7114EF] to-[#1475F7]`
  - **Superficie Oscura (Footer/CTA)**: `#0F223A` / `#0A1626`
- **Tipografía**: Fuentes sans-serif modernas y legibles (Inter, Nunito, Roboto) con jerarquía clara de títulos `h1` a `h4`.
- **Microinteracciones**: Transiciones suaves (`transition-all duration-200`), efectos hover en tarjetas y elevación sutil mediante sombras consistentes.

---

## 6. Comandos del Proyecto (Scripts de Ingeniería)

Tanto `pnpm` como `npm` están completamente soportados:

| Comando | Equivalente npm | Propósito y Comportamiento |
| :--- | :--- | :--- |
| `pnpm dev` | `npm run dev` | Inicia el servidor de desarrollo Vite con Hot Module Replacement |
| `pnpm build` | `npm run build` | Compila la aplicación para producción en `/dist` |
| `pnpm preview` | `npm run preview` | Previsualiza el bundle compilado localmente |
| `pnpm lint` | `npm run lint` | Ejecuta el análisis estático de Biome |
| `pnpm lint:fix` | `npm run lint:fix` | Corrige problemas automáticos de linting con Biome |
| `pnpm format` | `npm run format` | Aplica formateo estricto con Biome (LF, 2 espacios, comillas) |
| `pnpm format:check` | `npm run format:check` | Valida el formateo de archivos sin modificarlos |
| `pnpm check` | `npm run check` | Ejecuta linter, formato y verificación de imports en un paso |
| `pnpm check:fix` | `npm run check:fix` | Corrige linter, organiza imports y formatea todo el código |
| `pnpm fix` | `npm run fix` | Alias rápido para `check:fix` |

---

## 7. Disciplina Git y Reglas de Desarrollo

1. **Salto de línea**: Todo archivo debe guardarse con salto de línea `LF`, gobernado por [.gitattributes](.gitattributes).
2. **Archivos ignorados**: Archivos temporales, compilaciones, respaldos (`*.zip`, salvo `!IESPH.zip`) y configuraciones locales deben mantenerse fuera del control de versiones vía [.gitignore](.gitignore).
3. **Commits convencionales con descripción en español**:
   - Prefijos estándar en inglés:
     - `feat:` Nuevas características visuales o de contenido.
     - `fix:` Corrección de errores o desajustes.
     - `docs:` Modificaciones en README, AGENTS u otra documentación.
     - `style:` Ajustes de formateo sin impacto en la lógica.
     - `refactor:` Mejoras en la estructura de código o componentes.
     - `chore:` Tareas de mantenimiento, dependencias o configuración.
     - `test:` Incorporación o ajuste de pruebas unitarias o de integración.
   - Descripción obligatoria en **español institucional claro y profesional** (ej. `docs: establecer arquitectura institucional y documentacion`).
   - Cero Spanglish o mezclas incoherentes dentro del mensaje de commit.
4. **Cero atribución de IA**: Prohibido agregar "Co-Authored-By", menciones de modelos o créditos generados en los mensajes de commit.
5. **Cero tests innecesarios ante cambios en Markdown**: Los cambios exclusivos en documentación (`*.md`) tienen tiempo de espera de 0 segundos y no requieren compilación de frontend.
6. **Cero rutas absolutas locales en el repositorio**: Queda estrictamente prohibido hardcodear rutas absolutas del sistema de archivos local (`C:\...`, `file:///C:/...`) dentro de archivos del repositorio (`README.md`, `AGENTS.md`, `docs/` o código fuente). Toda referencia entre documentos o recursos debe usar siempre rutas relativas (`docs/...`, `./...`) para garantizar la portabilidad del proyecto en cualquier entorno o máquina.

---

## 8. Smart Testing & Matriz de Impacto (Testing Quirúrgico)

La estrategia de pruebas y validación del portal se rige por los principios de **reducción de desperdicio** y **radio de impacto (blast-radius)**: no se ejecutan compilaciones completas ni suites de prueba globales cuando el cambio está confinado a un componente visual, un dataset o un archivo de configuración.

### Regla Inflexible: Cero Tests y Cero Overhead ante Cambios en Documentación (*.md)
- **Ningún `*.md` afecta el código ejecutable**: Los archivos markdown (`*.md`, `README.md`, `AGENTS.md`), configuraciones de Git (`.gitignore`, `.gitattributes`) y metadatos de entorno no alteran el runtime de React, no compilan en el bundle ni pueden romper la lógica de negocio.
- **Prohibición de validaciones o builds innecesarios**: Queda terminantemente prohibido ejecutar suites de prueba, comprobaciones de tipos pesadas o compilaciones completas de producción (`pnpm build`) tras modificar exclusivamente archivos de documentación. El tiempo de espera ante cambios en markdown es de **0 segundos** (bypass instantáneo sin fricción).

### Sobre los Tests Futuros (Cero Desperdicio / DRY)
- **Cero suites redundantes**: Se prohíbe crear archivos de test duplicados o tests que solo verifiquen que React monta un elemento sin comportamiento. Toda prueba debe evaluar contratos reales, validaciones de formularios o cálculo de reglas de negocio.
- **Verificación sin sobrecarga**: Para validar un cambio se utiliza la verificación mínima suficiente:
  1. Comprobación de tipos con TypeScript estricto.
  2. Análisis estático y formateo con Biome (`pnpm check`).
  3. Pruebas unitarias de dominio/hooks (Vitest) solo cuando la lógica de negocio o transformación de datos sea alterada.
  4. Compilación Vite (`pnpm build`) reservada exclusivamente para pases a producción o validación de empaquetado final.

### Matriz de Verificación Quirúrgica

| Ámbito / Alcance del Cambio | Rutas Afectadas | Verificación Requerida | Chequeos Omitidos |
| :--- | :--- | :--- | :--- |
| **Documentación y Configuración Git** | `*.md`, `.gitignore`, `.gitattributes`, `LICENSE` | **Ninguno (0s wait; bypass inmediato)** | Compilación Vite, linter de código, suites de prueba |
| **Datasets e Información Institucional** | `src/data/**/*.ts` | 1. `pnpm check`<br>2. Verificación de tipos TypeScript | Compilación completa de producción |
| **Contratos e Interfaces del Dominio** | `src/types/**/*.ts` | 1. `pnpm check`<br>2. Verificación de tipos TypeScript | Pruebas visuales, empaquetado de producción |
| **Componentes Visuales y Secciones** | `src/components/**/*.tsx`, `src/App.tsx` | 1. `pnpm check`<br>2. Verificación visual en HMR (`pnpm dev`) | Compilaciones pesadas en cada iteración |
| **Estilos Globales y Tokens CSS** | `src/index.css`, directivas Tailwind | 1. `pnpm format:check`<br>2. Inspección visual de regresión | Pruebas de lógica unitaria |
| **Lógica de Negocio y Hooks Futuros** | `src/hooks/**/*.ts`, utilidades de cálculo | 1. `pnpm check`<br>2. Tests unitarios del hook afectado (Vitest) | Compilación global de assets |
| **Pase a Producción / Release** | Todo el repositorio (`src/`, `package.json`, etc.) | 1. `pnpm check`<br>2. `pnpm build` | Ninguno (validación final del bundle `/dist`) |

