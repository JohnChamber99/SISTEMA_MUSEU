import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function createChildTaxonomy(dados) {
    return await prisma.taxonomiaFilho.create({data: dados})
}

export default {
    createChildTaxonomy
}