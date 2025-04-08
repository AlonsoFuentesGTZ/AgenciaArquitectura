import React from "react";
import "../styles/Servicios.css"; // Asegúrate de que el CSS esté correcto
import Footer from "../components/Footer"; // Importa el Footer

const Servicios = () => {
  return (
    <div>
      <section className="servicios">
        <h2>Servicios Profesionales</h2>
        <div className="card-container">
          <div className="card">
            <h3>Diseño de Planos</h3>
            <p>Ofrecemos soluciones arquitectónicas personalizadas.</p>
          </div>
          <div className="card">
            <h3>Consultoría</h3>
            <p>Asesoría experta en proyectos arquitectónicos.</p>
          </div>
          <div className="card">
            <h3>Renovación</h3>
            <p>Transforma tu espacio con nuestras ideas innovadoras.</p>
          </div>
        </div>
      </section>
      <Footer /> {/* Agrega el Footer al final del componente */}
    </div>
  );
};

export default Servicios;
