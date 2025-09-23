import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function listarItens() {
    return await prisma.itemExpositivo.findMany();
}

async function criarItem(dados) {
    return await prisma.itemExpositivo.create({ data: dados });
}

export default {
    listarItens,
    criarItem
}