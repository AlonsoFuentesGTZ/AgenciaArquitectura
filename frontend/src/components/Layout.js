import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {/* Espaciador para compensar altura del navbar fijo */}
      <div className="navbar-spacer" />
      
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
