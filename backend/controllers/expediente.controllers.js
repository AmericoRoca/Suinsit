const pool = require('../database/connect');

const getExpedientes = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM public.expediente");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener expedientes' });
    }
}

const getExpedientesById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('SELECT * FROM public.expediente WHERE codigo = $1', [id]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener expediente por ID' });
    }
}

const createExpedientes = async (req, res) => {
    const { numero, empresa, color, coche } = req.body;

    try {
        const response = await pool.query('INSERT INTO public.expediente (codigo, numero, empresa, color, coche) VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *', [numero, empresa, color, coche]);
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear expediente' });
    }
}

const updateExpedientes = async (req,res) => {
    const id =req.params.id;
    const { numero, empresa} = req.body;

    console.log(id, numero, empresa);

    try {
        const response = await pool.query('UPDATE  public.expediente SET numero= $1, empresa=$2 WHERE codigo = $3', [numero, empresa, id]);
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el expediente' });
    }
}


const deleteExpedientes = async (req, res) => {
    const id =req.params.id;

    try {
        const response = await pool.query('DELETE FROM public.expediente WHERE codigo = $1', [id]);
        res.status(201).json(response.rows[0]);
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
}
