# 02. Arquitectura del Sistema (System Architecture)

## 1. Enfoque Arquitectónico

El portal institucional del IESPH implementa una **Arquitectura Limpia Modular orientada a Componentes (Clean Component-Driven Architecture)**, aplicando el patrón **Container-Presentational** con separación estricta de intereses:

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. CAPA DE DOMINIO (src/data/ & src/types/)                 │
│    - Entidades tipadas en TypeScript (Career, News, etc.)   │
│    - Datasets canónicos inmutables (Single Source of Truth) │
│    - Cero dependencias de UI o librerías externas           │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 2. CAPA DE APLICACIÓN (src/hooks/ & src/utils/)             │
│    - Hooks para estado de formularios y navegación          │
│    - Lógica testeable de forma aislada sin montar DOM       │
└──────────────────────────────┬──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│ 3. CAPA DE PRESENTACIÓN (src/components/)                   │
│    ├── ui/         -> Átomos visuales (Button, Badge, Card) │
│    ├── sections/   -> Secciones modulares de la Landing     │
│    ├── layout/     -> Header, Menú multinivel, Footer       │
│    └── modals/     -> Modales de detalle (CareerModal)      │
└─────────────────────────────────────────────────────────────┘
```

---

## 2. Decisiones Arquitectónicas Clave (ADR)

### ¿Por qué NO MVC ni MVP clásico?
- **React es declarativo (`UI = f(state)`)**: Forzar un Controller imperativo o un Presenter que manipule manualmente elementos DOM va en contra del modelo de reconciliación y el ciclo de vida de React 19.
- **Ventaja del patrón Container-Presentational**: Los componentes presentacionales (`ui/`) son funciones puras que reciben datos vía `props` y emiten eventos vía callbacks (`onApplyClick`), asegurando máxima predictibilidad y reusabilidad.

### Single Source of Truth (SSOT)
Toda información estática de la institución reside exclusivamente en `src/data/`:
- `careers.ts`: Información detallada de los 5 programas formativos.
- `admission.ts`: Requisitos, etapas y modalidades del proceso 2026.
- `institution.ts`: Datos de contacto, teléfonos, autoridades y resoluciones.
- `navigation.ts`: Estructura del menú de navegación institucional.
- `news.ts`: Notas de prensa y comunicados.

---

## 3. Stack Tecnológico

| Componente | Tecnología | Versión | Justificación |
| :--- | :--- | :--- | :--- |
| **Framework UI** | React | 19.0.0 | Renderizado declarativo ultrarrápido y mejoras en gestión de transiciones |
| **Lenguaje** | TypeScript | 5.7.0 | Tipado estricto (`strict: true`), autocompletado y prevención de bugs |
| **Estilos** | Tailwind CSS | v4.0.0 | Motor nativo con integración directa en Vite sin PostCSS |
| **Bundler & Dev Server** | Vite | 8.0.5 | Carga instantánea (<50ms HMR) y compilación optimizada en Rollup |
| **Linter / Formateador** | Biome | 2.5.9 | Análisis estático y formateo estricto ultrarrápido en Rust |
