'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AcodeLogo } from '@/public/images';

const Onboard = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboardingpage');
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div>
      <div>
        <AcodeLogo />
      </div>
    </div>
  );
};

export default Onboard;
