import express from "express";
import itemExpositivoController from '../controller/itemExpositivoController.js'

const router = express.Router();

//Rota Get para /itens
router.get('/getAll', itemExpositivoController.getAllItems);
//Rota Put para /itens
router.post("/createItem", itemExpositivoController.createNewItem);

export default router;