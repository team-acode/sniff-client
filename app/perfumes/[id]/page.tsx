import ImageSlider from '@/components/detail/PerfumeImageSlider';
import PerfumeName from '@/components/detail/PerfumeName';
import PerfumeDetail from '@/components/detail/PerfumeDetail';
import SimilarPerfume from '@/components/detail/SimilarPerfume';
import HereTobuy from '@/components/detail/HereToBuy';
import AddReview from '@/components/detail/AddReviewButton';
import Link from 'next/link';
import Navbar from '@/components/detail/NavBar';
import PerfumeDetailList from '@/components/detail/PerfumeDetailList';

interface DetailPageProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

const page = async ({ params, searchParams }: DetailPageProps) => {
  return (
    <section className="py-1">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <ImageSlider />
      </div>
      <div className="my-4"></div>
      <div>
        <PerfumeName />
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
        <AddReview />
      </div>
    </section>
  );
};
export default page;
