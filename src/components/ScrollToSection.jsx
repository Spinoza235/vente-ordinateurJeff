import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/products') {
      setTimeout(() => {
        const sectionElement = document.getElementById('products');
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Délai de 100 ms
    } else if (location.pathname === '/promotions') {
      setTimeout(() => {
        const sectionElement = document.getElementById('promotions');
        if (sectionElement) {
          sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Délai de 100 ms
    }
  }, [location]);

  return null;
};

export default ScrollToSection;