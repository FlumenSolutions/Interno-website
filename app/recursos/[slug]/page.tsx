import { Hero } from '@/components/sections/Hero'
import { ScrollReveal } from '@/components/sections/ScrollReveal'
import { generateMetadata as genMeta } from '@/lib/seo'
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

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Editorial Header */}
            <header className="pt-32 pb-12 container max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    {post.category && (
                        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase border border-white/20 rounded-full text-white/80">
                            {post.category}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
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
