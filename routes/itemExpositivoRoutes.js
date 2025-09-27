import express from "express";
import itemExpositivoController from '../controller/itemExpositivoController.js'

const router = express.Router();

//Rota Get para /itens
router.get('/getAll', itemExpositivoController.getAllItems);
//Rota Put para /itens
router.post("/createItem", itemExpositivoController.createNewItem);
//Rota Get para /itens
router.get("/getItemById/:id", itemExpositivoController.getItemById);
//Rota Update para /itens
router.put("/updateItemById/:id", itemExpositivoController.updateItemById);

export default router;