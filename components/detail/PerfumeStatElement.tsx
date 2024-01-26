'use client';

import { ArrowDownIcon2, ArrowUpIcon2 } from '@/public/images';
import { useState } from 'react';

interface PerfumeStatElementProps {
  label: string;
  contents: {
    keyword: string;
    percentage: number;
  }[];
}

type ProgressProps = {
  backgroundColor: string;
  percentage: number;
};

const Progress = ({ backgroundColor, percentage }: ProgressProps) => (
  <div className="flex-1 h-[5px] shrink-0 rounded bg-acodegray-200">
    <div
      className="h-full rounded"
      style={{ width: `${percentage}%`, backgroundColor }}
    />
  </div>
);

const PerfumeStatElement = ({ label, contents }: PerfumeStatElementProps) => {
  const [isSpread, setIsSpread] = useState<boolean>(false);
  const firstContent = contents[0];
  const restContents = contents.slice(1);

  return (
    <div className="flex justify-between mx-4">
      <span className="body2 font-medium text-acodegray-700 w-[71px] shrink-0 mt-[2px]">
        {label}
      </span>
      <div className="flex-1 grid gap-[10px]">
        <div className="flex items-center text-acodeblack">
          <span className="body1 font-semibold w-[78px] shrink-0">
            {firstContent.keyword}
          </span>
          <Progress
            percentage={firstContent.percentage}
            backgroundColor="#FF2D60"
          />
          <span className="body2 font-medium w-[45px] mr-[10px] text-right">
            {firstContent.percentage}%
          </span>
          <button
            type="button"
            className="mx-[1.5px]"
            onClick={() => setIsSpread(!isSpread)}
          >
            {isSpread ? <ArrowUpIcon2 /> : <ArrowDownIcon2 />}
          </button>
        </div>
        {isSpread
          ? restContents.map((content) => (
              <div className="flex items-center text-acodegray-400">
                <span className="body2 font-medium w-[78px] shrink-0">
                  {content.keyword}
                </span>
                <Progress
                  percentage={content.percentage}
                  backgroundColor="#A6A49F"
                />
                <span className="body2 font-medium w-[45px] mr-[10px] text-right">
                  {content.percentage}%
                </span>
                <span className="w-5 h-5" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default PerfumeStatElement;
