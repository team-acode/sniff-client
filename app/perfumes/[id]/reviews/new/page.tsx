import Navbar from '@/components/reviews/Navbar';
import ReviewContentContainer from '@/components/reviews/ReviewContentContainer';
import ReviewHeader from '@/components/reviews/ReviewHeader';
import { redirect } from 'next/navigation';

interface ReviewPageProps {
  params: { id: string };
}
const NewReviewPage = ({ params }: ReviewPageProps) => {
  if (!params.id) redirect('/');

  return (
    <div>
      <Navbar />
      <ReviewHeader id={params.id} />
      <hr className="my-11 border-t-[6px] border-[#FBFBFB]" />
      <ReviewContentContainer id={params.id} />
    </div>
  );
};

export default NewReviewPage;
