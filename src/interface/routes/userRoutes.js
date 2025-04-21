// src/interface/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Instanciando o controlador de usuário
const userController = new UserController();

// Definindo a rota de registro de usuário
router.post('/register', userController.register);

module.exports = router;
