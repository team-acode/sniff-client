import { PerfumeTempBg } from '@/public/images';

interface PerfumeListElementProps {
  perfume: {
    id: number;
    name: string;
    brand: string;
    tags: string[];
    backgroundUrl?: string;
  };
}

const PerfumeListElement = ({ perfume }: PerfumeListElementProps) => {
  return (
    <li className="w-full relative mb-[5px]">
      <PerfumeTempBg className="absolute -z-10 w-full" />
      <button className="w-full pt-[27px] px-[26px] text-left h-60 bg-gradient-to-b from-black/80 to-[#292323]/20 inline-flex flex-col">
        <div className="flex">
          <h2 className="text-[24px] font-semibold leading-9 text-acodewhite tracking-[-0.6px] mr-2">
            {perfume.name}
          </h2>
          <span className="pt-1.5 text-acodegray-300 text-[14px] font-medium tracking-[-0.35px]">
            {perfume.brand}
          </span>
        </div>
        <ul className="flex mt-2">
          {perfume.tags.map((tag) => (
            <li className="mr-[9px] text-[14px] font-medium tracking-[-0.35px] text-acodewhite">
              <span className="text-acodegray-300 mr-[1px]">#</span>
              {tag}
            </li>
          ))}
        </ul>
      </button>
    </li>
  );
};

export default PerfumeListElement;
