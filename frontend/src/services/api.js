import axios from 'axios';

// Configurar la URL base de la API
const api = axios.create({
  baseURL: 'http://localhost:3001', // Asegúrate de que sea la URL correcta de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funciones para obtener proyectos
export const getProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data; // Devuelve los datos de los proyectos
  } catch (error) {
    console.error('Error al obtener proyectos', error);
    throw error;
  }
};

// Función para crear un nuevo proyecto
export const createProject = async (project) => {
  try {
    const response = await api.post('/projects', project);
    return response.data;
  } catch (error) {
    console.error('Error al crear proyecto', error);
    throw error;
  }
};

// Función para crear un mensaje de contacto
export const sendContactMessage = async (contact) => {
  try {
    const response = await api.post('/contact', contact);
    return response.data;
  } catch (error) {
    console.error('Error al enviar mensaje de contacto', error);
    throw error;
  }
};

export default api;
