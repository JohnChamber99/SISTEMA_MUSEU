import express from 'express';
import userController from '../controller/userController.js';
const router = express.Router();

// Rota GET para /users
router.get('/getAll', userController.getAllUsers);
// Rota POST para /users
router.post('/createUser', userController.createUser);

export default router;
