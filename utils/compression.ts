import imageCompression from 'browser-image-compression';

export const CompressImage = async (image: File) => {
  const options = {
    maxSizeMB: 0.01,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };
  const compressedFile = await imageCompression(image, options);
  return compressedFile;
};
