import React from 'react';
import { SmallCircleIcon } from '@/public/images';
import Image from 'next/image';
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
  return (
    <div className="mt-4">
      <div className="flex flex-row items-center mx-4 mb-4">
        <div className="body2  text-acodegray-300 max-w-md">{korBrand}</div>
        <SmallCircleIcon className="fill-acodegray-300 mx-[8px]" />
        <div className="body3 text-acodegray-300">{concentration}</div>
      </div>
      <div className="flex flex-row justify-between h-16">
        <div className="flex flex-col mb-1">
          <div className="flex items-center gap-[10px] ml-4">
            <div className="h1 text-acodeblack">{fragranceName}</div>
          </div>
          {capacityList.length ? (
            <DropdownButton options={capacityList} />
          ) : null}
        </div>
        <div className="flex flex-row space-x-2.5 mr-4">
          {familyList.map((family) => (
            <Image
              key={`${family.familyIcon}${family.familyName}`}
              src={family.familyIcon || '/'}
              alt="family badge"
              width={52}
              height={68}
              className="w-13 h-27"
            />
          ))}
        </div>
      </div>
      <div className="mt-[35px] mx-4 flex flex-wrap">
        {styleList.map((tag) => (
          <span
            key={tag}
            className="body2 font-medium mr-2 shrink-0 text-acodeblack"
          >
            <span className="text-acodegray-400">#</span>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PerfumeInfo;
