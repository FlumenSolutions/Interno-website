---
name: Flumen Solutions
description: Sitio de marca oscuro inspirado en agua/flujo, para PyMEs que buscan automatización honesta, no hype.
colors:
  flumen-blue: "#26377D"
  flumen-blue-deep: "#1E2C63"
  flumen-blue-pale: "#7587C3"
  aqua-current: "#00B8A9"
  aqua-current-bright: "#1ECAD3"
  light-water: "#C2DDE5"
  background-deep: "#0F1524"
  card-surface: "#141B2E"
  foreground: "#F8FAFC"
  muted-foreground: "#94A3B8"
  border-subtle: "#28324A"
  destructive: "#EF4444"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5.25rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  h1:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.2
  h2:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.3
  h3:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  pill: "9999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  section-y: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.aqua-current}"
    textColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "#00A396"
  button-secondary:
    backgroundColor: "{colors.flumen-blue}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    rounded: "{rounded.xl}"
    padding: "14px 32px"
  card-service:
    backgroundColor: "{colors.card-surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.background-deep}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
---

# Design System: Flumen Solutions

## 1. Overview

**Creative North Star: "The Deep Current"**

Flumen vive en un azul profundo casi negro — el fondo no es decoración, es la condición del sitio: quieto, denso, confiable, como el fondo de un cuerpo de agua. Sobre esa quietud corre una sola señal viva: el aqua/teal, reservado casi exclusivamente para la acción ("Auditoría gratuita"). Nada más compite por atención. El sitio no vende humo — vende un ingeniero que te explica algo complejo sin hacerte sentir tonto y sin inflar promesas.

Esto rechaza explícitamente el fondo claro tipo SaaS-cream, los eyebrows en mayúsculas sobre cada sección, las grillas de tarjetas idénticas icono+título+texto y el hero-metric-template (número gigante + label) — es exactamente el molde de plantilla de IA genérica que un dueño de PyME colombiano o mexicano ya vio mil veces y del que desconfía. Tampoco es un dev-tool oscuro con monospace de disfraz: la audiencia no es técnica, y el mono como decoración los alejaría.

Como Flumen aún no tiene clientes públicos ni cifras que mostrar, la credibilidad la carga el propio craft del sitio: tipografía cuidada, ritmo, contraste impecable, cero relleno artificial donde iría un logo de cliente o una métrica inventada.

**Key Characteristics:**
- Tema oscuro único, sin light mode — el azul profundo es la base, no un accent oscuro sobre blanco.
- Un solo acento vivo (aqua/teal) reservado para acción; todo lo demás es azul, blanco/gris o superficie.
- Una sola familia tipográfica (Inter) — jerarquía por peso y tamaño, no por mezcla de fuentes.
- Honestidad estructural: el layout nunca "pide" un logo de cliente, testimonio o cifra que no existe.
- Movimiento como refuerzo, nunca como gate de visibilidad — el contenido está visible por defecto.

## 2. Colors

Estrategia Committed oscuro: el azul profundo es la base en la que vive todo el sitio; el teal es la única señal de acción y aparece en, como mucho, botones primarios, iconos activos y estados de foco — nunca como fondo de sección completa salvo el CTA final.

### Primary
- **Flumen Blue** (`#26377D`): base de marca. Vive en botones secundarios, el logo, y como color de acento en superficies que necesitan sentirse "de marca" sin robar atención al CTA teal.

### Secondary
- **Aqua Current** (`#00B8A9`): el único color de acción del sitio. CTAs primarios, checks/bullets de beneficios, subrayados activos de navegación, focus ring. Su escasez es la señal — si aparece en más de un elemento por fold, se ha usado de más.

### Tertiary
- **Light Water** (`#C2DDE5`): azul claro casi pastel, usado con moderación para texto secundario sobre superficies oscuras muy densas o para acentos decorativos suaves (nunca como fondo grande).

### Neutral
- **Background Deep** (`#0F1524`): fondo principal de página — más oscuro que el `--background` HSL base, usado en superficies hero y nav.
- **Card Surface** (`#141B2E`): superficie elevada para cards y paneles — un paso más claro que el fondo, sin llegar a "gris".
- **Foreground** (`#F8FAFC`): texto principal, casi blanco.
- **Muted Foreground** (`#94A3B8`): texto secundario. VIGILAR contraste — sobre `background-deep` roza el mínimo AA en tamaños pequeños; usarlo solo en texto ≥14px o subir a `foreground` si el contraste falla.
- **Border Subtle** (`#28324A`): bordes y separadores, casi invisibles hasta que el elemento tiene foco o hover.
- **Destructive** (`#EF4444`): estados de error de formulario únicamente.

### Named Rules
**The One Current Rule.** El teal es la única corriente de color activa del sitio. Se usa para UNA acción por vista — el CTA que importa — nunca para decorar íconos, bordes o fondos de sección sin propósito de acción.

**The No-Fabricated-Proof Rule.** Ningún espacio de la paleta se reserva para logos de clientes, avatares de testimonios o contadores de cifras que Flumen todavía no tiene. Si un layout "pide" esos elementos, el layout está mal planteado — se rediseña el fold, no se rellena con datos falsos.

## 3. Typography

**Display/Body Font:** Inter (`--font-inter`, next/font), con fallback `system-ui, sans-serif`.

**Character:** Una sola familia geométrica-humanista, neutra y muy legible en español. La jerarquía se construye enteramente con peso y tamaño — nunca se mezcla una segunda familia para "dar personalidad"; la personalidad la da el tono de la copy y el ritmo del layout, no la tipografía.

### Hierarchy
- **Display** (700, `clamp(2.25rem, 6vw, 5.25rem)`, line-height 1.08, tracking -0.02em): título del Hero únicamente. Máximo 18ch por línea (`max-w-[18ch]`), con `text-wrap: balance`.
- **Headline / H1** (700, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.2): títulos de sección principales.
- **Title / H2** (700, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.3): subtítulos de sección.
- **H3** (700, `clamp(1.5rem, 3vw, 1.875rem)`, line-height 1.4): títulos de card/componente.
- **Body** (400, 18px base / 16px en pantallas pequeñas, line-height 1.7): párrafos. Tope de 65–75ch por línea; usar `text-pretty` en párrafos largos para reducir huérfanas.
- **Label** (500, 14px): texto de navegación, badges de beneficios, metadatos.

### Named Rules
**The Weight-Not-Family Rule.** Toda jerarquía tipográfica se resuelve con peso (400/500/600/700) y tamaño dentro de Inter. Introducir una segunda familia para "elegancia" o para un momento editorial está prohibido — rompería la identidad ya enviada en producción.

## 4. Elevation

El sitio es mayormente plano — la profundidad la da la diferencia tonal entre `background-deep` y `card-surface`, no sombras duras. Las sombras existen únicamente como refuerzo de estado (hover, foco), nunca como decoración estática en reposo.

### Shadow Vocabulary
- **Accent glow** (`box-shadow: 0 10px 25px -5px rgba(0,184,169,0.2)` — `shadow-accent/20`): bajo botones primarios y CTAs en reposo; se intensifica a `/30` en hover.
- **Card hover lift** (`shadow-xl` + `shadow-accent/5` + `translateY(-5px)` vía spring): al pasar el mouse sobre una ServiceCard, nunca en reposo.
- **Ambient dark** (`shadow-lg shadow-black/30`): bajo la navbar cuando el scroll la condensa, para separarla visualmente del contenido detrás.

### Named Rules
**The Flat-At-Rest Rule.** Ninguna superficie tiene sombra visible en su estado por defecto salvo la navbar condensada. Las sombras aparecen como respuesta a hover/focus/scroll, nunca como textura permanente — evita el look "card genérica de SaaS" que PRODUCT.md prohíbe.

## 5. Components

### Buttons
- **Shape:** esquinas suavemente curvas — `rounded-xl` (12px) en CTAs grandes, `rounded-md` (8px) en botones utilitarios de UI (`components/ui/button.tsx`).
- **Primary (acción):** fondo Aqua Current (`#00B8A9`), texto blanco, `shadow-lg shadow-accent/20` en reposo → `shadow-xl shadow-accent/30` + `-translate-y-0.5` en hover. Padding generoso (`h-14 px-8` en CTAs hero).
- **Secondary (marca):** fondo Flumen Blue (`#26377D`), texto blanco, mismo tratamiento de sombra pero sin glow teal.
- **Outline/Ghost:** fondo `white/10` sobre superficies oscuras, borde `white/30`, `backdrop-blur-sm` — usado como CTA secundario junto a un primary teal, nunca solo.
- **Hover / Focus:** todas las variantes transicionan color + sombra + micro-elevación (`translateY(-2px)` o menos). Focus visible: `outline: 2px solid hsl(var(--accent))`, `outline-offset: 2px` — nunca se suprime el outline nativo.

### Cards
- **Corner Style:** `rounded-xl` (12px), consistente con los botones primarios.
- **Background:** Card Surface (`#141B2E`) sobre Background Deep — diferencia tonal sutil, no salto de contraste duro.
- **Border:** `border-border/40` en reposo → `border-accent/50` en hover; el borde es el primer indicador de interactividad, antes que la sombra.
- **Shadow Strategy:** ver Elevation — plano en reposo, `shadow-xl shadow-accent/5` + elevación física en hover.
- **Internal Padding:** `p-6` (24px) en header/content/footer, siguiendo la escala de `card.tsx`.
- **Accent detail:** línea de 1px en el borde superior con gradiente `transparent → accent/80 → transparent`, oculta en reposo y visible solo en hover (`opacity-0 → opacity-100`). No es un side-stripe permanente — aparece como respuesta, no como decoración fija.

### Inputs / Fields
- **Style:** fondo `background-deep`, borde `border` (`#28324A`), `rounded-md`, texto base 16px en móvil (evita zoom automático de iOS Safari), 14px en desktop.
- **Focus:** borde pasa a `ring` (mismo tono que primary) + `box-shadow: 0 0 0 2px hsl(var(--ring)/0.2)` — anillo suave, no glow agresivo.
- **Error:** borde y anillo de foco cambian a `destructive` (`#EF4444`); nunca solo color, siempre acompañado del mensaje de error en texto.

### Navigation
- **Style:** navbar flotante, `rounded-2xl`, centrada con `max-w-6xl`, `backdrop-blur-md` sobre `white/[0.03]` en reposo → se condensa a `bg-[#0F1524]/85` con `backdrop-blur-lg` y sombra al hacer scroll (>10px).
- **Links:** texto `white/65` en reposo → `white` en hover/activo; el estado activo se marca con una línea de 1px con gradiente teal bajo el link (`inset-x-3 -bottom-0.5`), no con fondo ni negrita.
- **CTA de nav:** único botón sólido en la barra — teal, `rounded-xl`, con flecha que se desplaza en hover (`group-hover:translate-x-0.5`).
- **Mobile:** menú hamburguesa (`Menu`/`X` de lucide-react) que abre `MobileMenu` a pantalla completa; mismo tratamiento de color que desktop.

### WavyBackground (componente de firma)
Onda animada en canvas que vive en el tercio inferior del Hero como atmósfera, con paleta `#26377D / #00B8A9 / #C2DDE5 / #4A5F9D / #1ECAD3` sobre fondo `#0F1524`. Un scrim radial garantiza contraste AA del título por encima. El canvas pausa su `requestAnimationFrame` cuando sale de viewport o la pestaña se oculta (IntersectionObserver + `visibilitychange`) — crítico para batería en móvil — y respeta `prefers-reduced-motion` mostrando un frame estático. Es el único lugar del sitio donde la paleta completa aparece junta; en el resto del sitio los colores se usan de a uno.

## 6. Do's and Don'ts

### Do:
- **Do** usar Aqua Current (`#00B8A9`) como único color de acción por vista — un CTA primario por fold.
- **Do** mantener el fondo oscuro (`#0F1524`/`hsl(222 47% 11%)`) como base única; no hay modo claro.
- **Do** usar `ScrollReveal` (IntersectionObserver, estado base visible, respeta `prefers-reduced-motion`) para cualquier reveal — nunca gatear la visibilidad del contenido a una animación.
- **Do** respetar `text-wrap: balance` en títulos y `text-pretty` en párrafos largos para evitar huérfanas, especialmente en español donde las palabras son más largas.
- **Do** verificar contraste de `muted-foreground` (`#94A3B8`) sobre `background-deep` en cada uso nuevo — es el punto más frágil de la paleta.
- **Do** diseñar cada fold para lo que Flumen puede demostrar hoy (proceso, claridad, craft), no para cifras o logos que no existen.

### Don't:
- **Don't** introducir una segunda familia tipográfica — Inter es identidad ya enviada en producción.
- **Don't** usar `border-left`/`border-right` de más de 1px como acento de color en cards o listas — el borde superior con gradiente en hover en `ServiceCard` es la única excepción permitida, y es un estado, no un reposo.
- **Don't** aplicar gradiente al texto (`background-clip: text`) — la marca ya rechazó esto explícitamente (`.gradient-text` fue eliminado del CSS por no tener uso y ser anti-patrón).
- **Don't** usar glassmorphism decorativo fuera de la navbar y los botones outline sobre el Hero — la utility `.glass` genérica fue eliminada del proyecto.
- **Don't** inventar cifras de resultados, porcentajes, testimonios, "cientos de empresas" o certificaciones (SOC2/ISO) en ningún componente — regla dura de PRODUCT.md.
- **Don't** usar eyebrows en mayúsculas sobre cada sección ni grids de tarjetas idénticas icono+título+texto — es exactamente el molde SaaS-cream que PRODUCT.md nombra como anti-referencia.
- **Don't** usar el hero-metric-template (número gigante + label + stats de soporte) — PRODUCT.md lo prohíbe explícitamente por falta de cifras reales.
- **Don't** usar monospace decorativo para sugerir "tecnológico" — la audiencia no es técnica y PRODUCT.md lo marca como anti-referencia.
- **Don't** dejar `body { cursor: default; caret-color: transparent }` ni suprimir `:focus-visible` — ya se corrigió una vez; cualquier regresión de accesibilidad de teclado es un bug, no una opción de estilo.
