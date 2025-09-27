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

async function updateItemById(id, dados) {
    return await prisma.itemExpositivo.update({
        where: {id},
        data: dados
    })
}

export default {
    listarItens,
    criarItem,
    updateItemById,
    mostrarItemPorId
}