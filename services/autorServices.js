import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

async function createAuthor(dados) {
    return await prisma.autor.create({data: dados});
}

export default {
    createAuthor
}