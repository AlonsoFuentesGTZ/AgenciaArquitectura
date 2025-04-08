const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Conexión a MySQL
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Para manejar los datos JSON
app.use('/uploads', express.static('uploads')); // Para servir imágenes subidas

// Conexión a MySQL
sequelize.authenticate()
  .then(() => console.log('Conectado a MySQL'))
  .catch(err => console.error('Error al conectar a MySQL', err));

// Rutas
app.use('/projects', projectRoutes);
app.use('/contact', contactRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Sincronizar la base de datos
sequelize.sync({ force: false }) // Usa `force: true` solo si deseas eliminar y recrear las tablas
  .then(() => console.log('Base de datos sincronizada con éxito'))
  .catch((err) => console.error('Error al sincronizar la base de datos:', err));

