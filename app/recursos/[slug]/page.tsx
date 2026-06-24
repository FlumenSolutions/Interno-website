import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'
import { generateMetadata as genMeta, generateArticleSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo'
import { Metadata } from 'next'
import { getPostBySlug } from '../actions'
import { getLocalPostBySlug } from '@/data/posts'
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

    return genMeta({
        title: post.metaTitle || post.title,
        description: post.metaDescription || post.excerpt,
        path: `/recursos/${post.slug}`,
        publishedTime: post.publishedAt?.toISOString(),
        type: 'article',
    })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://flumensolutions.com'
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.metaDescription || post.excerpt,
        slug: post.slug,
        publishedAt: post.publishedAt?.toISOString(),
        image: post.coverImage || undefined,
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
                            {/* In a real scenario, use Next Image */}
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="object-cover w-full h-full"
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

                {/* Footer / Back Link */}
                <ScrollReveal delay={0.3}>
                    <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                        <a href="/recursos" className="inline-flex items-center text-muted-foreground hover:text-white transition-colors group">
                            <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Volver al blog
                        </a>
                        {/* Tags or Sharing could go here */}
                    </div>
                </ScrollReveal>
            </article>
        </div>
    )
}
