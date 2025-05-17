import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/navbar.css";
import logoClusia from "../assets/logoClusia.png";

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="navbar">
      {/* Logo a la izquierda, redirige al inicio */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoClusia} alt="Logo" className="logo" />
        </Link>
        <button className="language-switch" onClick={toggleLanguage}>
          {i18n.language === "es" ? "EN 🇬🇧" : "ES 🇪🇸"}
        </button>
      </div>

      {/* Enlaces a la derecha */}
      <ul className="navbar-links">
        {location.pathname !== "/" && (
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
        )}
        <li>
          <Link to="/portafolio">{t("portfolio")}</Link>
        </li>
        <li>
          <Link to="/contacto">{t("contact_page")}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
