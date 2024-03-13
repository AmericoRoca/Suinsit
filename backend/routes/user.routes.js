const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controllers');

// Rutas para operaciones CRUD de usuarios
router.get('/user', UserController.getAllUsers);
router.get('/user/:id', UserController.getUserById);
router.post('/register', UserController.register); // Corrección aquí
router.post('/login', UserController.login);
router.put('/user-update/:id', UserController.updateUser);
router.delete('/user-delete/:id', UserController.deleteUser);

module.exports = router;
