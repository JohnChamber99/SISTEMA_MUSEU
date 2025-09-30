import express from 'express';
import taxonomiaPaiController from "../controller/taxonomiaPaiController.js";

const router = express.Router();

//Rota Post para /taxonomiaPai
router.post('/createParentTaxonomy', taxonomiaPaiController.createParentTaxonomy);

export default router;