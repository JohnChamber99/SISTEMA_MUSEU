import express from 'express';
import userController from '../controller/userController.js';
const router = express.Router();

// Rota GET para /users
router.get('/getAll', userController.getAllUsers);
// Rota POST para /users
router.post('/createUser', userController.createUser);
// Rota DELETE para /users/
router.delete('/deleteUser/:id', userController.deleteUser);
//Rota UPDATE para /users/
router.put('/updateUser/:id', userController.updateUserById);
//Rota Get User By ID
router.get('/getUserById/:id', userController.getUserById);

export default router;
