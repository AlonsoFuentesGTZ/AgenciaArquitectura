import React from 'react';

const PDFViewer = () => {
  return (
      <div className="pdf-container">
        {/* Usamos un iframe para mostrar el PDF */}
        <iframe
          src="/assets/Portafolio.pdf"
          width="100%"
          height="600px"
          title="Portafolio PDF"
        ></iframe>
      </div>
  );
};

export default PDFViewer;
