# Design

Sistema visual actual de Flumen Solutions (PaginaAntigravity). Tema oscuro inspirado en
"agua / flujo". Tokens en `app/globals.css` (HSL CSS vars) + `tailwind.config.ts`.

## Color

Tema oscuro único (no hay light mode). Tokens HSL:

- `--background` 222 47% 11% — azul-gris muy oscuro (fondo principal)
- `--foreground` 210 40% 98% — casi blanco (texto principal)
- `--card` 222 47% 14% — superficie elevada
- `--primary` 230 55% 32% — **Flumen Blue #26377D**
- `--secondary` 195 42% 82% — **Azul claro #C2DDE5**
- `--accent` 174 100% 36% — **Aqua/Teal #00B8A9** (color de acción/CTA)
- `--muted` 217 33% 17% / `--muted-foreground` 215 20% 65% (texto secundario — VIGILAR
  contraste sobre fondo oscuro)
- `--destructive` 0 84% 60% — rojo (estados de error / "problema")
- `--border` / `--input` 217 33% 20%

Estrategia de color: **Committed oscuro** — el teal acento carga las acciones; el azul
profundo es la base de marca. Paleta de marca YA COMMITTED: identity-preservation gana,
no rediseñar la paleta, sí afinar su aplicación (contraste, dónde se usa el acento).

## Typography

- Familia única: **Inter** (`--font-inter`, next/font). Es identidad ya enviada; se
  respeta. Contraste de jerarquía vía peso/tamaño, no segunda familia.
- Escala (utilities en globals.css): `.text-h1` 4xl→6xl, `.text-h2` 3xl→5xl, `.text-h3`
  2xl→3xl, `.text-h4` xl→2xl, body 16→18px. Headings `font-bold`, `leading-tight`.
- RIESGO conocido: `leading-tight` + tamaños display grandes pueden apretar líneas en
  títulos largos en ES; revisar `text-wrap: balance` (existe `.text-balance`) y
  line-height en hero.

## Components / Layout

- `.container` max-width 1140px, padding fluido.
- `.section-padding` py-12→20.
- Componentes en `components/sections/` (Hero, ServiceCard, ProcessStep, TrustBar,
  CTASection, ScrollReveal, FAQAccordion, PageHeader) y `components/layout/` (Navbar,
  Footer, MobileMenu, LanguageSwitcher).
- Motion: framer-motion (ScrollReveal con whileInView; Hero usa WavyBackground animado).
- i18n propio ES/EN en `lib/i18n.tsx`.

## Motion / robustez (patrón establecido 2026-06-14)

- Las animaciones de revelado NO deben gatear la visibilidad. El contenido es visible
  por defecto; la animación solo realza. Usar el componente `ScrollReveal`
  (IntersectionObserver + estado base visible + respeta prefers-reduced-motion) para
  reveals al hacer scroll. El Hero usa la clase CSS `.hero-rise` (entrada al cargar).
  Motivo: framer `whileInView`/`useInView` dejaba secciones invisibles en tabs de
  fondo / renderers headless.
- `WavyBackground`: la onda vive en el tercio inferior como atmósfera; un scrim radial
  garantiza contraste AA del título. El canvas pausa el rAF cuando sale de viewport o
  la pestaña se oculta (IntersectionObserver + visibilitychange) — clave para batería
  en móvil. Respeta prefers-reduced-motion (frame estático).

## Resuelto (antes era deuda)

- Eliminadas utilities `.gradient-text` y `.glass` (sin uso, anti-patrones del skill).
- Quitado `body { cursor: default; caret-color: transparent }` y añadido `:focus-visible`
  accesible.
- Eliminadas las texturas SVG `feTurbulence` (home, CTASection, Footer): costaban mucho
  en compositing (congelaban el render) y aportaban poco. Bajó el peso de varias rutas.
