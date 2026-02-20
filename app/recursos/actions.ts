'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { unstable_noStore as noStore } from 'next/cache'

export async function getPosts(category?: string) {
    noStore(); // Disable cache for this action
    try {
        const where: any = { published: true }
        // Filter by category if provided
        if (category && category !== 'Todas') {
            where.category = category
        }

        // Force dynamic fetch to ensure we see new posts immediately during dev
        // In production, we might want to use revalidatePath trigger instead
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

        // Explicitly revalidate the resources page to ensure fresh data
        revalidatePath('/recursos')

        return posts
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
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
        return post
    } catch (error) {
        console.error(`Error fetching post with slug ${slug}:`, error)
        return null
    }
}
