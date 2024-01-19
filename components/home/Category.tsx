import { BRANDS } from '@/constants/brands';
import { CATEGORIES } from '@/constants/categories';
import { XIcon } from '@/public/images';
import Link from 'next/link';
import { useEffect } from 'react';

interface CategoryProps {
  handleClickXButton: () => void;
}

const CategoryElement = ({
  title,
  list,
  path,
}: {
  title: string;
  list: string[];
  path: string;
}) => {
  return (
    <div className="mb-[50px]">
      <h3 className="text-acodeblack text-[18px] font-semibold leading-[18px] tracking-[-0.45px] mb-[30px]">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-x-[13px] gap-y-3">
        {list.map((elem) => (
          <Link
            key={elem}
            href={`/${path}/${encodeURIComponent(elem)}`}
            className=" h-[52px] bg-acodegray-50 rounded-sm justify-center items-center inline-flex text-acodeblack text-[16px] font-medium leading-[16px]"
          >
            {elem}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Category = ({ handleClickXButton }: CategoryProps) => {
  useEffect(() => {
    document.body.setAttribute('style', 'overflow: hidden');
    return () => document.body.setAttribute('style', 'overflow: auto');
  }, []);

  return (
    <div className="absolute top-0  bottom-0 w-full h-full bg-acodewhite z-50 overflow-auto pb-[124px]">
      <div className="flex relative justify-center mx-[13px] mt-[13px]">
        <h2 className="h1">카테고리</h2>
        <button
          type="button"
          className="absolute right-0 mt-[3px]"
          onClick={handleClickXButton}
        >
          <XIcon />
        </button>
      </div>
      <div className="mx-4 pt-[31px]">
        <CategoryElement title="계열" list={CATEGORIES} path="categories" />
        <CategoryElement title="브랜드" list={BRANDS} path="brands" />
      </div>
    </div>
  );
};

export default Category;
