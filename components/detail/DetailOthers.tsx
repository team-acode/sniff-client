import React from 'react';

type ProgressProps = {
  className: string;
  value: number;
};

const Progress = ({ className, value }: ProgressProps) => (
  <div className={`${className} h-2 rounded bg-acodegray-200`}>
    <div
      className="h-2 rounded"
      style={{ width: `${value}%`, backgroundColor: '#FF2D60' }}
    ></div>
  </div>
);

const DetailOthers = () => {
  const target = '약함';
  // const target = null;
  const target2 = 20;
  const testing = '시크함';
  const wantnull = 3;
  const testing2 = '3-4시간';
  const testing3 = '시크함';
  const testing4 = '시크함';
  if (
    target === null ||
    target2 === null ||
    testing === null ||
    wantnull === null
  ) {
    return null;
  }
  return (
    <div className="max-w-md mx-4">
      <div className="border-t border-acodegray-100 w-11/12 my-11 mx-auto" />
      <div className="h2 text-codeblack mb-7">
        다른 사용자들은 이렇게 느꼈어요
      </div>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">계절감</span>
          <span className="body1 w-1/4">{target}</span>
          <Progress className="w-1/2" value={target2} />
          <span className="body2 w-1/4 ml-2 text-right">{target2}%</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">지속성</span>
          <span className="body1 w-1/4">3-4시간</span>
          <Progress className="w-1/2" value={target2} />
          <span className="body2 w-1/4 ml-2 text-right">{target2}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">향의 세기</span>
          <span className="body1 w-1/4">보통</span>
          <Progress className="w-1/2" value={target2} />
          <span className="body2 w-1/4 ml-2 text-right">{target2}%</span>
        </div>

        <div className="flex items-center">
          <span className="body2 text-acodegray-700 w-1/4">스타일</span>
          <div className="flex w-3/4 text-left space-x-3 overflow-x-auto whitespace-nowrap">
            <div className="text-acodeblack">상큼상큼한 (50%)</div>
            <div className="text-acodegray-500">부드러운 (50%)</div>
            <div className="text-acodegray-300">부드러운 (50%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailOthers;
