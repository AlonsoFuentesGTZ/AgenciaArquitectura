import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import logoClusia from "../assets/logoClusia.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      {/* Logo a la izquierda, redirige al inicio */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoClusia} alt="Logo" className="logo" />
        </Link>
      </div>

      {/* Enlaces a la derecha */}
      <ul className="navbar-links">
        {location.pathname !== "/" && (
          <li>
            <Link to="/">Inicio</Link>
          </li>
        )}
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
