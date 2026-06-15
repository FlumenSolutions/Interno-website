'use server'

import { prisma } from '@/lib/prisma'
import { unstable_noStore as noStore } from 'next/cache'
import { getLocalPosts, getLocalPostBySlug } from '@/data/posts'

export async function getPosts(category?: string) {
    noStore(); // Disable cache for this action
    try {
        const where: any = { published: true }
        // Filter by category if provided
        if (category && category !== 'Todas') {
            where.category = category
        }

        const posts = await prisma.post.findMany({
            where,
            orderBy: {
                publishedAt: 'desc',
            },
            select: {
                title: true,
                excerpt: true,
                category: true,
                slug: true,
                publishedAt: true,
                coverImage: true,
            },
        })

        // Si la BD responde pero no hay posts publicados, usa los de respaldo.
        if (posts.length === 0) {
            return getLocalPosts(category)
        }

        return posts
    } catch (error) {
        // BD no disponible: usa los artículos de respaldo locales.
        console.error('Error fetching posts (usando posts locales de respaldo):', error)
        return getLocalPosts(category)
    }
}

export async function getPostBySlug(slug: string) {
    try {
        const post = await prisma.post.findUnique({
            where: {
                slug,
                published: true,
            },
        })

        // Si no está en la BD, intenta con los posts de respaldo locales.
        return post ?? getLocalPostBySlug(slug)
    } catch (error) {
        console.error(`Error fetching post ${slug} (usando posts locales de respaldo):`, error)
        return getLocalPostBySlug(slug)
    }
}
