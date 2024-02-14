const { Router } = require('express');
const router = Router();

const { getExpedientes, createExpedientes, getExpedientesById, deleteExpedientes, updateUser, updateExpedientes } = require('../controllers/expediente.controllers')

router.get('/expedientes', getExpedientes);
router.get('/expedientes/:id', getExpedientesById);
router.post('/expedientes', createExpedientes);
router.put('/expedientes/:id', updateExpedientes);
router.delete('/expedientes/:id', deleteExpedientes);

module.exports = router;
