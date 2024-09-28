const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Asegúrate de tener configurada la conexión

const Expediente = sequelize.define('Expediente', {
  codigo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coche: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  tableName: 'expediente',  // Nombre exacto de la tabla
  timestamps: false,        // Desactivar createdAt y updatedAt
});

module.exports = Expediente;
