'use client';
import React, { useState } from 'react';
import InputStar from '@/components/reviews/InputStar';
import OnelineComment from '@/components/reviews/OnelineComment';
import KeyWordReview from '@/components/reviews/KeyWordReview';
import TextReview from '@/components/reviews/TextReview';
import InputPhoto from '@/components/reviews/InputPhoto';
import Modal from '@/components/reviews/Modal';
import Navbar from '@/components/reviews/Navbar';
import BigLinkButton from '@/components/common/BigLinkButton';
import { ErrorMessage1, ErrorMessage2, ErrorMessage3 } from '@/public/images';
interface ReviewPageProps {
  params: { id: string };
}
const page = ({ params }: ReviewPageProps) => {
  const [starRating, setStarRating] = useState(0);
  const [oneLineComment, setOneLineComment] = useState('');
  const [textReview, setTextReview] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedPersistence, setSelectedPersistence] = useState('');
  const [selectedIntensity, setSelectedIntensity] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalValue, setModalValue] = useState('');
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [starRatingError, setStarRatingError] = useState(false);
  const [oneLineCommentError, setOneLineCommentError] = useState(false);
  const [keyWordReviewError, setKeyWordReviewError] = useState(false);

  const handleModalReturn = (value: any) => {
    setIsModalOpen(false);
    setModalValue(value);
  };

  const handleSubmit = async ({ params }: ReviewPageProps) => {
    let isValid = true;
    setStarRatingError(false);
    setOneLineCommentError(false);
    setKeyWordReviewError(false);

    if (starRating === 0) {
      setStarRatingError(true);
      isValid = false;
    }

    if (!oneLineComment.trim()) {
      setOneLineCommentError(true);
      isValid = false;
    }

    if (
      !selectedSeason.trim() ||
      !selectedPersistence.trim() ||
      !selectedIntensity.trim() ||
      !modalValue
    ) {
      setKeyWordReviewError(true);
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    console.log('Submitting:', {
      starRating,
      oneLineComment,
      selectedSeason,
      selectedPersistence,
      selectedIntensity,
      modalValue,
      textReview,
    });
    const payload = {
      rate: starRating,
      comment: oneLineComment,
      season: selectedSeason,
      longevity: selectedPersistence,
      intensity: selectedIntensity,
      style: modalValue, //type확인해봐야함
      textReview: textReview,
      // thumbnail: imageBase64Strings[0] || '',
      // image1: imageBase64Strings[1] || '',
      // image2: imageBase64Strings[2] || '',
    };
    try {
      const res = await fetch(`/api/reviewpage/${params.id}`, {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        location.replace('/partvote/result');
      }
    } catch (error) {
      console.error('투표 실패:', error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="my-11 border-t-8 border-acodegray-50 border-pattern"></div>
      <div>
        <InputStar onRatingChange={setStarRating} />
      </div>
      {starRatingError && (
        <div className="my-3">
          <ErrorMessage1 />
        </div>
      )}
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <OnelineComment onChange={setOneLineComment} />
      </div>
      {oneLineCommentError && (
        <div className="my-3">
          <ErrorMessage2 />
        </div>
      )}
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

        <div>
          <Modal onReturn={handleModalReturn} />
        </div>
      </div>
      {keyWordReviewError && (
        <div className="my-3">
          <ErrorMessage3 />
        </div>
      )}
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <TextReview onChange={setTextReview} />
      </div>
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div>
        <InputPhoto onChange={setPhotos} />
      </div>

      <div className="flex justify-center p-4">
        <button
          className="bg-acodeblack w-full text-white  py-3 px-4 rounded"
          onClick={() => handleSubmit({ params })}
        >
          올리기
        </button>
      </div>
    </div>
  );
};

export default page;
