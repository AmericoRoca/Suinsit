const { Sequelize } = require('sequelize');

// Configurar la conexión con Sequelize
const sequelize = new Sequelize('postgres', 'postgres', '29101991Am', {
  host: 'localhost',
  dialect: 'postgres',  // Especifica que estamos utilizando PostgreSQL
  port: 5432,           // Puerto de PostgreSQL
  logging: false,       // Desactivar el logging de SQL en la consola
});

module.exports = sequelize;
