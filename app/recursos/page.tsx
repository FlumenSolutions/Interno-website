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
                subtitle="Centro de Conocimiento"
                description="Guías, tutoriales y estrategias sobre automatización de procesos para escalar tu negocio."
            />

            <section className="container pb-16">

                {/* Minimalist Filters */}
                <ScrollReveal delay={0.1}>
                    <div className="flex flex-wrap gap-4 border-b border-border/40 pb-6 mb-12 justify-center md:justify-start">
                        {categories.map((cat) => {
                            const isActive = cat === category
                            return (
                                <Link
                                    key={cat}
                                    href={cat === 'Todas' ? '/recursos' : `/recursos?category=${encodeURIComponent(cat)}`}
                                    scroll={false}
                                    className={`text-sm font-medium transition-colors hover:text-white pb-2 border-b-2 ${isActive
                                        ? 'text-white border-white'
                                        : 'text-muted-foreground border-transparent'
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
                        <div className="text-center py-24 text-muted-foreground border-t border-border/20">
                            <p>No hay artículos publicados aún.</p>
                        </div>
                    )}
                </div>

                {/* Newsletter / CTA Section (Minimal) */}
                <ScrollReveal delay={0.4}>
                    <div className="mt-32 pt-16 border-t border-border/40">
                        <div className="max-w-xl">
                            <h3 className="text-2xl font-medium text-white mb-4">Mantente actualizado</h3>
                            <p className="text-muted-foreground mb-6">
                                Recibe las últimas guías y estrategias de automatización directamente en tu bandeja de entrada.
                            </p>
                            <a
                                href="/contacto"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-white/90 transition-colors"
                            >
                                Suscribirme
                            </a>
                        </div>
                    </div>
                </ScrollReveal>
            </section>
        </div>
    )
}
