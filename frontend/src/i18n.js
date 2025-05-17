import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      welcome: "Bienvenidos a la Agencia de Arquitectura",
      description: "Transformamos tus ideas en realidad. Descubre lo que podemos hacer por ti.",
      projects: "Ver Proyectos",
      contact: "Contáctanos",
      home: "Inicio",
      portfolio: "Portafolio",
      contact_page: "Contacto",

      // Traducciones para servicios
      services_title: "Servicios Profesionales",
      services_design: "Diseño de Planos",
      services_design_desc: "Ofrecemos soluciones arquitectónicas personalizadas.",
      services_consulting: "Consultoría",
      services_consulting_desc: "Asesoría experta en proyectos arquitectónicos.",
      services_renovation: "Renovación",
      services_renovation_desc: "Transforma tu espacio con nuestras ideas innovadoras.",

      //Traduccion navbar
      home: "Inicio",
      portfolio: "Portafolio",
      contact_page: "Contacto",
    }
  },
  en: {
    translation: {
      welcome: "Welcome to the Architecture Agency",
      description: "We transform your ideas into reality. Discover what we can do for you.",
      projects: "View Projects",
      contact: "Contact Us",
      home: "Home",
      portfolio: "Portfolio",
      contact_page: "Contact",

      // Translations for services
      services_title: "Professional Services",
      services_design: "Plan Design",
      services_design_desc: "We offer personalized architectural solutions.",
      services_consulting: "Consulting",
      services_consulting_desc: "Expert advice on architectural projects.",
      services_renovation: "Renovation",
      services_renovation_desc: "Transform your space with our innovative ideas.",

      // Navbar translation
      home: "Home",
      portfolio: "Portfolio",
      contact_page: "Contact",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
