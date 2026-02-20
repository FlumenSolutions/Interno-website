# Flumen Solutions - Website

Complete B2B website for automation consulting built with Next.js 14, TailwindCSS, and ShadCN/UI.

## 🚀 Features

- ✅ **Next.js 14** with App Router and React Server Components
- ✅ **TailwindCSS** with custom Flumen brand colors
- ✅ **ShadCN/UI** components
- ✅ **Framer Motion** animations
- ✅ **Prisma ORM** with SQLite (dev) / PostgreSQL (prod)
- ✅ **SEO Optimized** with metadata, JSON-LD schemas, sitemap, robots.txt
- ✅ **Contact Forms** with Zod validation
- ✅ **Email Integration** (Resend)
- ✅ **WhatsApp Integration**
- ✅ **Fully Responsive** design
- ✅ **TypeScript** for type safety

## 📦 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and configure:
   - `DATABASE_URL` - Database connection (default: SQLite)
   - `RESEND_API_KEY` - Resend API key for emails (optional)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp business number
   - `NEXT_PUBLIC_GA_ID` - Google Analytics ID (optional)

3. **Initialize database:**
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact, audit)
│   ├── servicios/         # Services pages
│   ├── casos-exito/       # Case studies
│   ├── proceso/           # Process page
│   ├── recursos/          # Blog/resources
│   ├── nosotros/          # About us
│   ├── contacto/          # Contact page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Navbar, Footer, MobileMenu
│   ├── sections/          # Reusable sections (Hero, Cards, etc.)
│   ├── forms/             # Contact form, WhatsApp button
│   └── ui/                # ShadCN UI components
├── data/                  # Static data (services, cases, FAQs)
├── lib/                   # Utilities (SEO, validation, email, Prisma)
├── prisma/                # Database schema
└── public/                # Static assets
```

## 📄 Pages

- **/** - Home page with hero, services, cases, process
- **/servicios** - Services overview
- **/servicios/[slug]** - Individual service pages (4 services)
- **/casos-exito** - Case studies grid
- **/casos-exito/[slug]** - Individual case study pages
- **/proceso** - 5-phase methodology
- **/recursos** - Blog/resources (placeholder)
- **/nosotros** - About us
- **/contacto** - Contact form and info

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts` to customize colors:
- **Primary**: Deep Blue (#26377D)
- **Secondary**: Light Blue (#C2DDE5)
- **Accent**: Aqua/Teal (#00B8A9)

### Content

- **Services**: Edit `data/services.ts`
- **Case Studies**: Edit `data/cases.ts`
- **FAQs**: Edit `data/faqs.ts`

## 📧 Email Configuration

The contact forms use Resend for sending emails. To enable:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   RESEND_FROM_EMAIL=contacto@flumensolutions.com
   RESEND_TO_EMAIL=info@flumensolutions.com
   ```

Alternatively, you can modify `lib/email.ts` to use Nodemailer or another service.

## 🗄️ Database

### Development (SQLite)

Default configuration uses SQLite (no setup required):
```
DATABASE_URL="file:./dev.db"
```

### Production (PostgreSQL)

For production, use PostgreSQL:
```
DATABASE_URL="postgresql://user:password@host:5432/database"
```

Then run:
```bash
npx prisma migrate deploy
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

```
DATABASE_URL=postgresql://...
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=contacto@flumensolutions.com
RESEND_TO_EMAIL=info@flumensolutions.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+573001234567
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=https://flumensolutions.com
```

## 🧪 Testing

```bash
# Type check
npm run type-check

# Build
npm run build

# Start production server
npm start
```

## 📊 SEO

The website includes:
- ✅ Unique metadata for each page
- ✅ Open Graph tags
- ✅ JSON-LD structured data (Organization, Service, FAQ, Breadcrumb)
- ✅ Dynamic sitemap.xml
- ✅ robots.txt
- ✅ Optimized images with Next/Image
- ✅ Semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **UI Components**: ShadCN/UI (Radix UI)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: Zod validation
- **Database**: Prisma ORM
- **Email**: Resend
- **Language**: TypeScript

## 📝 License

© 2024 Flumen Solutions. All rights reserved.

## 🤝 Support

For questions or issues, contact: info@flumensolutions.com
