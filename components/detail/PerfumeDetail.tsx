import React from 'react';
import DetailOthers from './DetailOthers';
import EachNote from './EachNote';

interface PerfumeDetailProps {
  isEasy: boolean;
  id: string;
}

interface Ingredient {
  ingredientId: number;
  ingredientName: string;
  acode: string;
}

async function getDetail(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${id}/note`,
    { cache: 'no-cache' },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data;
}

const PerfumeDetail = async ({ isEasy, id }: PerfumeDetailProps) => {
  const data = await getDetail(id);

  if (!data) return null;
  const key = isEasy ? 'acode' : 'ingredientName';

  const labels = isEasy
    ? { top: '첫 향', middle: '메인향', base: '잔향' }
    : { top: '탑', middle: '미들', base: '베이스' };

  // const renderFragranceNotes = () => {
  //   // if (data.single) {
  //   //   const label = selectedEasy === 'on' ? '향' : '싱글';
  //   //   return (
  //   //     <div className="flex flex-col space-y-5">
  //   //       <div className="flex justify-start items-center space-x-2">
  //   //         <span className="body2 text-acodegray-700">{label}</span>
  //   //         <div className="body2 text-acodeblack">
  //   //           <EachNote part="top" />
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   );
  //   // }
  //   const key = isEasy ? 'acode' : 'ingredientName';

  //   const labels =
  //     isEasy === 'on'
  //       ? { top: '첫 향', middle: '메인향', base: '잔향' }
  //       : { top: '탑', middle: '미들', base: '베이스' };

  //   return (
  //     <div className="flex flex-col space-y-5 mx-4">
  //       <EachNote
  //         label={labels.top}
  //         ingredients={data.topNote.map(
  //           (ingredient: Ingredient) => ingredient[key],
  //         )}
  //       />
  //       {data.single ? null : (
  //         <>
  //           <EachNote
  //             label={labels.middle}
  //             ingredients={data.middleNote.map(
  //               (ingredient: Ingredient) => ingredient[key],
  //             )}
  //           />
  //           <EachNote
  //             label={labels.base}
  //             ingredients={data.baseNote.map(
  //               (ingredient: Ingredient) => ingredient[key],
  //             )}
  //           />
  //         </>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div>
      <div className="flex flex-col space-y-5 mx-4">
        <EachNote
          label={labels.top}
          ingredients={data.topNote.map(
            (ingredient: Ingredient) => ingredient[key],
          )}
        />
        {data.single ? null : (
          <>
            <EachNote
              label={labels.middle}
              ingredients={data.middleNote.map(
                (ingredient: Ingredient) => ingredient[key],
              )}
            />
            <EachNote
              label={labels.base}
              ingredients={data.baseNote.map(
                (ingredient: Ingredient) => ingredient[key],
              )}
            />
          </>
        )}
      </div>
      <DetailOthers />
    </div>
  );
};

export default PerfumeDetail;
