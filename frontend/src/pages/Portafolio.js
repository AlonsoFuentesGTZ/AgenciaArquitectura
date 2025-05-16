import React from 'react';

const PDFViewer = () => {
  return (
    <iframe
      src={process.env.PUBLIC_URL + '/assets/Portafolio.pdf'}
      width="100%"
      height="800px"
      title="Portafolio PDF"
      style={{ border: 'none' }}
    />
  );
};

export default PDFViewer;
