import React from 'react';
import PerfumeDetail from './PerfumeDetail';
import PerfumeReviewList from './PerfumeReviewList';
import PerfumeDetailElement from './PerfumeDetailElement';
interface DetailCategoryBarProps {
  searchParams: { [key: string]: string | undefined };
}

const PerfumeDetailList = ({ searchParams }: DetailCategoryBarProps) => {
  const selectedTab = searchParams.category || 'detail';
  const selectedEasy = searchParams.easy || 'on';
  return (
    <div className="">
      <PerfumeDetailElement
        searchParams={searchParams}
        selectedTab={selectedTab}
        id={1}
      />
      {selectedTab === 'detail' && (
        <PerfumeDetail selectedEasy={selectedEasy} />
      )}

      {selectedTab === 'review' && <PerfumeReviewList />}
    </div>
  );
};

export default PerfumeDetailList;
