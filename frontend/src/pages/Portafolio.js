import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'; // Tu Navbar
import PDFViewer from '../components/PDFViewer'; // O lo que esté en Portafolio
import '../styles/Portafolio.css'; // Si tienes estilos específicos para la página

const Portafolio = () => {
  const [visible, setVisible] = useState(true);

  // Detectar el movimiento del mouse y el scroll
  useEffect(() => {
    let timer;

    // Ocultar el navbar cuando el scroll está hacia abajo
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    // Detectar el movimiento del mouse para hacer visible el navbar
    const handleMouseMove = () => {
      clearTimeout(timer);
      setVisible(true);
      timer = setTimeout(() => setVisible(false), 3000); // Esconde después de 3 segundos de inactividad
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    // Limpiar eventos al desmontar
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Navbar visible={visible} /> {/* Pasamos el estado de visibilidad al Navbar */}
      <div className="content">
        <PDFViewer /> {/* Aquí va el visor de PDF u otro contenido */}
      </div>
    </div>
  );
};

export default Portafolio;
