'use client';
import React, { useState } from 'react';
import { EasyOffIcon, EasyOnIcon } from '@/public/images';
import ReviewContent from './PerfumeReviewList';
const PerfumeDetail = () => {
  const [activeTab, setActiveTab] = useState<'detail' | 'review'>('detail');
  const [isDefaultContent, setIsDefaultContent] = useState<boolean>(true);

  const handleDetailToggle = (): void => {
    setIsDefaultContent(!isDefaultContent);
  };

  const getContent = (part: 'top' | 'middle' | 'base'): string => {
    const defaultContents = {
      top: '1|2|3',
      middle: '4|5|6',
      base: '7|8|9',
    };
    const alternateContents = {
      top: 'a|b|c',
      middle: 'd|e|f',
      base: 'g|h|i',
    };

    return isDefaultContent ? defaultContents[part] : alternateContents[part];
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <button
            className={`font-semibold ${
              activeTab === 'detail'
                ? 'text-acodeblack border-b-2 border-acodeblack'
                : 'text-acodegray-100'
            }`}
            onClick={() => setActiveTab('detail')}
          >
            Detail
          </button>
          <button
            className={`font-semibold ${
              activeTab === 'review'
                ? 'text-acodeblack border-b-2 border-acodeblack'
                : 'text-acodegray-100'
            }`}
            onClick={() => setActiveTab('review')}
          >
            Review
          </button>
        </div>
        {activeTab === 'detail' && (
          <button
            onClick={handleDetailToggle}
            className="focus:outline-none outline-none"
          >
            {isDefaultContent ? <EasyOffIcon /> : <EasyOnIcon />}
          </button>
        )}
      </div>
      {activeTab === 'detail' && (
        <div className="flex flex-col space-y-5">
          <div className="flex justify-start items-center space-x-2">
            <span className="body2 text-acodegray-700">탑</span>
            <div className="body2 text-acodeblack">{getContent('top')}</div>
          </div>
          <div className="flex justify-start items-center space-x-2">
            <span className="body2 text-acodegray-700">미들</span>
            <div className="body2 text-acodeblack">{getContent('middle')}</div>
          </div>
          <div className="flex justify-start items-center space-x-2">
            <span className="body2 text-acodegray-700">베이스</span>
            <div className="body2 text-acodeblack">{getContent('base')}</div>
          </div>
        </div>
      )}
      {activeTab === 'review' && (
        <div>
          <ReviewContent />
        </div>
      )}
    </div>
  );
};

export default PerfumeDetail;
