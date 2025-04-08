const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

// Crear un nuevo mensaje de contacto
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  try {
    const newContact = await Contact.create({ name, email, message });
    res.status(200).json({ message: 'Mensaje recibido con éxito' });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ error: 'Hubo un error al guardar el mensaje' });
  }
});

module.exports = router;
