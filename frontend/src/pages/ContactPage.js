import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
import "../styles/ContactPage.css"; // Asegúrate de que los estilos estén correctos

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <h1>¡Gracias por visitarnos!</h1>
      <p>
        Nos encantaría saber de ti. Puedes escribirnos a través de los
        siguientes medios:
      </p>

      {/* Redes sociales */}
      <div className="social-links">
        <a
          href="https://wa.me/50687782655"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={40} />
        </a>
        <a
          href="https://www.instagram.com/clusiaestudiocr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=clusiaestudio@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope size={40} />
        </a>
      </div>

      <p>
        ¡No dudes en ponerte en contacto con nosotros para más información o
        preguntas!
      </p>

      {/* Mapa interactivo */}
      <div className="map-container">
        <h2>Ubicación</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.86003783662!2d-83.9044822!3d9.862107700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0dfb35c74a4fb%3A0x9d082153ba842bb7!2sAtm%C3%B3sferasCR!5e0!3m2!1ses-419!2scr!4v1747370011783!5m2!1ses-419!2scr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
