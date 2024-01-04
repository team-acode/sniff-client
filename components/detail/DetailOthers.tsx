import React from 'react';

type ProgressProps = {
  className: string;
  value: number;
};

const Progress = ({ className, value }: ProgressProps) => (
  <div className={`${className} h-2 rounded`}>
    <div
      className="h-2 rounded"
      style={{ width: `${value}%`, backgroundColor: '#FF2D60' }}
    ></div>
  </div>
);

const DetailOthers = () => {
  const target = '약함';
  const target2 = 50;
  const testing = '시크함';
  return (
    <div key="1" className="max-w-md mx-auto">
      <div className="h2 text-acodeblack">다른 사용자들은 이렇게 느꼈어요</div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">계절감</span>
          <span className="body1 w-1/4">{target}</span>
          <Progress className="w-2/4 bg-gray-200" value={target2} />
          <span className="body2 w-1/4 ml-2">{target2}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">지속성</span>
          <span className="body1 w-1/4">{target}</span>
          <Progress className="w-2/4 bg-gray-200" value={target2} />
          <span className="body2 w-1/4 ml-2">{target2}%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="body2 text-acodegray-700 w-1/4">향의 세기</span>
          <span className="body1 w-1/4">{target}</span>
          <Progress className="w-2/4 bg-gray-200" value={target2} />
          <span className="body2 w-1/4 ml-2">{target2}%</span>
        </div>
        <div className="flex  items-center">
          <span className="body2 text-acodegray-700 w-1/4">스타일</span>
          <span className="body2">
            {testing}({target2}%) {testing}({target2}%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailOthers;
