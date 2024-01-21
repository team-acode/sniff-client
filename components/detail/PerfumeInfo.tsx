import React from 'react';
import { SmallCircleIcon, SceneIcon } from '@/public/images';
import DropdownButton from './PerfumeDropdown';

interface PerfumeInfoProps {
  korBrand: string;
  fragranceName: string;
  concentration: string;
  familyList: Array<{ familyId: number; familyIcon: any; familyName: string }>;
  styleList: [];
  capacityList: { capacity: string; price: number }[];
}

const PerfumeInfo = ({
  korBrand,
  fragranceName,
  concentration,
  familyList,
  styleList,
  capacityList,
}: PerfumeInfoProps) => {
  const options = [
    { capacity: '100', price: 28000 },
    { capacity: '200', price: 40000 },
    { capacity: '300', price: 80000 },
  ];

  return (
    <div className="mt-4">
      <div className="body2 mx-4 text-acodegray-300 max-w-md mb-4">
        {korBrand}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col mb-1">
          <div className="flex items-center gap-[10px] ml-4">
            <div className="h1 text-acodeblack">{fragranceName}</div>
            <SmallCircleIcon className="fill-acodegray-500" />
            <div className="h2 text-acodegray-500">{concentration}</div>
          </div>
          {options.length ? <DropdownButton options={options} /> : null}
        </div>
        <div className="flex flex-row space-x-2.5 mr-4">
          <SceneIcon />
          <SceneIcon />
        </div>
      </div>
      <div className="mt-4 mx-4">
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

export default PerfumeInfo;
