import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <p>Proyecto no encontrado.</p>;

  return (
    <div className="project-details-container">
      <h2>{project.name}</h2>
      {/* Imagen principal con ruta correcta */}
      <img
        src={process.env.PUBLIC_URL + "/" + project.mainImage}
        alt={project.name}
        className="main-image"
      />

      <p className="project-description">{project.description}</p>
      <p><strong>Estado:</strong> {project.status}</p>

      {project.sections.map(section => (
        <div key={section.id} className="project-section">
          <h3>{section.title}</h3>
          <div className="section-content">
            {/* Imagen de sección con ruta correcta */}
            <img
              src={process.env.PUBLIC_URL + "/" + section.imageUrl}
              alt={section.title}
              className="section-image"
            />
            <p>{section.text}</p>
          </div>
        </div>
      ))}

      <Link to="/proyectos" className="back-link">← Volver a Proyectos</Link>
    </div>
  );
};

export default ProjectDetails;
