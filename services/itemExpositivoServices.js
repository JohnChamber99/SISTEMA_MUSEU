import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function listarItens() {
    return await prisma.itemExpositivo.findMany();
}

async function criarItem(dados) {
    return await prisma.itemExpositivo.create({ data: dados });
}

async function mostrarItemPorId(id) {
    return await prisma.itemExpositivo.findUnique({
        where: {id: id}
    })
}

export default {
    listarItens,
    criarItem,
    mostrarItemPorId
}