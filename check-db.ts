import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    try {
        const count = await prisma.post.count()
        console.log(`Total posts in DB: ${count}`)

        if (count > 0) {
            const posts = await prisma.post.findMany()
            console.log('Posts found:', posts)
        } else {
            console.log('No posts found in the database.')
        }
    } catch (e) {
        console.error('Error connecting to DB:', e)
    } finally {
        await prisma.$disconnect()
    }
}

main()
