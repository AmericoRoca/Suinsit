const { DataTypes } = require('sequelize');
const sequelize = require('../database/connect');


const Contrato = sequelize.define('Contrato', {
  // Define las columnas de la tabla Contrato
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Opciones adicionales del modelo
  tableName: 'contrato', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar campos de createdAt y updatedAt
});

module.exports = Contrato;
