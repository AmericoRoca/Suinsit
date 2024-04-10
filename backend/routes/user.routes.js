const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controllers');
const check = require("../middleware/auth")

// Rutas para operaciones CRUD de usuarios
router.get('/prueba', check.auth, UserController.prueba);
router.get('/user', UserController.getAllUsers);
router.get('/user/profile/:id', check.auth, UserController.getUserById);
router.post('/register', UserController.register); // Corrección aquí
router.post('/login', UserController.login);
router.put('/user-update/:id', UserController.updateUser);
router.delete('/user-delete/:id', UserController.deleteUser);

module.exports = router;
