import React from 'react';
import Hero from './Hero';  // Sección de Hero
import Servicios from './Servicios';  // Sección de Servicios
import '../styles/Home.css';  // Asegúrate de que el CSS esté correcto

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <Servicios />
    </div>
  );
};

export default Home;
