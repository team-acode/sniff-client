import {
  intensityMapping,
  longevityMapping,
  seasonMapping,
} from '@/constants/stats';
import PerfumeStatElement from './PerfumeStatElement';

const PerfumeStats = async ({ id }: { id: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/fragrance/${id}/review/statistics`,
    {
      cache: 'no-cache',
    },
  );

  if (!res.ok) return null;

  const stats = await res.json();

  return (
    <div className="max-w-md">
      <div className="text-[18px] font-semibold leading-[18px] tracking-[-0.45px] mb-[30px] mx-4">
        다른 사용자들은 이렇게 느꼈어요
      </div>
      <div className="flex flex-col gap-6">
        <PerfumeStatElement
          label="계절감"
          contents={stats.seasonStat.map(
            (stat: { keyword: string; percentage: number }) => ({
              ...stat,
              keyword:
                seasonMapping[stat.keyword as keyof typeof seasonMapping],
            }),
          )}
        />
        <PerfumeStatElement
          label="지속성"
          contents={stats.longevityStat.map(
            (stat: { keyword: string; percentage: number }) => ({
              ...stat,
              keyword:
                longevityMapping[stat.keyword as keyof typeof longevityMapping],
            }),
          )}
        />
        <PerfumeStatElement
          label="향의 세기"
          contents={stats.intensityStat.map(
            (stat: { keyword: string; percentage: number }) => ({
              ...stat,
              keyword:
                intensityMapping[stat.keyword as keyof typeof intensityMapping],
            }),
          )}
        />
        <div className="flex ml-4 relative">
          <span className="body2 font-medium text-acodegray-700 w-[71px] shrink-0 mt-[2px]">
            스타일
          </span>
          <div className="flex-1 flex overflow-x-auto body1 font-semibold items-center gap-[11px] pr-14">
            <div className="text-acodeblack shrink-0 flex">
              <span className="mr-1 h-full">{stats.styleStat[0].keyword}</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">
                ({stats.styleStat[0].percentage}%)
              </span>
            </div>
            <span className="text-acodegray-500 shrink-0 flex">
              <span className="mr-1 h-full">{stats.styleStat[1].keyword}</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">
                ({stats.styleStat[1].percentage}%)
              </span>
            </span>
            <span className="text-acodegray-300 shrink-0 flex">
              <span className="mr-1 h-full">{stats.styleStat[2].keyword}</span>
              <span className="body2 font-medium h-[21px] mt-[1px]">
                ({stats.styleStat[2].percentage}%)
              </span>
            </span>
          </div>
          <span className="absolute h-full w-[95px] right-0 bg-gradient-to-r from-white/[0.005] to-white" />
        </div>
      </div>
    </div>
  );
};

export default PerfumeStats;
