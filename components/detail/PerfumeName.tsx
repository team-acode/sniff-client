import React from 'react';
import DropdownButton from './PerfumeDropdown';
import { Point } from '@/public/images';

const PerfumeName = () => {
  const options = [
    { capacity: '100', price: 28000 },
    { capacity: '200', price: 40000 },
    { capacity: '300', price: 80000 },
  ];
  const perfumeInfo = {
    brand: '산타마리아',
    fragranceName: '포푸리',
    concentration: '오드 퍼퓸',
  };

  const hashtags = [
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
    '시크한',
  ];

  return (
    <div>
      <div className="body2 text-acodegray-300 max-w-md mx-auto mb-4">
        {perfumeInfo.brand}
      </div>
      <div className="flex flex-col mb-1">
        <div className="flex items-center">
          <div className="h2 text-acodeblack">{perfumeInfo.fragranceName}</div>
          <div className="mx-3">
            <Point />
          </div>
          <div className="h2 text-acodegray-500">
            {perfumeInfo.concentration}
          </div>
        </div>
      </div>
      <div>
        <DropdownButton options={options} />
      </div>
      {/* Hashtags */}
      <div className="mt-4">
        {hashtags.map((tag, index) => (
          <React.Fragment key={index}>
            <span className="body2 mr-2">
              <span className="text-acodegray-500">#</span>
              {tag}
            </span>
            {(index + 1) % 5 === 0 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PerfumeName;
