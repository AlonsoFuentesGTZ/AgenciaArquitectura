const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Modelo para la tabla 'Contacts'
const Contact = sequelize.define('Contact', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Validación para asegurarse de que sea un correo electrónico válido
    },
    },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // Crea los campos 'createdAt'
});

module.exports = Contact;
