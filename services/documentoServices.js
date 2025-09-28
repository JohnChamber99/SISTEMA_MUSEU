import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function createDocument(dados) {
    return await prisma.documento.create({data: dados})
}

export default {
    createDocument
}