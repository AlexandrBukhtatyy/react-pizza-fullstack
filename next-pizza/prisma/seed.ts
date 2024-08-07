import { PrismaClient } from '@prisma/client'
import {hashSync} from 'bcrypt';

const prisma = new PrismaClient()

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'admin',
                email: 'admin@test.ru',
                password: hashSync('12345', 10),
                role: 'ADMIN',
                verified: new Date()
            },
            {
                fullName: 'guest',
                email: 'guest@test.ru',
                password: hashSync('12345', 10),
                role: 'GUEST',
                verified: new Date()
            },
        ]
    })
}

/**
 * Очистка перед заполнением базы данных
 */
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try{
        await down();
        await up();
    } catch (e) {

    }
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
