import React, { useState, ChangeEvent, useRef } from 'react';

const InputPhoto = ({ onChange }: { onChange: (photos: File[]) => void }) => {
  const [photos, setPhotos] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newPhoto = event.target.files[0];

      if (photos.length < 3) {
        const updatedPhotos = [...photos, newPhoto];
        setPhotos(updatedPhotos);
        onChange(updatedPhotos);
      }
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter(
      (_, photoIndex) => photoIndex !== index,
    );
    setPhotos(updatedPhotos);
    onChange(updatedPhotos);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="review-2">사진 첨부</div>
      <div className="flex flex-row items-center space-x-2">
        {photos.map((photo, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(photo)}
              alt={`Preview ${index + 1}`}
              style={{ width: '96px', height: '96px' }}
            />
            <button
              onClick={() => handleRemovePhoto(index)}
              className="absolute top-0 right-0 bg-acodegray-200 text-white rounded-full w-6 h-6 flex items-center justify-center"
              style={{ fontSize: '12px' }}
            >
              X
            </button>
          </div>
        ))}
        {photos.length < 3 && (
          <button
            onClick={handleClick}
            className="w-24 h-24 bg-acodegray-50 rounded flex items-center justify-center border border-acodegray-50"
          >
            <span className="text-2xl text-acodegray-400">+</span>
          </button>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default InputPhoto;
