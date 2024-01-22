import React from 'react';
import Slider from '@/components/onboardingpage/Slide';
import Slide1 from '@/components/onboardingpage/Slide1';
import Slide2 from '@/components/onboardingpage/Slide2';
import Slide3 from '@/components/onboardingpage/Slide3';

const Page = () => {
  const slides = [<Slide1 />, <Slide2 />, <Slide3 />];

  return (
    <div>
      <Slider slides={slides} />
    </div>
  );
};

export default Page;
