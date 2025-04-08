import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Snackbar, Alert } from '@mui/material';
import { sendContactMessage } from '../services/api'; // Importar la función para enviar el mensaje de contacto

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbar({ open: true, message: 'Todos los campos son obligatorios', severity: 'error' });
      return;
    }

    try {
      await sendContactMessage(formData); // Enviar los datos al backend
      setSnackbar({ open: true, message: 'Mensaje enviado exitosamente' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSnackbar({ open: true, message: 'Error al enviar el mensaje', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom align="center">
        Contáctanos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
        />
        <TextField
          label="Correo Electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
          type="email"
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          required
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Enviar
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

export default ContactForm;
