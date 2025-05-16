import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={project.name}
        height="200"
        image={`http://localhost:3001${project.imageUrl}`}
        title={project.name}
      />
      <CardContent>
        <Typography variant="h6">{project.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
