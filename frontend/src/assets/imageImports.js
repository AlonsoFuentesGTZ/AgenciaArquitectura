// src/assets/imageImports.js

const importAll = (r) => {
  const images = {};
  r.keys().forEach((item) => {
    const key = item.replace('./', ''); // quitar ./ para usar solo el nombre
    images[key] = r(item);
  });
  return images;
};

// Carga todas las imágenes de cada proyecto
const imagesProyecto1 = importAll(require.context('./Proyecto1', false, /\.(png|jpeg|jpe?g|svg)$/));
const imagesProyecto2 = importAll(require.context('./Proyecto2', false, /\.(png|jpeg|jpe?g|svg)$/));
const imagesProyecto3 = importAll(require.context('./Proyecto3', false, /\.(png|jpeg|jpe?g|svg)$/));

export { imagesProyecto1, imagesProyecto2, imagesProyecto3 };
