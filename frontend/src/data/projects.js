import { imagesProyecto1, imagesProyecto2, imagesProyecto3 } from '../assets/imageImports';

const projects = [
  {
    id: 1,
    name: "Proyecto Casa Moderna",
    description: "Descripción general y visión del proyecto.",
    status: "Finalizado",
    imageUrl: imagesProyecto1['proyecto.png'],
    mainImage: imagesProyecto1['proyecto.png'],
    sections: [
      {
        id: "conceptualizacion",
        title: "Conceptualización y Anteproyecto",
        text: "Aquí explicamos el diseño inicial, ideas y anteproyecto.",
        imageUrl: imagesProyecto1['plano.jpg'],
      },
      {
        id: "planos",
        title: "Planos Constructivos",
        text: "Planos detallados para la construcción del proyecto.",
        imageUrl: imagesProyecto1['croquis.jpg'],
      },
      {
        id: "desarrollo",
        title: "Desarrollo de la Obra",
        text: "Proceso de construcción y avance de obra con imágenes.",
        imageUrl: imagesProyecto1['construccion.png'],
      },
      {
        id: "entrega",
        title: "Entrega Final",
        text: "Entrega final del proyecto al cliente con detalles y celebraciones.",
        imageUrl: imagesProyecto1['entrega.jpg'],
      },
    ],
  },
  {
    id: 2,
    name: "Proyecto Casa Minimalista",
    description: "Descripción general y visión del proyecto.",
    status: "En Proceso",
    imageUrl: imagesProyecto2['proyecto.jpg'],
    mainImage: imagesProyecto2['proyecto.jpg'],
    sections: [
      {
        id: "conceptualizacion",
        title: "Conceptualización y Anteproyecto",
        text: "Aquí explicamos el diseño inicial, ideas y anteproyecto.",
        imageUrl: imagesProyecto2['plano.jpg'],
      },
      {
        id: "planos",
        title: "Planos Constructivos",
        text: "Planos detallados para la construcción del proyecto.",
        imageUrl: imagesProyecto2['croquis1.jpg'],
      },
      {
        id: "desarrollo",
        title: "Desarrollo de la Obra",
        text: "Proceso de construcción y avance de obra con imágenes.",
        imageUrl: imagesProyecto2['construccion.png'],
      },
      {
        id: "entrega",
        title: "Entrega Final",
        text: "Entrega final del proyecto al cliente con detalles y celebraciones.",
        imageUrl: imagesProyecto2['entrega.jpg'],
      },
    ],
  },
  {
    id: 3,
    name: "Proyecto Casa Rústica",
    description: "Descripción general y visión del proyecto.",
    status: "En Proceso",
    imageUrl: imagesProyecto3['proyecto.jpeg'],
    mainImage: imagesProyecto3['proyecto.jpeg'],
    sections: [
      {
        id: "conceptualizacion",
        title: "Conceptualización y Anteproyecto",
        text: "Aquí explicamos el diseño inicial, ideas y anteproyecto.",
        imageUrl: imagesProyecto3['plano.jpg'],
      },
      {
        id: "planos",
        title: "Planos Constructivos",
        text: "Planos detallados para la construcción del proyecto.",
        imageUrl: imagesProyecto3['croquis.jpg'],
      },
      {
        id: "desarrollo",
        title: "Desarrollo de la Obra",
        text: "Proceso de construcción y avance de obra con imágenes.",
        imageUrl: imagesProyecto3['construccion.png'],
      },
      {
        id: "entrega",
        title: "Entrega Final",
        text: "Entrega final del proyecto al cliente con detalles y celebraciones.",
        imageUrl: imagesProyecto3['entrega.jpg'],
      },
    ],
  },
];

export default projects;
