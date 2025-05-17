import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectList from "./components/ProjectList";
import ProjectForm from "./components/ProjectForm";
import "./styles/App.css";
import Dashboard from "./pages/Dashboard";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import ProjectDetails from "./components/ProjectDetails";
import ContactPage from "./pages/ContactPage";

const basename = process.env.PUBLIC_URL || "/";

function App() {
  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<ProjectList />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/nuevo-proyecto" element={<ProjectForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/proyecto/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
