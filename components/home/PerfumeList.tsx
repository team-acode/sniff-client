import PerfumeCategoryBar from '@/components/home/PerfumeCategoryBar';
import PerfumeListElement from '@/components/home/PerfumeListElement';

const PERFUMES = [
  {
    id: 1,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
  {
    id: 2,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
  {
    id: 3,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
  {
    id: 4,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
  {
    id: 5,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
  {
    id: 6,
    name: '테싯',
    brand: '이솝',
    tags: ['고급스러운', '깨끗한', '중성적인'],
    backgroundUrl: '',
  },
];

const PerfumeList = () => {
  return (
    <div className="mt-[43px]">
      <div className="flex ml-4 mr-[15px] mb-3.5">
        <h3 className="h2 text-[18px] text-acodeblack">지금 인기있는 향수</h3>
      </div>
      <PerfumeCategoryBar />
      <ul className="">
        {PERFUMES.map((perfume) => (
          <PerfumeListElement key={perfume.id} perfume={perfume} />
        ))}
      </ul>
    </div>
  );
};

export default PerfumeList;
