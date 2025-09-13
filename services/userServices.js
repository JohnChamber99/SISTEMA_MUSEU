import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function listarUsuarios() {
    return await prisma.usuario.findMany();
}

async function criarUsuario(dados) {
    const existente = await prisma.usuario.findUnique({
        where: {email: dados.email},
    });
    if (existente) {
        throw new Error('Usuário com este email já existe');
    }
    return prisma.usuario.create({data: dados});
}

export default {
    listarUsuarios,
    criarUsuario
};