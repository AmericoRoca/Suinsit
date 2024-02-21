const pool = require('../database/connect');

const UserController = {
    async getAllUsers(req, res) {
      try {
        const users = await pool.query('SELECT * FROM usuario');
        res.json(users.rows);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
      }
    },
  
    async getUserById(req, res) {
      const { id } = req.params;
      try {
        const user = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        res.json(user.rows[0]);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
      }
    },
  
    async createUser(req, res) {
      const { nombre, apellido, email, password } = req.body;
      try {
        const newUser = await pool.query(
          'INSERT INTO usuario (nombre, apellido, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
          [nombre, apellido, email, password]
        );
        res.json(newUser.rows[0]);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
      }
    },
  
    async updateUser(req, res) {
      const { id } = req.params;
      const { nombre, apellido, email, password } = req.body;
      try {
        const updateUser = await pool.query(
          'UPDATE usuario SET nombre = $1, apellido = $2, email = $3, password = $4 WHERE id = $5 RETURNING *',
          [nombre, apellido, email, password, id]
        );
        res.json(updateUser.rows[0]);
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
      }
    },
  
    async deleteUser(req, res) {
      const { id } = req.params;
      try {
        await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
        res.json({ message: 'Usuario eliminado correctamente' });
      } catch (error) {
        console.error(error.message);
        res.status(500).send('Error del servidor');
      }
    }
  };
  
  module.exports = UserController;