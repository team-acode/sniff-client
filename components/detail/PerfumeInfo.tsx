import React from 'react';
import { SmallCircleIcon } from '@/public/images';
import Image from 'next/image';
import DropdownButton from './PerfumeDropdown';

interface PerfumeInfoProps {
  brandName: string;
  fragranceName: string;
  concentration: string;
  familyList: Array<{ familyId: number; familyIcon: any; familyName: string }>;
  styleList: [];
  capacityList: { capacity: string; price: number }[];
}

const PerfumeInfo = ({
  brandName,
  fragranceName,
  concentration,
  familyList,
  styleList,
  capacityList,
}: PerfumeInfoProps) => {
  return (
    <div className="mt-4">
      <div className="body2 mx-4 text-acodegray-300 max-w-md mb-4 flex items-center">
        {brandName}
        <SmallCircleIcon className="fill-acodegray-300 ml-[6px] mr-1" />
        <span className="tracking-normal">{concentration}</span>
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
              className="w-[52px] h-[68px]"
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
