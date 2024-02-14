const { Router } = require('express');
const router = Router();

const { getContratos, createContratos, getContratosById, deleteContratos, updateUser, updateContratos } = require('../controllers/contrato.controllers')

router.get('/contratos', getContratos);
router.get('/contratos/:id', getContratosById);
router.post('/contratos', createContratos);
router.put('/contratos/:id', updateContratos);
router.delete('/contratos/:id', deleteContratos);

module.exports = router;
