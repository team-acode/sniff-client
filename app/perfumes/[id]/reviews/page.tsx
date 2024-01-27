import MoreReview from '@/components/reviews/MoreReview';
import ReviewNavbar from '@/components/reviews/ReviewNavbar';
import AddReview from '@/components/detail/AddReviewButton';

interface ReviewPageProps {
  params: { id: string };
}

const page = async ({ params }: ReviewPageProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${params.id}/review`,
    { cache: `no-cache` },
  );

  if (!response.ok) {
    return null;
  }

  const data = await response.json();

  return (
    <div className="mb-10">
      <ReviewNavbar />
      <MoreReview id={params.id} initialReviewData={data} />
      <div className="flex justify-center item-center">
        <AddReview id={params.id} />
      </div>
    </div>
  );
};
export default page;
