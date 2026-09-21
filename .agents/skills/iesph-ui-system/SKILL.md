---
name: iesph-ui-system
description: >-
  Institutional design system, official branding, and UI component standards for
  the Instituto de Educación Superior Público "Huanta" (IESPH). Use when creating or
  modifying UI components, applying brand colors, handling study programs, admission
  flows, or enforcing institutional naming and data integrity.
---

# IESPH Institutional Design System & Engineering Guidelines

Official engineering and design system specifications for the **Instituto de Educación Superior Público "Huanta"**.

---

## 1. Institutional Identity & Mandatory Naming Rules

> [!IMPORTANT]
> **CANONICAL INSTITUTIONAL NAME**:
> - Official Name: **Instituto de Educación Superior Público "Huanta"**
> - Official Acronym: **IESPH** or **IESP "Huanta"**
> - **STRICT PROHIBITION**: Never use the term "Tecnológico" or the acronym "IESTP". This denomination is legally revoked by MINEDU regulations.

---

## 2. Official Brand Palette & Design Tokens

Every component must adhere to the official palette defined in `src/index.css` and the institutional manual:

| Token / Role | Hex Code | Tailwind Utility / CSS Var | Purpose & Application |
| :--- | :--- | :--- | :--- |
| **Primary Purple** | `#7114EF` | `bg-[#7114EF]`, `text-[#7114EF]` | Hero banners, primary buttons, focal badges |
| **Secondary Blue** | `#1475F7` | `bg-[#1475F7]`, `text-[#1475F7]` | Interactive highlights, links, gradients |
| **Accent Cyan** | `#08D9FF` | `text-[#08D9FF]`, `bg-[#08D9FF]` | Glows, active states, metrics highlights |
| **Dark Navy Surface** | `#0F223A` | `bg-[#0F223A]` | Global footer, dark hero backgrounds |
| **Deep Obsidian** | `#0A1626` | `bg-[#0A1626]` | Footer copyright strip, dark elevated cards |
| **Official Gradient** | - | `from-[#7114EF] to-[#1475F7]` | Main CTAs, header accents, brand pills |

---

## 3. Single Source of Truth (SSOT) Architecture

All institutional data must come from `src/data/`. Never hardcode institutional values in JSX:

```text
src/data/
├── institution.ts   # Contact info, MINEDU resolutions, authorities, location
├── careers.ts       # 5 licensed programs (vacancies, modules, competencies)
├── admission.ts     # Admission steps, modalities, calendar, requirements
├── navigation.ts    # Main navigation menu and submenus
├── news.ts          # Institutional announcements and press releases
└── testimonials.ts  # Student and alumni stories
```

- When adding or modifying institutional copy, update the appropriate file in `src/data/`.
- Components consume typed domain models from `src/types/`.

---

## 4. Licensed Study Programs (5 Carreras)

The portal exclusively highlights the 5 licensed programs:
1. **Desarrollo de Sistemas de Información** (o Computación e Informática)
2. **Enfermería Técnica**
3. **Mecatrónica Automotriz**
4. **Producción Agropecuaria**
5. **Industrias Alimentarias**

Each career card or modal must present:
- Official certification level (Profesional Técnico - 3 años / 6 semestres).
- Modular certifications (Certificación Modular I, II, III).
- Direct WhatsApp enrollment inquiry link pre-filled with the program title.

---

## 5. Component Construction Rules

- **Container-Presentational Pattern**:
  - Keep presentation components pure (`src/components/ui/` and `src/components/sections/`).
  - Pass data via `props` and callbacks for user actions (`onApplyClick`, `onCareerSelect`).
- **Accessibility (WCAG 2.1 AA)**:
  - Contrast ratio >= 4.5:1 for text over color surfaces.
  - Interactive elements have explicit `focus-visible:ring-2 focus-visible:ring-offset-2`.
  - Icon-only buttons must provide an `aria-label`.
- **Responsive Scaffolding**:
  - Mobile-first structure (`px-4 sm:px-6 lg:px-8`).
  - Generous section padding (`py-12 sm:py-16 lg:py-24`).
