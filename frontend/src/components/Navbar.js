// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
      <header>
        <div className="logo">
          <h2>Agencia Arquitectura</h2>
        </div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>
  );
};

export default Navbar;
