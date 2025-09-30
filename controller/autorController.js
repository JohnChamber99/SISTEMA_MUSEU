import autorServices from "../services/autorServices.js";

async function createAuthor(req, res) {
    const {nome, descricao, dataNascimento, dataFalecimento, estaVivo} = req.body;
    try{
        const novoAutor = await autorServices.createAuthor({nome, descricao, dataNascimento, dataFalecimento, estaVivo})
        res.status(201).json({message: `Novo autor com id ${novoAutor.id} criado com sucesso`})
    } catch(error){
        console.error(error);
        res.status(400).json({message: "Erro ao criar autor"})
    }
}

export default {
    createAuthor
}