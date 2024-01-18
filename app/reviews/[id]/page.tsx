'use client';
import React, { useState } from 'react';
import { useSession } from '@/hooks/useSession';
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
/////만들어보자//
type SeasonMappingType = {
  봄: 'SPRING';
  여름: 'SUMMER';
  가을: 'AUTUMN';
  겨울: 'WINTER';
  사계절: 'ALL';
};

type LongevityMappingType = {
  '1시간': 'ONEHOUR';
  '3-4시간': 'FOURHOURS';
  반나절: 'HALFDAY';
  하루종일: 'FULLDAY';
};
type IntencityMappingType = {
  약함: 'WEAK';
  보통: 'MEDIUM';
  진함: 'STRONG';
  아주진함: 'INTENSE';
};
type ModalMappingType = {
  시크한: 'CHIC';
  성숙한: 'MATURE';
  고급스러운: 'LUXURIOUS';
  우아한: 'ELEGANT';
  남성적인: 'MASCULINE';
  편안한: 'COMFORTABLE';
  차분한: 'SERENE';
  가벼운: 'LIGHT';
  중성적인: 'NEUTRAL';
  친근한: 'FRIENDLY';
  깨끗한: 'CLEAN';
  관능적인: 'SENSUAL';
  은은한: 'DELICATE';
  활기찬: 'LIVELY';
  사랑스러운: 'LOVELY';
  밝은: 'BRIGHT';
  화사한: 'RADIANT';
  여성스러운: 'FEMININE';
  청순한: 'INNOCENT';
  무게감있는: 'WEIGHTY';
  부드러운: 'SOFT';
  포근한: 'COZY';
};

////

export async function getPresignedUrl(name: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/review/image/${name}`,
    );

    if (!response.ok) {
      console.error('API fetch failed:', response.status);
      throw new Error(`API fetch failed: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error('Failed to fetch perfume data:', error);
  }
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
  const [starRatingError, setStarRatingError] = useState(false);
  const [oneLineCommentError, setOneLineCommentError] = useState(false);
  const [keyWordReviewError, setKeyWordReviewError] = useState(false);

  const handleModalReturn = (value: any) => {
    setIsModalOpen(false);
    setModalValue(value);
  };
  const session = useSession();
  const token = session?.jwt;

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
    const styleValue = Array.isArray(modalValue)
      ? modalValue.join(', ')
      : modalValue;
    console.log('Submitting:', {
      starRating,
      oneLineComment,
      selectedSeason,
      selectedPersistence,
      selectedIntensity,
      modalValue,
      textReview,
    });

    const uploadedPhotoUrls = [];
    //사진 전송
    for (const photo of photos) {
      const photoName = photo.name;
      try {
        const presignedUrl = await getPresignedUrl(photoName);

        if (typeof presignedUrl !== 'string') {
          console.error('Invalid URL:', presignedUrl);
          continue;
        }

        const uploadResponse = await fetch(presignedUrl, {
          method: 'PUT',
          body: photo,
        });

        if (!uploadResponse.ok) {
          throw new Error(`Upload failed: ${uploadResponse.status}`);
        }

        console.log(`Image ${photoName} uploaded successfully`);

        const url = new URL(presignedUrl);
        const requiredUrl = url.origin + url.pathname;
        uploadedPhotoUrls.push(requiredUrl);
      } catch (error) {
        console.error(`Error uploading image ${photoName}:`, error);
      }
    }
    ////////////만들어보자
    const seasonMapping: SeasonMappingType = {
      봄: 'SPRING',
      여름: 'SUMMER',
      가을: 'AUTUMN',
      겨울: 'WINTER',
      사계절: 'ALL',
    };
    const longevityMapping: LongevityMappingType = {
      '1시간': 'ONEHOUR',
      '3-4시간': 'FOURHOURS',
      반나절: 'HALFDAY',
      하루종일: 'FULLDAY',
    };
    const intensityMapping: IntencityMappingType = {
      약함: 'WEAK',
      보통: 'MEDIUM',
      진함: 'STRONG',
      아주진함: 'INTENSE',
    };
    const modalMapping: ModalMappingType = {
      시크한: 'CHIC',
      성숙한: 'MATURE',
      고급스러운: 'LUXURIOUS',
      우아한: 'ELEGANT',
      남성적인: 'MASCULINE',
      편안한: 'COMFORTABLE',
      차분한: 'SERENE',
      가벼운: 'LIGHT',
      중성적인: 'NEUTRAL',
      친근한: 'FRIENDLY',
      깨끗한: 'CLEAN',
      관능적인: 'SENSUAL',
      은은한: 'DELICATE',
      활기찬: 'LIVELY',
      사랑스러운: 'LOVELY',
      밝은: 'BRIGHT',
      화사한: 'RADIANT',
      여성스러운: 'FEMININE',
      청순한: 'INNOCENT',
      무게감있는: 'WEIGHTY',
      부드러운: 'SOFT',
      포근한: 'COZY',
    };

    const translatedSeason =
      seasonMapping[selectedSeason as keyof SeasonMappingType] ||
      selectedSeason;
    const translatedPersistence =
      longevityMapping[selectedPersistence as keyof LongevityMappingType] ||
      selectedPersistence;
    const translatedIntensity =
      intensityMapping[selectedIntensity as keyof IntencityMappingType] ||
      selectedIntensity;
    let translatedModalValue = modalValue;
    if (Array.isArray(modalValue)) {
      translatedModalValue = modalValue
        .map((val) => modalMapping[val as keyof ModalMappingType] || val)
        .join(', ');
    } else {
      translatedModalValue =
        modalMapping[modalValue as keyof ModalMappingType] || modalValue;
    }

    const payload = {
      rate: starRating,
      comment: oneLineComment,
      season: translatedSeason,
      longevity: translatedPersistence,
      intensity: translatedIntensity,
      style: translatedModalValue,
      textReview: textReview ? textReview : '',
      thumbnail: uploadedPhotoUrls[0] ? uploadedPhotoUrls[0] : '',
      image1: uploadedPhotoUrls[1] ? uploadedPhotoUrls[1] : '',
      image2: uploadedPhotoUrls[2] ? uploadedPhotoUrls[2] : '',
    };
    /////////////

    // const payload = {
    //   rate: starRating,
    //   comment: oneLineComment,
    //   season: selectedSeason,
    //   longevity: selectedPersistence,
    //   intensity: selectedIntensity,
    //   style: styleValue,
    //   textReview: textReview ? textReview : '',
    //   thumbnail: uploadedPhotoUrls[0] ? uploadedPhotoUrls[0] : '',
    //   image1: uploadedPhotoUrls[1] ? uploadedPhotoUrls[1] : '',
    //   image2: uploadedPhotoUrls[2] ? uploadedPhotoUrls[2] : '',
    // };
    //payload 전송
    try {
      const headers = new Headers();
      headers.set('AUTHORIZATION', token!);

      const res = await fetch(`/api/reviewpage/${params.id}`, {
        method: 'POST',
        body: JSON.stringify({ payload }),
        headers,
      });

      if (!res.ok) {
        throw new Error(`Failed to send request: ${res.status}`);
      }

      // 서버로부터 반환된 응답을 로그로 출력
      const responseData = await res.json();
      console.log('Response from server:', responseData);

      // location.replace(`/perfumes/${params.id}`);
    } catch (error) {
      console.error('Error sending data:', error);
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
          onClick={() => handleSubmit({ params: { id: params.id } })}
        >
          올리기
        </button>
      </div>
    </div>
  );
};

export default page;
