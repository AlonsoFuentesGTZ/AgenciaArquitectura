const { Sequelize } = require('sequelize');

// Conexión a MySQL
const sequelize = new Sequelize('Arquitectura_Database', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
