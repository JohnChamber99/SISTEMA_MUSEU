import express from "express";
import itemExpositivoController from '../controller/itemExpositivoController.js'

const router = express.Router();

//Rota Get para /itens
router.get('getAll', itemExpositivoController.getAllItems);

export default router;