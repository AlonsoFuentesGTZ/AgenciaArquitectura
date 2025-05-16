import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Alert } from '@mui/material';
import { createProject } from '../services/api'; // Importar la función para crear un proyecto

const ProjectForm = () => {
  const [projectData, setProjectData] = useState({
    name: '',
    description: '',
    status: 'En progreso',
    imageUrl: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectData.name || !projectData.description) {
      setSnackbar({ open: true, message: 'El nombre y la descripción son obligatorios', severity: 'error' });
      return;
    }

    try {
      await createProject(projectData); // Enviar los datos al backend
      setSnackbar({ open: true, message: 'Proyecto creado exitosamente' });
      setProjectData({ name: '', description: '', status: 'En progreso', imageUrl: '' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error al crear el proyecto', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Crear Proyecto
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={projectData.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Descripción"
          name="description"
          value={projectData.description}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Estado"
          name="status"
          value={projectData.status}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="URL de la imagen"
          name="imageUrl"
          value={projectData.imageUrl}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Crear Proyecto
        </Button>
      </form>

      {/* Snackbar de confirmación */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProjectForm;
