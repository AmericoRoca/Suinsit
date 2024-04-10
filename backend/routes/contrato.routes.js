const express = require('express');
const router = express.Router();
const contratoController = require('../controllers/contrato.controllers');


router.get('/contratos', contratoController.getContratos);
router.get('/contratos/:id', contratoController.getContratosById);
router.post('/contratos', contratoController.createContratos);
router.put('/contratos/:id', contratoController.updateContratos);
router.delete('/contratos/:id', contratoController.deleteContratos);

module.exports = router;
