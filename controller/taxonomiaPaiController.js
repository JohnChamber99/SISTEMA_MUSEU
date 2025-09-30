import taxonomiaPaiServices from "../services/taxonomiaPaiServices.js";

async function createParentTaxonomy(req, res) {
    const {nome, descricao} = req.body;
    try{
        const novaTaxonomiaPai = await taxonomiaPaiServices.createParentTaxonomy({nome, descricao});
        res.status(201).json({message: `Taxonomia Pai com id ${novaTaxonomiaPai.id} criado com sucesso`});
    } catch(error){
        console.error(error);
        res.status(404).json({error: "Erro ao criar Taxonomia Pai"});
    }
}

export default {
    createParentTaxonomy
}