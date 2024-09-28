const { DataTypes } = require('sequelize');
const sequelize = require('../database/connect');

// Definir el modelo de Usuario
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  registrationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  freezeTableName: true, // Evita que Sequelize pluralice el nombre de la tabla
  tableName: 'User',     // Nombre exacto de la tabla
  timestamps: false,      // Desactiva createdAt y updatedAt
});

module.exports = User;
