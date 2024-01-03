import PerfumeCategoryBar from '@/components/home/PerfumeCategoryBar';
import PerfumeListElement from '@/components/home/PerfumeListElement';

const PerfumeList = () => {
  return (
    <div className="mt-[43px]">
      <div className="flex ml-4 mr-[15px] mb-3.5">
        <h3 className="text-[18px] font-semibold tracking-[-0.45px] text-acodeblack">
          지금 인기있는 향수
        </h3>
      </div>
      <PerfumeCategoryBar />
      <ul className="">
        <PerfumeListElement />
      </ul>
    </div>
  );
};

export default PerfumeList;
