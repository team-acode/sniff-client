import React from 'react';
import PerfumeDetail from './PerfumeDetail';
import PerfumeReviewList from './PerfumeReviewList';
import PerfumeDetailElement from './PerfumeDetailElement';

interface DetailCategoryBarProps {
  searchParams: {
    category: 'detail' | 'review' | undefined;
    easy: 'on' | 'off' | undefined;
  };
  searchId: { id: string };
}

const PerfumeDetailList = ({
  searchParams,
  searchId,
}: DetailCategoryBarProps) => {
  const selectedTab = searchParams.category || 'detail';
  const isEasy = searchParams.easy === undefined || searchParams.easy === 'on';

  return (
    <div className="">
      <PerfumeDetailElement
        searchParams={searchParams}
        selectedTab={selectedTab}
        id={searchId.id}
      />
      {selectedTab === 'detail' ? (
        <PerfumeDetail isEasy={isEasy} id={searchId.id} />
      ) : (
        <PerfumeReviewList id={searchId.id} />
      )}
    </div>
  );
};

export default PerfumeDetailList;
