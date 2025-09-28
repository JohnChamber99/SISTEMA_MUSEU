import express from "express";
import autorController from "../controller/autorController.js";

const router = express.Router();

//Rota Post para /autor
router.post("/createAuthor", autorController.createAuthor);

export default router;