import documentoServices from '../services/documentoServices.js'

async function createDocument(req, res) {
    const {documento} = req.body
    try{
        const novoDocumento = await documentoServices.createDocument({documento});
        res.status(201).json({message: `Documento com id ${novoDocumento.id} criado com sucesso!`})
    }catch(error){
        console.error(error);
        res.status(400).json({message: "Erro ao criar documento"})
    }
}

export default {
    createDocument
}