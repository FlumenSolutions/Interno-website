import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Metadata } from 'next'
import { getPosts } from './actions'
import { BlogCard } from '@/components/blog/BlogCard'
import { PageHeader } from '@/components/sections/PageHeader'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = genMeta({
    title: 'Recursos y Blog - Guías de Automatización',
    description:
        'Guías, tutoriales y casos de estudio sobre automatización de procesos, integración de CRM, asistentes de IA y más.',
    path: '/recursos',
})

const categories = ['Todas', 'Guías', 'Casos de Estudio', 'Tendencias', 'Noticias']

export default async function RecursosPage({
    searchParams,
}: {
    searchParams: { category?: string }
}) {
    const category = searchParams.category || 'Todas'
    const allPosts = await getPosts(category)

    // Featured post is the first one
    const featuredPost = allPosts.length > 0 ? allPosts[0] : null
    const remainingPosts = allPosts.length > 1 ? allPosts.slice(1) : []

    return (
        <div className="bg-background min-h-screen pb-20">
            <PageHeader
                title="Blog & Recursos"
                description="Guías, tutoriales y estrategias sobre automatización de procesos para escalar tu negocio."
            />

            <section className="container pb-16">

                {/* Category Filters (pills) */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap gap-2.5 mb-12 justify-center md:justify-start">
                        {categories.map((cat) => {
                            const isActive = cat === category
                            return (
                                <Link
                                    key={cat}
                                    href={cat === 'Todas' ? '/recursos' : `/recursos?category=${encodeURIComponent(cat)}`}
                                    scroll={false}
                                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${isActive
                                        ? 'bg-accent text-white shadow-md shadow-accent/20'
                                        : 'border border-white/10 bg-white/[0.03] text-white/65 hover:border-accent/30 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </Link>
                            )
                        })}
                    </div>
                </ScrollReveal>

                {/* Content Area */}
                <div className="space-y-16">
                    {/* Featured Post */}
                    {featuredPost && (
                        <ScrollReveal delay={0.2}>
                            <BlogCard post={featuredPost} featured={true} />
                        </ScrollReveal>
                    )}

                    {/* Grid of other posts */}
                    {remainingPosts.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {remainingPosts.map((post, idx) => (
                                <ScrollReveal key={post.slug} delay={idx * 0.05}>
                                    <BlogCard post={post} />
                                </ScrollReveal>
                            ))}
                        </div>
                    )}

                    {/* Empty State */}
                    {allPosts.length === 0 && (
                        <div className="text-center py-20 md:py-28 max-w-md mx-auto">
                            <h3 className="text-2xl font-semibold text-white mb-3">
                                Estamos escribiendo
                            </h3>
                            <p className="text-white/70 leading-relaxed mb-8">
                                Pronto publicaremos guías y estrategias de automatización pensadas
                                para PyMEs. Mientras tanto, cuéntanos tu caso y te respondemos directo.
                            </p>
                            <Link
                                href="/contacto"
                                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent/90 transition-colors"
                            >
                                Hablar con Flumen
                            </Link>
                        </div>
                    )}
                </div>

                {/* Newsletter / CTA Card */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-24 md:mt-32 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 md:p-12">
                        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
                        <div className="relative max-w-xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Mantente actualizado</h3>
                            <p className="text-white/70 leading-relaxed mb-7">
                                Recibe las últimas guías y estrategias de automatización directamente en tu bandeja de entrada.
                            </p>
                            <a
                                href="/contacto"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl shadow-md shadow-accent/20 hover:bg-accent/90 hover:-translate-y-0.5 transition-all"
                            >
                                Suscribirme
                                <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}
