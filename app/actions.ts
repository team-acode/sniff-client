'use server';

import { TBrand, TPerfume } from '@/types';

export const getPerfumes = async (url: string, page: number = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${url}&page=${page}`,
    { cache: 'no-cache' },
  );

  if (res.ok) {
    const info: {
      data: TPerfume[];
      totalPages: number;
      totalElements: number;
    } = await res.json();
    return info;
  }
  return { data: null, totalPages: 0, totalElements: 0 };
};

export const getBrands = async (url: string, page: number = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${url}&page=${page}`,
  );

  if (res.ok) {
    const info: {
      data: TBrand[];
      totalPages: number;
      totalElements: number;
    } = await res.json();
    return info;
  }
  return { data: [], totalPages: 0, totalElements: 0 };
};
