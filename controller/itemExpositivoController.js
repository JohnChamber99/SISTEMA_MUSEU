import userServices from '../services/itemExpositivoServices.js'

async function getAllItems(req, res){
    try {
        const itens = await userServices.listarItens();
        res.json(itens);
    }catch (error) {
        res.status(500).json({error: "Erro ao buscar itens"});
    }
}

async function createNewItem(req, res){
    const {tituloDaObra, descricao, autor} = req.body;
    try{
        const novoItem = await userServices.criarItem({tituloDaObra, descricao, autor});
        res.status(201).json({message: `Item com id ${novoItem.id} e título ${novoItem.tituloDaObra} criado com sucesso!`});
    }
    catch (error) {
        console.error(error);
        res.status(400).json({error: "Erro ao criar item"});
    }
}

export default {
    getAllItems,
    createNewItem
}