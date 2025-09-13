import userServices from '../services/userServices.js'; 

async function getAllUsers(req, res){
    try {
        const usuarios = await userServices.listarUsuarios();
        res.json(usuarios);
    }catch (error) {
        res.status(500).json({error: "Erro ao buscar usuários"});
    }
}

async function createUser(req, res){
    const {username, email, senha} = req.body;
    try{
        const novoUsuario = await userServices.criarUsuario({username, email, senha});
        res.status(201).json(novoUsuario);
    } catch (error){
        console.error(error);
        res.status(400).json({error: "Erro ao criar usuário"})
    }
};

export default {
    getAllUsers,
    createUser
};