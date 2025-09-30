import express from 'express';
import taxonomiaFilhoController from "../controller/taxonomiaFilhoController.js";

const router = express.Router();

//Rota Post para /taxonomiaFilho
router.post('/createChildTaxonomy', taxonomiaFilhoController.createChildTaxonomy);

export default router;