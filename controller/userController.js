import userServices from '../services/userServices.js'; 

async function getAllUsers(req, res){
    try {
        const usuarios = await userServices.listarUsuarios();
        res.json(usuarios);
    }catch (error) {
        res.status(500).json({error: "Erro ao buscar usuários"});
    }
}

export default {
    getAllUsers
};