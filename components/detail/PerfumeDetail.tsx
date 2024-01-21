import React from 'react';
import DetailOthers from './DetailOthers';
interface PerfumeDetailProps {
  selectedEasy: 'on' | 'off';
  id: string;
}
interface Ingredient {
  ingredientId: number;
  ingredientName: string;
  acode: string;
}

export async function getDetail(params: { id: string }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/note`,
    );

    if (!response.ok) {
      console.error('API fetch failed:', response.status);
      throw new Error(`API fetch failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch perfume data:', error);
  }
}
const PerfumeDetail = async ({ selectedEasy, id }: PerfumeDetailProps) => {
  const data = await getDetail({ id });
  const getContent = (part: 'top' | 'middle' | 'base'): JSX.Element => {
    const ingredients =
      part === 'top'
        ? data.topNote
        : part === 'middle'
        ? data.middelNote
        : data.baseNote;

    return (
      <div className="flex flex-wrap">
        {ingredients.map((ingredient: Ingredient, index: number) => (
          <>
            <span className="body2 text-acodeblack">
              {selectedEasy === 'on'
                ? ingredient.acode
                : ingredient.ingredientName}
            </span>
            {index < ingredients.length - 1 && (
              <span className="body2 text-acodegray-200 mr-1 ml-1">|</span>
            )}
          </>
        ))}
      </div>
    );
  };

  const renderFragranceNotes = () => {
    if (data.single) {
      const label = selectedEasy === 'on' ? '향' : '싱글';
      return (
        <div className="flex flex-col space-y-5">
          <div className="flex justify-start items-center space-x-2">
            <span className="body2 text-acodegray-700">{label}</span>
            <div className="body2 text-acodeblack">{getContent('top')}</div>
          </div>
        </div>
      );
    }

    const labels =
      selectedEasy === 'on'
        ? { top: '첫 향', middle: '메인향', base: '잔향' }
        : { top: '탑', middle: '미들', base: '베이스' };

    return (
      <div className="flex flex-col space-y-5 mx-4">
        <div className="flex justify-start items-start space-x-2">
          <span className="body2 text-acodegray-700 flex basis-[80px]">
            {labels.top}
          </span>
          <div className="body2 text-acodeblack text-start flex-1">
            {getContent('top')}
          </div>
        </div>
        <div className="flex justify-start items-start space-x-2">
          <span className="body2 text-acodegray-700 flex basis-[80px]">
            {labels.middle}
          </span>
          <div className="body2 text-acodeblack flex-1">
            {getContent('middle')}
          </div>
        </div>
        <div className="flex justify-start items-start space-x-2">
          <span className="body2 text-acodegray-700 flex basis-[80px]">
            {labels.base}
          </span>
          <div className="body2 text-acodeblack break-words flex-1">
            {getContent('base')}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderFragranceNotes()}
      <DetailOthers />
    </div>
  );
};

export default PerfumeDetail;
