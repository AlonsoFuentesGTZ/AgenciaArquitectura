import React from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects"; // Asegúrate de importar los datos
import "../styles/ProjectList.css"; // Asegúrate de que el CSS esté correcto

const ProjectList = () => {
  return (
    <div className="project-list-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img
            src={project.mainImage}
            alt={project.name}
            className="main-image"
          />

          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Estado:</strong> {project.status}
            </p>
            <Link to={`/proyecto/${project.id}`} className="ver-mas-button">
              Ver más
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
