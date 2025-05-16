import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import '../styles/Hero.css';  // Ruta correcta al archivo CSS en 'styles'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-overlay">
                <h1>Bienvenidos a la Agencia de Arquitectura</h1>
                <p>Transformamos tus ideas en realidad. Descubre lo que podemos hacer por ti.</p>
                <div className="hero-buttons">
                    <Link to="/Proyectos">
                        <button className="primary">Ver Proyectos</button>
                    </Link>
                    <Link to="/contacto">
                        <button className="secondary">Contáctanos</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
