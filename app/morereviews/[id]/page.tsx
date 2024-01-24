import MoreReview from '@/components/reviews/MoreReview';
import ReviewNavbar from '@/components/reviews/ReviewNavbar';
import AddReview from '@/components/detail/AddReviewButton';

interface ReviewPageProps {
  params: { id: string };
}

const page = ({ params }: ReviewPageProps) => {
  return (
    <div>
      <ReviewNavbar />
      <MoreReview id={params.id} />
      <div className="flex justify-center item-center">
        <AddReview id={params.id} />
      </div>
    </div>
  );
};
export default page;
