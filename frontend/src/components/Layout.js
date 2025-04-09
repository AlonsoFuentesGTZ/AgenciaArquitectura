import React from 'react';
import Navbar from './Navbar';  // Asegúrate de importar el Navbar
import Footer from './Footer';  // Asegúrate de importar el Footer

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />  {/* Aquí va el navbar */}
      <main>{children}</main>  {/* El contenido específico de cada página va aquí */}
      <Footer />  {/* Aquí va el footer */}
    </div>
  );
};

export default Layout;
