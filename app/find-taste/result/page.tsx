// 'use client';

// import UserStyle from '@/components/matchingtest/UserStyle';
// import Similar from '@/components/matchingtest/Similar';
// import ResultNav from '@/components/matchingtest/ResultNav';
// import Link from 'next/link';
// import { useState } from 'react';
// import ResultModal from '@/components/matchingtest/ResultModal';

// interface ResultPageProps {
//   searchParams: { [key: string]: string | undefined };
// }

// interface Family {
//   familyKorName: string;
//   familyEngName: string;
//   summary: string;
//   icon: string;
//   keyword: string[];
// }

// interface Fragrance {
//   fragranceId: string;
//   fragranceName: string;
//   brandName: string;
//   familyName: string;
//   thumbnail: string;
// }

// const Page = ({ searchParams }: ResultPageProps) => {
//   const parseAndStoreData = (params: { [key: string]: any }) => {
//     const Families: Family[] = [];
//     const Fragrance: Fragrance[] = [];
//     const familySet = new Set();
//     const fragranceSet = new Set();
//     const addFamilyData = (index: string) => {
//       const familyKorName = params[`familyKorName[${index}]`] || '';
//       const familyEngName = params[`familyEngName[${index}]`] || '';
//       const summary = params[`summary[${index}]`] || '';
//       const icon = params[`icon[${index}]`] || '';
//       const keyword = params[`keyword[${index}]`] || [];

//       if (familyKorName && !familySet.has(familyKorName)) {
//         familySet.add(familyKorName);
//         Families.push({ familyKorName, familyEngName, summary, icon, keyword });
//       }
//     };

//     const addFragranceData = (index: string) => {
//       const fragranceId = params[`fragranceId[${index}]`] || '';
//       if (!fragranceSet.has(fragranceId)) {
//         fragranceSet.add(fragranceId);
//         Fragrance.push({
//           fragranceId,
//           fragranceName: params[`fragranceName[${index}]`] || '',
//           brandName: params[`brandName[${index}]`] || '',
//           familyName: params[`familyName[${index}]`] || '',
//           thumbnail: params[`thumbnail[${index}]`] || '',
//         });
//       }
//     };

//     Object.keys(params).forEach((key) => {
//       const match = key.match(/\[(\d+)\]/);
//       if (match) {
//         const index = match[1];
//         if (key.startsWith('family')) {
//           addFamilyData(index);
//         } else if (key.startsWith('fragrance')) {
//           addFragranceData(index);
//         }
//       }
//     });

//     return { Families, Fragrance };
//   };

//   const { Families, Fragrance } = parseAndStoreData(searchParams);

//   const style = {
//     style1: searchParams.style1,
//     style2: searchParams.style2,
//   };

//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleShareClick = () => {
//     setModalOpen(true);
//   };
//   return (
//     <div>
//       <ResultNav />
//       <UserStyle families={Families} />
//       <Similar fragrance={Fragrance} style={style} />
//       <div className="flex flex-row mt-[79px] justify-center mx-4 gap-x-[11px] pb-[28px]">
//         <button
//           type="button"
//           className="h2 rounded bg-acodegray-50 text-black w-[166px] h-[56px] inline-flex items-center justify-center"
//           onClick={handleShareClick}
//         >
//           공유하기
//         </button>

//         <Link href="/">
//           <button
//             type="button"
//             className="h2 rounded bg-black text-white w-[166px] h-[56px] inline-flex items-center justify-center"
//           >
//             홈으로
//           </button>
//         </Link>
//       </div>

//       {isModalOpen && <ResultModal onClose={() => setModalOpen(false)} />}
//     </div>
//   );
// };

// export default Page;

'use client';

import UserStyle from '@/components/matchingtest/UserStyle';
import Similar from '@/components/matchingtest/Similar';
import ResultNav from '@/components/matchingtest/ResultNav';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ResultModal from '@/components/matchingtest/ResultModal';

interface ResultPageProps {
  searchParams: { [key: string]: string | undefined };
}

interface Family {
  familyKorName: string;
  familyEngName: string;
  summary: string;
  icon: string;
  keyword: string[];
}

interface Fragrance {
  fragranceId: string;
  fragranceName: string;
  brandName: string;
  familyName: string;
  thumbnail: string;
}

const Page = ({ searchParams }: ResultPageProps) => {
  // parse 된 데이터 불러오기. 그리고 그걸로 api 호출하고, 리턴으로 데이터 뿌리기
  const [families, setFamilies] = useState<Family[]>([]);
  const [fragrances, setFragrances] = useState<Fragrance[]>([]);

  const styles = {
    style1: searchParams.vibe ? searchParams.vibe[0] : '',
    style2: searchParams.vibe ? searchParams.vibe[1] : '',
  };

  const datafetch = async () => {
    try {
      const res = await fetch(`/api/extract`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payload: {
            concentration: searchParams.persistence,
            season: searchParams.season,
            mainFamily: searchParams.main,
            scent: searchParams.individuality,
            style: searchParams.vibe,
          },
        }),
      });

      if (!res.ok) {
        throw new Error(`Failed to send request: ${res.status}`);
      }

      const responseData = await res.json();
      setFamilies(responseData.families);
      setFragrances(responseData.fragrances);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    datafetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);
  const handleShareClick = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <ResultNav />
      <UserStyle families={families} />
      <Similar fragrance={fragrances} style={styles} />
      <div className="flex flex-row mt-[79px] justify-center mx-4 gap-x-[11px] pb-[28px]">
        <button
          type="button"
          className="h2 rounded bg-acodegray-50 text-black w-[166px] h-[56px] inline-flex items-center justify-center"
          onClick={handleShareClick}
        >
          공유하기
        </button>

        <Link href="/">
          <button
            type="button"
            className="h2 rounded bg-black text-white w-[166px] h-[56px] inline-flex items-center justify-center"
          >
            홈으로
          </button>
        </Link>
      </div>

      {isModalOpen && <ResultModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default Page;
