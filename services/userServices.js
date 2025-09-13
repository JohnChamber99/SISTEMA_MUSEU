import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function listarUsuarios() {
    return await prisma.usuario.findMany();
}

export default {
    listarUsuarios
};