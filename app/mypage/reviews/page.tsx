import SimpleNav from '@/components/mypage/SimpleNav';
import UserReviewItem from '@/components/mypage/UserReviewItem';
import { USER_REVIEWS } from '@/constants/tempUserReviews';
import { TUserReview } from '@/types';

const page = () => {
  const reviews = USER_REVIEWS;

  return (
    <div>
      <SimpleNav title="작성한 리뷰" />
      <ul className="mt-[70px] mx-4">
        {reviews.data.map((review: TUserReview, idx) => (
          <>
            <UserReviewItem review={review} />
            {idx !== reviews.count - 1 ? (
              <hr className="my-5 border-t-[2px] border-[#f5f5f5]" />
            ) : null}
          </>
        ))}
      </ul>
    </div>
  );
};

export default page;
