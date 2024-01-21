import ImageSlider from '@/components/detail/PerfumeImageSlider';
import PerfumeInfo from '@/components/detail/PerfumeInfo';
// import PerfumeDetail from '@/components/detail/PerfumeDetail';
import SimilarPerfume from '@/components/detail/SimilarPerfume';
import HereTobuy from '@/components/detail/HereToBuy';
import AddReview from '@/components/detail/AddReviewButton';
import Navbar from '@/components/detail/NavBar';
import PerfumeDetailList from '@/components/detail/PerfumeDetailList';
import { redirect } from 'next/navigation';

interface DetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ params, searchParams }: DetailPageProps) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}`,
  );

  if (!res.ok) redirect('/');

  const {
    thumbnail,
    korBrand,
    fragranceName,
    concentration,
    familyList,
    style,
    capacity,
    image1,
    image2,
  } = await res.json();

  // 나중에 리스트로 바꿔달라고 요청하기
  const styleList = style.split(',').map((s: string) => s.trim());

  const images = [thumbnail, image1, image2];
  return (
    <section className="">
      <Navbar />
      <ImageSlider images={images} />
      <PerfumeInfo
        korBrand={korBrand}
        fragranceName={fragranceName}
        concentration={concentration}
        familyList={familyList}
        styleList={styleList}
        capacity={capacity}
      />
      <hr className="my-11 border-t-[6px] border-[#FBFBFB]" />
      <PerfumeDetailList searchParams={searchParams} searchId={params} />
      <hr className="my-11 border-t-[6px] border-[#FBFBFB]" />
      <SimilarPerfume id={params.id} />
      <hr className="my-11 mx-4 mborder-t-[1.5px] border-[#FBFBFB]" />
      <HereTobuy id={params.id} />
      <div className="flex justify-center item-center">
        <AddReview id={params.id} />
      </div>
    </section>
  );
};
export default page;
