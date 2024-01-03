import Image from 'next/image';

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
      <Image
        src="/images/popular-perfume-temp-bg.png" // 임시로 지정해둠 변경해야됨
        fill
        style={{ objectFit: 'cover', zIndex: -1 }}
        alt="perfume pg"
        quality={100}
      />
      <button className="w-full pt-[27px] px-[26px] text-left h-60 bg-gradient-to-b from-black/80 to-[#292323]/20 inline-flex flex-col">
        <div className="flex">
          <h2 className="h0 text-acodewhite mr-2">{perfume.name}</h2>
          <span className="body2 font-medium pt-1.5 text-acodegray-300">
            {perfume.brand}
          </span>
        </div>
        <ul className="flex mt-2">
          {perfume.tags.map((tag) => (
            <li className="body2 mr-[9px] font-medium text-acodewhite">
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
