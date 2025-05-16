import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Asegúrate de que los estilos estén correctos

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo a la izquierda, redirige al inicio */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="/assets/logoClusia.png" alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Enlaces a la derecha */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/portafolio">Portafolio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
