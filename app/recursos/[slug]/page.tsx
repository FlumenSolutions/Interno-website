import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'
import { generateMetadata as genMeta, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { Metadata } from 'next'
import { getPostBySlug, getRelatedPosts } from '../actions'
import { getLocalPostBySlug } from '@/data/posts'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css' // Import highlight.js style

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = await getPostBySlug(params.slug)

    if (!post) {
        return genMeta({
            title: 'Artículo no encontrado',
            description: 'El artículo que buscas no existe.',
        })
    }

    const kw = (post as { keywords?: string | null }).keywords
    return genMeta({
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        path: `/recursos/${post.slug}`,
        publishedTime: post.publishedAt?.toISOString(),
        type: 'article',
        articleKeywords: kw ? kw.split(',').map((k: string) => k.trim()).filter(Boolean) : undefined,
    })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = await getRelatedPosts(
        post.slug,
        post.category,
        post.tags as string[] | undefined,
    )

    // Mapeo de tags/tema del post → servicio relevante para el CTA contextual.
    const serviceMap: Record<string, { title: string; href: string }> = {
        whatsapp: { title: 'Chatbots y asistentes con IA', href: '/servicios/chatbots-asistentes-ia' },
        chatbot: { title: 'Chatbots y asistentes con IA', href: '/servicios/chatbots-asistentes-ia' },
        'inteligencia artificial': { title: 'Chatbots y asistentes con IA', href: '/servicios/chatbots-asistentes-ia' },
        crm: { title: 'Automatización de procesos', href: '/servicios/automatizacion-procesos' },
        integración: { title: 'Automatización de procesos', href: '/servicios/automatizacion-procesos' },
        automatización: { title: 'Automatización de procesos', href: '/servicios/automatizacion-procesos' },
        'software a la medida': { title: 'Aplicaciones a la medida', href: '/servicios/desarrollo-aplicaciones' },
        'desarrollo de software': { title: 'Aplicaciones a la medida', href: '/servicios/desarrollo-aplicaciones' },
    }
    const tags = (post.tags as string[] | undefined) ?? []
    const matchedService = tags
        .map((t) => serviceMap[t.toLowerCase()])
        .find(Boolean) ?? { title: 'Qué construimos', href: '/servicios' }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'
    const wordCount = post.content ? post.content.split(/\s+/).length : undefined
    const updatedAt = (post as { updatedAt?: Date }).updatedAt
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.metaDescription || post.excerpt,
        slug: post.slug,
        publishedAt: post.publishedAt?.toISOString(),
        modifiedAt: updatedAt?.toISOString() || post.publishedAt?.toISOString(),
        image: post.coverImage || undefined,
        wordCount,
    })
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Inicio', url: siteUrl },
        { name: 'Recursos', url: `${siteUrl}/recursos` },
        { name: post.title, url: `${siteUrl}/recursos/${post.slug}` },
    ])
    // Los FAQs viven en data/posts.ts (la tabla Post no tiene esa columna). Se
    // toman del post si los trae; si viene de la BD, se buscan por slug en el local.
    const faqs =
        (post as { faqs?: { question: string; answer: string }[] }).faqs ??
        getLocalPostBySlug(post.slug)?.faqs ??
        []
    const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

    return (
        <div className="bg-background min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {/* Editorial Header */}
            <header className="relative overflow-hidden pt-36 md:pt-40 pb-12">
                <SectionBackground variant="dots" glows={['top']} />
                <div className="container max-w-4xl mx-auto text-center relative z-10">
                <ScrollReveal>
                    {post.category && (
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide rounded-full border border-accent/30 bg-accent/10 text-accent">
                            {post.category}
                        </span>
                    )}
                    <h1 className="text-balance text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-sm text-white/60">
                        {post.publishedAt && (
                            <span>
                                Actualizado el{' '}
                                <time dateTime={new Date(post.publishedAt).toISOString()}>
                                    {new Date(post.publishedAt).toLocaleDateString('es-CO', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </time>
                            </span>
                        )}
                        <span>•</span>
                        <span>5 min lectura</span>
                    </div>
                </ScrollReveal>
                </div>
            </header>

            {/* Cover Image */}
            {post.coverImage && (
                <div className="container max-w-5xl mb-16">
                    <ScrollReveal delay={0.1}>
                        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 1024px"
                                priority
                            />
                        </div>
                    </ScrollReveal>
                </div>
            )}

            {/* Content Body */}
            <article className="container max-w-2xl mx-auto">
                <ScrollReveal delay={0.2}>
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-medium prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-accent prose-img:rounded-xl">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeHighlight]}
                            components={{
                                h2: ({ node, ...props }) => <h2 className="text-3xl mt-16 mb-6 text-white tracking-tight" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-2xl mt-12 mb-4 text-white tracking-tight" {...props} />,
                                p: ({ node, ...props }) => <p className="text-lg text-gray-300 mb-8 leading-8" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc list-outside space-y-3 mb-8 text-gray-300 pl-4" {...props} />,
                                ol: ({ node, ...props }) => <ol className="list-decimal list-outside space-y-3 mb-8 text-gray-300 pl-4" {...props} />,
                                // Tablas con estilo de marca (scroll horizontal en móvil)
                                table: ({ node, ...props }) => (
                                    <div className="my-10 -mx-4 sm:mx-0 overflow-x-auto">
                                        <table className="w-full min-w-[36rem] border-collapse overflow-hidden rounded-xl border border-white/10 text-left text-base" {...props} />
                                    </div>
                                ),
                                thead: ({ node, ...props }) => <thead className="!bg-white/[0.07]" {...props} />,
                                th: ({ node, ...props }) => <th className="!border-b !border-white/15 !px-4 !py-3 !text-white !font-semibold !align-top" {...props} />,
                                td: ({ node, ...props }) => <td className="!border-b !border-white/5 !px-4 !py-3 !align-top !text-gray-300" {...props} />,
                                tr: ({ node, ...props }) => <tr className="transition-colors hover:!bg-white/[0.03]" {...props} />,
                                // Enhanced blockquote
                                blockquote: ({ node, ...props }) => (
                                    <blockquote className="border-l-2 border-accent pl-6 py-1 my-10 text-xl italic text-white/80" {...props} />
                                ),
                                code: ({ node, className, children, ...props }) => {
                                    const match = /language-(\w+)/.exec(className || '')
                                    const isInline = !match
                                    return isInline ? (
                                        <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-accent" {...props}>
                                            {children}
                                        </code>
                                    ) : (
                                        <div className="my-8 rounded-lg overflow-hidden border border-white/10">
                                            <code className={className} {...props}>
                                                {children}
                                            </code>
                                        </div>
                                    )
                                }
                            }}
                        >
                            {post.content}
                        </ReactMarkdown>
                    </div>
                </ScrollReveal>

                {/* Preguntas frecuentes (extraíble por motores de IA + rich snippet) */}
                {faqs.length > 0 && (
                    <ScrollReveal delay={0.2}>
                        <section className="mt-20 pt-10 border-t border-white/10">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">
                                Preguntas frecuentes
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((faq, i) => (
                                    <div key={i}>
                                        <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>
                )}

                {/* CTA contextual a servicio relevante */}
                <ScrollReveal>
                    <div className="mt-16 p-8 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-accent/[0.03] text-center">
                        <p className="text-lg text-white font-semibold mb-2">¿Necesitas algo así para tu negocio?</p>
                        <p className="text-gray-400 mb-6">Conoce cómo podemos ayudarte con nuestro servicio de {matchedService.title.toLowerCase()}.</p>
                        <Link
                            href={matchedService.href}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold rounded-xl shadow-md shadow-accent/20 hover:bg-accent/90 hover:-translate-y-0.5 transition-all"
                        >
                            Ver servicio: {matchedService.title}
                            <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </ScrollReveal>

                {/* Artículos relacionados */}
                {relatedPosts.length > 0 && (
                    <ScrollReveal>
                        <section className="mt-16 pt-10 border-t border-white/10">
                            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
                                Sigue leyendo
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {relatedPosts.map((rp) => (
                                    <Link
                                        key={rp.slug}
                                        href={`/recursos/${rp.slug}`}
                                        className="group block rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accent/30 hover:bg-white/[0.04] transition-all"
                                    >
                                        {rp.coverImage && (
                                            <div className="aspect-video overflow-hidden">
                                                <img
                                                    src={rp.coverImage}
                                                    alt={rp.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            {rp.category && (
                                                <span className="text-xs font-medium text-accent mb-2 block">{rp.category}</span>
                                            )}
                                            <h3 className="text-base font-semibold text-white leading-snug group-hover:text-accent transition-colors line-clamp-2">
                                                {rp.title}
                                            </h3>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </ScrollReveal>
                )}

                {/* Footer / Back Link */}
                <ScrollReveal delay={0.1}>
                    <div className="mt-12 pt-10 border-t border-white/10 flex justify-between items-center">
                        <a href="/recursos" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors group">
                            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Volver al blog
                        </a>
                    </div>
                </ScrollReveal>
            </article>
        </div>
    )
}
