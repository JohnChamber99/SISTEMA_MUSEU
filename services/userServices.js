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

async function deletarUsuarioPorId(id){
    return await prisma.usuario.delete({
        where: {id: id}
    });
}

async function updateUserById(id, dados){
    return await prisma.usuario.update({
        where:{id},
        data: dados
    });
}

async function getUserById(id){
    return await prisma.usuario.findUnique({
        where: {id: id}
    }); 
}

export default {
    listarUsuarios,
    criarUsuario,
    deletarUsuarioPorId,
    updateUserById,
    getUserById
};