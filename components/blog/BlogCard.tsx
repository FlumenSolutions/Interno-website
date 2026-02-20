import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface BlogPost {
    title: string
    excerpt: string
    category: string | null
    slug: string
    publishedAt: Date | null
    coverImage: string | null
}

interface BlogCardProps {
    post: BlogPost
    featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
    // Determine aspect ratio classes based on featured status
    // On mobile, featured posts use 16/9 (video) to be taller. On desktop, cinema 21/9.
    const imageAspectClass = featured ? 'aspect-video md:aspect-[21/9]' : 'aspect-[3/2]'

    return (
        <Link
            href={`/recursos/${post.slug}`}
            className={`group block w-full ${featured ? 'mb-12' : 'h-full'}`}
        >
            <article className="flex flex-col h-full gap-4">
                {/* Image Container */}
                <div className={`relative w-full overflow-hidden rounded-lg bg-muted/20 ${imageAspectClass}`}>
                    {post.coverImage ? (
                        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                            {/* We use a simple img tag or Next Image depending on if we have a valid placeholder logic */}
                            {/* For now assuming external URLs or valid paths */}
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-card to-muted flex items-center justify-center">
                            <span className="text-muted-foreground/20 text-4xl font-serif">Aa</span>
                        </div>
                    )}

                    {/* Overlay for category - minimal pill */}
                    {post.category && (
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium tracking-wide bg-background/80 backdrop-blur-sm text-foreground rounded-full border border-border/10">
                                {post.category}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        {post.publishedAt && (
                            <time dateTime={post.publishedAt.toISOString()}>
                                {new Date(post.publishedAt).toLocaleDateString('es-CO', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </time>
                        )}
                        <span>•</span>
                        <span>5 min lectura</span>
                    </div>

                    <h3 className={`font-medium text-foreground group-hover:text-accent transition-colors ${featured ? 'text-2xl md:text-3xl lg:text-4xl leading-tight' : 'text-xl leading-snug'}`}>
                        {post.title}
                    </h3>

                    <p className={`text-muted-foreground line-clamp-2 ${featured ? 'text-lg max-w-3xl mt-2' : 'text-sm'}`}>
                        {post.excerpt}
                    </p>

                    {featured && (
                        <div className="mt-4 flex items-center text-accent text-sm font-medium">
                            Leer artículo <ArrowUpRight className="ml-1 w-4 h-4" />
                        </div>
                    )}
                </div>
            </article>
        </Link>
    )
}
