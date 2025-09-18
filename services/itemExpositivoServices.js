import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function listarItens() {
    return await prisma.itens.findMany;
}

export default {
    listarItens
}