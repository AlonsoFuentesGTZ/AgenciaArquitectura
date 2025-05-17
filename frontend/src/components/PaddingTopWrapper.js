import React, { useEffect, useState } from 'react';

const PaddingTopWrapper = ({ children }) => {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    function updateNavHeight() {
      const navbar = document.querySelector('.navbar');
      setNavHeight(navbar ? navbar.offsetHeight : 0);
    }

    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return <div style={{ paddingTop: navHeight }}>{children}</div>;
};

export default PaddingTopWrapper;
