import taxonomiaFilhoServices from "../services/taxonomiaFilhoServices.js";

async function createChildTaxonomy(req, res) {
    const {nome, descricao, taxonomiaPaiId} = req.body;
    try{
        const novaTaxonomiaFilho = await taxonomiaFilhoServices.createChildTaxonomy({nome, descricao, taxonomiaPaiId: parseInt(taxonomiaPaiId)});
        res.status(201).json({message: `Taxonomia Filho com id ${novaTaxonomiaFilho.id} criado com sucesso`});
    } catch(error){
        console.error(error);
        res.status(404).json({error: "Erro ao criar Taxonomia Filho"});
    }
}

export default {
    createChildTaxonomy
}