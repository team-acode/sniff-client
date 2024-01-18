import React from 'react';
import DropdownButton from './PerfumeDropdown';
import { Point } from '@/public/images';
import { SceneIcon } from '@/public/images';

interface PerfumeNameProps {
  korBrand: string;
  fragranceName: string;
  concentration: string;
  familyList: Array<{ familyId: number; familyIcon: any; familyName: string }>;
  styleList: [];
  capacity: [];
}

const PerfumeName = ({
  korBrand,
  fragranceName,
  concentration,
  familyList,
  styleList,
  capacity,
}: PerfumeNameProps) => {
  const options = [
    { capacity: '100', price: 28000 },
    { capacity: '200', price: 40000 },
    { capacity: '300', price: 80000 },
  ];
  const perfumeInfo = {
    korBrand: '산타마리아',
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
    <div className="mx-4">
      <div className="body2 text-acodegray-300 max-w-md mx-auto mb-4">
        {korBrand}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-1">
          <div className="flex items-center">
            <div className="h2 text-acodeblack">{fragranceName}</div>
            <div className="mx-3">
              <Point />
            </div>
            <div className="h2 text-acodegray-500">{concentration}</div>
          </div>
          <div>
            <DropdownButton options={options} />
          </div>
        </div>
        <div className="flex flex-row space-x-2.5">
          <SceneIcon />
          <SceneIcon />
        </div>
      </div>

      {/* Hashtags */}
      <div className="mt-4">
        {styleList.map((tag, index) => (
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
