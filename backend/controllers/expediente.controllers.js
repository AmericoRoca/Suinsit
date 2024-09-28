const Expediente = require('../models/expediente.model');  // Importamos el modelo Expediente

const getExpedientes = async (req, res) => {
    try {
        // Obtener todos los expedientes
        const expedientes = await Expediente.findAll();
        res.status(200).json(expedientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener expedientes' });
    }
}

const getExpedientesById = async (req, res) => {
    const id = req.params.id;
    try {
        // Obtener expediente por ID
        const expediente = await Expediente.findByPk(id);
        if (!expediente) {
            return res.status(404).json({ message: 'Expediente no encontrado' });
        }
        res.status(200).json(expediente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener expediente por ID' });
    }
}

const createExpedientes = async (req, res) => {
    const { numero, empresa, color, coche } = req.body;

    try {
        // Crear nuevo expediente
        const nuevoExpediente = await Expediente.create({
            numero,
            empresa,
            color,
            coche
        });
        res.status(201).json(nuevoExpediente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear expediente' });
    }
}

const updateExpedientes = async (req, res) => {
    const id = req.params.id;
    const { numero, empresa } = req.body;

    console.log(id, numero, empresa);

    try {
        // Buscar el expediente y luego actualizar
        const expediente = await Expediente.findByPk(id);
        if (!expediente) {
            return res.status(404).json({ message: 'Expediente no encontrado' });
        }

        // Actualizar campos
        expediente.numero = numero;
        expediente.empresa = empresa;

        // Guardar los cambios
        await expediente.save();

        res.status(200).json(expediente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el expediente' });
    }
}

const deleteExpedientes = async (req, res) => {
    const id = req.params.id;

    try {
        // Buscar el expediente y luego eliminar
        const expediente = await Expediente.findByPk(id);
        if (!expediente) {
            return res.status(404).json({ message: 'Expediente no encontrado' });
        }

        await expediente.destroy();  // Eliminar expediente
        res.status(200).json({ message: 'Expediente eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al borrar el expediente' });
    }
}

module.exports = {
    getExpedientes,
    createExpedientes,
    getExpedientesById,
    deleteExpedientes,
    updateExpedientes
};
