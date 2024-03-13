const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
  tableName: 'contratos', // Nombre de la tabla en la base de datos
  timestamps: false // No agregar campos de createdAt y updatedAt
});

module.exports = Contrato;
