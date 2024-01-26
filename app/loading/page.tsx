'use client';

import { Loading1, Loading2, Loading3, Loading4 } from '@/public/images';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface LoadingPageProps {
  searchParams: { [key: string]: string | undefined };
}

const Page = ({ searchParams }: LoadingPageProps) => {
  const router = useRouter();
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const icons = [<Loading1 />, <Loading2 />, <Loading3 />, <Loading4 />];
  const lastIconIndex = icons.length - 1;

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value !== undefined) {
        params.append(key, value);
      }
    });

    // let timer ;
    let timer: NodeJS.Timeout;
    if (currentIconIndex === lastIconIndex) {
      timer = setTimeout(() => {
        router.push(`/result?${params.toString()}`);
      }, 2000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [router, searchParams, currentIconIndex, lastIconIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIconIndex < lastIconIndex) {
        setCurrentIconIndex((prevIndex) => prevIndex + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIconIndex, lastIconIndex]);

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        {icons[currentIconIndex]}
      </div>
    </div>
  );
};
export default Page;
