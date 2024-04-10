const pool = require('../database/connect');
const User = require('../models/user.model');
const bcrypt = require("bcrypt");

const jwt = require('../services/jwt')


const UserController = {

  async prueba(req, res) {
    return res.status(200).send({
      message: "Mensaje enviado desde controlador de prueba",
      usuario: req.user
    })
  },

  async getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }
},

async getUserById(req, res)  {

  const { id } = req.params;
  
  try {
    const user = await User.findByPk(id); 
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Error del servidor');
  }

},

  async register(req, res) {
  const { nombre, apellido, email, password } = req.body;

  // Verificar si se proporcionaron todos los datos necesarios
  if (!nombre || !apellido || !email || !password) {
    console.log('Faltan datos por enviar');
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
    });
  }

  try {
    // Verificar si ya existe un usuario con el mismo correo electrónico
    const existingUser = await User.findOne({ where: { email: email } });
    if (existingUser) {
      console.log('El correo electrónico ya está registrado');
      return res.status(400).json({
        status: "error",
        message: "El correo electrónico ya está registrado",
      });
    }

    // Hash de la contraseña antes de guardarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario en la base de datos
    const newUser = await User.create({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: hashedPassword,
    });

    // Devolver la respuesta al cliente
    res.status(201).json({
      status: "success",
      message: "Usuario registrado correctamente",
      user: newUser,
    });
  } catch (error) {
    console.error('Error del servidor:', error.message);
    res.status(500).json({
      status: "error",
      message: "Error del servidor",
    });
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
},

  async login(req, res) {
  // Extraer el correo electrónico y la contraseña del cuerpo de la solicitud
  const { email, password } = req.body;

  try {
    // Consultar la base de datos para encontrar el usuario con el correo electrónico proporcionado
    const user = await User.findOne({
      where: {
        email: email
      }
    });

    // Verificar si se encontró un usuario con el correo electrónico proporcionado
    if (!user) {
      // Si no se encuentra el usuario, devolver un mensaje de error
      return res.status(400).json({ message: 'Correo electrónico no registrado' });
    }

    // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      // Si las contraseñas no coinciden, devolver un mensaje de error
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Si el correo electrónico y la contraseña son válidos, generar el token JWT
    const token = jwt.createToken(user);

    // Devolver los datos del usuario junto con el token JWT
    res.status(200).json({
      status: "Success",
      message: "Te has identificado correctamente",
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email
      },
      token: token
    });
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    // Si ocurre un error en la consulta, devolver un mensaje de error del servidor
    res.status(500).json({ message: 'Error del servidor' });
  }
}

};

module.exports = UserController;
