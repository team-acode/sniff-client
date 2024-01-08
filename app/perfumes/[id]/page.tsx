import ImageSlider from '@/components/detail/PerfumeImageSlider';
import DetailOthers from '@/components/detail/DetailOthers';
import PerfumeName from '@/components/detail/PerfumeName';
import PerfumeDetail from '@/components/detail/PerfumeDetail';
import SimilarPerfume from '@/components/detail/SimilarPerfume';
import HereTobuy from '@/components/detail/HereToBuy';
import PerfumeDetail2 from '@/components/detail/PerfumeDetail2';
import Link from 'next/link';

// const getImage = async (type: string) => {
//   const response = await fetch(`/api/v1/fragrance/${type}`, {
//     cache: 'no-store',
//   });
//   return response.json();
// };

// interface DetailPageProps {
//   params: { id: string };
// }

// const page = async ({ params }: DetailPageProps) => {
//   const data = getImage(params.id);
//   return (
//     <section className="py-12">
//       <div className="container">
//         <ImageSlider />
//       </div>
//       <div>
//         <PerfumeName />
//       </div>
//       <div>
//         <DetailOthers />
//       </div>
//     </section>
//   );
// };
/*연습코드*/
// interface HomePageProps {
//   searchParams: { [key: string]: string | undefined };
// }
// export default function page({ searchParams }: HomePageProps) {
//   const category = searchParams.category || 'detail';
//   return (
//     <section className="py-1">
//       <div className="container">
//         <ImageSlider />
//       </div>
//       <div className="my-4"></div>
//       <div>
//         <PerfumeName />
//       </div>
//       <div className="my-11 border-t-8 border-pattern border-acodegray-50"></div>
//       <div>
//         <PerfumeDetail2 searchParams={searchParams} />
//       </div>

//       <div>
//         {/*리뷰데이터가 없으면 detailother를 보이면 안돼*/}
//         <DetailOthers />
//       </div>
//       <div className="my-11 border-t-8 border-acodegray-50 border-pattern"></div>
//       <div>
//         {/*리뷰데이터가 없으면 detailother를 보이면 안돼*/}
//         <SimilarPerfume />
//       </div>
//       <div className="my-11"></div>
//       <div>
//         <HereTobuy />
//       </div>
//     </section>
//   );
// }

const page = () => {
  return (
    <section className="py-1">
      <div className="container">
        <ImageSlider />
      </div>
      <div className="my-4"></div>
      <div>
        <PerfumeName />
      </div>
      <div className="my-11 border-t-8 border-pattern border-acodegray-50"></div>
      <div>
        <PerfumeDetail />
      </div>

      <div>
        {/*리뷰데이터가 없으면 detailother를 보이면 안돼*/}
        <DetailOthers />
      </div>
      <div className="my-11 border-t-8 border-acodegray-50 border-pattern"></div>
      <div>
        {/*리뷰데이터가 없으면 detailother를 보이면 안돼*/}
        <SimilarPerfume />
      </div>
      <div className="my-11"></div>
      <div>
        <HereTobuy />
      </div>
    </section>
  );
};
export default page;
