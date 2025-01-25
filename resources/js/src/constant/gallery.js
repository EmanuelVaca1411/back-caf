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
      folder: `${folder}/activity`,
      count: 9,
};

const dominicalGallery = {
      folder: `${folder}/dominical`,
      count: 6,
};

const generalGallery = {
      folder: `${folder}/general`,
      count: 12,
};

const locationGallery = {
      folder: `${folder}/location`,
      count: 4,
};

const predicaGallery = {
      folder: `${folder}/predica`,
      count: 6,
};

const talentoGallery = {
      folder: `${folder}/talento`,
      count: 6,
};

// Generar los arrays de rutas para cada galería.
export const activityImages = generateImagePaths(activityGallery);
export const dominicalImages = generateImagePaths(dominicalGallery);
export const generalImages = generateImagePaths(generalGallery);
export const locationImages = generateImagePaths(locationGallery);
export const predicaImages = generateImagePaths(predicaGallery);
export const talentoImages = generateImagePaths(talentoGallery);

