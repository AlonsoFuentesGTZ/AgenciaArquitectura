// src/pages/Home.js
import React from 'react';
import Hero from './Hero';  // Componente Hero
import Servicios from './Servicios';  // Sección de Servicios
import Footer from '../components/Footer';  // Pie de página

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <Hero />

            {/* Servicios Section */}
            <Servicios />

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
