export const MAX_LOCAL_IMAGE_BYTES = 512 * 1024;

export function readLocalImage(file) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('Choose an image first.'));
    if (!file.type.startsWith('image/')) return reject(new Error('Choose an image file.'));
    if (file.size > MAX_LOCAL_IMAGE_BYTES) return reject(new Error('Choose an image smaller than 512 KB for this local draft.'));
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('This image could not be read. Please try another file.'));
    reader.readAsDataURL(file);
  });
}
