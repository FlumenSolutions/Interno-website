import { PrismaClient } from '@prisma/client'
import { localPosts } from '../data/posts'

const prisma = new PrismaClient()

async function main() {
    console.log(`Sembrando ${localPosts.length} post(s) desde data/posts.ts ...`)

    for (const post of localPosts) {
        const result = await prisma.post.upsert({
            where: { slug: post.slug },
            update: {
                title: post.title,
                excerpt: post.excerpt,
                content: post.content,
                coverImage: post.coverImage,
                category: post.category,
                tags: post.tags,
                metaTitle: post.metaTitle,
                metaDescription: post.metaDescription,
                published: true,
                publishedAt: post.publishedAt,
            },
            create: {
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: post.content,
                coverImage: post.coverImage,
                category: post.category,
                tags: post.tags,
                metaTitle: post.metaTitle,
                metaDescription: post.metaDescription,
                published: true,
                publishedAt: post.publishedAt,
            },
        })
        console.log(`  ✓ ${result.slug}`)
    }

    console.log('Seed completado.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
