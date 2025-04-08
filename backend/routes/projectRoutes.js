const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Project = require('../models/Project');

const router = express.Router();

// Configuración de Multer para subir imágenes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = Date.now() + ext;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

// Crear un nuevo proyecto
router.post('/', async (req, res) => {
  const { name, description, status, imageUrl } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Nombre y descripción son obligatorios' });
  }

  try {
    const newProject = await Project.create({ name, description, status, imageUrl });
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Error al crear proyecto:', error);
    res.status(400).json({ error: 'Error al crear proyecto' });
  }
});

// Subir una imagen
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ninguna imagen' });
  }
  console.log('Imagen subida:', req.file.filename);
  res.json({ filename: req.file.filename });
});

module.exports = router;
