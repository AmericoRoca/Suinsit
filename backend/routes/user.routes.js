const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/user.controllers');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para autenticación (más adelante)

const { Router } = require('express');
const router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authMiddleware, getUserProfile);


module.exports = router;