import { useState, useEffect } from 'react';
import projectsData from '../data/projects';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  // Lista única de estados sobre TODO el dataset original, no solo filtrado
  const allStatuses = ['Todos', ...new Set(projectsData.map(p => p.status))];

  // Proyectos filtrados según búsqueda y estado
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || project.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return {
    projects: filteredProjects,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    allStatuses, // <-- asegúrate de retornar esto
  };
};
