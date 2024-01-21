import { HomeIcon, PreviousIcon } from '@/public/images';
const ReviewNavbar = () => {
  return (
    <div className="relative flex items-center w-full px-2.5 py-3">
      <h1 className="absolute left-0 right-0 text-center mx-auto h1 ">리뷰</h1>
      <div className="flex justify-start">
        <PreviousIcon className="cursor-pointer" />
      </div>
      <div className="flex-grow" />

      <div className="flex justify-end">
        <HomeIcon className="cursor-pointer" />
      </div>
    </div>
  );
};
export default ReviewNavbar;
