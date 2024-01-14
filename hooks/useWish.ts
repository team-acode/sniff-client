import { useState } from 'react';

export const useWish = (id: number, initialState: boolean) => {
  const [isWishOn, setIsWishOn] = useState<boolean>(initialState);
  const handleClickWish = async (e: React.MouseEvent) => {
    // const res = await fetch('/', {
    //   method: 'POST',
    // });
    e.preventDefault();
    const res = { ok: true };
    if (res.ok) setIsWishOn(!isWishOn);
  };

  return { isWishOn, handleClickWish };
};
