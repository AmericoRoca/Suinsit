const pool = require('../database/connect');

const getContratos = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM public.contrato");
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener contratos' });
    }
}

const getContratosById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query('SELECT * FROM public.contrato WHERE id = $1', [id]);
        res.status(200).json(response.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener contrato por ID' });
    }
}

const createContratos = async (req, res) => {
    const { contrato, fecha, empresa, tipo } = req.body;
    try {
        const response = await pool.query('INSERT INTO public.contrato (id,  fecha, empresa, tipo) VALUES (DEFAULT, $1, $2, $3) RETURNING *', [ fecha, empresa, tipo]);
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear contrato' });
    }
}

const updateContratos = async (req, res) => {
    const id = req.params.id;
    const { numero, empresa } = req.body;

    console.log(id, numero, empresa);

    try {
        const response = await pool.query('UPDATE  public.contrato SET numero= $1, empresa=$2 WHERE codigo = $3', [numero, empresa, id]);
        res.status(201).json(response.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el contrato' });
    }
}

const deleteContratos = async (req, res) => {
    const id = req.params.id;

    try {
        await pool.query('DELETE FROM public.contrato WHERE id = $1', [id]);
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
