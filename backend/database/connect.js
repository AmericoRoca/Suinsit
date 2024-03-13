const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '29101991Am',
  database: 'postgres'
});

module.exports = sequelize;
