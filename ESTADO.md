# Estado del proyecto — Flumen Solutions

> Documento de traspaso para continuar el trabajo en otro equipo (Mac).
> Última actualización: 2026-06-15.

La web está **EN VIVO y funcional** en producción. Este documento resume qué está hecho, cómo levantar el proyecto localmente, y qué queda pendiente.

---

## 🌐 Producción (en vivo)

- **URL pública:** https://www.flumensolutions.com (canónica, con `www`)
  - El dominio raíz `flumensolutions.com` redirige (308) a `www`.
- **Hosting:** Vercel (plan Hobby / gratis).
- **Repo:** `FlumenSolutions/Interno-website` (GitHub, **público**).
  - Es público porque Vercel gratis no despliega repos de organización privada.
- **Deploy:** automático en cada `git push` a `main`.

---

## 🧱 Stack

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Estilos:** Tailwind CSS
- **Animación:** framer-motion + canvas (ondas del hero con simplex-noise)
- **ORM/BD:** Prisma 5 + PostgreSQL
- **Markdown blog:** react-markdown + remark-gfm + rehype-highlight
- **Email:** Resend
- **Node usado en Windows:** v24 (en Mac sirve Node 18+ LTS o 20+)

---

## 🗄️ Base de datos

- **Proveedor:** PostgreSQL en **Neon** (creado vía Vercel Storage).
- La BD vieja de **Supabase está MUERTA** — no usarla (`postgres.rdsfhoonduogprythxol` ya no existe).
- **Tablas:** `posts` (blog) y `leads` (formularios). Definidas en `prisma/schema.prisma`.
- **Datos:** 4 posts sembrados desde `data/posts.ts` (con portadas SVG en `public/blog/`).
- **Fallback:** si la BD no responde, el blog usa los posts locales de `data/posts.ts`
  (ver `app/recursos/actions.ts`). En producción la BD real tiene prioridad.

### ⚠️ Detalle importante con Prisma CLI y los archivos .env
- El código de la app (Next.js) lee `.env.local`.
- **Prisma CLI** (`prisma db push`, `prisma studio`, seed) lee `.env`, NO `.env.local`.
- En este repo `.env` tiene una `DATABASE_URL` vieja (Supabase, caída). Para correr
  comandos de Prisma contra la BD real (Neon), hay que pasar la URL correcta.
  En Mac, lo más simple es exportarla en la terminal antes del comando:
  ```bash
  export DATABASE_URL="<la-database-url-de-neon>"
  npm run db:setup     # o db:studio, db:seed, etc.
  ```
  (O actualizar la `DATABASE_URL` dentro de `.env` para que apunte a Neon.)

---

## 📬 Formularios (contacto + auditoría)

- Rutas: `app/api/contact/route.ts` y `app/api/audit/route.ts`.
- Flujo: **guardan el lead en la BD (tabla `leads`) + envían correo por Resend.**
- Se ELIMINÓ la dependencia anterior de n8n (webhook). El backend es autocontenido.
- Probado end-to-end en producción: el correo llega y el lead se guarda. ✅
- Lógica de email en `lib/email.ts` (`sendLeadEmail`). El `font-family: Arial` ahí
  es intencional (HTML de correo, no UI web).

---

## 🔐 Variables de entorno

El archivo `.env.local` NO está en el repo (está en `.gitignore`, nunca se subió).
**En el Mac hay que crear un `.env.local`** con estos valores (cópialos de Vercel →
Settings → Environment Variables, o de tu `.env.local` de Windows):

```bash
DATABASE_URL="postgresql://...neon..."          # BD Neon (de Vercel Storage)
RESEND_API_KEY="re_..."                          # key de Resend
RESEND_FROM_EMAIL="Flumen <onboarding@resend.dev>"  # temporal hasta verificar dominio
RESEND_TO_EMAIL="<correo-donde-recibir-leads>"
NEXT_PUBLIC_SITE_URL="https://www.flumensolutions.com"
NEXT_PUBLIC_WHATSAPP_NUMBER="573180640132"
NEXT_PUBLIC_GA_ID=""                             # opcional (Google Analytics)
```

> Ninguna de estas es secreta en el repo; viven solo en tu máquina y en Vercel.
> Si alguna se filtra, rotarla (Neon permite rotar la contraseña de BD; Resend regenerar la key).

---

## 💻 Cómo levantar el proyecto en el Mac

```bash
# 1. Clonar
git clone https://github.com/FlumenSolutions/Interno-website.git
cd Interno-website

# 2. Instalar dependencias (corre prisma generate en postinstall)
npm install

# 3. Crear el archivo .env.local con las variables de arriba

# 4. (Opcional) Sincronizar/sembrar la BD si hace falta
#    Recuerda el detalle de Prisma CLI: exporta DATABASE_URL antes.
export DATABASE_URL="<url-de-neon>"
npm run db:push     # crea/actualiza tablas
npm run db:seed     # siembra los 4 posts (idempotente, usa upsert)

# 5. Arrancar en desarrollo
npm run dev         # http://localhost:3000
```

### Scripts útiles
| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (úsalo para verificar antes de push) |
| `npm run type-check` | Chequeo de tipos (tsc --noEmit) |
| `npm run db:studio` | Prisma Studio — UI visual para ver/editar posts y leads |
| `npm run db:setup` | `db:push` + `db:seed` juntos |

> ⚠️ NO correr `npm run build` con `npm run dev` activo a la vez: corrompe la carpeta
> `.next`. Si pasa, borra `.next` (`rm -rf .next`) y reinicia.

---

## ✅ Hecho

- [x] Rediseño visual completo (hero con ondas animadas, navbar flotante, sistema de profundidad, cards).
- [x] SEO técnico: schema (Organization/ProfessionalService/WebSite/Article/FAQ/Breadcrumb), sitemap dinámico con posts, OG image en PNG, metadata por página.
- [x] Blog con 4 artículos + portadas SVG de marca.
- [x] Base de datos Neon conectada (local + producción).
- [x] Formularios → BD + Resend (sin n8n), probado.
- [x] Dominio `www.flumensolutions.com` con HTTPS.
- [x] Sitemap enviado a Google Search Console (14 URLs, procesado OK).
- [x] Fixes de hero en móvil/iOS: blur por CSS (iOS Safari ignora ctx.filter), altura 100svh, transición suave a la siguiente sección.

## ⏳ Pendiente / próximos pasos

- [ ] **Solicitar indexación** de páginas clave en Search Console (home, /servicios, /contacto, /recursos) para acelerar Google.
- [ ] Verificar el dominio en **Resend** para enviar correos desde `contacto@flumensolutions.com` (en vez de `onboarding@resend.dev`). Requiere agregar registros DNS en Squarespace.
- [ ] (Opcional) Transferir el dominio de Squarespace a **Cloudflare** (se pospuso; ahora solo apunta DNS).
- [ ] (Opcional) Versión en inglés de las páginas interiores (hoy solo home/nav/footer usan i18n; el toggle EN está pensado pero las interiores están hardcodeadas en español).
- [ ] Crear más posts de blog (vía `npm run db:studio` o añadiendo a `data/posts.ts` + re-seed) para tráfico orgánico.
- [ ] Limpiar lead de PRUEBA en la tabla `leads` si sigue ahí.

---

## 📁 Archivos clave para orientarse

| Ruta | Qué es |
|---|---|
| `app/page.tsx` | Home |
| `components/sections/Hero.tsx` | Hero (título, CTAs) |
| `components/ui/wavy-background.tsx` | Ondas animadas del hero (canvas) |
| `components/layout/Navbar.tsx` | Navbar flotante |
| `app/recursos/page.tsx` + `[slug]/page.tsx` | Blog (lista + post) |
| `app/recursos/actions.ts` | Server actions del blog (BD + fallback) |
| `data/posts.ts` | Posts locales (fallback + fuente del seed) |
| `app/servicios/[slug]/page.tsx` | Página de servicio |
| `app/api/contact/route.ts` + `audit/route.ts` | Backend de formularios |
| `lib/email.ts` | Envío de correo (Resend) |
| `lib/seo.ts` | Metadata + schemas SEO |
| `app/sitemap.ts` / `app/robots.ts` | SEO técnico |
| `prisma/schema.prisma` | Esquema de BD |
| `prisma/seed.ts` | Seed de posts |
| `PRODUCT.md` / `DESIGN.md` | Contexto de producto y diseño |
