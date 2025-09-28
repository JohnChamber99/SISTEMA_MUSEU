import express from "express";
import documentoController from '../controller/documentoController.js'

const router = express.Router();

//Rota Post para /documento
router.post('/createDocument', documentoController.createDocument);

export default router;