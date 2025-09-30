import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function createParentTaxonomy(dados) {
    return await prisma.taxonomiaPai.create({data: dados})
}

export default {
    createParentTaxonomy
}