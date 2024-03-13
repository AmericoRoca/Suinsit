const { DataTypes } = require('sequelize');
const sequelize = require('../database/connect');

const Usuario = sequelize.define('Usuario', {
  // Define las columnas de la tabla Usuario
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Opciones adicionales del modelo
  tableName: 'usuario', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar campos de createdAt y updatedAt
});

module.exports = Usuario;
