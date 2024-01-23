import PerfumeStatElement from './PerfumeStatElement';

const PerfumeStats = () => {
  return (
    <div className="max-w-md">
      <div className="text-[18px] font-semibold leading-[18px] tracking-[-0.45px] mb-[30px] mx-4">
        다른 사용자들은 이렇게 느꼈어요
      </div>
      <div className="flex flex-col gap-6">
        <PerfumeStatElement
          label="계절감"
          contents={[
            { title: '봄', portion: 50 },
            { title: '여름', portion: 50 },
            { title: '가을', portion: 50 },
            { title: '겨울', portion: 50 },
          ]}
        />
        <PerfumeStatElement
          label="지속성"
          contents={[
            { title: '3-4시간', portion: 40 },
            { title: '1시간', portion: 40 },
            { title: '반나절', portion: 40 },
          ]}
        />
        <PerfumeStatElement
          label="향의 세기"
          contents={[{ title: '약함', portion: 90 }]}
        />
        <div className="flex ml-4 relative">
          <span className="body2 font-medium text-acodegray-700 w-[71px] shrink-0 mt-[2px]">
            스타일
          </span>
          <div className="flex-1 flex overflow-x-auto body1 font-semibold items-center gap-[11px] pr-14">
            <div className="text-acodeblack shrink-0 flex">
              <span className="mr-1 h-full">안녕한</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">(50%)</span>
            </div>
            <span className="text-acodegray-500 shrink-0 flex">
              <span className="mr-1 h-full">안녕한</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">(50%)</span>
            </span>
            <span className="text-acodegray-300 shrink-0 flex">
              <span className="mr-1 h-full">안녕한</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">(50%)</span>
            </span>
          </div>
          <span className="absolute h-full w-[95px] right-0 bg-gradient-to-r from-white/[0.005] to-white" />
        </div>
      </div>
    </div>
  );
};

export default PerfumeStats;
