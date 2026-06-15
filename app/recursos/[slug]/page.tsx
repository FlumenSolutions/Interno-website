import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { SectionBackground } from '@/components/sections/SectionBackground'
import { generateMetadata as genMeta, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { Metadata } from 'next'
import { getPostBySlug } from '../actions'
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
                            <time dateTime={post.publishedAt.toISOString()}>
                                {new Date(post.publishedAt).toLocaleDateString('es-CO', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
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
