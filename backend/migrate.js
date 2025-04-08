// migrate.js
const mongoose = require('mongoose');
const sequelize = require('./config/database'); // Conexion a MySQL
const { Project } = require('./models/Project'); // Modelo de Sequelize
const Contact = require('./models/Contact'); // Modelo de Sequelize para Contacto

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/Arquitectura_Database', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Conectado a MongoDB');
    
    // Leer todos los proyectos de MongoDB
    const mongoProjects = await mongoose.model('Project').find();
    
    // Migrar los proyectos a MySQL
    await Promise.all(mongoProjects.map(async (mongoProject) => {
      await Project.create({
        name: mongoProject.name,
        description: mongoProject.description,
        status: mongoProject.status,
        imageUrl: mongoProject.imageUrl || null, // Asegúrate de que las rutas de imagen sean correctas
      });
    }));
    
    console.log('Proyectos migrados exitosamente a MySQL');
    
    // Si tienes contactos, también puedes migrarlos de manera similar
    const mongoContacts = await mongoose.model('Contact').find();
    
    await Promise.all(mongoContacts.map(async (mongoContact) => {
      await Contact.create({
        name: mongoContact.name,
        email: mongoContact.email,
        message: mongoContact.message,
      });
    }));
    
    console.log('Contactos migrados exitosamente a MySQL');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  })
  .finally(() => {
    // Cerrar la conexión a MongoDB
    mongoose.connection.close();
    
    // Cerrar la conexión a MySQL
    sequelize.close();
  });
