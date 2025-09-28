import documentoServices from '../services/documentoServices.js'

async function createDocument(req, res) {
    const {documento, itemExpositivo} = req.body
    try{
        const novoDocumento = await documentoServices.createDocument({documento, itemExpositivo});
        res.status(201).json({message: `Documento com id ${novoDocumento.id} criado com sucesso!`})
    }catch(error){
        console.error(error);
        res.status(201).json({message})
    }
}

export default {
    createDocument
}