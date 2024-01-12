import { XIcon } from '@/public/images';
const Navbar = () => {
  return (
    <div className="relative flex items-center w-full px-2.5 ">
      <h1 className="absolute left-0 right-0 text-center mx-auto h1 ">
        리뷰작성
      </h1>
      <div className="flex-grow" />
      <div className="flex justify-end">
        <XIcon className="cursor-pointer" />
      </div>
    </div>
  );
};
export default Navbar;
