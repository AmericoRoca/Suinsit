const Contrato = require('../models/contrato.model');  // Importamos el modelo Contrato

const getContratos = async (req, res) => {
    try {
        // Obtener todos los contratos
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
        // Obtener un contrato por ID
        const contrato = await Contrato.findByPk(id);  // findByPk es para buscar por clave primaria (id)
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
        // Crear un nuevo contrato
        const nuevoContrato = await Contrato.create({
            fecha,
            empresa,
            tipo
        });
        res.status(201).json(nuevoContrato);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear contrato' });
    }
}

const updateContratos = async (req, res) => {
    const id = req.params.id;
    const { numero, empresa } = req.body;

    try {
        // Actualizar contrato existente
        const contrato = await Contrato.findByPk(id);
        if (!contrato) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }

        contrato.numero = numero;
        contrato.empresa = empresa;
        await contrato.save();  // Guardar los cambios

        res.status(200).json(contrato);  // Enviar el contrato actualizado
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el contrato' });
    }
}

const deleteContratos = async (req, res) => {
    const id = req.params.id;

    try {
        // Eliminar un contrato
        const contrato = await Contrato.findByPk(id);
        if (!contrato) {
            return res.status(404).json({ message: 'Contrato no encontrado' });
        }

        await contrato.destroy();  // Eliminar el contrato
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
};
