// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import './styles/App.css';
import ContactForm from "./components/ContactForm";
import Dashboard from "./pages/Dashboard";
import Servicios from './pages/Servicios'; // Asegúrate de importar Servicios.js

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyectos" element={<ProjectList />} />
                <Route path="/contacto" element={<ContactForm />} />
                <Route path="/nuevo-proyecto" element={<ProjectForm />} />
                <Route path="/editar-proyecto/:id" element={<ProjectForm />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/servicios" element={<Servicios />} /> {/* Agrega la ruta de Servicios */}
            </Routes>
        </Router>
    );
}

export default App;
