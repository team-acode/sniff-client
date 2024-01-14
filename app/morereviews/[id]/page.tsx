import {
  RedFullStar,
  RedEmptyStar,
  RedHalfStar,
  BlackEmptyStar,
  BlackFullStar,
  NoReview,
} from '@/public/images';
import testImg from '@/public/images/test.jpg';
import Image from 'next/image';
import MoreReview from '@/components/reviews/MoreReview';
import ReviewNavbar from '@/components/reviews/ReviewNavbar';
interface ReviewPageProps {
  params: { id: string };
}
const page = ({ params }: ReviewPageProps) => {
  return (
    <div>
      <ReviewNavbar />
      <div>
        <MoreReview />
      </div>
    </div>
  );
};
export default page;
