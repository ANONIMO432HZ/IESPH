# 03. Sistema de Diseño e Identidad (Design System)

## 1. Identidad Cromática Institucional

La paleta de color oficial del IESPH combina seriedad académica con dinamismo tecnológico y modernidad:

```css
:root {
  /* Colores Primarios */
  --color-primary: #7114EF;    /* Púrpura Institucional Huanta */
  --color-secondary: #1475F7;  /* Azul Tecnológico */
  --color-accent: #08D9FF;     /* Cian de Acento e Interactividad */

  /* Gradiente Institucional */
  --gradient-brand: linear-gradient(135deg, #7114EF 0%, #1475F7 100%);

  /* Superficies Oscuras (Hero / Footer / Modales) */
  --color-surface-dark: #0F223A;
  --color-surface-navy: #0A1626;

  /* Superficies Claras */
  --color-bg-light: #F8FAFC;
  --color-card-bg: #FFFFFF;
}
```

---

## 2. Tipografía y Jerarquía Visual

- **Fuente Primaria**: Sans-serif moderna (Inter / Roboto / Nunito) integrada para máxima legibilidad en pantallas de alta densidad.
- **Jerarquía de Títulos**:
  - `h1`: 36px - 48px, peso extrabold (`font-extrabold`), seguimiento ajustado (`tracking-tight`).
  - `h2`: 24px - 36px, peso bold (`font-bold`).
  - `h3`: 18px - 22px, peso semibold (`font-semibold`).
  - `body`: 14px - 16px, altura de línea relajada (`leading-relaxed`), contraste verificado WCAG AA sobre fondos claros u oscuros.

---

## 3. Microinteracciones y Componentes

- **Tarjetas de Carreras**: Elevación sutil en hover (`hover:-translate-y-1 hover:shadow-lg transition-all duration-200`).
- **Botones de Acción (CTA)**: Bordes redondeados consistentes (`rounded-lg`), tipografía en negrita (`font-bold`) y transiciones de color directas (`transition-colors`).
- **Modales de Detalle**: Apertura accesible con bloqueo de scroll corporal, backdrop difuminado (`backdrop-blur-sm`) y foco accesible.
