'use client';
import React, { useState } from 'react';
import InputStar from '@/components/reviews/InputStar';
import OnelineComment from '@/components/reviews/OnelineComment';
import KeyWordReview from '@/components/reviews/KeyWordReview';
import TextReview from '@/components/reviews/TextReview';
import InputPhoto from '@/components/reviews/InputPhoto';
import Modal from '@/components/reviews/Modal';
const Page = () => {
  const [starRating, setStarRating] = useState(0);
  const [oneLineComment, setOneLineComment] = useState('');
  const [textReview, setTextReview] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedPersistence, setSelectedPersistence] = useState('');
  const [selectedIntensity, setSelectedIntensity] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState('');
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalReturn = (value: any) => {
    setIsModalOpen(false);
    setModalValue(value);
  };
  return (
    <div>
      <div className="my-11 border-t-8 border-acodegray-50 border-pattern"></div>
      <div>
        <InputStar onRatingChange={setStarRating} />
        {/* <div>Rating: {starRating}</div> */}
      </div>
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <OnelineComment onChange={setOneLineComment} />
        {/* <div>OneLineComment: {oneLineComment}</div> */}
      </div>
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <KeyWordReview
          selectedSeason={selectedSeason}
          selectedPersistence={selectedPersistence}
          selectedIntensity={selectedIntensity}
          onSeasonSelect={setSelectedSeason}
          onPersistenceSelect={setSelectedPersistence}
          onIntensitySelect={setSelectedIntensity}
        />
        {/* <div>Selected Season: {selectedSeason}</div>
        <div>Selected Persistence: {selectedPersistence}</div>
        <div>Selected Intensity: {selectedIntensity}</div> */}
        <div>
          <div className="flex">
            <div className="flex w-1/5 items-center justify-start review-3">
              스타일
            </div>
            <button
              onClick={handleModalOpen}
              className=" px-2.5 py-2 body2 text-acodegray-400 rounded-full border flex items-center justify-center"
            >
              <span className="mr-2 ml-2 text-acodeblack">+</span>
              어떤 스타일과 어울릴까요?
            </button>
          </div>
          <Modal
            isOpen={isModalOpen}
            closeModal={handleModalClose}
            onReturn={handleModalReturn}
          />

          {/* <div>Modal value:{modalValue}</div> */}
        </div>
      </div>
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <TextReview onChange={setTextReview} />
        {/* <div>Text Review: {textReview}</div> */}
      </div>
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <InputPhoto onChange={setPhotos} />
        {/* <div>
          {photos.length > 0 && (
            <div>
              <h4>Selected Photos:</h4>
              <ul>
                {photos.map((photo, index) => (
                  <li key={index}>{photo.size}</li>
                ))}
              </ul>
            </div>
          )}
        </div> */}
      </div>

      <div className="flex justify-center p-4">
        <button className="bg-acodeblack w-full text-white  py-3 px-4 rounded">
          올리기
        </button>
      </div>
    </div>
  );
};

export default Page;
