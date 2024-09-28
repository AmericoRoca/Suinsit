const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Controlador de usuario

// Registro de usuario
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);  // Verifica que los datos estén llegando correctamente

  try {
    // Verificar si el correo ya está registrado usando `findOne` con `where`
    const existingUser = await User.findOne({
      where: { email }
    });

    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Crear nuevo usuario usando `User.create`
    const newUser = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
  }
};

// Inicio de sesión
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario por correo electrónico
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error });
  }
};

// Obtener información del usuario autenticado
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // Excluimos la contraseña
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil del usuario', error });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
