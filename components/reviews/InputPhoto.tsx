import { ArrowDownIcon3, ArrowUpIcon3 } from '@/public/images';
import Image from 'next/image';
import React, { useState, ChangeEvent, useRef } from 'react';

const InputPhoto = ({ onChange }: { onChange: (photos: File[]) => void }) => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSpread, setIsSpread] = useState<boolean>(false);
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
    <div className="mx-4 mb-[131px]">
      <div className="review-2 mb-5 h-[30px] flex items-center">
        <span>사진 첨부</span>
        <span className="block text-acodegray-300 ml-3 h-4 text-[16px] font-medium mb-[2px] leading-[16px] mr-auto">
          (선택)
        </span>

        <button type="button" onClick={() => setIsSpread(!isSpread)}>
          {isSpread ? <ArrowUpIcon3 /> : <ArrowDownIcon3 />}
        </button>
      </div>
      {isSpread ? (
        <div className="flex flex-row items-center space-x-2 mb-[26px]">
          {photos.map((photo, index) => (
            <div key={photo.name} className="relative">
              <Image
                src={URL.createObjectURL(photo)}
                alt={`Preview ${index + 1}`}
                style={{ width: '96px', height: '96px' }}
              />
              <button
                type="button"
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
              type="button"
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
      ) : null}
    </div>
  );
};

export default InputPhoto;
