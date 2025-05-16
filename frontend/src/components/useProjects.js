// hooks/useProjects.js
import { useState, useEffect } from 'react';
import projectsData from '../data/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simula fetch local
    setProjects(projectsData);
  }, []);

  // Aquí puedes agregar filtros, orden, etc.

  return projects;
};
