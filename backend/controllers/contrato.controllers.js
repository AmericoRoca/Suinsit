const Contrato = require('../models/contrato.model');

const getContratos = async (req, res) => {
    try {
        const contratos = await Contrato.findAll();
        res.status(200).json(contratos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener contratos' });
    }
}

const getContratosById = async (req, res) => {
    const id = req.params.id;
    try {
        const contrato = await Contrato.findByPk(id);
        if (!contrato) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }
        res.status(200).json(contrato);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener contrato por ID' });
    }
}

const createContratos = async (req, res) => {
    const { fecha, empresa, tipo } = req.body;
    try {
        const contrato = await Contrato.create({ fecha, empresa, tipo });
        res.status(201).json(contrato);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear contrato' });
    }
}

const updateContratos = async (req, res) => {
    const id = req.params.id;
    const { numero, empresa } = req.body;

    try {
        const contrato = await Contrato.findByPk(id);
        if (!contrato) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }
        await contrato.update({ numero, empresa });
        res.status(200).json(contrato);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el contrato' });
    }
}

const deleteContratos = async (req, res) => {
    const id = req.params.id;

    try {
        const contrato = await Contrato.findByPk(id);
        if (!contrato) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }
        await contrato.destroy();
        res.status(200).json({ message: 'Contrato eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al borrar el contrato' });
    }
}

module.exports = {
    getContratos,
    createContratos,
    getContratosById,
    deleteContratos,
    updateContratos
}
