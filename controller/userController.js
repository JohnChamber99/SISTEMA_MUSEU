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
        res.status(201).json({message: `Usuário com id ${novoUsuario.id} e nome ${novoUsuario.username} criado com sucesso`});
    } catch (error){
        console.error(error);
        res.status(400).json({error: "Erro ao criar usuário"})
    }
};

async function deleteUser(req, res){
    const {id} = req.params;
    try{
        await userServices.deletarUsuarioPorId(parseInt(id));
        res.json({message: `Usuário com id ${id} deletado com sucesso`});
    } catch (error){
        console.error(error);
        res.status(400).json({error: "Erro ao deletar usuário"})
    }
}

async function updateUserById(req, res){
    const {id} = req.params;
    const {username, email, senha} = req.body;
    try{
        const usuario = await userServices.updateUserById(parseInt(id), {username, email, senha});
        if(!usuario){
            res.status(404).json({message: "Usuário não encontrado"});
        }
        res.status(200).json({message: `Usuário com id ${id} atualizado com sucesso`});
    }catch (error){
        console.error(error);
        res.status(400).json({error: "Erro ao atualizar usuário"});
    }
}

async function getUserById(req, res){
    const {id} = req.params;
    try{
        const usuario = await userServices.getUserById(parseInt(id));
        if(!usuario){
            res.status(404).json({error: "Usuário não encontrado"});
        }
        res.status(200).json(usuario);
    }catch (error){
        console.error(error);
            res.status(500).json({error: "Erro ao buscar usuário"});
    }
    
}

export default {
    getAllUsers,
    createUser,
    deleteUser,
    updateUserById,
    getUserById
};