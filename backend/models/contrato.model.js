const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Asegúrate de que tienes configurada la conexión

const Contrato = sequelize.define('Contrato', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: true, // Ya que no estaba en tu definición original
  },
}, {
  freezeTableName: true,
  tableName: 'contrato',
  timestamps: false, // Si no necesitas las columnas createdAt y updatedAt
});

module.exports = Contrato;
