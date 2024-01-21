import ImageSlider from '@/components/detail/PerfumeImageSlider';
import PerfumeName from '@/components/detail/PerfumeName';
import PerfumeDetail from '@/components/detail/PerfumeDetail';
import SimilarPerfume from '@/components/detail/SimilarPerfume';
import HereTobuy from '@/components/detail/HereToBuy';
import AddReview from '@/components/detail/AddReviewButton';
import Link from 'next/link';
import Navbar from '@/components/detail/NavBar';
import PerfumeDetailList from '@/components/detail/PerfumeDetailList';
import testPerfume from '@/public/images/test-perfume2.jpg';

interface DetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
export async function getName(id: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${id}`,
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
const page = async ({ params, searchParams }: DetailPageProps) => {
  const data = await getName(params.id);
  // console.log(data);
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
  } = data;
  const styleList = style.split(',').map((s: string) => s.trim());

  const photos = [thumbnail, image1, image2];
  return (
    <section className="py-1">
      <div>
        <Navbar />
      </div>
      <div className="">
        <ImageSlider image={photos} />
      </div>
      <div className="my-4"></div>
      <div>
        <PerfumeName
          korBrand={korBrand}
          fragranceName={fragranceName}
          concentration={concentration}
          familyList={familyList}
          styleList={styleList}
          capacity={capacity}
        />
      </div>
      <div className="my-11 border-t-8 border-pattern border-acodegray-50"></div>
      <div>
        <PerfumeDetailList searchParams={searchParams} searchId={params} />
      </div>
      <div className="my-11 border-t-8 border-acodegray-50 border-pattern"></div>
      <div>
        <SimilarPerfume id={params.id} />
      </div>
      <div className="my-11"></div>
      <div>
        <HereTobuy id={params.id} />
      </div>
      <div className="flex justify-center item-center">
        <AddReview id={params.id} />
      </div>
    </section>
  );
};
export default page;
