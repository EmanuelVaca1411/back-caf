const folder = '/gallery'

function generateImagePaths(gallery) {
      const imagePaths = [];
      for (let i = 1; i <= gallery.count; i++) {
            const src = `${gallery.folder}/${i}.jpg`;
            imagePaths.push({
                  src,
                  alt: src,
            });
      }
      return imagePaths;
}

const activityGallery = {
      folder: `${folder}/ACTIVIDADES_RECREACIONALES`,
      count: 29,
};
const dominicalGallery = {
      folder: `${folder}/ESCUELA_DOMINICAL`,
      count: 7,
};
const servidoresGallery = {
      folder: `${folder}/SERVIDORES`,
      title: 'Servidores',
      count: 6,
};
const familyGallery = {
      folder: `${folder}/TIEMPO_EN_FAMILIA`,
      title: 'Tiempo en familia',
      count: 6,
};
const locationGallery = {
      folder: `${folder}/UBICACION`,
      count: 37,
};
const predicaGallery = {
      folder: `${folder}/ALABANZAS(ADORACION-JUBILO)`,
      count: 16,
};
const talentoGallery = {
      folder: `${folder}/ESPECIALES`,
      count: 7,
};

// Generar los arrays de rutas para cada galería.
export const activityImages = generateImagePaths(activityGallery);
export const dominicalImages = generateImagePaths(dominicalGallery);
export const generalImages = [
      ...generateImagePaths(servidoresGallery), 
      ...generateImagePaths(familyGallery)
];
export const locationImages = generateImagePaths(locationGallery);
export const predicaImages = generateImagePaths(predicaGallery);
export const talentoImages = generateImagePaths(talentoGallery);

