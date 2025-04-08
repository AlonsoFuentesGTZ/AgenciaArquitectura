import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import { getProjects } from '../services/api'; // Importa la función que crea la solicitud GET

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Obtener proyectos desde el backend
    getProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error al cargar los proyectos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress sx={{ margin: '20px auto', display: 'block' }} />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item key={project.id} xs={12} sm={6} md={4}>
          <Card>
            {project.imageUrl && (
              <img
                src={`http://localhost:3001${project.imageUrl}`}
                alt={project.name}
                height="200"
                style={{ objectFit: 'cover', width: '100%' }}
              />
            )}
            <CardContent>
              <Typography variant="h6">{project.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
              <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                Estado: {project.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
