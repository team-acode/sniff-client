import React from 'react';
import PerfumeDetail from './PerfumeDetail';
import PerfumeReviewList from './PerfumeReviewList';
import PerfumeDetailElement from './PerfumeDetailElement';
interface DetailCategoryBarProps {
  searchParams: { [key: string]: string | undefined };
  searchId: { id: string };
}

const PerfumeDetailList = ({
  searchParams,
  searchId,
}: DetailCategoryBarProps) => {
  const selectedTab = searchParams.category || 'Detail';
  const selectedEasy = searchParams.easy || 'on';

  return (
    <div className="">
      <PerfumeDetailElement
        searchParams={searchParams}
        selectedTab={selectedTab}
        id={1}
      />
      {selectedTab === 'Detail' && (
        <PerfumeDetail selectedEasy={selectedEasy} id={searchId.id} />
      )}
      {selectedTab === 'Review' && <PerfumeReviewList />}
    </div>
  );
};

export default PerfumeDetailList;
