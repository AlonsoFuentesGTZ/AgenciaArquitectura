const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Modelo para la tabla 'Projects'
const Project = sequelize.define('Project', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true, // Crea los campos 'createdAt' y 'updatedAt' automáticamente
});

module.exports = Project;
