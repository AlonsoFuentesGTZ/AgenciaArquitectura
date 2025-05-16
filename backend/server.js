const express = require('express');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes'); // Importamos las rutas de contacto

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

console.log('Middleware de rutas cargado');

// Usamos las rutas de contacto
app.use('/api', contactRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
