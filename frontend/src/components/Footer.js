// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2025 Agencia de Arquitectura. Todos los derechos reservados.</p>
            <div className="footer-links">
                <a href="https://www.instagram.com">Instagram</a>
                <a href="https://www.facebook.com">Facebook</a>
            </div>
        </footer>
    );
};

export default Footer;
