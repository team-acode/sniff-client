'use server';

import { TPerfume } from '@/types';

export const getPerfumes = async (url: string, page: number = 1) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}${url}&page=${page}`,
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
