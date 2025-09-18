import userServices from '../services/itemExpositivoServices.js'

async function getAllItems(req, res){
    try {
        const itens = await userServices.listarItens();
        res.json(itens);
    }catch (error) {
        res.status(500).json({error: "Erro ao buscar itens"});
    }
}

export default {
    getAllItems
}