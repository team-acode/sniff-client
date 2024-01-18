import { useState } from 'react';

export const useWish = (id: number, initialState: boolean) => {
  const [isWishOn, setIsWishOn] = useState<boolean>(initialState);
  const handleClickWish = async (e: React.MouseEvent) => {
    e.preventDefault();
    // const res = await fetch(`/${id}`, {
    //   method: 'POST',
    // });
    const res = { ok: true };
    if (res.ok) setIsWishOn(!isWishOn);
  };

  return { isWishOn, handleClickWish };
};
